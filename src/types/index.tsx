import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native"

type StyleTypeInRN = ViewStyle | TextStyle | ImageStyle  // All posible React Native Type Porps
type RenderTypes <K extends string, V extends any, isOptional extends boolean = false > =  isOptional extends true ?  Partial<Record<K, V>> : Record<K, V>  //  Render the type with optional or not
type isOptional <V extends boolean>=  V extends false ? true : false // retun the true and false according to is optional
type StyleSlot<K extends string, V extends StyleTypeInRN = ViewStyle , Optional extends boolean = true> = 
RenderTypes<K,StyleProp<V>, isOptional<Optional>> // this is Style slot pass the style StyleTypeInRN to return the type
type Prettify<T> = {
    [K in keyof T]: T[K];
  } & {};
export type {RenderTypes,isOptional,StyleSlot,StyleTypeInRN,Prettify}