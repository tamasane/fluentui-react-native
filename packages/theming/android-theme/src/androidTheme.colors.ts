import { ThemeColorDefinition } from '@fluentui-react-native/theme-types';
import { FluentUIAndroidPalette } from './androidPalette';
import { tokenToSemantic } from './lookupTokenSematic';

/** creates a palette of colors for the android theme, given the FluentUI Android Palette */
export function paletteFromAndroidColors(p: FluentUIAndroidPalette, customLookupTable?: any): ThemeColorDefinition {
  const lookupTable = { ...tokenToSemantic, ...customLookupTable['mappings'] };

  return {
    /* PaletteBackgroundColors & PaletteTextColors */

    background: p[lookupTable['background']],
    bodyStandoutBackground: p[lookupTable['bodyStandoutBackground']],
    bodyFrameBackground: p[lookupTable['bodyFrameBackground']],
    bodyFrameDivider: p[lookupTable['bodyFrameDivider']],
    bodyText: p[lookupTable['bodyText']],
    bodyTextChecked: p[lookupTable['bodyTextChecked']],
    subText: p[lookupTable['subText']],
    bodyDivider: p[lookupTable['bodyDivider']],

    disabledBackground: p[lookupTable['disabledBackground']],
    disabledText: p[lookupTable['disabledText']],
    disabledBodyText: p[lookupTable['disabledBodyText']],
    disabledSubtext: p[lookupTable['disabledSubtext']],
    disabledBodySubtext: p[lookupTable['disabledBodySubtext']],

    focusBorder: 'transparent',
    variantBorder: 'transparent',
    variantBorderHovered: 'transparent',
    defaultStateBackground: 'transparent',

    errorText: p[lookupTable['errorText']],
    warningText: p[lookupTable['warningText']],
    errorBackground: p[lookupTable['errorBackground']],
    blockingBackground: p[lookupTable['blockingBackground']],
    warningBackground: p[lookupTable['warningBackground']],
    warningHighlight: p[lookupTable['warningHighlight']],
    successBackground: p[lookupTable['successBackground']],

    inputBorder: 'transparent',
    inputBorderHovered: 'transparent',
    inputBackground: 'transparent',
    inputBackgroundChecked: 'transparent',
    inputBackgroundCheckedHovered: 'transparent',
    inputForegroundChecked: p[lookupTable['inputForegroundChecked']],
    inputFocusBorderAlt: 'transparent',
    smallInputBorder: 'transparent',
    inputText: p[lookupTable['inputText']],
    inputTextHovered: p[lookupTable['inputTextHovered']],
    inputPlaceholderText: p[lookupTable['inputPlaceholderText']],

    buttonBackgroundChecked: p[lookupTable['buttonBackgroundChecked']],
    buttonBackgroundHovered: p[lookupTable['buttonBackgroundHovered']],
    buttonBackgroundCheckedHovered: p[lookupTable['buttonBackgroundCheckedHovered']],
    buttonBackgroundPressed: p[lookupTable['buttonBackgroundPressed']],
    buttonBackgroundDisabled: p[lookupTable['buttonBackgroundDisabled']],
    buttonText: p[lookupTable['buttonText']],
    buttonTextHovered: '#ffffff',
    buttonTextChecked: '#ffffff',
    buttonTextCheckedHovered: '#ffffff',
    buttonTextPressed: p[lookupTable['buttonTextPressed']],
    buttonTextDisabled: p[lookupTable['buttonTextDisabled']],
    buttonBorderDisabled: 'transparent',
    buttonBorderFocused: 'transparent',

    primaryButtonBackground: p[lookupTable['primaryButtonBackground']],
    primaryButtonBackgroundHovered: p[lookupTable['primaryButtonBackgroundHovered']],
    primaryButtonBackgroundPressed: p[lookupTable['primaryButtonBackgroundPressed']],
    primaryButtonBackgroundDisabled: p[lookupTable['primaryButtonBackgroundDisabled']],
    primaryButtonBorder: 'transparent',
    primaryButtonBorderFocused: 'transparent',
    primaryButtonText: p[lookupTable['primaryButtonText']],
    primaryButtonTextHovered: '#ffffff',
    primaryButtonTextPressed: '#ffffff',
    primaryButtonTextDisabled: p[lookupTable['primaryButtonTextDisabled']],

    accentButtonBackground: p[lookupTable['accentButtonBackground']],
    accentButtonText: p[lookupTable['accentButtonText']],

    menuBackground: p[lookupTable['menuBackground']],
    menuDivider: 'transparent',
    menuIcon: p[lookupTable['menuIcon']],
    menuHeader: 'transparent',
    menuItemBackgroundHovered: 'transparent',
    menuItemBackgroundPressed: 'transparent',
    menuItemText: p[lookupTable['menuItemText']],
    menuItemTextHovered: p[lookupTable['menuItemTextHovered']],

    listBackground: p[lookupTable['listBackground']],
    listText: p[lookupTable['listText']],
    listItemBackgroundHovered: 'transparent',
    listItemBackgroundChecked: 'transparent',
    listItemBackgroundCheckedHovered: 'transparent',

    listHeaderBackgroundHovered: 'transparent',
    listHeaderBackgroundPressed: 'transparent',

    actionLink: p[lookupTable['actionLink']],
    actionLinkHovered: p[lookupTable['actionLinkHovered']],
    link: p[lookupTable['link']],
    linkHovered: p[lookupTable['linkHovered']],
    linkPressed: p[lookupTable['linkPressed']],

    /* ControlColorTokens */

    buttonBackground: p[lookupTable['buttonBackground']],
    buttonBorder: 'transparent',
    buttonContent: p[lookupTable['buttonContent']],
    buttonIcon: p[lookupTable['buttonIcon']],

    buttonPressedBackground: p[lookupTable['buttonPressedBackground']],
    buttonPressedBorder: 'transparent',
    buttonPressedContent: p[lookupTable['buttonPressedContent']],
    buttonPressedIcon: p[lookupTable['buttonPressedIcon']],

    buttonDisabledBackground: p[lookupTable['buttonDisabledBackground']],
    buttonDisabledBorder: 'transparent',
    buttonDisabledContent: p[lookupTable['buttonDisabledContent']],
    buttonDisabledIcon: p[lookupTable['buttonDisabledIcon']],

    ghostBackground: 'transparent',
    ghostBorder: 'transparent',
    ghostContent: p[lookupTable['ghostContent']],
    ghostIcon: p[lookupTable['ghostIcon']],

    ghostHoveredBackground: 'transparent',
    ghostHoveredBorder: 'transparent',
    ghostHoveredContent: p[lookupTable['ghostHoveredContent']],
    ghostHoveredIcon: p[lookupTable['ghostHoveredIcon']],

    ghostFocusedBackground: 'transparent',
    ghostFocusedBorder: 'transparent',
    ghostFocusedContent: p[lookupTable['ghostFocusedContent']],
    ghostFocusedIcon: p[lookupTable['ghostFocusedIcon']],

    ghostPressedBackground: 'transparent',
    ghostPressedBorder: 'transparent',
    ghostPressedContent: p[lookupTable['ghostPressedContent']],
    ghostPressedIcon: p[lookupTable['ghostPressedIcon']],

    ghostDisabledBackground: 'transparent',
    ghostDisabledBorder: 'transparent',
    ghostDisabledContent: p[lookupTable['ghostDisabledContent']],
    ghostDisabledIcon: p[lookupTable['ghostDisabledIcon']],

    brandBackground: p[lookupTable['brandBackground']],
    brandBorder: 'transparent',
    brandContent: p[lookupTable['brandContent']],
    brandIcon: p[lookupTable['brandIcon']],

    brandHoveredBackground: p[lookupTable['brandHoveredBackground']],
    brandHoveredBorder: 'transparent',
    brandHoveredContent: p[lookupTable['brandHoveredContent']],
    brandHoveredIcon: p[lookupTable['brandHoveredIcon']],

    brandFocusedBackground: p[lookupTable['brandFocusedBackground']],
    brandFocusedBorder: 'transparent',
    brandFocusedContent: p[lookupTable['brandFocusedContent']],
    brandFocusedIcon: p[lookupTable['brandFocusedIcon']],

    brandPressedBackground: p[lookupTable['brandPressedBackground']],
    brandPressedBorder: 'transparent',
    brandPressedContent: p[lookupTable['brandPressedContent']],
    brandPressedIcon: p[lookupTable['brandPressedIcon']],

    brandDisabledBackground: p[lookupTable['brandDisabledBackground']],
    brandDisabledBorder: 'transparent',
    brandDisabledContent: p[lookupTable['brandDisabledContent']],
    brandDisabledIcon: p[lookupTable['brandDisabledIcon']],

    buttonCheckedBackground: p[lookupTable['buttonCheckedBackground']],
    buttonCheckedContent: p[lookupTable['buttonCheckedContent']],
    buttonCheckedHoveredBackground: p[lookupTable['buttonCheckedHoveredBackground']],
    buttonCheckedHoveredContent: p[lookupTable['buttonCheckedHoveredContent']],

    brandCheckedBackground: p[lookupTable['brandCheckedBackground']],
    brandCheckedContent: p[lookupTable['brandCheckedContent']],
    brandCheckedHoveredBackground: p[lookupTable['brandCheckedHoveredBackground']],
    brandCheckedHoveredContent: p[lookupTable['brandCheckedHoveredContent']],

    ghostCheckedBackground: 'transparent',
    ghostCheckedContent: p[lookupTable['ghostCheckedContent']],
    ghostCheckedHoveredBackground: 'transparent',
    ghostCheckedHoveredContent: p[lookupTable['ghostCheckedHoveredContent']],
    ghostCheckedHoveredBorder: 'transparent',

    ghostSecondaryContent: p[lookupTable['ghostSecondaryContent']],
    ghostFocusedSecondaryContent: p[lookupTable['ghostFocusedSecondaryContent']],
    ghostHoveredSecondaryContent: p[lookupTable['ghostHoveredSecondaryContent']],
    ghostPressedSecondaryContent: p[lookupTable['ghostPressedSecondaryContent']],

    brandSecondaryContent: p[lookupTable['brandSecondaryContent']],
    brandFocusedSecondaryContent: p[lookupTable['brandFocusedSecondaryContent']],
    brandHoveredSecondaryContent: p[lookupTable['brandHoveredSecondaryContent']],
    brandPressedSecondaryContent: p[lookupTable['brandPressedSecondaryContent']],

    buttonDisabledSecondaryContent: p[lookupTable['buttonDisabledSecondaryContent']],
    buttonHoveredSecondaryContent: p[lookupTable['buttonHoveredSecondaryContent']],
    buttonPressedSecondaryContent: p[lookupTable['buttonPressedSecondaryContent']],
    ...customLookupTable['overrides'],
  };
}
