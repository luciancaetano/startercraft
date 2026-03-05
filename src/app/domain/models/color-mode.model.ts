/**
 * Represents the available color modes for the application theme.
 */
export type ColorMode = 'dark' | 'light';

/**
 * Describes the user's color mode preference state.
 */
export interface ColorModePreference {
  mode: ColorMode;
  source: 'system' | 'user';
}
