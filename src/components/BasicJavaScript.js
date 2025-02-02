import {View, Text, FlatList} from 'react-native';
import React from 'react';

const BasicJavaScript = () => {
  // tipe data primitif
  const nama = 'safwan';
  let usia = 33;
  const apakahLakiLaki = true;

  // tipe data complex
  const hewanPeliharaan = {
    nama: 'Miaww',
    jenis: 'kucing',
    warna: 'kuning',
    orangTua: {
      jantan: 'kaisar',
      betina: 'kuin',
    },
  };

  // function
  const sapaOrang = (name, age) => {
    return console.log(`hello ${name} usia saya ${age}`);
  };

  sapaOrang('safwan', 33);

  // object- array
  const namaOrang = [
    'safwan',
    'syarifuddin',
    'zahara',
    'juliana',
    'mauliana',
    'husnuz zikra',
  ];

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Hello Miaw, apa kabar?';
    // } else {
    //   hasilSapa = 'ini hewan siapa?';
    // }
    // return hasilSapa;

    return objectHewan.nama === 'Miaw'
      ? 'Hello Miaw, apa kabar?'
      : 'ini hewan siapa?';
  };

  return (
    <View className="m-3">
      <Text className="text-xl text-black font-bold text-center my-3">
        BasicJavaScript
      </Text>

      <Text>nama: {nama}</Text>
      <Text>usia: {usia}</Text>

      <Text className="my-5">{sapaHewan(hewanPeliharaan)}</Text>

      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>

      <View className="my-5">
        {namaOrang.map((orang, index) => (
          <Text key={index}>{orang}</Text>
        ))}
      </View>

      {/* <FlatList
        className="my-5"
        data={namaOrang}
        renderItem={({item, index}) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
      /> */}
    </View>
  );
};

export default BasicJavaScript;
