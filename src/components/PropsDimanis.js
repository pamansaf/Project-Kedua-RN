import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const Profil = ({gambar, name, subcribe}) => {
  return (
    <View className="flex-row items-center gap-3 my-5 mx-3 border-b border-gray-400 pb-3">
      <Image
        source={{
          uri: gambar,
        }}
        className="w-20 h-20 rounded-full"
      />
      <View>
        <Text className="text-black font-bold text-2xl">{name}</Text>
        <Text className="text-black">{subcribe}</Text>
      </View>
    </View>
  );
};

const Story = ({picture, title}) => {
  return (
    <View className="mx-3">
      <View className="w-[60] flex justify-center items-center">
        <Image source={picture} className="w-[60] h-[60] rounded-full" />
        <Text className="text-black mt-1">{title}</Text>
      </View>
    </View>
  );
};

const PropsDimanis = () => {
  return (
    <View>
      <Profil
        gambar="https://images.unsplash.com/photo-1517001657880-5608528ca7fb?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Pamansaf"
        subcribe="200 Juta Subscriber"
      />
      <View className="flex-row mx-3">
        <ScrollView horizontal>
          <Story title="Beranda" picture={require('../image/alam1.jpg')} />
          <Story title="Video" picture={require('../image/alam2.jpg')} />
          <Story title="Shorts" picture={require('../image/alam3.jpg')} />
          <Story title="Playlist" picture={require('../image/alam4.jpg')} />
          <Story title="Komunitas" picture={require('../image/alam5.jpg')} />
          <Story title="About" picture={require('../image/alam6.jpg')} />
          <Story title="Profile" picture={require('../image/alam7.jpg')} />
        </ScrollView>
      </View>
    </View>
  );
};

export default PropsDimanis;
