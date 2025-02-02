import React, {useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  BackHandler,
  Alert,
  Text,
} from 'react-native';
import DasarComponent from './src/components/DasarComponent';
import StylingComponen from './src/components/StylingComponen';
import LayoutingFlexbox from './src/components/LayoutingFlexbox';
import Position from './src/components/Position';
import LifecycleHooks from './src/components/LifecycleHooks';
import PropsDimanis from './src/components/PropsDimanis';
import StateCounter from './src/components/StateCounter';
import Communication from './src/components/Communication';
import TampilkanData from './src/components/TampilkanData';
import ModalBelajar from './src/components/ModalBelajar';
import BasicJavaScript from './src/components/BasicJavaScript';
import Svg from './src/components/Svg';
import PickerRN from './src/components/PickerRN';
import SwitchRN from './src/components/SwitchRN';
import Search from './src/components/Search';
import LanguageTranslator from './src/components/Translater';

const App = () => {
  // useEffect(() => {
  //   const aksiTombolKembali = () => {
  //     Alert.alert('Perhatian', 'yakin akan kembali?', [
  //       {text: 'Batal', onPress: () => null, style: 'cancel'},
  //       {text: 'Ya', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };

  //   const TombolKembali = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     aksiTombolKembali,
  //   );
  //   return () => TombolKembali.remove();
  // });

  return (
    <View>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollView>
        {/* <DasarComponent /> */}
        {/* <StylingComponen /> */}
        {/* <LayoutingFlexbox /> */}
        {/* <Position /> */}
        {/* <LifecycleHooks /> */}
        {/* <PropsDimanis /> */}
        {/* <StateCounter /> */}
        {/* <Communication /> */}
        {/* <TampilkanData /> */}
        {/* <ModalBelajar /> */}
        {/* <BasicJavaScript /> */}
        {/* <Svg /> */}
        {/* <PickerRN /> */}
        {/* <SwitchRN /> */}
        {/* <Search /> */}
        <LanguageTranslator />
      </ScrollView>
    </View>
  );
};

export default App;
