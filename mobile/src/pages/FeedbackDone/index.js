import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import seta from '../../assets/seta.png';

export default function Feedback() {
  const navigation = useNavigation();

  function navigateToProduct(){
    navigation.navigate('Product');
  }

  return (
    <View>
      <View >
        <Image source={seta}/>
        <Text>Avaliar Happy Set</Text>
      </View>

      <View>
        <Text>Obrigado pela avaliação!</Text>
        <Text>Você receberá um e-mail com o cupom de desconto</Text>

        <Button onPress={navigateToProduct}>voltar para meu pedido</Button>
      </View>
    </View>
  )
}
