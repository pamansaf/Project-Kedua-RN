import {View, Text, Image} from 'react-native';
import React from 'react';
// import svgApp from '../image/app.svg';

const Svg = () => {
  return (
    <View>
      <Text className="text-lg text-black text-center font-bold mt-5">
        Use File SVG
      </Text>
      <Image
        source={require('../image/app.png')}
        className="w-60 h-60 mx-auto"
      />
      {/* <svgApp width={250} height={250} /> */}
    </View>
  );
};

export default Svg;
