import { 
  JustifyXProps, AlignXProps, PlaceXProps, 
  PaddingProps, MarginProps, 
  SizingProps, 
  SpaceBetweenProps,
  TypographyProps,
  BackgroundsProps,
  BorderProps,
  GridProps,
  FlexboxProps
} from '../definition/types';
import { ElementType } from 'react';

export type ReactwindProps = 
    FlexboxProps
  & GridProps
  & JustifyXProps & AlignXProps & PlaceXProps 
  & PaddingProps & MarginProps & SpaceBetweenProps 
  & SizingProps 
  & TypographyProps
  & BackgroundsProps
  & BorderProps
  & AsProps & ClassnameProps & React.HTMLProps<HTMLImageElement | HTMLLinkElement>

type AsProps = {
  as?: ElementType
};

type ClassnameProps = {
  className?: string
}