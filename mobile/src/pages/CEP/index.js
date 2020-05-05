import React from 'react';
import { View, Text, TextInput, TouchableNativeFeedback, Image } from 'react-native';

import sacola from '../../assets/sacola.png';
import seta from '../../assets/seta.png';

import styles from './styles';

export default function CEP() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={seta}/>
        <Image source={sacola}/>
      </View>

      <TextInput maxLength={11}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="CEP"
          returnKeyLabel="next"
          returnKeyType="next"
          blurOnSubmit={false}
          keyboardType="number"
          style={[
            styles.h4Regular,
            styles.textInput,
          ]}/>
      <TouchableNativeFeedback

          background={TouchableNativeFeedback.Ripple('#999999')}
          onPress={() => {
            alert('Redireciona para a tela de Check-ins');
          }}>
        <View style={styles.button}>
            <Text style={[styles.h4Regular, styles.buttonText]}>
              ENTRAR
            </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}
