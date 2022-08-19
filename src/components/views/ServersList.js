import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Heading from '../small/text/Heading';
import Icon from 'react-native-vector-icons/Ionicons';
import variables from '../../util/variables';
import {useNavigation} from '@react-navigation/native';
import {
  deleteFavouriteServers,
  setFavouriteServers,
} from '../../service/Favourites';
function ServersList({
  title,
  data,
  callback,
  addFavourite = null,
  deleteFavourite = null,
}) {
  return (
    <>
      <Heading
        size={variables.fontSizePMedium}
        style={{
          fontFamily: variables.fontFamilyBold,
          paddingHorizontal: '1.5%',
          letterSpacing: 0.1,
        }}>
        {title}
      </Heading>
      {data?.map((server, index) => {
        return (
          <ServerItem
            key={index}
            server={server}
            addFav={() => {
              addFavourite !== null
                ? addFavourite(server, index)
                : console.log('addFav');
            }}
            delFav={() => {
              deleteFavourite !== null
                ? deleteFavourite(server, index)
                : console.log('delFav');
            }}
            onPress={() => {
              callback(server, index);
            }}
          />
        );
      })}
    </>
  );
}
export default ServersList;

const ServerItem = ({server, index, onPress, addFav, delFav}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.serverItemContainer}>
      <Image source={server.image} style={style.serverItemImage} />
      <Heading
        size={variables.fontSizePSmall}
        color={variables.colorBlack}
        style={{
          fontWeight: 'bold',
          flex: 1,
          fontFamily: variables.fontFamilySemiBold,
        }}>
        {server.name}
      </Heading>
      {server.favourite === 1 ? (
        <Icon
          name="md-star"
          size={20}
          color={variables.radioButtonColor}
          style={{padding: '2.5%'}}
          onPress={delFav}
        />
      ) : (
        <Icon
          name="md-star-outline"
          size={20}
          color={variables.radioButtonColor}
          style={{padding: '2.5%'}}
          onPress={addFav}
        />
      )}

      {server.selected ? (
        <Icon
          name="radio-button-on"
          size={20}
          color={variables.radioButtonColor}
        />
      ) : (
        <Icon
          name="radio-button-off"
          size={20}
          color={variables.radioButtonColor}
        />
      )}
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  serverItemContainer: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    marginVertical: '2.5%',
    paddingVertical: '3.5%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: variables.colorWhite,
    borderRadius: variables.getSize(10),
  },
  serverItemImage: {
    width: variables.getSize(35),
    height: variables.getSize(18),
    borderRadius: variables.getSize(5),
    marginRight: '5%',
  },
});
