import React from 'react';
import {StatusBar} from 'react-native';
import ProgressBarWebView from 'react-native-progress-webview';
import TopBar from '../../components/topbar/TopBar';
import variables from '../../util/variables';

const PrivacyPolicy = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={'#061431'} />
      <TopBar
        left={'arrow-back-sharp'}
        title={'PRIVACY POLICY'}
        onPress={() => {
          navigation.goBack();
        }}
        fontSize={variables.fontSizePMedium}
        color={'#061431'}
        background={false}
      />
      <ProgressBarWebView
        source={{uri: 'https://centumsols.com/privacy-policy'}}
        height={2}
      />
    </>
  );
};
export default PrivacyPolicy;
