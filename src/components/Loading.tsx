import {COLORS, FLEX} from '@/utils/constant';
import {RenderContent, spreadProps} from '@/utils/helper';
import React, {ReactNode} from 'react';
import {
  TextProps,
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
  TextStyle,
} from 'react-native';

type LoadingSlotType = 'base' | 'indicator' | 'text';
type LoadingViewStyle = Record<Exclude<LoadingSlotType, 'text'>, ViewStyle>;
type LoadingStyles = Partial<LoadingViewStyle & Record<'text', TextStyle>>;

interface LoadingProps extends ActivityIndicatorProps {
  props?: Partial<{
    container: ViewProps;
    text: TextProps;
  }>;
  text?: ReactNode;
  styles?: LoadingStyles;
}

const Loading = ({props, text, styles, ...rest}: LoadingProps) => {
  return (
    <View
      {...spreadProps(props?.container)}
      accessibilityRole="summary"
      style={[defaultStyles.container, FLEX.center, props?.container?.style,styles?.base]}>
      <ActivityIndicator
        style={[styles?.indicator]}
        size={'large'}
        color={COLORS.BLUE_NIGHT}
        {...rest}
      />
      <RenderContent<TextProps>
        {...spreadProps(props?.text)}
        render={text}
        style={[props?.text?.style, styles?.text]}
      />
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
});

export {Loading}
export type {LoadingProps,LoadingStyles,LoadingSlotType,}
