import {Platform} from 'react-native';
import {height_, height_screen} from './common/dimensions';

const getSize = size => size;

const variables = {
  getSize,
  primaryGradient: ['#180058', '#550087'],
  buttonGradient: ['#00F2FE', '#4FACFE'],
  colorButton: '#083358',
  primaryColor: '#390182',
  lightPrimary: '#7750A8',
  radioButtonColor: '#7A0443',
  colorIcon: '#898F97',
  colorPrimary: '#FFFFFF',
  colorPrimaryDark: '#122439',
  colorError: '#FF6060',
  colorBlack: '#000000',
  colorWhite: '#ffffff',
  colorBackground: '#FAFBFF',
  colorLightGray: '#F0F0F0',
  colorLightSubtext: '#9595CE',
  transactionIconBGColor: '#E0E5F8',
  colorMain: '#255C5C',
  colorMainDark: '#255C5C',
  fontColorMain: '#255C5C',
  fontColorGrayfontColorMain: '#255C5C',
  fontColorGray: '#DADADA',
  fontColorMediumGray: '#716F81',
  colorLightBorder: '#F8F8F8',
  colorStars: '#DDD51F',
  colorPage: '#FAF9F6',
  colorPaymentMethodText: '#062737CC',
  borderColorTextInput: '#8F92A1',
  placeHolderColor: '#A9A9A9',
  dimGray: '#ababab',
  tagBgColor: '#D9D9D9',

  fontBold:
    Platform.OS === 'android' ? 'SF-Pro-Display-Bold' : 'SFProDisplay-Bold',
  fontSemiBold:
    Platform.OS === 'android'
      ? 'SF-Pro-Display-Semibold'
      : 'SFProDisplay-Semibold',
  fontRegular:
    Platform.OS === 'android'
      ? 'SF-Pro-Display-Regular'
      : 'SFProDisplay-Regular',
  fontThin:
    Platform.OS === 'android' ? 'SF-Pro-Display-Light' : 'SFProDisplay-Light',
  fontMediam:
    Platform.OS === 'android' ? 'SF-Pro-Display-Medium' : 'SFProDisplay-Medium',
  fontItalic:
    Platform.OS === 'android'
      ? 'SF-Pro-Display-LightItalic'
      : 'SFProDisplay-LightItalic',
  fontFamilyHeading: 'origintechdemo',
  fontFamilyRegular: 'gilroyregular',
  fontFamilyBold: 'gilroybold',
  fontFamilySemiBold: 'gilroysemibold',

  fontWeightBold: '600',
  fontWeightThin: '200',
  fontWeightRegular: '400',
  colorHeading: '#2D2D53',
  colorSubtext: '#8B8B8B',
  avatarColor: '#EFABAB',
  colorRatingActive: '#00CA9D',
  colorRatingInActive: '#DAD9E2',

  fontSizeH1Large: getSize(50),
  fontSizeLarge: getSize(45),
  fontSizeH1Medium: getSize(32),
  fontSizeH1Small: getSize(27),
  fontSizeH2Large: getSize(24),
  fontSizeH2Medium: getSize(21),
  fontSizeH2Small: getSize(18),
  fontSizePMedium: getSize(16),
  fontSizePSmall: getSize(14),
  fontSizeSubtext: getSize(12),
  fontSizeSmall: getSize(10),
  fontSizeTine: getSize(8),

  UIPaddingHorizontal: '6%',
  UIPaddingVertical: '6%',
  authPagePaddingTop: '30%',
  tineScale: height_screen * 0.005,
  firstScale: height_screen * 0.01,
  secondScale: height_screen * 0.015,
  thirdScale: height_screen * 0.02,
  fourScale: height_screen * 0.025,
  fiveScale: height_screen * 0.03,
  sixScale: height_screen * 0.04,
  iosTopPadding: height_screen * 0.05,
  iosTopPadding_firstScale: height_screen * 0.03,

  borderRadiusSmall: getSize(5),
  borderRadiusMedium: getSize(10),
  borderRadiusLarge: getSize(30),
  borderRadiusXLarge: getSize(70),

  shadowStyle: intensity => ({
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: intensity / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: intensity * 0.7,
    elevation: intensity,
  }),

  circleStyle: size => ({
    width: size,
    height: size,
    borderRadius: size,
    alignItems: 'center',
    justifyContent: 'center',
  }),

  circleSizeSmall: getSize(50),
  circleSizeMedium: getSize(60),
};

export default variables;
