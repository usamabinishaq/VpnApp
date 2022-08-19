import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {servers} from '../../data/data';
import TopBar from '../../components/topbar/TopBar';
import style from './style';
import variables from '../../util/variables';

import {useNavigation} from '@react-navigation/native';
import BannerAds from '../../components/ads/BannerAd';
import LinearGradient from 'react-native-linear-gradient';
import SearchInput from '../../components/inputs/SearchInput';
import ServersList from '../../components/views/ServersList';
import {
  deleteFavouriteServers,
  getFavouriteServers,
  setFavouriteServers,
} from '../../service/Favourites';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InterstitialAds from '../../components/ads/InterstitialAds';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

const Servers = () => {
  const [allServers, setServers] = useState(servers);
  const [currentServer, setCurrentServer] = useState(null);
  const [title, setTitle] = useState('Free Servers');
  const [favourites, SetFavourites] = useState(null);
  const [favShow, setFavShow] = useState(true);

  const navigation = useNavigation();
  let AdCount = 0;

  useEffect(() => {
    getCurrentServer();
    checkFavourites();
  }, []);

  async function getCurrentServer() {
    await AsyncStorage.getItem('@server').then(response => {
      if (response !== null) {
        let current = JSON.parse(response);
        setCurrentServer(current.id);
        let temp = [...allServers];
        temp.map((item, index) => {
          if (item.id !== current.id) {
            console.log('ITEM ID: ', item.id);
            item.selected = false;
          } else {
            item.selected = true;
          }
        });
        setServers(temp);
      }
    });
  }
  //Insert
  const insertFav = (server, index) => {
    console.log('TO be Inserted: ', server, 'of index: ', index);
    setFavouriteServers(server.id).then(res => {
      console.log('Favourite Insert: ', res);
      let temp = [...allServers];
      let favourite = favourites ? [...favourites] : [];
      temp[index].favourite = 1;
      favourite.push(temp[index]);
      setServers(temp);
      SetFavourites(favourite);
    });
  };
  //Delete
  const deleteFav = (server, index) => {
    console.log('TO be Deleted: ', server, 'of index: ', index);
    deleteFavouriteServers(server.id).then(res => {
      console.log('Favourite Deleted: ', res);
      let temp = [...allServers];
      let favourite = favourites ? [...favourites] : [];
      temp[index].favourite = 0;
      let Filtered = favourite?.filter(s => s != server);
      setServers(temp);
      SetFavourites(Filtered);
    });
  };
  //Check
  const checkFavourites = async () => {
    let favouriteServers = [];
    getFavouriteServers().then(response => {
      let len = response.rows.length;
      console.log(len);
      if (len > 0) {
        for (let i = 0; i < len; i++) {
          var row = response.rows.item(i);
          console.log('ROW:===>', row);
          favouriteServers.push(row);
        }
        console.log('Fav Serber===?', favouriteServers);
        if (favouriteServers?.length > 0) {
          let temp = [...servers];
          let favourite = [];
          temp.map(s => {
            favouriteServers.map(f => {
              if (s.id === f.sid) {
                s.favourite = 1;
                favourite.push(s);
              }
            });
          });
          console.log('Check: ', temp);
          setServers(temp);
          SetFavourites(favourite);
        }
      }
    });

    // console.log('ServerS====?>', fav);
  };

  const selectFavServer = async (server, index) => {
    if (currentServer === server.id) {
      Alert.alert('Alert', 'Server Already Selected!');
    } else {
      let temp = [...favourites];
      temp.map(r => {
        r.selected = false;
      });
      temp[index].selected = true;
      SetFavourites(temp);
      await AsyncStorage.setItem('@server', JSON.stringify(temp[index]));
      navigation.navigate('Home', {selectedServer: server});
    }
  };
  const selectServer = async (server, index) => {
    if (currentServer === server.id) {
      Alert.alert('Alert', 'Server Already Selected!');
    } else {
      let temp = [...allServers];
      temp.map(r => {
        r.selected = false;
      });
      temp[index].selected = true;
      setServers(temp);
      await AsyncStorage.setItem('@server', JSON.stringify(temp[index]));
      console.log(server, index);
      navigation.navigate('Home', {selectedServer: server});
    }
  };
  const filterServers = e => {
    let temp = favourites ? [...favourites] : null;

    // temp != null ? SetFavourites(temp) : null;
  };
  const _handleOnChangeText = e => {
    {
      if (e !== '') {
        let Filteredservers = allServers.filter(item =>
          item.name.toLowerCase().includes(e.toLowerCase()),
        );
        setServers(Filteredservers);
        Filteredservers.length <= 0
          ? setTitle('No Server Found')
          : setTitle('Free Servers');
        setFavShow(false);
      } else {
        setServers(servers);
        setTitle('Free Servers');

        setFavShow(true);
      }
    }
  };
  return (
    <LinearGradient
      colors={variables.primaryGradient}
      style={style.mainContainer}>
      {AdCount == 0 ? <InterstitialAds /> : null}

      <TopBar
        left={'arrow-back-sharp'}
        backButton={false}
        title={'LOCATIONS'}
        onPress={() => {
          navigation.goBack();
        }}
        fontSize={variables.fontSizePMedium}
        background={false}
      />
      <SearchInput
        placeholder={'Search Location'}
        onChangeText={e => _handleOnChangeText(e)}
      />

      <ScrollView
        style={{padding: variables.thirdScale}}
        showsVerticalScrollIndicator={false}>
        <ServersList
          title={title}
          data={allServers}
          callback={selectServer}
          addFavourite={insertFav}
          deleteFavourite={deleteFav}
        />
        <View style={{paddingTop: '5%'}} />
        {/* <BannerAds size={BannerAdSize.INLINE_ADAPTIVE_BANNER} /> */}
        {favShow ? (
          <>
            <View style={{paddingTop: '5%'}} />
            <ServersList
              title="Favourites"
              data={favourites}
              callback={selectFavServer}
            />
            <View style={{paddingTop: '22%'}} />
          </>
        ) : null}
      </ScrollView>
      <BannerAds size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
    </LinearGradient>
  );
};

export default Servers;
