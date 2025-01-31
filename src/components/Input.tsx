import { View,StyleSheet, TextInput, ViewStyle, TextStyle, ImageStyle,TextInputProps } from 'react-native'
import React, { ReactNode, } from 'react'
import { RenderTypes, StyleSlot } from '@/types/index'
import { RenderContent } from '@/utils/helper'

type InputSlot = "base"|"startContent"|"endContent" | "wrapper"
type TextStyleSlot = "label" | "input"| "description"
type ImageStyleSlot = "icon" | "book" 

type StyleSlots<
  ViewCss extends string | never,
  TextCss extends string | never,
  ImageCss extends string | never
> = ( StyleSlot<ViewCss,ViewStyle>) &
    ( StyleSlot<TextCss, TextStyle>) &
    ( StyleSlot<ImageCss, ImageStyle>)


interface InputPropsTypes extends RenderTypes<"startContent"|"endContent"|"description"|"label"|"errorMessage",ReactNode,true>, TextInputProps {
  // styles?: StyleSlot<InputSlot, TextStyleSlot, ImageStyleSlot>

}


export function Input({startContent,endContent,description,errorMessage,label,style,...rest}:InputPropsTypes) {
  return (
    <View style={[defaultStyle.base]}>
    <RenderContent render={label} styles={defaultStyle.label} />
    <View style={[defaultStyle.wrapper]} >
      <RenderContent render={startContent} styles={defaultStyle.startContent} />
      <TextInput style={[defaultStyle.input,style]} {...rest} />
      <RenderContent render={endContent}  styles={defaultStyle.endContent} />
    </View>
    <RenderContent render={description} styles={defaultStyle.description} />
    <RenderContent render={errorMessage} styles={defaultStyle.errorMessage} />
    </View>
  )
}

const defaultStyle = StyleSheet.create({
  base:{
    display:"flex",
    rowGap:2,
    backgroundColor:"white",
    padding:4
  },
  wrapper:{
    display:"flex",
    flexWrap:"nowrap",
    alignItems:"center",
    flexDirection:"row",
    columnGap:5,
  },
  label:{
    color:"green"
  },
  input:{
    flex:1,
  },
  startContent:{
  },
  endContent:{
  },
  description:{
  },
  errorMessage:{
    textAlign:"right",
    color:"red",
    fontSize:14
  }
})