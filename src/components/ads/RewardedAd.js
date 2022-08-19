import React, {useEffect, useState} from 'react';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__
//   ? TestIds.REWARDED
//   : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

function RewardedAds({unit_ID = TestIds.REWARDED}) {
  const [loaded, setLoaded] = useState(false);
  const rewarded = RewardedAd.createForAdRequest(unit_ID, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
        rewarded.show();
      },
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return <></>;
}
export default RewardedAds;
