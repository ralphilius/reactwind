import { 
  JustifyXProps, AlignXProps, PlaceXProps, 
  PaddingProps, MarginProps, 
  SizingProps, 
  SpaceBetweenProps
} from '../definition/types';
import { ReactType } from 'react';

export type ReactwindProps = 
  JustifyXProps & AlignXProps & PlaceXProps 
  & PaddingProps & MarginProps & SpaceBetweenProps 
  & SizingProps 
  & AsProps & ClassnameProps

type AsProps = {
  as?: ReactType
};

type ClassnameProps = {
  className?: string
}