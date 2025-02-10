import {ComponentProps} from 'react';
import {ImageStyle, SafeAreaView, StyleProp, TextStyle, ViewStyle} from 'react-native';
// =========================== View, Image and Text Styles ===========================
type StyleTypeInRN = ViewStyle | TextStyle | ImageStyle; // All posible React Native Type Porps
type ViewStyleProp<T extends StyleTypeInRN = ViewStyle> = StyleProp<T>;
type TextStyleProps = ViewStyleProp<TextStyle>;
type ImageStyleProps = ViewStyleProp<ImageStyle>;

// =========================== Custon Element Extractor and Types ===========================
type ElementProps<T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>> = ComponentProps<T>;
type SafeAreaViewProps = ElementProps<typeof SafeAreaView>;

// =========================== Custom Healper Types ===========================
type isOptional<V extends boolean> = V extends false ? true : false; // return the true and false according to is optional
type RenderTypes<
  K extends string,
  V extends any,
  isOptional extends boolean = false,
> = isOptional extends true ? Partial<Record<K, V>> : Record<K, V>; //  Render the type with optional or not
type StyleSlot<
  K extends string,
  V extends StyleTypeInRN = ViewStyle,
  Optional extends boolean = true,
> = RenderTypes<K, StyleProp<V>, isOptional<Optional>>; // this is Style slot pass the style StyleTypeInRN to return the type
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type {
  StyleTypeInRN, // All RN Types
  ViewStyleProp, // View Style Props
  TextStyleProps,// Text Style Props
  ImageStyleProps,// Image Style Props
  SafeAreaViewProps, // SafeAreaViewProps export
  ElementProps,// extract the Element type
  RenderTypes,
  isOptional,
  StyleSlot,
  Prettify, // Custom Helper to intersection type looping
};
