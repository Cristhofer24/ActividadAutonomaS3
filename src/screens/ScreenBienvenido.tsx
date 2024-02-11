import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../navigation/StackNavigator'
import { BodyComponents } from '../components/BodyComponet'
import { TitleComponets } from '../components/Tilte';
import { ButtonComponent } from '../components/ButtonComponent'
interface Props extends StackScreenProps<RootStackParamList,'ScreenBienvenido'>{};

export const ScreenBienvenido = ({navigation}:Props) => {
  return (
   <View>
     <StatusBar backgroundColor='yellowgreen'/>
     <TitleComponets title='Bienvenido'/>
    <BodyComponents>
     <View style={estilo.contaner}>
      <Image style={estilo.img} source={{uri:'https://isil.pe/blog/wp-content/uploads/2023/05/tipos-de-app-moviles.png'}}/>
      <ButtonComponent title={'Acceder'} onPress={()=>navigation.navigate('ScreenDivide')}/>
     </View>
    </BodyComponents>
   </View>
  )
}

const estilo = StyleSheet.create({
  contaner:{
    alignItems:'center',

  },
  img:{
  width:'100%',
  height:'7%',
  borderRadius:15,
  padding:5
  }
})
