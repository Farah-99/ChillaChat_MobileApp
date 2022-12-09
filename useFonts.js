import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Kufam-SemiBoldItalic' : require('./assets/fonts/Kufam-SemiBoldItalic.ttf')

  });