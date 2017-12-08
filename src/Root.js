import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import HomeScreen from './screens/Home';
import NewQuestionScreen from './screens/NewQuestion';

import TabIcon from './components/tabIcon';

const homeIcon = require('./assets/home.png');
const favoritesIcon = require('./assets/favorites.png');

const RootTabs = TabNavigator({
  AnaSayfa: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <TabIcon
          tintColor={ tintColor }
          icon={ homeIcon }
        />
      ),
    },
  },
  SoruIste: {
    screen: NewQuestionScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <TabIcon
          tintColor={ tintColor }
          icon={ favoritesIcon }
        />
      ),
    },
  },
});

const Root = StackNavigator({
  MainScreen: {
    screen: RootTabs,
    navigationOptions: {
      headerTitle: 'Bir Soru',
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTitleStyle: {
        color: 'white',
      },
    },
  }
});

export default Root;
