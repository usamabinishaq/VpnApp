import React, {useState, useEffect} from 'react';
import {SafeAreaView, Platform, View, ScrollView, Image} from 'react-native';
import {plans, servers} from '../../data/data';
import TopBar from '../../components/topbar/TopBar';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {width_screen} from '../../util/common/dimensions';
import variables from '../../util/variables';
import BasicText from '../../components/small/text/BasicText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Heading, {headingSize} from '../../components/small/text/Heading';
import BannerAds from '../../components/ads/BannerAd';
import Bullets from '../../components/views/bullets';

const GetPremium = () => {
  const [log, setLog] = useState('');
  const [allPlans, setPlans] = useState(plans);
  const {navigate} = useNavigation();

  useEffect(() => {}, []);

  const PlanItem = ({plan, index, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={style.planItemContainer}>
        <View style={{padding: '2.5%', width: '70%'}}>
          <BasicText size={variables.fontSizePSmall}>{plan.duration}</BasicText>
          <BasicText size={variables.getSize(11)}>
            {'Total Price $' + plan.price}
          </BasicText>
        </View>
        <BasicText
          size={variables.fontSizePSmall}
          style={{fontWeight: 'bold', flex: 1}}>
          {'$' + plan.price}
        </BasicText>
        <Icon name="chevron-forward" size={20} color={variables.colorBlack} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={style.mainContainer}>
      <TopBar backButton={true} />
      <View style={{padding: variables.thirdScale}}>
        <Heading
          color={variables.colorBlack}
          size={headingSize.SMALL}
          style={{fontWeight: 'bold', paddingLeft: '1.5%'}}>
          Get Premium
        </Heading>
        <Bullets>{'No Ads'}</Bullets>
        <Bullets>{'Increase Connection Speed'}</Bullets>
        <Bullets>{'Premium Virtual Locations'}</Bullets>
      </View>
      <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
        {allPlans?.map((plan, index) => {
          return (
            <PlanItem
              key={index}
              plan={plan}
              onPress={() => {
                navigate('Home');
              }}
            />
          );
        })}
      </ScrollView>

      <BannerAds />
    </SafeAreaView>
  );
};

export default GetPremium;
