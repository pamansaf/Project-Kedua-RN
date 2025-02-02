import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = ({quantity}) => {
  return (
    <View className="w-[120] h-[140] bg-pink-200 m-5 p-3 rounded-lg shadow-xl">
      <View className="relative border-2 border-blue-600 rounded-full mx-auto p-4">
        <Icon name="cart-outline" size={50} color="blue" />
        <View className="absolute top-0 right-0 w-7 h-7 items-center justify-center bg-green-400 rounded-full">
          <Text className="text-white font-semibold">{quantity}</Text>
        </View>
      </View>
      <Text className="font-bold text-blue-600 mt-2 text-center">
        Keranjang
      </Text>
    </View>
  );
};

export default Cart;
