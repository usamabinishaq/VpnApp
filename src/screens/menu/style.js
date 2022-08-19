import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  height_,
  height_screen,
  width_screen,
} from '../../util/common/dimensions';
import variables from '../../util/variables';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    height: height_screen * 0.25,
    borderBottomRightRadius: variables.getSize(25),
  },
  topContainerImage: {
    height: '100%',
    padding: variables.thirdScale,
    width: '100%',
  },
  appName: {
    fontFamily: variables.fontFamilyHeading,
    letterSpacing: 0.25,
  },
  versionText: {
    fontFamily: variables.fontFamilyHeading,
    letterSpacing: 0.2,
    paddingVertical: variables.firstScale,
    opacity: 0.75,
  },
  bottomContainer: {
    height: height_screen * 0.68,
    paddingHorizontal: '10%',
    padding: '10%',
    borderTopRightRadius: 25,
  },
  menuItem: {
    flexDirection: 'row',
    alignSelf: 'center',

    alignItems: 'center',
    width: width_screen,
  },
  menuItemText: {
    fontFamily: variables.fontFamilySemiBold,
    paddingVertical: variables.thirdScale,
    marginLeft: '10%',
    textAlign: 'center',
  },
});
export default style;
