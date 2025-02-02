import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Position = () => {
  return (
    <View className="w-[140] bg-blue-100 m-5 p-3 rounded-lg shadow-xl">
      <View className="relative border-2 border-blue-600 rounded-full mx-auto p-4">
        <Icon name="cart-outline" size={50} color="blue" />
        <View className="absolute top-0 right-0 bg-green-400 p-1 rounded-full">
          <Text className="text-white font-semibold">10</Text>
        </View>
      </View>
      <Text className="font-bold text-blue-600 mt-2">Keranjang Belanja</Text>
    </View>
  );
};

export default Position;
