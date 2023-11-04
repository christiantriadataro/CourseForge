import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Button, TouchableOpacity } from "react-native";
import Logo from '../../../assets/images/Logo.png';
import Background from '../../../assets/images/Background.png';
import { useFonts } from "expo-font";

const SplashScreen = ({navigation}) => {

  return (
    <View>
      <ImageBackground
        source={Background}
        style={{ height: '100%' }}
      >
        <Image
          source={Logo}
          style={{ height: 113, width: 120, top: 220, left: 40 }}
        />
        <Text style={styles.title}>SEAMAC'S</Text>
        <Text style={styles.header}>Student Portal Application</Text>
        <TouchableOpacity style={styles.btn}
                          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.btn_text}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Advent_Pro_Bold",
    fontSize: 36,
    left: 40,
    top: 220,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  header: {
    fontFamily: "Nunito_Light",
    fontSize: 22,
    left: 40,
    top: 220,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  btn: {
    width: 140,
    height: 60,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    top: 490,
    left: 213,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn_text: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
  }
});

export default SplashScreen;
