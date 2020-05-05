import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, Button } from 'react-native';

import seta from '../../assets/seta.png';
import sacola from '../../assets/sacola.png';
import galaxys20 from '../../assets/galaxys20.png';

import styles from './styles';

export default function Product (){
  const product = route.params.incident


  return (
    <View>
      <TouchableOpacity onPress={()=>{}}>
        <View style={styles.header}>
          <Image source={seta}/>
          <Image source={sacola}/>
        </View>
      </TouchableOpacity>

      <View style={styles.backgroundGrey}>
        <View style={styles.backgroundWhite}>
          <Image source={product.image}/>
          <Text styles={styles.titleImage}>
            {product.name}
          </Text>

          <Text styles={styles.description}>
            {product.description}
          </Text>
          <Text styles={styles.price}>
          {Intl.NumberFormat('pt-BR', {
                  style:'currency',
                  currency: 'BRL'
              }).format(product.price)}
          </Text>
          <Button title='Comprar'></Button>
        </View>
      </View>
      <View style={styles.backgroundWhite}>
        <Text>
          Happy Set
        </Text>

        <Text style={styles.happyDescription}>
          Leve também esses produtos com um desconto especial e ganhe um cupom de 10%OFF para compras em lojas parceiras!
        </Text>

        <ScrollView horizontal>
         <View style={styles.viewGalaxy}>
           <Image source={galaxys20}/>
           <Text>Smartphone Samsung Galaxy S20+ - Cloud Blue</Text>

         </View>

         <View style={styles.scroll}>
          <Image source={}/>
          <Text>Fone de Ouvido In Ear JBL T110 Preto</Text>
         </View>

         <View style={styles.scroll}>
         <Image source={}/>
         <Text>Kit Automotivo De Acessórios Para Celular Elgin</Text>
         </View>

         <View style={styles.scroll}>
         <Image source={}/>
         <Text>Tripé Preto Para Celular Spider Tripod</Text>
         </View>


        <Button title='comprar tudo por apenas R$ 6.117,30'></Button>
        <ScrollView>
     </View>
    </View>
  )
}
