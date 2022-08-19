import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {headingSize} from '../../components/small/text/Heading';
import {height_screen, width_screen} from '../../util/common/dimensions';
import variables from '../../util/variables';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    height: height_screen * 0.4,
  },
  topInnerContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBgImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'stretch',
  },

  ipAddressText: {
    fontFamily: variables.fontFamilySemiBold,
    letterSpacing: 0.5,
    paddingVertical: '5%',
  },
  bottomContainer: {
    height: height_screen * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: variables.UIPaddingVertical,
  },
  bottomInnerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    width: width_screen,
    textAlign: 'center',
    padding: '5%',
  },
  connectButton: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: '90%',
  },
  connectionStatus: {
    fontFamily: variables.fontFamilySemiBold,
    paddingHorizontal: '2.5%',
  },
  connectedTimeText: {
    paddingVertical: '2.5%',
  },
  timerText: {
    fontFamily: variables.fontFamilySemiBold,
    color: variables.colorWhite,
    fontSize: headingSize.SMALL,
  },
  premiumContainer: {
    backgroundColor: variables.colorLightGray,
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '2.5%',
    paddingHorizontal: '5%',
  },
  premiumAvatar: {
    borderWidth: 1,
    borderColor: variables.gray,
    height: variables.getSize(50),
    width: variables.getSize(50),
    borderRadius: variables.getSize(50 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  premiumTextView: {
    padding: '5%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  premiumTextTitle: {
    fontWeight: 'bold',
    paddingVertical: '2.5%',
    width: '100%',
  },
  paddingView: {
    padding: '5%',
    backgroundColor: variables.primaryGradient[0],
  },
  bottomBgImage: {
    width: width_screen,
    height: height_screen * 0.615,
  },
});
export default style;
