import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GAMBannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import {width_screen} from '../../util/common/dimensions';

function GamBannerAd({unit_ID = TestIds.GAM_BANNER}) {
  return (
    <View style={styles.banner}>
      <GAMBannerAd
        unitId={unit_ID}
        sizes={[BannerAdSize.FULL_BANNER]}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}
export default GamBannerAd;
const styles = StyleSheet.create({
  banner: {
    width: width_screen,
    zIndex: 1,
    position: 'absolute',
  },
});
