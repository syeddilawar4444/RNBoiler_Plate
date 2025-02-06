import {ParamListBase} from '@react-navigation/native';
import {RootStackProps} from '@/types/index';
import {ElementProps} from '@/types/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type TabNavigatorComponentProps<T extends ParamListBase> = Omit<
  ElementProps<ReturnType<typeof createBottomTabNavigator<T>>['Navigator']>,
  'children'
>;
type TabDataProps<T extends ParamListBase> = ElementProps<
  ReturnType<typeof createBottomTabNavigator<T>>['Screen']
>;
interface TabNavigatorProps<T extends ParamListBase = RootStackProps>
  extends TabNavigatorComponentProps<T> {
  list: TabDataProps<T>[];
}

const TabNavigator = <T extends ParamListBase = RootStackProps>({
  list,
  screenOptions,
  ...rest
}: TabNavigatorProps<T>) => {
  const Tab = createBottomTabNavigator<T>();
  return (
    <Tab.Navigator
      screenOptions={{
          headerShown: false,
          animation: 'fade',
          ...screenOptions,
        }}
      {...rest}>
      {list?.map((item, index) => (
        <Tab.Screen key={index} {...item} />
      ))}
    </Tab.Navigator>
  );
};

export type {TabNavigatorProps, TabNavigatorComponentProps, TabDataProps};
export {TabNavigator};