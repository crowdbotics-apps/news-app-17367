import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile51740Navigator from '../features/UserProfile51740/navigator';
import Maps51721Navigator from '../features/Maps51721/navigator';
import Settings51699Navigator from '../features/Settings51699/navigator';
import Settings51684Navigator from '../features/Settings51684/navigator';
import NotificationList51683Navigator from '../features/NotificationList51683/navigator';
import Maps51682Navigator from '../features/Maps51682/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile51740: { screen: UserProfile51740Navigator },
Maps51721: { screen: Maps51721Navigator },
Settings51699: { screen: Settings51699Navigator },
Settings51684: { screen: Settings51684Navigator },
NotificationList51683: { screen: NotificationList51683Navigator },
Maps51682: { screen: Maps51682Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
