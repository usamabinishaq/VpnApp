import {StyleSheet} from 'react-native';
import variables from '../../util/variables';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: variables.colorPrimary,
  },
  backgroundImage: {
    flex: 0.7,
    alignSelf: 'baseline',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  logo: {
    width: variables.getSize(100),
    height: variables.getSize(100),
    resizeMode: 'contain',
    marginTop: '15%',
    margin: '5%',
  },
  bottomView: {flex: 0.6, justifyContent: 'center', alignItems: 'center'},
});
export default style;
