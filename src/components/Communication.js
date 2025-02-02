import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Product from './Product';
import Cart from './Cart';

const Communication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View className="flex-row">
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
      <Cart quantity={totalProduct} />
    </View>
  );
};

export default Communication;
