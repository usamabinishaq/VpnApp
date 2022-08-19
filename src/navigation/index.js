import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash/splash';
import variables from '../util/variables';
import Home from '../screens/home/home';
import Servers from '../screens/servers/Servers';
import {getPathFromState} from '@react-navigation/native';
import GetPremium from '../screens/premium/GetPremium';
import SideMenu from '../screens/menu/SideMenu';
import AboutUs from '../screens/menu/AboutUs';
import PrivacyPolicy from '../screens/menu/PrivacyPolicy';

const HomeNavigator = createStackNavigator();
const SplashNavigator = createStackNavigator();

function SplashNavigation() {
  return (
    <SplashNavigator.Navigator
      initialRouteName={'Splash'}></SplashNavigator.Navigator>
  );
}

export function HomeNavigation() {
  return (
    <HomeNavigator.Navigator initialRouteName={'Splash'}>
      <HomeNavigator.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <HomeNavigator.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeNavigator.Screen
        name="Servers"
        component={Servers}
        options={{headerShown: false}}
      />
      <HomeNavigator.Screen
        name="SideMenu"
        component={SideMenu}
        options={{headerShown: false}}
      />
      <HomeNavigator.Screen
        name="GetPremium"
        component={GetPremium}
        options={{headerShown: false}}
      />
      <HomeNavigator.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />
      <HomeNavigator.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
    </HomeNavigator.Navigator>
  );
}

function AppNavigator() {
  return <HomeNavigation />;
}
export default AppNavigator;
