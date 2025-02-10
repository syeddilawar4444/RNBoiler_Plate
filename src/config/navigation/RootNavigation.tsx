import { RootStackProps } from '@/types/index';
import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';





const navigationRef = createNavigationContainerRef<RootStackProps>();


type RootNavigation <T extends keyof RootStackProps > = {
    name: T,
    params?:RootStackProps[T]
}
  function navigate <RouteName extends keyof RootStackProps>  ({name, params}:RootNavigation<RouteName>) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }

function onBack() {
    navigationRef.current?.goBack();
  }

function replace<RouteName extends keyof RootStackProps>(name:RouteName, params?:RootStackProps[RouteName]) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
  
function popToTop() {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
  
function reset<RouteName extends keyof RootStackProps>(name:RouteName) {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name}],
      }),
    );
  }

  export {navigate,navigationRef,onBack,replace,popToTop,reset}