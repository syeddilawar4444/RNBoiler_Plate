
import { COLORS, FLEX, FONT_SIZES } from '@/utils/constant';
import { RenderContent, spreadProps } from '@/utils/helper';
import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';

interface LoadingProps extends ActivityIndicatorProps {
  props?: Partial<{
    container: ViewProps;
    text: TextProps
  }>;
  text?:ReactNode
}

export const Loading = ({props,text, ...rest}: LoadingProps) => {
  return (
    <View
      {...spreadProps(props?.container)}
      accessibilityRole="summary"
      style={[ 
        defaultStyles.container,
        FLEX.center,
        props?.container?.style,
      ]}>
      <ActivityIndicator size={'large'} color={COLORS.BLUE_NIGHT} {...rest} />
      {/* <RenderContent render={text} styles={props?.text?.style}   /> */}
      <RenderContent<ViewProps> 
      render={<Text style={{color:"blue"}}>Fdsfdf</Text>}
      style={{backgroundColor:"gray",color:"red",fontSize:100}}
/>
<RenderContent<ViewProps>
  render={<Text>Invalid</Text>} // TypeScript error
/>;


<RenderContent<ViewProps>
  render={<View style={{ backgroundColor: 'red' }} />}
  accessibilityLabel="Test View"
/>;
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    zIndex: 100,
    backgroundColor: COLORS.BLACK_LIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    color: COLORS.WHITE,
  },
  icon: {
    color: COLORS.PURPLE,
    textAlign: 'center',
  },
  typo: {
    textAlign: 'center',
    color: COLORS.BLUE,
    fontSize: FONT_SIZES['4xl'],
    lineHeight: 44,
  },
});