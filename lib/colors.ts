// Centralized Color Configuration
// Update colors here and they will apply throughout the website

export const brandColors = {
  // Primary Brand Colors
  primary: {
    midnight: '#144d5e',     // Midnight Green - Primary brand color
    shamrock: '#6aad81',     // Shiny Shamrock - Secondary/accent color
  },
  
  // Neutral Colors
  neutral: {
    lightGrey: '#d2d4d8',    // Light Grey - Neutral/background color
    eerieBlack: '#1b1b1b',   // Eerie Black - Dark backgrounds
    white: '#ffffff',
    black: '#000000',
  },
  
  // Derived Colors (auto-generated hover states, etc.)
  derived: {
    shamrockHover: '#5a9d71', // Darker shade for hover states
    shamrockLight: '#8bc4a1', // Lighter shade for subtle backgrounds
  }
} as const;

// CSS Custom Property Names (for reference)
export const cssVariables = {
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)', 
  accent: 'var(--color-accent)',
  background: 'var(--color-background)',
  foreground: 'var(--color-foreground)',
  muted: 'var(--color-muted)',
  border: 'var(--color-border)',
} as const;

// Utility function to get color values
export const getColor = (colorPath: string) => {
  const paths = colorPath.split('.');
  let result: any = brandColors;
  
  for (const path of paths) {
    result = result[path];
    if (!result) return null;
  }
  
  return result;
};
