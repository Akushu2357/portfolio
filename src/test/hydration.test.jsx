import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { expect, it, vi } from 'vitest';
import App from '../App';
import { themeKey } from '../components/Theme';
it('hydrates static HTML with a saved theme and keeps project search interactive', async () => {
  const html = renderToString(<App />);
  expect(html).toContain('Thai Labor Law Chatbot');
  expect(html).toContain('KOO-KIN');
  localStorage.setItem(themeKey, 'dark');
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.append(container);
  const recover = vi.fn();
  let root;
  try {
    await act(async () => {
      root = hydrateRoot(container, <App />, { onRecoverableError: recover });
    });
    expect(recover).not.toHaveBeenCalled();
    expect(
      screen.getByRole('button', { name: /Theme: dark/ }),
    ).toBeInTheDocument();
    const user = userEvent.setup();
    await user.type(
      screen.getByLabelText('Search projects or technologies'),
      'mongodb',
    );
    expect(container.querySelectorAll('.project-card')).toHaveLength(1);
    expect(container.querySelector('.project-card')).toHaveTextContent(
      'KOO-KIN',
    );
  } finally {
    if (root) await act(async () => root.unmount());
    container.remove();
  }
});
