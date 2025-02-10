import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingViewProps,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StatusBarProps,
  StyleSheet,
} from 'react-native';
import { Loading, LoadingProps, LoadingStyles } from '@/components/index';
import {KeyboardAvoidingView} from 'react-native';
import {isIOS, useIsDark} from '@/utils/index';
import { SafeAreaViewProps, ViewStyleProp} from '@/types/index';

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

type WrapperAllProps = Partial<{
  safeAreaView: SafeAreaViewProps;
  statusBar: StatusBarProps;
  scrollView: ScrollViewProps;
  keyboardAvoidingView: KeyboardAvoidingViewProps;
  loading: LoadingProps
}>;

interface WrapperProps extends AllBooleanTypes {
  children: ReactNode;
  props?: WrapperAllProps;
  styles?: Partial<
    Record<Exclude<StyleSlotWrapper, 'loading'>, ViewStyleProp> & {
      loading: LoadingStyles
    }
  >;
}

function Wrapper({
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
      contentContainerStyle={styles?.safeAreaView}
      style={props?.scrollView?.style}
      {...props?.scrollView}
    />
  );
  return (
    <>
      {loading && <Loading styles={styles?.loading} text="Loading...." {...props?.loading}  />}
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
  ...rest
}: {
  useScrollView?: boolean;
  children: ReactNode;
} & ScrollViewProps) => {
  return useScrollView ? (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      {...rest}
      >
      {children}
    </ScrollView>
  ) : (
    children
  );
};

export type {WrapperProps}
export {Wrapper,RenderScrollView}