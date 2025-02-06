import {NavigationContainer} from '@react-navigation/native';
import Home from 'src/screen/Home';
import {StackDataProps, StactNavigator} from './navigation/stackNavigator';
import { RootStackProps } from '../types';
import Login from 'src/screen/Login';

// const Stack = createNativeStackNavigator();

// const BottomTabs = createBottomTabNavigator({
//   screens: {
//     Book: Home,
//     Profile: Profile,
//   },
// });

export default function Navigator() {
  const stackData:StackDataProps<RootStackProps>[] =[
    {
      name: 'Home',
      component: Home,
    },
    {
      name: 'Login',
      component: Login,
      
    },
  ]
  return (
    <NavigationContainer>
      <StactNavigator
        list={stackData}
        screenOptions={{
          animation:"flip",
          headerShown:true,
        }}
        
      />
    </NavigationContainer>
  );
}
