import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import variables from '../../util/variables';
import BasicText from '../small/text/BasicText';
import Heading, {headingSize} from '../small/text/Heading';

function SelectServer({onPress, server}) {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Image
        source={server.image}
        style={{
          width: variables.getSize(16),
          height: variables.getSize(16),
          borderRadius: variables.getSize(16 / 2),
          marginHorizontal: '2.5%',
        }}
      />
      <BasicText
        style={{
          fontFamily: variables.fontFamilyRegular,
          color: variables.colorWhite,
          paddingHorizontal: '2.5%',
          letterSpacing: 0.5,
        }}
        size={variables.fontSizePSmall}>
        {server.name}
      </BasicText>
      <Icon
        name="chevron-forward"
        size={15}
        color={variables.colorWhite}
        style={{paddingHorizontal: '2.5%'}}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: variables.lightPrimary,
    alignSelf: 'center',
    borderRadius: variables.getSize(15),
    paddingHorizontal: variables.fourScale,
    paddingVertical: variables.fourScale,
  },
});
export default SelectServer;
