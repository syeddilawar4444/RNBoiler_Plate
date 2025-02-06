import React, { ReactNode } from "react"
import { Text, Platform, useColorScheme, TextProps, } from 'react-native';
import { Prettify } from "@/types/index"

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

function createRoutes(routes: string[]) {
  const routeObject = routes.reduce((acc, route) => {
    const key = route.toUpperCase().replace(/ /g, '_');  // Convert to UPPER_SNAKE_CASE
    acc[key] = route; // Map key to PascalCase route name
    return acc;
  }, {} as Record<string, string>);
  return routeObject;
}



export {RenderContent,spreadProps,isIOS,useIsDark,createRoutes}