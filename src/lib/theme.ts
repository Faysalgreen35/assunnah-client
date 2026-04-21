// Token name constants — use these in style={{ color: COLORS.primary }} patterns
export const COLORS = {
  // surfaces
  bg: 'var(--color-bg)',
  surface: 'var(--color-surface)',
  surfaceRaised: 'var(--color-surface-raised)',
  mutedBg: 'var(--color-muted-bg)',
  statsBg: 'var(--color-stats-bg)',

  // borders
  border: 'var(--color-border)',
  borderSubtle: 'var(--color-border-subtle)',

  // text
  heading: 'var(--color-heading)',
  body: 'var(--color-body)',
  muted: 'var(--color-muted)',
  subtle: 'var(--color-subtle)',

  // brand
  primary: 'var(--color-primary)',
  primaryDark: 'var(--color-primary-dark)',
  primaryHover: 'var(--color-primary-hover)',
  goldDivider: 'var(--color-gold-divider)',
  accentLight: 'var(--color-accent-light)',
  cardHoverBorder: 'var(--color-card-hover-border)',
} as const;

// Full palette reference (for documentation / design tokens)
export const PALETTE = {
  light: {
    bg: '#ffffff',
    surface: '#faf6ef',
    surfaceRaised: '#fbf7f0',
    mutedBg: '#f3f3f3',
    statsBg: '#f5ede0',
    border: '#e8dcc8',
    borderSubtle: '#e8e8e8',
    heading: '#1a1a1a',
    body: '#555555',
    muted: '#888888',
    subtle: '#999999',
  },
  dark: {
    bg: '#1a1714',
    surface: '#221e1a',
    surfaceRaised: '#2a2521',
    mutedBg: '#252019',
    statsBg: '#2a2521',
    border: '#3a332c',
    borderSubtle: '#2f2a25',
    heading: '#f5ede0',
    body: '#c9b99a',
    muted: '#8a7a6a',
    subtle: '#6a5e52',
  },
  brand: {
    primary: '#a4722c',
    primaryDark: '#654321',
    primaryHover: '#8b5e24',
    goldDivider: '#c9973a',
    accentLight: '#f4e6cc',
  },
} as const;

export type ThemeMode = 'light' | 'dark';
