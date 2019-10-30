/**
 * @format
 * 入口
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import registerView from './view/pages/RegisterView';

AppRegistry.registerComponent(appName, () => registerView);
