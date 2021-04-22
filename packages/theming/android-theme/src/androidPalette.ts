import { ColorValue } from '@fluentui-react-native/theme-types';
import { AndroidBaseColorsPalette } from './androidBaseColors';
import { semanticToBase } from './lookupSemanticBase';

export interface SemanticPalette {
  //Texts
  textDominant: ColorValue;
  textPrimary: ColorValue;
  textSecondary: ColorValue;
  textDisabled: ColorValue;
  textOnAccent: ColorValue;
  textDominantHighContrast: ColorValue;
  textPrimaryHighContrast: ColorValue;
  textSecondaryHighContrast: ColorValue;
  textDisabledHighContrast: ColorValue;
  textOnAccentHighContrast: ColorValue;

  //Icons
  iconsPrimary: ColorValue;
  iconsSecondary: ColorValue;
  iconsDisabled: ColorValue;
  iconsOnAccent: ColorValue;
  iconsPrimaryHighContrast: ColorValue;
  iconsSecondaryHighContrast: ColorValue;
  iconsDisabledHighContrast: ColorValue;
  iconsOnAccentHighContrast: ColorValue;

  //Surfaces
  surfacesPrimary: ColorValue;
  surfacesSecondary: ColorValue;
  surfacesTertiary: ColorValue;
  surfacesQuaternary: ColorValue;

  //Dividers
  dividersPrimary: ColorValue;
  dividersSecondary: ColorValue;
  dividersTertiary: ColorValue;

  //Button
  buttonBackground: ColorValue;
  buttonBackgroundPressed: ColorValue;
  buttonBackgroundDisabled: ColorValue;
  buttonTextDisabled: ColorValue;

  //Menu
  menuBackground: ColorValue;
  menuIcon: ColorValue;
  menuItemText: ColorValue;

  //List
  listBackground: ColorValue;

  //HyperLink
  textHyperLink: ColorValue;
}

export type FluentUIAndroidPalette = AndroidBaseColorsPalette & SemanticPalette;

export function getFluentUIAndroidPalette(p: AndroidBaseColorsPalette, customLookupTable?: any): FluentUIAndroidPalette {
  const lookupTable = { ...semanticToBase, ...customLookupTable['mappings'] };

  return p['variant'] == 'light'
    ? {
        ...p,
        textDominant: p[lookupTable['textDominant']],
        textPrimary: p[lookupTable['textPrimary']],
        textSecondary: p[lookupTable['textSecondary']],
        textDisabled: p[lookupTable['textDisabled']],
        textOnAccent: p[lookupTable['textOnAccent']],
        textDominantHighContrast: p[lookupTable['textDominantHighContrast']],
        textPrimaryHighContrast: p[lookupTable['textPrimaryHighContrast']],
        textSecondaryHighContrast: p[lookupTable['textSecondaryHighContrast']],
        textDisabledHighContrast: p[lookupTable['textDisabledHighContrast']],
        textOnAccentHighContrast: p[lookupTable['textOnAccentHighContrast']],
        iconsPrimary: p[lookupTable['iconsPrimary']],
        iconsSecondary: p[lookupTable['iconsSecondary']],
        iconsDisabled: p[lookupTable['iconsDisabled']],
        iconsOnAccent: p[lookupTable['iconsOnAccent']],
        iconsPrimaryHighContrast: p[lookupTable['iconsPrimaryHighContrast']],
        iconsSecondaryHighContrast: p[lookupTable['iconsSecondaryHighContrast']],
        iconsDisabledHighContrast: p[lookupTable['iconsDisabledHighContrast']],
        iconsOnAccentHighContrast: p[lookupTable['iconsOnAccentHighContrast']],
        surfacesPrimary: p[lookupTable['surfacesPrimary']],
        surfacesSecondary: p[lookupTable['surfacesSecondary']],
        surfacesTertiary: p[lookupTable['surfacesTertiary']],
        surfacesQuaternary: p[lookupTable['surfacesQuaternary']],
        dividersPrimary: p[lookupTable['dividersPrimary']],
        dividersSecondary: p[lookupTable['dividersSecondary']],
        dividersTertiary: p[lookupTable['dividersTertiary']],
        buttonBackground: p[lookupTable['buttonBackground']],
        buttonBackgroundPressed: p[lookupTable['buttonBackgroundPressed']],
        buttonBackgroundDisabled: p[lookupTable['buttonBackgroundDisabled']],
        buttonTextDisabled: p[lookupTable['buttonTextDisabled']],
        menuBackground: p[lookupTable['menuBackground']],
        menuIcon: p[lookupTable['menuIcon']],
        menuItemText: p[lookupTable['menuItemText']],
        listBackground: p[lookupTable['listBackground']],
        textHyperLink: '#D83B01',
        ...customLookupTable['overrides'],
      }
    : {
        ...p,
        textDominant: p[lookupTable['textDominant']],
        textPrimary: p[lookupTable['textPrimary']],
        textSecondary: p[lookupTable['textSecondary']],
        textDisabled: p[lookupTable['textDisabled']],
        textOnAccent: p[lookupTable['textOnAccent']],
        textDominantHighContrast: p[lookupTable['textDominantHighContrast']],
        textPrimaryHighContrast: p[lookupTable['textPrimaryHighContrast']],
        textSecondaryHighContrast: p[lookupTable['textSecondaryHighContrast']],
        textDisabledHighContrast: p[lookupTable['textDisabledHighContrast']],
        textOnAccentHighContrast: p[lookupTable['textOnAccentHighContrast']],
        iconsPrimary: p[lookupTable['iconsPrimary']],
        iconsSecondary: p[lookupTable['iconsSecondary']],
        iconsDisabled: p[lookupTable['iconsDisabled']],
        iconsOnAccent: p[lookupTable['iconsOnAccent']],
        iconsPrimaryHighContrast: p[lookupTable['iconsPrimaryHighContrast']],
        iconsSecondaryHighContrast: p[lookupTable['iconsSecondaryHighContrast']],
        iconsDisabledHighContrast: p[lookupTable['iconsDisabledHighContrast']],
        iconsOnAccentHighContrast: p[lookupTable['iconsOnAccentHighContrast']],
        surfacesPrimary: p[lookupTable['surfacesPrimary']],
        surfacesSecondary: p[lookupTable['surfacesSecondary']],
        surfacesTertiary: p[lookupTable['surfacesTertiary']],
        surfacesQuaternary: p[lookupTable['surfacesQuaternary']],
        dividersPrimary: p[lookupTable['dividersPrimary']],
        dividersSecondary: p[lookupTable['dividersSecondary']],
        dividersTertiary: p[lookupTable['dividersTertiary']],
        buttonBackground: p[lookupTable['buttonBackground']],
        buttonBackgroundPressed: p[lookupTable['buttonBackgroundPressed']],
        buttonBackgroundDisabled: p[lookupTable['buttonBackgroundDisabled']],
        buttonTextDisabled: p[lookupTable['buttonTextDisabled']],
        menuBackground: p[lookupTable['menuBackground']],
        menuIcon: p[lookupTable['menuIcon']],
        menuItemText: p[lookupTable['menuItemText']],
        listBackground: p[lookupTable['listBackground']],
        textHyperLink: '#D83B01',
        ...customLookupTable['overrides'],
      };
}
