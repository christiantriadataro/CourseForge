import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

const Tab = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 25,
        paddingHorizontal: 41,
      }}
      onPress={() => props.navigation.navigate(props.title)}
    >
      <Feather size={24} color="black" name={props.name}/>
      <Text style={{ fontSize: 15, fontFamily: 'Andika_Regular' }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Tab;
