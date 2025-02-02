import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Product = ({onButtonPress}) => {
  return (
    <View className="w-[230] bg-pink-200 p-3 m-3 rounded-lg shadow-xl">
      <Image
        source={require('../image/alam7.jpg')}
        className="w-full h-[130] rounded-lg"
      />
      <Text className="text-xl font-bold py-3">Jual Foto Danau</Text>
      <Text className="text-orange-500 text-base font-semibold">
        Rp. 25.000.000,-
      </Text>
      <Text>Bireuen, Aceh</Text>
      <TouchableOpacity
        onPress={onButtonPress}
        className="bg-green-500 rounded-full mt-5">
        <Text className="text-white text-base font-bold text-center py-2">
          BELI
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;
