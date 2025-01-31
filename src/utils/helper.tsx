import React, { ReactElement, ReactNode } from "react"
import { Text, StyleProp, Platform, useColorScheme, TextProps, ViewStyle, View } from 'react-native';
import { Prettify, StyleTypeInRN } from "@/types/index"


// interface RenderContentProps<T> extends T {
//   render: ReactNode;
// }
//{render,styles,attibuest}:{render:ReactNode,styles?:StyleProp<StyleTypeInRN>}

// interface RenderContentProps<T> {
//   render: ReactNode; // Render prop can be any ReactNode (Element, String, etc.)
//   styles?: StyleProp<ViewStyle>;
//   attibuest?: T; // attibuest ka type dynamically decide hoga
// }

type StrictReactElement<T> = ReactElement<T>;

// type RenderContentProps<T extends Object> = Prettify<{
//   render: StrictReactElement<T>;
// } & T>
type ExactProps<T> = {
  [K in keyof T]: T[K];
};
type RenderContentProps<T extends object> = {
  render: ReactElement<ExactProps<T>>;
} & ExactProps<T>;


const RenderContent = <T extends Object = {}> ({render,...rest}:RenderContentProps<T>)=>{
  console.log("render",render?.props)
  debugger
  if(!render) return ""
  return (
     React.isValidElement(render)
    ? React.cloneElement(render as React.ReactElement, {
        // style: [styles,render?.props?.style],
        ...rest
      })
    : <Text style={render?.props?.style} {...rest}>{render}</Text>
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