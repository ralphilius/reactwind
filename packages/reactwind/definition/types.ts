import { theme } from '../stubs/defaultConfig';
import boxAlignment from './box-alignment';
import spacing from './spacing';

export type ResponsiveArray<T> = Array<T | null>
export type ResponsiveObject<T> = { [P in keyof Breakpoints]: T }
export type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>

export type Breakpoints = keyof (typeof theme.screens);
export type Spacing = keyof (typeof theme.spacing) | 'auto';
export type SpaceNegative = keyof (typeof spacing.negativeSpacing);
export type SpaceBetween = keyof (typeof theme.spacing) | 'reverse' | SpaceNegative;
export type FontSize = keyof (typeof theme.fontSize);
export type FontWeight = keyof (typeof theme.fontWeight);

// Box Alignment
type JustifyContent = typeof boxAlignment.justifyContent.values[number];
type JustifyItems = typeof boxAlignment.justifyItems.values[number];
type JustifySelf = typeof boxAlignment.justifySelf.values[number];
export type JustifyXProps = {
  justifyContent?: ResponsiveValue<JustifyContent>;
  justifyItems?: ResponsiveValue<JustifyItems>;
  justifySelf?: ResponsiveValue<JustifySelf>;
}

type AlignContent = typeof boxAlignment.alignContent.values[number];
type AlignItems = typeof boxAlignment.alignItems.values[number];
type AlignSelf = typeof boxAlignment.alignSelf.values[number];
export type AlignXProps = {
  content: ResponsiveValue<AlignContent>;
  items: ResponsiveValue<AlignItems>;
  self: ResponsiveValue<AlignSelf>;
}

type PlaceContent = typeof boxAlignment.placeContent.values[number];
type PlaceItems = typeof boxAlignment.placeItems.values[number];
type PlaceSelf = typeof boxAlignment.placeSelf.values[number];
export type PlaceXProps = {
  placeContent: ResponsiveValue<PlaceContent>;
  placeItems: ResponsiveValue<PlaceItems>;
  placeSelf: ResponsiveValue<PlaceSelf>;
}


// Spacing
const paddingKeys = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'] as const;
export type PaddingProps = {
  [key in typeof paddingKeys[number]]: ResponsiveValue<Spacing>;
}

const marginKeys = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml'] as const;
export type MarginProps = {
  [key in typeof marginKeys[number]]: ResponsiveValue<Spacing>;
}

export type SpaceBetweenProps = {
  spaceX: ResponsiveValue<SpaceBetween>;
  spaceY: ResponsiveValue<SpaceBetween>;
}

// Sizing
export type Width = keyof (typeof theme.width) | Spacing;
export type MinWidth = keyof (typeof theme.minWidth);
export type MaxWidth = keyof (typeof theme.maxWidth) | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl';
export type Height = keyof (typeof theme.height) | Spacing;
export type MinHeight = keyof (typeof theme.minHeight);
export type MaxHeight = keyof (typeof theme.maxHeight) | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl';
export type SizingProps = {
  w: ResponsiveValue<Width>;
  minW: ResponsiveValue<MinWidth>
  maxW: ResponsiveValue<MaxWidth>;
  h: ResponsiveValue<Height>;
  minH: ResponsiveValue<MinHeight>
  maxH: ResponsiveValue<MaxHeight>;
  
}