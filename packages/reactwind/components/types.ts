import { 
  JustifyXProps, AlignXProps, PlaceXProps, 
  PaddingProps, MarginProps, 
  SizingProps, 
  SpaceBetweenProps,
  TypographyProps
} from '../definition/types';
import { ReactType } from 'react';

export type ReactwindProps = 
  JustifyXProps & AlignXProps & PlaceXProps 
  & PaddingProps & MarginProps & SpaceBetweenProps 
  & SizingProps 
  & TypographyProps
  & AsProps & ClassnameProps & React.HTMLProps<HTMLImageElement | HTMLLinkElement>

type AsProps = {
  as?: ReactType
};

type ClassnameProps = {
  className?: string
}