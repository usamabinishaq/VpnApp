import React from 'react';
import variables from '../../../util/variables';
import Text from './Text';

export const textSize = {
  MEDIUM: variables.fontSizePMedium,
  SMALL: variables.fontSizePSmall,
  EX_SMALL: variables.fontSizeSubtext,
};

function BasicText({
  children,
  size = textSize.MEDIUM,

  color = variables.colorBlack,
  ...props
}) {
  return (
    <Text fontSize={size} color={color} {...props}>
      {children}
    </Text>
  );
}

export default BasicText;
