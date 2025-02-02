import {View, Text, StatusBar, TextInput, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

const kosakata = [
  {Indonesia: 'Ayam', English: 'Chicken'},
  {Indonesia: 'Kucing', English: 'Cat'},
  {Indonesia: 'Ikan', English: 'Fish'},
  {Indonesia: 'Anjing', English: 'Dog'},
  {Indonesia: 'Kelinci', English: 'Rabbit'},
  {Indonesia: 'Singa', English: 'Lion'},
];

const Search = () => {
  const [list, setList] = useState(kosakata);
  const [search, setSearch] = useState('');

  const filterList = item => {
    const newList = kosakata.filter(
      text =>
        (text.Indonesia, text.English)
          .toLocaleLowerCase()
          .indexOf(item.toLocaleLowerCase()) >= 0,
    );
    setList(newList);
  };

  useEffect(() => {
    if (search !== null) {
      filterList(search);
    }
  }, [search]);

  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={'#1d4ed8'} />
      <View className="bg-blue-600 p-5 shadow-md">
        <Text className="text-white text-xl font-bold text-center uppercase">
          KamusLon
        </Text>
      </View>

      <TextInput
        placeholder="Masukkan Kosa Kata"
        onChangeText={text => setSearch(text)}
        value={search}
        className="border bottom-1 border-blue-600 px-3 mx-3 my-5 rounded-md"
      />
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <View className=" mx-3 border my-1 px-3 py-2 rounded-md">
            <Text className="text-lg text-black font-bold">
              {item.Indonesia}
            </Text>
            <Text className="text-base text-red-500">{item.English}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Search;
