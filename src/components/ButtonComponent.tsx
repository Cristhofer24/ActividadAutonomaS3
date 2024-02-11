import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButonProps {
  title: string;
  onPress: () => void;
 
}
export const ButtonComponent = ({title, onPress}: ButonProps) => {
  return (
    <TouchableOpacity style={estilo.BotonContainer} onPress={onPress}>
      <Text style={estilo.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const estilo = StyleSheet.create({
  BotonContainer: {
    backgroundColor:'yellowgreen',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    padding:10
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});