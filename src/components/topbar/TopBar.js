import React from 'react';
import {
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import variables from '../../util/variables';
import BasicText from '../../components/small/text/BasicText';
import {width_screen} from '../../util/common/dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Heading, {headingSize} from '../small/text/Heading';
import TopLeftIcon from './TopLeftIcon';

function TopBar({
  title,
  left = 'grid-outline',
  fontSize = headingSize.SMALL,
  onPress,
  color = null,
  bottom = 0,
  background = true,
}) {
  const navigate = useNavigation();
  const goBackFunction = () => {
    navigate.goBack();
  };
  return (
    <>
      <View style={[style.main, {bottom: bottom, backgroundColor: color}]}>
        {left && (
          <TopLeftIcon icon={left} onPress={onPress} background={background} />
        )}
        {title && (
          <Heading size={fontSize} style={style.title}>
            {title}
          </Heading>
        )}
      </View>
    </>
  );
}

export default TopBar;
const style = StyleSheet.create({
  main: {
    padding: variables.thirdScale,
    paddingVertical: '2.5%',
    flexDirection: 'row',

    alignItems: 'center',
    width: width_screen,
    paddingTop: Platform.OS === 'android' ? null : variables.iosTopPadding,
  },

  title: {
    color: variables.colorWhite,
    fontFamily: variables.fontBold,
    flex: 0.85,
    textAlign: 'center',
    fontFamily: variables.fontFamilyHeading,
    letterSpacing: 0.65,
  },
});
