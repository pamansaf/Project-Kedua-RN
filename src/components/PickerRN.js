import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const PickerRN = () => {
  const [pilihan, setPilihan] = useState();
  const klikPilihan = label => {
    // Alert.alert('kamu pilih hari' + ' ' + label);
    setPilihan(label);
  };
  return (
    <View className="m-5">
      <Text className="text-2xl font-bold text-center my-5">
        Belajar Picker
      </Text>
      <View className="border border-blue-500 rounded-lg">
        <Picker
          selectedValue={pilihan}
          onValueChange={(label, index) => klikPilihan(label)}>
          <Picker.Item label="Senin" value="senin" />
          <Picker.Item label="Selasa" value="selasa" />
          <Picker.Item label="Rabu" value="rabu" />
        </Picker>
      </View>
      <View className="border border-blue-500 rounded-lg mt-3">
        <Picker
          selectedValue={pilihan}
          onValueChange={(label, index) => klikPilihan(label)}>
          <Picker.Item label="Satu" value="satu" />
          <Picker.Item label="Dua" value="dua" />
          <Picker.Item label="Tiga" value="tiga" />
        </Picker>
      </View>
    </View>
  );
};

export default PickerRN;
