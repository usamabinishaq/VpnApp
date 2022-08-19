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
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3.5%',
  },
  planItemContainer: {
    flexDirection: 'row',
    backgroundColor: variables.colorLightGray,
    width: '80%',
    alignSelf: 'center',
    margin: '2.5%',
    paddingVertical: '2.5%',
    paddingHorizontal: '2.5%',
    alignItems: 'center',
    borderRadius: variables.getSize(100),
  },
});
export default style;
