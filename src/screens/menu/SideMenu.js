import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  Share,
} from 'react-native';
import TopBar from '../../components/topbar/TopBar';
import style from './style';
import {
  Constants,
  appName,
  sideMenuItems,
  appLink,
  shareMessage,
} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import variables from '../../util/variables';
import TopLeftIcon from '../../components/topbar/TopLeftIcon';
import Heading, {headingSize} from '../../components/small/text/Heading';
import {height_screen, width_screen} from '../../util/common/dimensions';
import BasicText from '../../components/small/text/BasicText';
import IonIcon from 'react-native-vector-icons/Ionicons';
import BannerAds from '../../components/ads/BannerAd';
import {useNavigation} from '@react-navigation/native';
import InterstitialAds from '../../components/ads/InterstitialAds';
import {BannerAdSize} from 'react-native-google-mobile-ads';
import DeviceInfo from 'react-native-device-info';

const SideMenu = ({navigation}) => {
  const [version, setVersion] = useState(`V.${DeviceInfo.getVersion()}`);
  const [isClicked, setClicked] = useState(false);

  const navigate = useNavigation();

  function MenuItem({item, onPress}) {
    return (
      <TouchableOpacity style={style.menuItem} onPress={onPress}>
        <Image
          source={item.icon}
          style={{
            width: 22,
            height: 22,
            tintColor: variables.colorWhite,
            resizeMode: 'contain',
          }}
        />
        <BasicText
          size={variables.fontSizePMedium}
          color={variables.colorWhite}
          style={style.menuItemText}>
          {item.title}
        </BasicText>
      </TouchableOpacity>
    );
  }

  const _handleOnPress = index => {
    switch (index) {
      case 0:
        _handleNavigation('Servers');
        break;
      case 1:
        _handleNavigation('AboutUs');

        break;
      case 2:
        _handleShare();
        break;
      case 3:
        _handleNavigation('PrivacyPolicy');
        break;
      case 4:
        Linking.openURL(appLink);
        break;
      default:
        console.log('Not Available');
        break;
    }
  };
  const _handleNavigation = nav => {
    navigation.navigate(nav);
  };

  const _handleShare = () => {
    if (!isClicked) {
      setClicked(true);
      Share.share({
        title: `Shared via ${appName}`,
        message: shareMessage,
      }).then(response => {
        setTimeout(() => {
          setClicked(false);
        }, 2000);
      });
    }
  };

  return (
    <LinearGradient
      colors={variables.primaryGradient}
      style={style.mainContainer}>
      <LinearGradient
        colors={variables.primaryGradient}
        style={style.topContainer}>
        <ImageBackground
          source={Constants.Home_bg}
          style={style.topContainerImage}>
          <TopLeftIcon
            opacity={0.6}
            icon={'close'}
            onPress={() => {
              navigate.goBack();
            }}
            background={true}
          />
          <View
            style={{
              padding: variables.UIPaddingVertical,
              paddingVertical: '7.5%',
            }}
          />
          <Heading
            size={headingSize.SMALL}
            color={variables.colorWhite}
            style={style.appName}>
            {appName}
          </Heading>
          <BasicText
            size={variables.fontSizePSmall}
            color={variables.colorWhite}
            style={style.versionText}>
            {version}
          </BasicText>
        </ImageBackground>
      </LinearGradient>
      <LinearGradient
        colors={variables.primaryGradient}
        style={style.bottomContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: width_screen,
          }}>
          {sideMenuItems.map((item, index) => {
            return (
              <MenuItem
                item={item}
                onPress={() => {
                  _handleOnPress(index);
                }}
                key={index}
              />
            );
          })}
        </ScrollView>
      </LinearGradient>
      <BannerAds size={BannerAdSize.FULL_BANNER} />
    </LinearGradient>
  );
};
export default SideMenu;
