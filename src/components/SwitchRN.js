import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';

const SwitchRN = () => {
  const [lampu, setLampu] = useState(false);
  return (
    <View>
      <Text className="text-lg text-black text-center font-bold mt-5">
        Materi Switch
      </Text>
      <View className="items-center mt-10">
        <Text className="text-xl font-bold mb-2">{lampu ? 'ON' : 'OFF'}</Text>
        <Switch value={lampu} onValueChange={() => setLampu(!lampu)} />
      </View>
    </View>
  );
};

export default SwitchRN;
