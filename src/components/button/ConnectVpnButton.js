import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {height_screen, width_screen} from '../../util/common/dimensions';
import variables from '../../util/variables';
import Heading, {headingSize} from '../small/text/Heading';

function ConnectVpnButton({
  onPress,
  connected = false,
  Connectionstatus = 'connect',
}) {
  return (
    <LinearGradient
      locations={[1, 0]}
      colors={variables.buttonGradient}
      style={styles.main}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: height_screen * 0.16,
          height: height_screen * 0.16,
          borderRadius: (height_screen * 0.16) / 2,
          backgroundColor: variables.colorButton,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {!connected ? (
          <Heading
            size={variables.fontSizeH2Small}
            color={variables.buttonGradient[0]}
            style={{fontFamily: variables.fontFamilyBold}}>
            {Connectionstatus.toUpperCase()}
          </Heading>
        ) : (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              name="power-off"
              size={20}
              color={variables.buttonGradient[0]}
            />
            <Heading
              size={variables.fontSizeH2Small}
              color={variables.buttonGradient[0]}
              style={{fontFamily: variables.fontFamilyBold, padding: '5%'}}>
              {'STOP'}
            </Heading>
          </View>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: height_screen * 0.21,
    height: height_screen * 0.21,
    borderRadius: (height_screen * 0.21) / 2,
    borderColor: variables.colorLightGray,
    elevation: 1,
  },
  heading: {
    paddingHorizontal: variables.UIPaddingHorizontal,
    paddingVertical: '3.5%',
    letterSpacing: 0.25,
  },
});
export default ConnectVpnButton;
