import { Spacing, Theme } from '@fluentui-react-native/theme-types';
import { getFluentUIAndroidPalette } from './colorsSemantic';
import { paletteFromAndroidColors } from './colorsTokens';
import { androidTypography } from './androidTypography';
import { getAndroidPalette } from './colorsBase';

export function androidSpacing(): Spacing {
  return {
    s2: '8px',
    s1: '12px',
    m: '16px',
    l1: '20px',
    l2: '24px',
  };
}

export const androidComponents = {
  Button: {
    tokens: {
      borderRadius: 12,
      borderWidth: 1,
    },
    root: {
      style: {
        margin: 8,
      },
    },
    stack: {
      style: {
        paddingVertical: 14,
        paddingHorizontal: 20,
      },
    },
    icon: {
      style: {
        marginEnd: 10,
      },
    },
    content: {
      variant: 'bodySemibold',
    },
  },
};

export function getAndroidTheme(appearance: 'light' | 'dark', customTheme: {}): Theme {
  return {
    colors: paletteFromAndroidColors(
      getFluentUIAndroidPalette(getAndroidPalette(appearance, customTheme['baseColors']), customTheme['semanticColors']),
      customTheme['tokens'],
    ),
    typography: androidTypography(),
    spacing: androidSpacing(),
    components: { ...androidComponents, ...customTheme['components'] },
    host: { appearance },
  };
}
