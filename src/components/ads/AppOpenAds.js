import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {AppOpenAd, TestIds} from 'react-native-google-mobile-ads';

const AppOpenAds = ({unit_ID = TestIds.APP_OPEN}) => {
  const appOpenAd = AppOpenAd.createForAdRequest(unit_ID, {
    requestNonPersonalizedAdsOnly: true,
  });

  useEffect(() => {
    // Preload an app open ad
    appOpenAd.load();
    setTimeout(() => {
      appOpenAd.show();
    }, 5000);
    // Show the app open ad when user brings the app to the foreground.
  }, []);

  return <></>;
};
export default AppOpenAds;
