import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import variables from '../../util/variables';

function TopLeftIcon({onPress, icon, opacity = 1, background}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.leftView,
        {
          opacity: opacity,
          backgroundColor: background ? variables.lightPrimary : null,
        },
      ]}>
      <Ionicons name={icon} color={variables.colorWhite} size={20} />
    </TouchableOpacity>
  );
}
export default TopLeftIcon;
const styles = StyleSheet.create({
  leftView: {
    height: variables.getSize(45),
    width: variables.getSize(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: variables.getSize(14),
  },
});
