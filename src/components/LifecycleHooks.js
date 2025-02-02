import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';

const LifecycleHooks = () => {
  const [subscriber, setSubcriber] = useState(200);
  useEffect(() => {
    setTimeout(() => {
      setSubcriber(500);
    }, 5000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);
  return (
    <View>
      <View className="flex-row items-center gap-3 mt-5 mx-3">
        <Image
          source={require('../image/safwansy.jpg')}
          className="w-20 h-20 rounded-full"
        />
        <View>
          <Text className="text-black font-bold text-2xl">Safwan Sy</Text>
          <Text className="text-black">{subscriber} Juta Subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default LifecycleHooks;
