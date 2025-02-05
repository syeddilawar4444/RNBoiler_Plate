import React, { isValidElement, ReactElement, ReactNode } from "react"
import { Text, StyleProp, Platform, useColorScheme, TextProps, ViewStyle, View, ViewProps, ImageProps, TextInputProps } from 'react-native';
import { Prettify, StyleTypeInRN } from "@/types/index"



type ViewElementProps = JSX.IntrinsicElements["view"];
type MyViewProps = ViewProps; // ✅ Yeh View ka prop type hai



type MyComponentProps = React.ComponentProps<typeof Text>;


interface bok  {
  render: TextProps extends keyof MyComponentProps ? "GG" : "NN"
 }
//  const mmm:TextInputProps ={
//   onChange
//  }
 
type RenderContentProps<T extends object> = {
  /// React.ReactElement<TextProps, string | React.JSXElementConstructor<any>> & React.JSX.Element
  // render: TextProps["style"] extends TextProps ? Text : View
  render: ReactNode,
} & Prettify<T>;



const RenderContent = <T extends Object = TextProps> ({render,...rest}:RenderContentProps<T>)=>{
  if(!render) return ""
  return (
     React.isValidElement(render)
    ? React.cloneElement(render as React.ReactElement, {
        ...rest
      })
    : <Text {...rest}>{render}</Text>
  )
}
const spreadProps = <T extends object>(props?: T) => ({
  ...(props || {}),
});
const isIOS = ():boolean => {
  return Platform.OS === 'ios';
};
const useIsDark = (): boolean => {
  return useColorScheme() === 'dark';
};

export {RenderContent,spreadProps,isIOS,useIsDark}