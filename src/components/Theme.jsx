import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
const choices = ['system', 'light', 'dark'];
export const themeKey = 'portfolio-theme';
function readTheme() {
  try {
    const stored = localStorage.getItem(themeKey);
    return choices.includes(stored) ? stored : 'system';
  } catch {
    return 'system';
  }
}
export default function ThemeSelector() {
  const [theme, setTheme] = useState('system');
  const [error, setError] = useState(false);
  // The first browser render matches the pre-rendered HTML before loading preferences.
  useEffect(() => {
    setTheme(readTheme());
  }, []);
  const next = choices[(choices.indexOf(theme) + 1) % choices.length];
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      document.documentElement.dataset.theme =
        theme === 'system' ? (media.matches ? 'dark' : 'light') : theme;
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [theme]);
  const change = () => {
    setTheme(next);
    try {
      localStorage.setItem(themeKey, next);
      setError(false);
    } catch {
      setError(true);
    }
  };
  const Icon = theme === 'system' ? Monitor : theme === 'dark' ? Moon : Sun;
  return (
    <div className="theme-control">
      <button
        className="icon-button"
        onClick={change}
        aria-label={'Theme: ' + theme + '. Switch to ' + next}
        title={'Theme: ' + theme}
      >
        <Icon size={19} />
      </button>
      {error && (
        <p role="status" className="theme-message">
          Theme applies for this visit only.
        </p>
      )}
    </div>
  );
}
