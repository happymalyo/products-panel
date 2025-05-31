import { colors, spacing, typography, shadows } from './theme';

export const commonStyles = {
  button: {
    base: {
      padding: `${spacing.sm} ${spacing.md}`,
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: typography.button.fontWeight,
      fontSize: typography.button.fontSize,
      transition: 'background-color 0.2s, transform 0.1s',
      '&:active': {
        transform: 'scale(0.98)',
      },
    },
    primary: {
      backgroundColor: colors.primary,
      color: colors.background,
      '&:hover': {
        backgroundColor: '#1557b0',
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      border: `1px solid ${colors.secondary}`,
      color: colors.secondary,
      '&:hover': {
        backgroundColor: colors.surface,
      },
    },
    danger: {
      backgroundColor: colors.error,
      color: colors.background,
      '&:hover': {
        backgroundColor: '#b71c1c',
      },
    },
  },
  card: {
    padding: spacing.md,
    backgroundColor: colors.background,
    borderRadius: '8px',
    boxShadow: shadows.md,
  },
  input: {
    padding: spacing.sm,
    border: `1px solid ${colors.secondary}`,
    borderRadius: '4px',
    fontSize: typography.body.fontSize,
    width: '100%',
    '&:focus': {
      outline: 'none',
      borderColor: colors.primary,
    },
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    'th, td': {
      padding: spacing.sm,
      textAlign: 'left',
      borderBottom: `1px solid ${colors.surface}`,
    },
    th: {
      fontWeight: 500,
      color: colors.text.secondary,
    },
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `${spacing.lg} ${spacing.md}`,
  },
} as const; 