import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const StateCounter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View className="w-1/2 bg-pink-100 mx-auto p-3 rounded-lg mt-5">
      <Text className="text-xl font-bold text-center">Alat Hitung</Text>
      <Text className="text-3xl text-center py-3 font-bold">{number}</Text>
      <View className="flex-row justify-evenly items-center">
        <Button
          title="TAMBAH"
          color={'green'}
          onPress={() => setNumber(number + 1)}
        />
        <Button
          title="KURANG"
          color={'red'}
          onPress={() => setNumber(number - 1)}
        />
      </View>
    </View>
  );
};

export default StateCounter;
