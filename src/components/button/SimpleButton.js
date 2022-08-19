import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import variables from '../../util/variables';
import Heading, {headingSize} from '../small/text/Heading';

function SimpleButton({onPress, children, style, ...props}) {
  return (
    <TouchableOpacity
      style={[styles.main, {...style}]}
      {...props}
      onPress={onPress}>
      <Heading
        size={variables.getSize(16)}
        color={variables.colorBlack}
        style={styles.heading}>
        {children}
      </Heading>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: variables.fontColorGray,
    borderWidth: 1.5,
  },
  heading: {
    paddingHorizontal: variables.UIPaddingHorizontal,
    paddingVertical: '3.5%',
    letterSpacing: 0.25,
  },
});
export default SimpleButton;
