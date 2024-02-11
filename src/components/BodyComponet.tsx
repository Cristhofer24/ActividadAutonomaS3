import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';

export const BodyComponents = (props: any) => {
  const {height} = useWindowDimensions();
  return (
    <View style={{height: height *100, ...style.container}}>
      {props.children}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor:'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 40,
},
});