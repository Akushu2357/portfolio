import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ProjectsSkills from '../components/ProjectsSkills';
import ThemeSelector, { themeKey } from '../components/Theme';
import Header from '../components/Header';
import Contact from '../components/Contact';
import App from '../App';
import Certificates from '../components/Certificates';
import Experience from '../components/Experience';
import AssetImage from '../components/AssetImage';
import * as contactUtils from '../utils/contactUtils';
describe('Project evidence', () => {
  it('keeps selected details tied to a stable ID when filtering', async () => {
    const user = userEvent.setup();
    render(<ProjectsSkills />);
    await user.click(
      screen.getByRole('button', { name: 'View details: KOO-KIN' }),
    );
    expect(screen.getByRole('complementary')).toHaveTextContent(
      'eight-person team',
    );
    await user.type(screen.getByRole('searchbox'), 'mongodb');
    expect(screen.getAllByRole('article')).toHaveLength(1);
    expect(screen.getByRole('complementary')).toHaveTextContent(
      'eight-person team',
    );
    await user.clear(screen.getByRole('searchbox'));
    await user.selectOptions(
      screen.getByLabelText('Technology', { exact: true }),
      'FastAPI',
    );
    expect(screen.getByRole('complementary')).toHaveTextContent(
      'Thai Labor Law Chatbot',
    );
    await user.click(screen.getByRole('button', { name: 'Reset search' }));
    expect(screen.getAllByRole('article')).toHaveLength(5);
    expect(screen.getByRole('complementary')).toHaveTextContent('KOO-KIN');
  });
  it('combines search and technology filters and resets empty results', async () => {
    const user = userEvent.setup();
    render(<ProjectsSkills />);
    await user.type(screen.getByRole('searchbox'), 'mongodb');
    await user.selectOptions(
      screen.getByLabelText('Technology', { exact: true }),
      'FastAPI',
    );
    expect(
      screen.getByRole('heading', { name: 'No projects found' }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Show all projects' }));
    expect(screen.getAllByRole('article')).toHaveLength(5);
  });
  it('expands the selected case study and filters by a skill', async () => {
    const user = userEvent.setup();
    const { container } = render(<ProjectsSkills />);
    const details = container.querySelector('details');
    await user.click(details.querySelector('summary'));
    expect(details.open).toBe(true);
    expect(details).toHaveTextContent('Typhoon LLM');
    await user.click(
      within(screen.getByRole('complementary')).getByRole('button', {
        name: 'FastAPI',
        exact: true,
      }),
    );
    expect(screen.getAllByRole('article')).toHaveLength(1);
    expect(screen.getByRole('complementary')).toHaveTextContent(
      'Thai Labor Law Chatbot',
    );
    await user.click(
      within(screen.getByRole('complementary')).getByRole('button', {
        name: 'FastAPI',
        exact: true,
      }),
    );
    expect(screen.getAllByRole('article')).toHaveLength(5);
  });
});
describe('Experience and certificates', () => {
  it('selects timeline details with keyboard input', async () => {
    const user = userEvent.setup();
    render(<Experience />);
    const job = screen.getByRole('button', { name: /Data Science Intern/ });
    job.focus();
    await user.keyboard('{Enter}');
    expect(job).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('complementary')).toHaveTextContent(
      'speech-separation',
    );
    expect(screen.getByRole('complementary')).not.toHaveTextContent('Qt GUI');
  });
  it('navigates the carousel manually, wraps, and selects positions', async () => {
    const user = userEvent.setup();
    render(<Certificates />);
    expect(
      screen.getByRole('heading', { name: 'Responsive Web Design' }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Next certificate' }));
    expect(
      screen.getByRole('heading', { name: 'Back-End Development and APIs' }),
    ).toBeInTheDocument();
    await user.click(
      screen.getByRole('button', { name: 'Previous certificate' }),
    );
    await user.click(
      screen.getByRole('button', { name: 'Previous certificate' }),
    );
    expect(screen.getByRole('status')).toHaveTextContent(
      'Certificate 11 of 11',
    );
    await user.click(
      screen.getByRole('button', { name: /Show certificate 1:/ }),
    );
    expect(screen.getByRole('status')).toHaveTextContent('Certificate 1 of 11');
  });
  it('keeps carousel selection valid after filters and handles a single result', async () => {
    const user = userEvent.setup();
    render(<Certificates />);
    await user.click(
      screen.getByRole('button', { name: /Show certificate 5:/ }),
    );
    await user.selectOptions(
      screen.getByLabelText('Issuer', { exact: true }),
      'freeCodeCamp',
    );
    expect(screen.getByRole('status')).toHaveTextContent('Certificate 1 of 2');
    await user.selectOptions(
      screen.getByLabelText('Skill', { exact: true }),
      'Node.js',
    );
    expect(
      screen.getByRole('heading', { name: 'Back-End Development and APIs' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Next certificate' }),
    ).toBeDisabled();
    await user.type(screen.getByRole('searchbox'), 'not-a-certificate');
    expect(
      screen.getByRole('heading', { name: 'No certificates found' }),
    ).toBeInTheDocument();
    await user.click(
      screen.getByRole('button', { name: 'Show all certificates' }),
    );
    expect(screen.getByRole('status')).toHaveTextContent('Certificate 1 of 11');
  });
  it('falls back when an image fails and retries when the asset changes', () => {
    const view = render(
      <AssetImage
        src="certificates/one.png"
        alt="Certificate"
        fallback="Credential preview unavailable"
      />,
    );
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/portfolio/certificates/one.png',
    );
    fireEvent.error(screen.getByRole('img'));
    expect(
      screen.getByText('Credential preview unavailable'),
    ).toBeInTheDocument();
    view.rerender(
      <AssetImage
        src="certificates/two.png"
        alt="Certificate"
        fallback="Unavailable"
      />,
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
describe('Theme', () => {
  it('cycles and persists system/light/dark', async () => {
    const user = userEvent.setup();
    render(<ThemeSelector />);
    await user.click(screen.getByRole('button', { name: /Theme: system/ }));
    expect(localStorage.getItem(themeKey)).toBe('light');
    await user.click(screen.getByRole('button', { name: /Theme: light/ }));
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem(themeKey)).toBe('dark');
    await user.click(screen.getByRole('button', { name: /Theme: dark/ }));
    expect(localStorage.getItem(themeKey)).toBe('system');
  });
  it('reads saved choices and ignores invalid choices', () => {
    localStorage.setItem(themeKey, 'dark');
    const view = render(<ThemeSelector />);
    expect(document.documentElement.dataset.theme).toBe('dark');
    view.unmount();
    localStorage.setItem(themeKey, 'invalid');
    render(<ThemeSelector />);
    expect(
      screen.getByRole('button', { name: /Theme: system/ }),
    ).toBeInTheDocument();
  });
  it('responds to system changes and cleans up its listener', () => {
    let listener;
    const media = {
      matches: false,
      addEventListener: vi.fn((_event, callback) => {
        listener = callback;
      }),
      removeEventListener: vi.fn(),
    };
    window.matchMedia.mockReturnValue(media);
    const view = render(<ThemeSelector />);
    media.matches = true;
    listener();
    expect(document.documentElement.dataset.theme).toBe('dark');
    view.unmount();
    expect(media.removeEventListener).toHaveBeenCalledWith('change', listener);
  });
  it('keeps the control functional when storage reads and writes fail', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw Error('blocked');
    });
    const user = userEvent.setup();
    render(<ThemeSelector />);
    await user.click(screen.getByRole('button', { name: /Theme: system/ }));
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(screen.getByRole('status')).toHaveTextContent('visit only');
  });
});
describe('Navigation and contact', () => {
  it('closes navigation on selection and Escape, restoring toggle focus', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const toggle = screen.getByRole('button', { name: 'Open navigation' });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard('{Escape}');
    expect(toggle).toHaveFocus();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    await user.click(screen.getByRole('link', { name: 'Projects' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    fireEvent(window, new Event('resize'));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
  it('reports clipboard success only after a successful write', async () => {
    const user = userEvent.setup();
    const write = vi
      .spyOn(navigator.clipboard, 'writeText')
      .mockResolvedValue();
    render(<Contact />);
    await user.click(
      screen.getByRole('button', { name: 'Copy email address' }),
    );
    expect(write).toHaveBeenCalledWith('tang.tang2004@gmail.com');
    expect(screen.getByText('Email address copied.')).toBeInTheDocument();
    write.mockRejectedValue(Error('denied'));
    await user.click(
      screen.getByRole('button', { name: 'Copy email address' }),
    );
    expect(screen.getByText(/Could not copy/)).toBeInTheDocument();
  });
  it('encodes complete email drafts and retains the entered message', async () => {
    const name = 'Tang & team';
    const message = 'Hello? #1 & 50%\nสวัสดี';
    const draft = new URL(contactUtils.buildEmailDraft(name, message));
    expect(draft.searchParams.get('subject')).toBe(
      'Portfolio Contact: Message from ' + name,
    );
    expect(draft.searchParams.get('body')).toBe(
      'Name: ' + name + '\r\n\r\nMessage:\r\n' + message,
    );
    const open = vi
      .spyOn(contactUtils, 'openEmailDraft')
      .mockImplementation(() => {});
    const user = userEvent.setup();
    render(<Contact />);
    await user.type(screen.getByLabelText('Your name'), name);
    await user.type(screen.getByLabelText('Message', { exact: true }), message);
    await user.click(screen.getByRole('button', { name: 'Open email draft' }));
    expect(open).toHaveBeenCalledWith(name, message);
    expect(screen.getByLabelText('Message', { exact: true })).toHaveValue(
      message,
    );
    expect(screen.getByText(/Email draft requested/)).toBeInTheDocument();
  });
  it('has a single main heading and valid local anchor destinations', () => {
    const { container } = render(<App />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    for (const link of container.querySelectorAll('a[href^="#"]'))
      expect(document.getElementById(link.hash.slice(1))).not.toBeNull();
    expect(container.textContent).not.toMatch(/80%|5\+ years/);
  });
});

describe('Responsive interactions', () => {
  function smallScreen(reduced = false) {
    window.matchMedia.mockImplementation((query) => ({
      matches:
        query.includes('max-width') ||
        (reduced && query.includes('reduced-motion')),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
  }
  it('reveals updated mobile project details and returns focus to the selected card', async () => {
    smallScreen();
    const user = userEvent.setup();
    render(<ProjectsSkills />);
    const panel = screen.getByRole('complementary');
    panel.scrollIntoView = vi.fn();
    const button = screen.getByRole('button', {
      name: 'View details: KOO-KIN',
    });
    button.scrollIntoView = vi.fn();
    await user.click(button);
    expect(panel).toHaveFocus();
    expect(panel).toHaveTextContent('eight-person team');
    expect(panel.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'nearest',
    });
    await user.click(
      screen.getByRole('button', { name: '← Back to projects' }),
    );
    expect(button).toHaveFocus();
  });
  it('respects reduced motion when opening and returning from mobile experience details', async () => {
    smallScreen(true);
    const user = userEvent.setup();
    render(<Experience />);
    const panel = screen.getByRole('complementary');
    panel.scrollIntoView = vi.fn();
    const button = screen.getByRole('button', { name: /Data Science Intern/ });
    button.scrollIntoView = vi.fn();
    await user.click(button);
    expect(panel).toHaveFocus();
    expect(panel.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'auto',
      block: 'nearest',
    });
    await user.click(
      screen.getByRole('button', { name: '← Back to timeline' }),
    );
    expect(button).toHaveFocus();
    expect(button.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'auto',
      block: 'nearest',
    });
  });
  it('keeps desktop selection focus on the control', async () => {
    const user = userEvent.setup();
    render(<ProjectsSkills />);
    const button = screen.getByRole('button', {
      name: 'View details: KOO-KIN',
    });
    await user.click(button);
    expect(button).toHaveFocus();
  });
  it('supports carousel keyboard shortcuts without intercepting keys from child controls', async () => {
    const user = userEvent.setup();
    render(<Certificates />);
    const gallery = screen.getByRole('region', { name: 'Credentials' });
    gallery.focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('status')).toHaveTextContent('Certificate 2 of 11');
    await user.keyboard('{End}');
    expect(screen.getByRole('status')).toHaveTextContent(
      'Certificate 11 of 11',
    );
    await user.keyboard('{Home}');
    expect(screen.getByRole('status')).toHaveTextContent('Certificate 1 of 11');
    const next = screen.getByRole('button', { name: 'Next certificate' });
    next.focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('status')).toHaveTextContent('Certificate 1 of 11');
  });
  it('swipes horizontally while leaving vertical and cancelled gestures alone', () => {
    const { container } = render(<Certificates />);
    const viewport = container.querySelector('.carousel-viewport');
    fireEvent.touchStart(viewport, {
      touches: [{ clientX: 200, clientY: 100 }],
    });
    fireEvent.touchEnd(viewport, {
      changedTouches: [{ clientX: 100, clientY: 105 }],
    });
    expect(screen.getByRole('status')).toHaveTextContent('Certificate 2 of 11');
    fireEvent.touchStart(viewport, {
      touches: [{ clientX: 100, clientY: 100 }],
    });
    fireEvent.touchEnd(viewport, {
      changedTouches: [{ clientX: 110, clientY: 250 }],
    });
    expect(screen.getByRole('status')).toHaveTextContent('Certificate 2 of 11');
    fireEvent.touchStart(viewport, {
      touches: [{ clientX: 200, clientY: 100 }],
    });
    fireEvent.touchCancel(viewport);
    fireEvent.touchEnd(viewport, {
      changedTouches: [{ clientX: 100, clientY: 105 }],
    });
    expect(screen.getByRole('status')).toHaveTextContent('Certificate 2 of 11');
  });
});

describe('Contact accessibility', () => {
  it('keeps contact links and the draft available together', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    expect(
      screen.getByRole('link', { name: /Email tang/ }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Write a message' }),
    ).not.toBeInTheDocument();
    await user.type(
      screen.getByLabelText('Message', { exact: true }),
      'Keep my draft',
    );
    expect(screen.getByLabelText('Message', { exact: true })).toHaveValue(
      'Keep my draft',
    );
    expect(
      screen.getByRole('button', { name: 'Open email draft' }),
    ).toBeInTheDocument();
  });
});
