import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Data} from './Data';

const TampilkanData = () => {
  return (
    <View className="m-5">
      <Text>Tampilkan Data</Text>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <View className="bg-red-400 my-3 p-3">
            <Text>{item.nama}</Text>
            <Text>{item.umur}</Text>
            <Text>{item.alamat}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TampilkanData;
