import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {width_screen} from '../../util/common/dimensions';
import variables from '../../util/variables';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: variables.colorPrimary,
  },

  titleText: {
    fontWeight: 'bold',
    width: width_screen,
    textAlign: 'center',
    padding: '5%',
  },
});
export default style;
