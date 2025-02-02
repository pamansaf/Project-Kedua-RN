import {View, Text, Modal, Button} from 'react-native';
import React, {useState} from 'react';

const ModalBelajar = () => {
  const [statusModal, setStatusModal] = useState(false);
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text className="text-2xl font-bold mt-80 mb-3">
          -- Belajar Modal --
        </Text>
        <Button title="Buka Modal" onPress={() => setStatusModal(true)} />
      </View>

      <Modal visible={statusModal} animationType="slide">
        <View className="mt-60 items-center">
          <View className="flex justify-center items-center w-[300] h-[300] bg-pink-300 rounded-xl">
            <Text className="text-blue-700 text-2xl font-bold mb-3">
              ini adalah modal
            </Text>
            <Button title="Tutup Modal" onPress={() => setStatusModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalBelajar;
