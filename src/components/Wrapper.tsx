import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingViewProps,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { Loading } from '@/components/index';
import { KeyboardAvoidingView } from 'react-native';
import { isIOS, useIsDark } from '@/utils/index';

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
type AllProps = Partial<{
  safeAreaView: SafeAreaViewProps;
  statusBar: StatusBarProps;
  scrollView: ScrollViewProps;
  keyboardAvoidingView: KeyboardAvoidingViewProps;
  // loading:
}>;

export interface WrapperProps extends AllBooleanTypes {
  children: ReactNode;
  props?: AllProps;
}

export function Wrapper({
  useSafeArea = true,
  useStatus = true,
  useKeyboardView = false,
  useScrollView = false,
  loading = false,
  children,
  props,
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
      {true && <Loading text={<View style={{backgroundColor:"black",height:20,width:20}}></View>}  />}
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
