import React from 'react';
import {Image, Text, View} from 'react-native';
import StylingComponen from './StylingComponen';

const LayoutingFlexbox = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center bg-slate-300">
        <View className="bg-red-500 w-[60] h-[100]"></View>
        <View className="bg-yellow-500 w-[60] h-[100]"></View>
        <View className="bg-green-500 w-[60] h-[100]"></View>
        <View className="bg-blue-500 w-[60] h-[100]"></View>
      </View>

      <View className="flex-row items-center gap-3 mt-5 mx-3">
        <Image
          source={require('../image/safwansy.jpg')}
          className="w-20 h-20 rounded-full"
        />
        <View>
          <Text className="text-black font-bold text-2xl">Safwan Sy</Text>
          <Text className="text-black">100 Juta Subscriber</Text>
        </View>
      </View>
      <View className="flex-row justify-around my-5 mx-3">
        <Text className="text-black font-bold">Beranda</Text>
        <Text className="text-black font-bold">Video</Text>
        <Text className="text-black font-bold">Playlist</Text>
        <Text className="text-black font-bold">Komunitas</Text>
        <Text className="text-black font-bold">Channel</Text>
        <Text className="text-black font-bold">About</Text>
      </View>
      <StylingComponen />
    </View>
  );
};

export default LayoutingFlexbox;
