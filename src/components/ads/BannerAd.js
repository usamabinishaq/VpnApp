import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BannerAd, TestIds, BannerAdSize} from 'react-native-google-mobile-ads';
import {width_screen} from '../../util/common/dimensions';
const BannerAds = ({unit_ID = TestIds.BANNER, size = BannerAdSize.BANNER}) => {
  return (
    <View style={styles.banner}>
      <BannerAd size={size} unitId={unit_ID} />
    </View>
  );
};
export default BannerAds;

const styles = StyleSheet.create({
  banner: {
    width: width_screen,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
  },
});
