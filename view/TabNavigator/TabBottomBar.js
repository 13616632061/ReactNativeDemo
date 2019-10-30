import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import MyIndex from '../pages/main/MyIndex.js';
import MyFind from '../pages/main/MyFind.js';
import MyOpen from '../pages/main/MyOpen.js';
import MyFresh from '../pages/main/MyFresh.js';
import MyInfo from '../pages/main/MyInfo.js';

export default TabNavigator({
  index: {
    screen: MyIndex,
    navigationOptions: {
      tabBarLabel: '首页',
    },
  },
  find: {
    screen: MyFind,
    navigationOptions: {
      tabBarLabel: '发现',
    },
  },
  open: {
    screen: MyOpen,
    naviagtionOptions: {
      tabBarLabel: '开门',
    },
  },
  fresh: {
    screen: MyFresh,
    navigationOptions: {
      tabBarLabel: {
        tabBarLabel: '生鲜',
      },
    },
  },
  my: {
    screen: MyInfo,
    naviagtionOptions: {
      tabBarLabel: '我的',
    },
  },
});
