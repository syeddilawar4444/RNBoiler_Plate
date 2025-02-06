import {ParamListBase} from '@react-navigation/native';
import {RootStackProps} from '@/types/index';
import {ElementProps} from '@/types/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useMemo } from 'react';

type BottomTabNavigatorComponentProps<T extends ParamListBase> = Omit<
  ElementProps<ReturnType<typeof createBottomTabNavigator<T>>['Navigator']>,
  'children'
>;
type BottomTabDataProps<T extends ParamListBase> = ElementProps<
  ReturnType<typeof createBottomTabNavigator<T>>['Screen']
>;
interface BottomTabNavigatorProps<T extends ParamListBase = RootStackProps>
  extends BottomTabNavigatorComponentProps<T> {
  list: BottomTabDataProps<T>[];
}

// const BottomTabNavigator = <T extends ParamListBase = RootStackProps>({
//   list,
//   screenOptions,
//   ...rest
// }: BottomTabNavigatorProps<T>) => {
//   const BottomTab = createBottomTabNavigator<T>();
//   return (
//     <BottomTab.Navigator
//       screenOptions={{
//           headerShown: false,
//           animation: 'fade',
//           ...screenOptions,
//         }}
//       {...rest}>
//       {list?.map((item, index) => (
//         <BottomTab.Screen key={index} {...item} />
//       ))}
//     </BottomTab.Navigator>
//   );
// };
const BottomTabNavigator = <T extends ParamListBase = RootStackProps>({
  list,
  screenOptions,
  ...rest
}: BottomTabNavigatorProps<T>) => {
  const BottomTab = useMemo(() => createBottomTabNavigator<T>(), []);

  const memoizedScreens = useMemo(
    () =>
      list?.map((item, index) => (
        <BottomTab.Screen key={index} {...item} />
      )),
    [list,BottomTab]
  );

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
        ...screenOptions,
      }}
      {...rest}
    >
      {memoizedScreens}
    </BottomTab.Navigator>
  );
};

export type {BottomTabNavigatorProps, BottomTabNavigatorComponentProps, BottomTabDataProps};
export {BottomTabNavigator};