import React from 'react';
import {Text as RNText} from 'react-native';
import variables from '../../../util/variables';
function Text({
  children,
  highlight,
  highlightColor = variables.colorPrimary,
  fontSize,
  color = variables.colorBlack,
  style,
  ...props
}) {
  return (
    <RNText
      {...props}
      style={{
        fontSize,
        color: highlight ? highlightColor : color,
        ...style,
      }}>
      {children}
    </RNText>
  );
}

export default Text;
