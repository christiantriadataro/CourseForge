import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import PanelImage from '../../../assets/images/courses/profile/MENUPANEL.png';
import Logo from '../../../assets/images/courses/profile/logo.png';
import Tab from "../../components/Tab";
import { Feather } from "@expo/vector-icons";
import React from "react";

const Menu = props => {
  return (
    <View style={{ height: '100%' }}>
      <Image source={PanelImage} style={{ height: 118, width: '100%' }} />
      <View style={{ backgroundColor: '#EEEEEE', height: '100%'}}>
        <Image source={Logo} style={{ height: 85, width: 85, alignSelf: 'center', top: -40}}/>
        <View style={{ top: -20, gap: 8}}>
          <Text style={styles.bodytext1}>Andrei Domingo</Text>
          <Text style={styles.bodytext2}>Ships’ Catering III | 1st Year | J2023</Text>
        </View>
        <View style={{ marginTop: 61}}>
          <Tab navigation={props.navigation} route={props.route} title="Dashboard" name="home" />
          <Tab navigation={props.navigation} route={props.route} title="Profile" name="user" />
          <Tab navigation={props.navigation} route={props.route} title="Courses" name="book" />
          <Tab navigation={props.navigation} route={props.route} title="Announcements" name="monitor" />
          <Tab navigation={props.navigation} route={props.route} title="Options" name="settings" />
          <Tab navigation={props.navigation} route={props.route} title="Examination" name="settings" />
        </View>
        <View style={{ marginTop: 150}}>
          <Tab navigation={props.navigation} route={props.route} title="Logout" name="log-out" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodytext1: {
    fontFamily: 'Allerta_Stencil_Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#292929',
  },
  bodytext2: {
    fontFamily: 'Allerta_Stencil_Regular',
    fontSize: 12,
    textAlign: 'center',
    color: '#737373',
  },
})

export default Menu;
