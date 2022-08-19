import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import variables from '../../util/variables';

function SearchInput({value, onChangeText, style, placeholder, ...props}) {
  return (
    <View style={styles.main}>
      <Icon name={'search'} size={20} color={variables.colorLightGray} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        selectionColor={variables.primaryColor}
      />
    </View>
  );
}
export default SearchInput;
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '90%',
    borderRadius: variables.getSize(10),
    backgroundColor: variables.colorWhite,

    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: '5%',
    marginVertical: '2.5%',
  },
  input: {
    fontFamily: variables.fontFamilyRegular,
    width: '100%',
    marginLeft: '3.5%',
  },
});
