import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingViewProps,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StatusBarProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Loading} from '@/components/index';
import {KeyboardAvoidingView} from 'react-native';
import {isIOS, useIsDark} from '@/utils/index';
import { SafeAreaViewProps} from '../types';

type AllBooleanTypes = Partial<
  Record<
    | 'useSafeArea'
    | 'loading'
    | 'useKeyboardView'
    | 'useStatus'
    | 'useScrollView',
    boolean
  >
>;

type StyleSlotWrapper =
  | 'safeAreaView'
  | 'scrollView'
  | 'keyboardAvoidingView'
  | 'loading';

type AllProps = Partial<{
  safeAreaView: SafeAreaViewProps;
  statusBar: StatusBarProps;
  scrollView: ScrollViewProps;
  keyboardAvoidingView: KeyboardAvoidingViewProps;
}>;

// type dd = Record<>

export interface WrapperProps extends AllBooleanTypes {
  children: ReactNode;
  props?: AllProps;
  styles?: Partial<
    Record<Exclude<StyleSlotWrapper, 'loading'>, StyleProp<ViewStyle>>
  >;
}

export function Wrapper({
  useSafeArea = true,
  useStatus = true,
  useKeyboardView = false,
  useScrollView = false,
  loading = false,
  children,
  props,
  styles,
}: WrapperProps) {
  const isDark = useIsDark();
  const scrollView = (
    <RenderScrollView
      children={children}
      useScrollView={useScrollView}
      props={props?.scrollView}
    />
  );
  return (
    <>
      {loading && <Loading styles={styles?.loading} text="Loading...." />}
      {useSafeArea && <SafeAreaView {...props?.safeAreaView} />}
      {useStatus && (
        <StatusBar
          barStyle={!isDark ? 'dark-content' : 'light-content'}
          {...props?.statusBar}
        />
      )}
      {useKeyboardView ? (
        <KeyboardAvoidingView
          behavior={isIOS() ? 'padding' : 'height'}
          {...props?.keyboardAvoidingView}
          style={[
            defaultStyle.keyboardView,
            props?.keyboardAvoidingView?.style,
          ]}>
          {scrollView}
        </KeyboardAvoidingView>
      ) : (
        scrollView
      )}
    </>
  );
}

const defaultStyle = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
});

const RenderScrollView = ({
  useScrollView,
  children,
  props,
}: {
  useScrollView?: boolean;
  children: ReactNode;
  props?: ScrollViewProps;
}) => {
  return useScrollView ? (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      {...props}>
      {children}
    </ScrollView>
  ) : (
    children
  );
};
