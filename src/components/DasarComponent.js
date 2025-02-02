import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';

const DasarComponent = () => {
  return (
    <View className="m-3">
      <Text className="text-red-600 text-3xl mb-3">Hello,</Text>

      <Text className="font-bold text-lg text-blue-700">Safwan</Text>
      <Text>saya adalah mobile app developer</Text>
      <TextInput
        placeholder="masukkan nama"
        className="border rounded-lg px-3 py-2 my-3"
      />
      <View className="flex flex-row justify-evenly items-center mb-10">
        <View className="border-4 rounded-full">
          <Image
            source={require('../image/alam7.jpg')}
            className="w-[100] h-[100] rounded-full"
          />
        </View>
        <View className="bg-blue-500 w-[100] h-[100] my-3 border-4 border-red-600"></View>
      </View>
    </View>
  );
};

export default DasarComponent;
