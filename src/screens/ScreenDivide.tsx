import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { BodyComponents } from '../components/BodyComponet'
import { TitleComponets } from '../components/Tilte'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'

export const ScreenDivide = () => {
    const navigation = useNavigation();
    const [Numero1, setNumero1] = useState(0)
    const [Numero2, setNumero2] = useState(0)
    const [Resultado, setResultado] = useState(0)
    const [Resultado1, setResultado1] = useState<string>('')
    
const dividir=()=>{

console.log(Numero1);
console.log(Numero2);

if(Numero1===0 || Numero2===0){
console.log('Indeterminacion')
setResultado1('Indeterminacion')
}else{
 
        const res=Numero1/Numero2;
        console.log('El resultado es ',res)  
        setResultado(res)
        setResultado1('')
    
}
if (Numero1!==0 && Numero2===0 || Numero1===0 && Numero2!==0){
    console.log('No existe division para cero')  
    setResultado1('No existe division para cero')
}

}


  


    return (
        <View>
            <StatusBar backgroundColor='yellowgreen' />
            <TitleComponets title='Bienvenido' />
            <BodyComponents>
                <View style={estilo.contaner}>

                    <TextInput style={estilo.input} placeholder='Número1'
                        keyboardType='numeric' onChangeText={(value: string) => setNumero1(parseInt(value))} />

                    <TextInput  style={estilo.input}placeholder='Número2'
                        keyboardType='numeric' onChangeText={(value: string) => setNumero2(parseInt(value))} />
                             <Text style={estilo.txt}>El resulatado es: {Resultado}</Text>
                             <Text style={estilo.txt}>La operacion es : {Resultado1}</Text>        
                    <ButtonComponent title={'Dividir'} onPress={dividir} />
                    
                    <ButtonComponent title={'Volver al inicio'} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'ScreenBienvenido' }))} />
                </View>
            </BodyComponents>
        </View>
    )
}
const estilo = StyleSheet.create({
    contaner: {
        alignItems: 'center',

    },
    img: {
        width: '100%',
        height: '7%',
        borderRadius: 15,
        padding: 5
    },
    input: {
        width:'50%',
        height:'2%',
        fontSize:30,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        fontWeight:'bold',
        marginBottom: 10
      },
txt:{
    fontSize:30,
    fontWeight:'bold',

}


})