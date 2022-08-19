import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StatusBar, View, ImageBackground} from 'react-native';
import BannerAds from '../../components/ads/BannerAd';
import SimpleButton from '../../components/button/SimpleButton';
import {appName, Constants} from '../../constants';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import variables from '../../util/variables';
import Heading, {headingSize} from '../../components/small/text/Heading';
import AppOpenAds from '../../components/ads/AppOpenAds';

export default Splash = () => {
  const {navigate, replace} = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      replace('Home');
    }, 3000);
  }, []);
  return (
    <LinearGradient
      colors={variables.primaryGradient}
      style={style.mainContainer}>
      <StatusBar backgroundColor={variables.primaryGradient[0]} />
      {/* <AppOpenAds /> */}

      <View style={{flex: 0.3}} />
      <ImageBackground
        source={Constants.Splash_bg}
        style={style.backgroundImage}>
        <Image source={Constants.Logo} style={style.logo} />
        <Heading
          size={variables.fontSizeLarge}
          color={variables.colorWhite}
          style={{
            fontFamily: variables.fontFamilyHeading,
            letterSpacing: 1.05,
          }}>
          {appName}
        </Heading>
      </ImageBackground>
    </LinearGradient>
  );
};
