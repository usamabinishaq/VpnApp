import React, {useState, useEffect, useRef} from 'react';
import {
  Platform,
  View,
  StatusBar,
  ImageBackground,
  Alert,
  BackHandler,
} from 'react-native';
import RNSimpleOpenvpn, {
  addVpnStateListener,
  removeVpnStateListener,
} from 'react-native-simple-openvpn';
import {Timer} from 'react-native-element-timer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {NetworkInfo} from 'react-native-network-info';
import Security from 'react-native-vpn-detect';
import {
  BannerAdSize,
  GAMBannerAd,
  TestIds,
} from 'react-native-google-mobile-ads';
import moment from 'moment';

/*{  External Components  } */
import Heading, {headingSize} from '../../components/small/text/Heading';
import TopBar from '../../components/topbar/TopBar';
import ConnectVpnButton from '../../components/button/ConnectVpnButton';
import SelectServer from '../../components/button/SelectServer';

/*{  Ads Components  } */
import InterstitialAds from '../../components/ads/InterstitialAds';
import AppOpenAds from '../../components/ads/AppOpenAds';
import RewardedAds from '../../components/ads/RewardedAd';
import BannerAds from '../../components/ads/BannerAd';

/*{  Constants & Utils  } */
import {height_screen, width_screen} from '../../util/common/dimensions';
import variables from '../../util/variables';
import {getMyTime, isIp} from '../../util';
import {appName, Constants} from '../../constants';
import {servers} from '../../data/data';

/*{  Styles  } */

import style from './style';
import GamBannerAd from '../../components/ads/GamBannerAd';

const Home = ({navigation, route}) => {
  /*{  States  } */
  const [log, setLog] = useState('');
  const [isConnected, setConnected] = useState(false);
  const [vpnState, setVpnState] = useState('Connect');
  const [isPaused, setVpnPause] = useState(false);

  const [server, setServer] = useState(null);
  const [ipAddress, setIpAddress] = useState('');
  const timerRef = useRef(currentTime);
  const [currentTime, setCurrentTime] = useState(null);
  const [lockButton, setLock] = useState(0);
  const isFocused = useIsFocused();

  /*{  CHECK VPN STATUS  } */
  useEffect(() => {
    checkVpnStatus();
  }, []);

  useEffect(() => {
    if (route.params?.selectedServer) {
      setServer(route.params?.selectedServer);
      // console.log('Params: ', route.params?.selectedServer);
      stopOvpn();
      setConnected(false);
      route.params = null;
    }
    if (server === null) {
      getCurrentServer();
    }
    _validateIPAddress();

    async function observeVpn() {
      addVpnStateListener(e => {
        if (e.state === 0) {
          setConnected(false);
          setVpnState('connect');
          if (timerRef.current) timerRef.current.stop();
          setCurrentTime(null);
          setLock(0);
        } else if (e.state === 1) {
          setVpnState('Wait');
          setLock(1);
          setConnected(false);
          setVpnPause(false);
          AsyncStorage.setItem('@isVpnPaused', 'resumed');
        } else if (e.state === 2) {
          setConnected(true);
          setVpnState('Connected');
          setVpnPause(false);
          AsyncStorage.setItem('@isVpnPaused', 'resumed');
          setLock(2);
          setStartTimer();
          if (timerRef.current) timerRef.current.start();
        } else if (e.state === 3) {
          setVpnState('Connect');
        } else if (e.state === 4) {
          if (e.message === 'USERPAUSE') {
            setVpnState('RESUME');
            setVpnPause(true);
            AsyncStorage.setItem('@isVpnPaused', 'paused');
          } else if (e.message === 'NONETWORK') {
            setConnected(false);
            setVpnState('Connect');
          } else {
            setConnected(false);
            setVpnState('Connect');
            Alert.alert(
              'Alert',
              'Could not connect to this server! please connect to other server.  ',
            );
          }
        }
        console.log('RESPONSE: ', e);
        updateLog(JSON.stringify(e), undefined, 2);
      });
    }
    observeVpn();
    return () => {
      removeVpnStateListener(e => console.log('THE LOG', e));
    };
  });

  useEffect(() => {
    if (isFocused) {
      const backAction = () => {
        Alert.alert('Exit App', 'Are you sure you want to exit app?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }
  }, [isFocused]);

  function _validateIPAddress() {
    NetworkInfo.getIPAddress().then(ipAddress => {
      isIp(ipAddress) ? setIpAddress(ipAddress) : null;
    });
  }
  async function getCurrentServer() {
    await AsyncStorage.getItem('@server').then(response => {
      if (response !== null) {
        console.log('Response Async: ', response);
        setServer(JSON.parse(response));
      } else {
        AsyncStorage.setItem('@server', JSON.stringify(servers[0]));
      }
    });
  }
  async function checkVpnStatus() {
    await AsyncStorage.getItem('@isVpnPaused').then(response => {
      if (response !== null) {
        response === 'paused' ? setVpnPause(true) : setVpnPause(false);
      }
    });
    await Security.detectVPN().then(response => {
      if (response === true) {
        setConnected(true);
        getPreviousTime();
        if (timerRef.current) timerRef.current.start();
      } else {
        setConnected(false);
      }
    });
  }
  async function getPreviousTime() {
    await AsyncStorage.getItem('@startTimer').then(response => {
      if (response !== null) {
        // console.log('Response Timer: ', response);
        let start = moment(response, 'hh:mm:ss');
        let time = moment(getMyTime(), 'hh:mm:ss');
        var duration = moment.duration(time.diff(start));
        setCurrentTime(duration.asSeconds());
        if (timerRef.current) timerRef.current.start();
        // console.log('Current Time: ', currentTime);
      }
    });
  }
  async function setStartTimer() {
    await AsyncStorage.setItem('@startTimer', getMyTime()).then(r => {
      console.log(r);
    });
  }
  async function startOvpn() {
    // console.log('Current Server:', server);
    try {
      await RNSimpleOpenvpn.connect({
        remoteAddress: server ? server.host : servers[0].host,
        ovpnFileName: server ? server.name : servers[0].name,
        assetsPath: 'ovpn/',
        useLegacyProvider: true,
        localizedDescription: appName,
        notificationTitle: appName,
        compatMode: RNSimpleOpenvpn.CompatMode.OVPN_TWO_THREE_PEER,
      })
        .then(response => console.log('RESPONSE: ', response))
        .catch(e => console.log(e));
    } catch (error) {
      updateLog(error);
    }
  }
  async function stopOvpn() {
    try {
      await RNSimpleOpenvpn.disconnect();
      setConnected(false);
    } catch (error) {
      updateLog(error);
    }
  }
  function updateLog(newLog) {
    const now = new Date().toLocaleTimeString();
    setLog(`${log}\n[${now}] ${newLog}`);
  }

  /* {  HANDLE CONNECT BUTTON } */
  function _handleButtonOnPress() {
    if (isPaused) {
      setVpnPause(false);
      AsyncStorage.setItem('@isVpnPaused', 'resumed');
      startOvpn();
    } else {
      lockButton != 1 ? (isConnected ? stopOvpn() : startOvpn()) : null;
    }
  }
  return (
    <LinearGradient
      colors={variables.primaryGradient}
      style={style.mainContainer}>
      {isConnected ? <RewardedAds /> : null}

      <StatusBar backgroundColor={variables.primaryGradient[0]} />

      <ImageBackground
        source={Constants.Home_bg}
        style={style.topContainer}
        imageStyle={style.topBgImage}>
        <View style={style.paddingView} />
        <TopBar
          left={'grid-outline'}
          backButton={false}
          title={appName}
          bottom={'10%'}
          onPress={() => {
            navigation.navigate('SideMenu');
          }}
        />

        <View style={style.topInnerContainer}>
          <SelectServer
            server={server ? server : servers[0]}
            onPress={() => {
              navigation.navigate('Servers');
            }}
          />
          <Heading
            size={headingSize.XXSMALL}
            style={style.ipAddressText}>{`IP ${ipAddress}`}</Heading>
        </View>
        <View style={style.connectButton}>
          <ConnectVpnButton
            onPress={() => {
              _handleButtonOnPress();
            }}
            connected={isConnected}
            Connectionstatus={vpnState}
          />
        </View>
      </ImageBackground>

      <ImageBackground
        source={Constants.Home_bottom}
        style={style.bottomContainer}
        resizeMode={'contain'}
        imageStyle={style.bottomBgImage}>
        <View style={style.bottomInnerContent}>
          <Icon
            name={'md-shield-checkmark'}
            size={15}
            color={variables.colorWhite}
          />
          <Heading
            size={variables.fontSizePMedium}
            style={style.connectionStatus}>
            {isPaused
              ? 'Paused'.toUpperCase()
              : isConnected
              ? 'Connected'.toUpperCase()
              : 'not Connected'.toUpperCase()}
          </Heading>
        </View>
        {!isPaused && isConnected ? (
          <Timer
            ref={timerRef}
            initialSeconds={currentTime ? currentTime : 0}
            style={style.connectedTimeText}
            textStyle={style.timerText}
            formatTime={'hh:mm:ss'}
          />
        ) : null}
      </ImageBackground>
      {/* {!isSubscribed ?  : null} */}
      {/* <PremiumComponent /> */}
      <BannerAds size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
    </LinearGradient>
  );
};

export default Home;
