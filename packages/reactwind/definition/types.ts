import { theme } from '../stubs/defaultConfig';
import boxAlignment from './box-alignment';
import spacing from './spacing';
import typography from './typography';
import backgrounds from './backgrounds';
import borders from './borders';
import flexbox from './flexbox';

export type ResponsiveArray<T> = Array<T | null>
export type ResponsiveObject<T> = { [P in Breakpoints]?: T }
export type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>

type XSide = 'l' | 'r'
type YSide = 't' | 'b'
type Axis = 'x' | 'y'

export type Breakpoints = keyof (typeof theme.screens) | 'base';
export type Spacing = keyof (typeof theme.spacing) | 'auto';
export type SpaceNegative = `-${Exclude<Spacing, 'auto'>}`;
type Opacity = keyof typeof theme.opacity;
type Colors = ShadedColors | 'black' | 'white' | 'transparent' | 'current';

let shades = ['100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;
type colors = keyof typeof theme.colors;
type colorsWithShades = Exclude<colors, 'transparent' | 'current' | 'black' | 'white'>
type shades = typeof shades[number]
type ShadedColors = `${colorsWithShades}-${shades}`

// Flexbox
type Flex = keyof typeof theme.flex;
type FlexDirection = typeof flexbox.flexDirection.values[number];
type FlexWrap = typeof flexbox.flexWrap.values[number];
type FlexGrow = typeof flexbox.flexGrow.values[number];
type FlexShrink = typeof flexbox.flexShrink.values[number];
type Order = keyof typeof theme.order;
type FlexProps = Flex | FlexDirection | FlexWrap | 'grow' | 'grow-0' | 'shrink' | 'shrink-0';
export type FlexboxProps = {
  flex?: ResponsiveValue<FlexProps[]>;
  flexDirection?: ResponsiveValue<FlexDirection>;
  flexWrap?: ResponsiveValue<FlexWrap>;
  flexGrow?: ResponsiveValue<FlexGrow>;
  flexShrink?: ResponsiveValue<FlexShrink>;
  order?: ResponsiveValue<Order>;
}

// Grid
type GridTemplateColumns = keyof typeof theme.gridTemplateColumns;
type GridColumn = keyof typeof theme.gridColumn | `start-${keyof typeof theme.gridColumnStart}`| `end-${keyof typeof theme.gridColumnEnd}`;
type GridTemplateRows = keyof typeof theme.gridTemplateRows;
type GridRow = keyof typeof theme.gridRow | `start-${keyof typeof theme.gridRowStart}`| `end-${keyof typeof theme.gridRowEnd}`;
type GridFlow = 'row' | 'col' | 'row-dense' | 'col-dense'
type Gap = Spacing | `x-${Spacing}` | `y-${Spacing}`
export type GridProps = {
  gridCols?: ResponsiveValue<GridTemplateColumns>;
  col?: ResponsiveValue<GridColumn>;
  gridRows?: ResponsiveValue<GridTemplateRows>;
  row?: ResponsiveValue<GridRow>;
  gridFlow?: ResponsiveValue<GridFlow>;
  gap?: ResponsiveValue<Gap>;
}

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
  content?: ResponsiveValue<AlignContent>;
  items?: ResponsiveValue<AlignItems>;
  self?: ResponsiveValue<AlignSelf>;
}

type PlaceContent = typeof boxAlignment.placeContent.values[number];
type PlaceItems = typeof boxAlignment.placeItems.values[number];
type PlaceSelf = typeof boxAlignment.placeSelf.values[number];
export type PlaceXProps = {
  placeContent?: ResponsiveValue<PlaceContent>;
  placeItems?: ResponsiveValue<PlaceItems>;
  placeSelf?: ResponsiveValue<PlaceSelf>;
}


// Spacing
type SpaceBetween = keyof (typeof theme.spacing) | 'reverse' | SpaceNegative;
const paddingKeys = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'] as const;
export type PaddingProps = {
  [key in typeof paddingKeys[number]]?: ResponsiveValue<Spacing>;
}

const marginKeys = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml'] as const;
export type MarginProps = {
  [key in typeof marginKeys[number]]?: ResponsiveValue<Spacing>;
}

export type SpaceBetweenProps = {
  spaceX?: ResponsiveValue<SpaceBetween>;
  spaceY?: ResponsiveValue<SpaceBetween>;
}

// Sizing
export type Width = keyof (typeof theme.width) | Spacing | string;
export type MinWidth = keyof (typeof theme.minWidth) | string;
export type MaxWidth = keyof (typeof theme.maxWidth) | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl' | string;
export type Height = keyof (typeof theme.height) | Spacing;
export type MinHeight = keyof (typeof theme.minHeight);
export type MaxHeight = keyof (typeof theme.maxHeight) | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl';
export type SizingProps = {
  w?: ResponsiveValue<Width>;
  minW?: ResponsiveValue<MinWidth>
  maxW?: ResponsiveValue<MaxWidth>;
  h?: ResponsiveValue<Height>;
  minH?: ResponsiveValue<MinHeight>
  maxH?: ResponsiveValue<MaxHeight>;
  
}

type FontFamily = keyof typeof theme.fontFamily;
type FontSize = keyof typeof theme.fontSize;
type FontWeight = keyof typeof theme.fontWeight;
type TextAlign = typeof typography.textAlign.values[number];
type LineHeight = keyof typeof theme.lineHeight
type LetterSpacing = keyof typeof theme.letterSpacing;

type ListStyleType = keyof typeof theme.listStyleType;
type ListStylePosition = keyof typeof theme.listStylePosition;
type ListProps = ListStyleType | ListStylePosition

type VerticalAlign = typeof typography.align.values[number];
type Whitespace = typeof typography.whitespace.values[number];

type FontProps = FontFamily;
type TextProps = FontSize | TextAlign | Colors;

export type TypographyProps = {
  font?: ResponsiveValue<FontProps>;
  fontWeight?: ResponsiveValue<FontWeight>;

  text?: ResponsiveValue<TextProps[]>;
  fontSize?: ResponsiveValue<FontSize>;
  textAlign?: ResponsiveValue<TextAlign>;
  textColor?: ResponsiveValue<Colors>;
  color?: ResponsiveValue<Colors>;

  leading?: ResponsiveValue<LineHeight>;
  lineHeight?: ResponsiveValue<LineHeight>;

  tracking?: ResponsiveValue<LetterSpacing>;
  letterSpacing?: ResponsiveValue<LetterSpacing>;

  list?: ResponsiveValue<ListProps[]>;
  listStyleType?: ResponsiveValue<ListStyleType>;
  listStylePosition?: ResponsiveValue<ListStylePosition>;

  placeholder?: ResponsiveValue<Colors>
  placeholderOpacity?: ResponsiveValue<Opacity>;

  textOpacity?: ResponsiveValue<Opacity>;
  align?: ResponsiveValue<VerticalAlign>;
  whitespace?: ResponsiveValue<Whitespace>;
}

// Backgrounds
type BackgroundAttachment = typeof backgrounds.bg.values[number];
type BackgroundClip = typeof backgrounds.bgClip.values[number];
type BackgroundOpacity = Opacity;
type BackgroundPosition = keyof typeof theme.backgroundPosition;
type BackgroundRepeat = typeof backgrounds.bgRepeat.values[number];
type BackgroundSize = keyof typeof theme.backgroundSize;
type BackgroundImage = keyof typeof theme.backgroundImage;
type BgProps = BackgroundAttachment | Colors | BackgroundPosition | BackgroundRepeat | BackgroundSize | BackgroundImage;

export type BackgroundsProps = {
  bg?: ResponsiveValue<BgProps[]>;
  bgAttachment?: ResponsiveValue<BackgroundAttachment>;
  bgClip?: ResponsiveValue<BackgroundClip>;
  bgColor?: ResponsiveValue<Colors>;
  bgOpacity?: ResponsiveValue<BackgroundOpacity>;
  bgPosition?: ResponsiveValue<BackgroundPosition>;
  bgRepeat?: ResponsiveValue<BackgroundRepeat>;
  bgSize?: ResponsiveValue<BackgroundSize>;
  bgImage?: ResponsiveValue<BackgroundImage>;
  from?: ResponsiveValue<Colors>;
}

// Borders
type BorderSize = Exclude<keyof typeof theme.borderRadius, 'default'>;
type BorderSide = `${XSide | YSide}-${BorderSize}` | `${YSide}${XSide}-${BorderSize}`;
type BorderWidthValues = Exclude<keyof typeof theme.borderWidth, 'default'>;
type BorderWidth = '' | BorderWidthValues | `${XSide}-${BorderWidthValues}` | `${YSide}-${BorderWidthValues}` | XSide | YSide ;
type BorderStyle = typeof borders.borderStyle.values[number]


type DivideWidth = Axis | `${Axis}-${BorderWidthValues}` | `${Axis}-reverse`

type BProps = BorderWidth | Colors | BorderStyle;
type DivideProps = DivideWidth | Colors | BorderStyle;
export type BorderProps = {
  rounded?: ResponsiveValue<'' | BorderSize | BorderSide>;
  border?: ResponsiveValue<BProps>;
  divide?: ResponsiveValue<DivideProps[]>

  borderRadius?: ResponsiveValue<'' | BorderSize | BorderSide>;
  borderWidth?: ResponsiveValue<BorderWidth>;
  borderColor?: ResponsiveValue<Colors>;
  borderOpacity?: ResponsiveValue<Opacity>;
  borderStyle?: ResponsiveValue<BorderStyle>;

  divideWidth?: ResponsiveValue<DivideWidth>;
  divideColor?: ResponsiveValue<Colors>;
  divideOpacity?: ResponsiveValue<Opacity>;
  divideStyle?: ResponsiveValue<BorderStyle>;
}