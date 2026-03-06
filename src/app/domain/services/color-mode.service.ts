import type { ColorMode, ColorModePreference } from '@domain/models';

const STORAGE_KEY = 'app-color-mode';

function getSystemPreference(): ColorMode {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

function getSavedPreference(): ColorMode | null {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  return null;
}

function resolvePreference(): ColorModePreference {
  const saved = getSavedPreference();
  if (saved) {
    return { mode: saved, source: 'user' };
  }
  return { mode: getSystemPreference(), source: 'system' };
}

function savePreference(mode: ColorMode): void {
  window.localStorage.setItem(STORAGE_KEY, mode);
}

function applyToDocument(mode: ColorMode): void {
  if (mode === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  document.body.setAttribute('data-theme', mode);
}

function toggle(current: ColorMode): ColorMode {
  return current === 'dark' ? 'light' : 'dark';
}

export const ColorModeService = {
  getSystemPreference,
  getSavedPreference,
  resolvePreference,
  savePreference,
  applyToDocument,
  toggle,
};
