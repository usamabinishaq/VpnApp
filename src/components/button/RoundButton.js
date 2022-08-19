import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import variables from '../../util/variables';
import BasicText from '../small/text/BasicText';
import Heading, {headingSize} from '../small/text/Heading';

function RoundButton({
  onPress,
  fontSize = variables.fontSizePSmall,
  children,
  style,
  ...props
}) {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress} {...props}>
      <BasicText
        size={fontSize}
        style={{
          paddingHorizontal: variables.UIPaddingHorizontal,
          letterSpacing: 0.25,
          paddingHorizontal: variables.UIPaddingHorizontal,
          paddingVertical: '3.5%',
          ...style,
        }}
        {...props}>
        {children}
      </BasicText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: variables.colorPrimary,
    alignSelf: 'center',
    borderRadius: variables.getSize(50 / 2),
  },
});
export default RoundButton;
