import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import variables from '../../util/variables';
import BasicText from '../small/text/BasicText';
const Bullets = ({children}) => {
  return (
    <View style={style.textView}>
      <Icon
        name="chevron-forward"
        color={variables.colorBlack}
        size={20}
        style={{width: '10%'}}
      />
      <BasicText>{children}</BasicText>
    </View>
  );
};
export default Bullets;
const style = StyleSheet.create({
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3.5%',
  },
});
