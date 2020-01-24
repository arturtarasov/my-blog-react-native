import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from '../sceens/MainScreen';
import { PostScreen } from '../sceens/PostScreen';
import { THEME } from '../theme';

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
    }
  }
);

export const AppNavigation = createAppContainer(PostNavigator);
