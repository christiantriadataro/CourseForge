import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import PanelImage from '../../../assets/images/courses/profile/MENUPANEL.png';
import Logo from '../../../assets/images/courses/profile/logo.png';
import Tab from "../../components/Tab";
import { Feather } from "@expo/vector-icons";
import React from "react";

const Menu = ({navigation}) => {
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
          {/*<Tab name="home" title="Home" link="Dashboard"/>*/}
          <TouchableOpacity
            style={{ width: '100%', height: 50, alignItems: 'center', flexDirection: 'row', gap: 25, paddingHorizontal: 41, }}
            onPress={() => navigation.navigate('Dashboard')}
          ><Feather size={24} color="black" name="home"/>
            <Text style={{ fontSize: 15, fontFamily: 'Andika_Regular' }}>Dashboard</Text>
          </TouchableOpacity>
            {/*<Tab name="user" title="Menu" />*/}
          <TouchableOpacity
            style={{ width: '100%', height: 50, alignItems: 'center', flexDirection: 'row', gap: 25, paddingHorizontal: 41, }}
            onPress={() => navigation.navigate('Profile')}
          ><Feather size={24} color="black" name="user"/>
            <Text style={{ fontSize: 15, fontFamily: 'Andika_Regular' }}>Profile</Text>
          </TouchableOpacity>
            {/*<Tab name="book" title="Courses"/>*/}
          <TouchableOpacity
            style={{ width: '100%', height: 50, alignItems: 'center', flexDirection: 'row', gap: 25, paddingHorizontal: 41, }}
            onPress={() => navigation.navigate('Courses')}
          ><Feather size={24} color="black" name="book"/>
            <Text style={{ fontSize: 15, fontFamily: 'Andika_Regular' }}>Courses</Text>
          </TouchableOpacity>
          {/*<Tab name="monitor" title="To Do"/>*/}
          <TouchableOpacity
            style={{ width: '100%', height: 50, alignItems: 'center', flexDirection: 'row', gap: 25, paddingHorizontal: 41, }}
            onPress={() => navigation.navigate('Menu')}
          ><Feather size={24} color="black" name="monitor"/>
            <Text style={{ fontSize: 15, fontFamily: 'Andika_Regular' }}>To Do</Text>
          </TouchableOpacity>
            {/*<Tab name="settings" title="Options"/>*/}
          <TouchableOpacity
            style={{ width: '100%', height: 50, alignItems: 'center', flexDirection: 'row', gap: 25, paddingHorizontal: 41, }}
            onPress={() => navigation.navigate('Menu')}
          ><Feather size={24} color="black" name="settings"/>
            <Text style={{ fontSize: 15, fontFamily: 'Andika_Regular' }}>Options</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 150}}>
          {/*<Tab name="log-out" title="Log out"/>*/}
          <TouchableOpacity
            style={{ width: '100%', height: 50, alignItems: 'center', flexDirection: 'row', gap: 25, paddingHorizontal: 41, }}
            onPress={() => navigation.navigate('Menu')}
          ><Feather size={24} color="black" name="log-out"/>
            <Text style={{ fontSize: 15, fontFamily: 'Andika_Regular' }}>Log out</Text>
          </TouchableOpacity>
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
