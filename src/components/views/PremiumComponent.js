import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import RoundButton from '../button/RoundButton';
import BasicText from '../small/text/BasicText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import variables from '../../util/variables';
import {useNavigation} from '@react-navigation/native';

const PremiumComponent = () => {
  const {navigate} = useNavigation();
  return (
    <View style={style.premiumContainer}>
      <View style={style.premiumAvatar}>
        <Icon name={'shield-lock-outline'} size={25} color={variables.gray} />
      </View>
      <View style={style.premiumTextView}>
        <BasicText
          size={variables.fontSizePSmall}
          style={style.premiumTextTitle}>
          GET PREMIUM
        </BasicText>
        <BasicText size={variables.fontSizePSmall}>Remove Ads</BasicText>
      </View>
      <RoundButton
        onPress={() => {
          navigate('GetPremium');
        }}>
        Subscribe
      </RoundButton>
    </View>
  );
};
export default PremiumComponent;
const style = StyleSheet.create({
  premiumContainer: {
    backgroundColor: variables.colorLightGray,
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: '5%',
  },
  premiumAvatar: {
    borderWidth: 1,
    borderColor: variables.gray,
    height: variables.getSize(50),
    width: variables.getSize(50),
    borderRadius: variables.getSize(50 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  premiumTextView: {
    padding: '5%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  premiumTextTitle: {
    fontWeight: 'bold',
    paddingVertical: '2.5%',
    width: '100%',
  },
});
