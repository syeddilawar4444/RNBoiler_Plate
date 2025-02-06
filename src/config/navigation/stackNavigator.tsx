import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {RootStackProps} from '@/types/index';
import {ElementProps} from '@/types/index';

type StactNavigatorComponentProps<T extends ParamListBase> = Omit<
  ElementProps<ReturnType<typeof createNativeStackNavigator<T>>['Navigator']>,
  'children'
>;
type StackDataProps<T extends ParamListBase> = ElementProps<
  ReturnType<typeof createNativeStackNavigator<T>>['Screen']
>;
interface StackNavigatorProps<T extends ParamListBase = RootStackProps>
  extends StactNavigatorComponentProps<T> {
  list: StackDataProps<T>[];
}

const StactNavigator = <T extends ParamListBase = RootStackProps>({
  list,
  screenOptions,
  ...rest
}: StackNavigatorProps<T>) => {
  const Stack = createNativeStackNavigator<T>();
  return (
    <Stack.Navigator
      screenOptions={{
          headerShown: false,
          animation: 'fade',
          ...screenOptions,
        }}
      {...rest}>
      {list?.map((item, index) => (
        <Stack.Screen key={index} {...item} />
      ))}
    </Stack.Navigator>
  );
};

export type {StackNavigatorProps, StactNavigatorComponentProps, StackDataProps};
export {StactNavigator};