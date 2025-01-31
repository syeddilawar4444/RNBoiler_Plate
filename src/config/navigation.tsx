import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View } from 'react-native';
import Home from 'src/screen/Home';
import Login from 'src/screen/Login';
import Profile from 'src/screen/Profile';

// const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator({
  screens: {
    Book: Home,
    Profile: Profile,
  },
});
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: {backgroundColor: 'blue'},
    headerShown:false
    // header:(props) => <View {...props}>FSKJFDSF</View>
  },
  screens: {
    Home: {
      screen: BottomTabs,
      options: {
        title: 'Overview',
        animation: 'simple_push',
      },
    },
    Login: {
      screen: Login,
      options: {
        title: 'Login page',
        animation: 'slide_from_left',
      },
    },
  },
});

const NavigationStack = createStaticNavigation(RootStack);


export default function Navigator() {
  return <NavigationStack />;
}
