import {NavigationContainer} from '@react-navigation/native';
import Home from 'src/screen/Home';
import {RootStackProps} from '@/types/index';
import Login from 'src/screen/Login';
import {StackDataProps, StactNavigator} from './stackNavigator';
import {BottomTabDataProps, BottomTabNavigator} from './bottomTabNavigator';

const MyTab = () => {
  const BottomTabData: BottomTabDataProps<RootStackProps>[] = [
    {
      name: 'ForgotPassword',
      component: Home,
    },
    {
      name: 'Signup',
      component: Login,
    },
  ];
  return (
    <BottomTabNavigator
    list={BottomTabData}
    screenOptions={{animation: 'fade', headerShown: false}}
  />
  );
};

export default function Navigator() {

  const stackData: StackDataProps<RootStackProps>[] = [
    {
      name: 'Home',
      component: MyTab,
    },
    {
      name: 'Login',
      component: Login,
    },
  ];
  return (
    <NavigationContainer>
      <StactNavigator
        list={stackData}
        screenOptions={{
          animation: 'flip',
          headerShown: true,
        }}
      />
    </NavigationContainer>
  );
}
