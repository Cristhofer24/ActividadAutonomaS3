import { createStackNavigator } from '@react-navigation/stack';
import { ScreenBienvenido } from '../screens/ScreenBienvenido';
import { ScreenDivide } from '../screens/ScreenDivide';


export type RootStackParamList = {
  ScreenBienvenido:undefined,
  ScreenDivide:undefined,

}
const Stack = createStackNavigator<RootStackParamList >();
export const StackNavigator=()=>{
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: 'yellowgreen' } }}>

     <Stack.Screen name="ScreenBienvenido" options={{headerShown:false}} component={ScreenBienvenido} /> 
     <Stack.Screen name="ScreenDivide" options={{headerShown:false}} component={ScreenDivide} /> 

    </Stack.Navigator>
  );



}
 


  
  
