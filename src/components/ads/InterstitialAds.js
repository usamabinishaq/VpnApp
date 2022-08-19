import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const InterstitialAds = ({unit_ID = TestIds.INTERSTITIAL}) => {
  const [loaded, setLoaded] = useState(false);
  const interstitial = InterstitialAd.createForAdRequest(unit_ID, {
    requestNonPersonalizedAdsOnly: true,
  });

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
        interstitial.show();
      },
    );

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return <></>;
};
export default InterstitialAds;
