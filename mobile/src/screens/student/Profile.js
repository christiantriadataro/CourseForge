import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  Pressable,
  FlatList
} from "react-native";
import Logo from "../../../assets/images/Course_Logo/Logo_white_background.png";
import Background from "../../../assets/images/background-login.png";
import { useFonts } from "expo-font";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { Appbar, TouchableRipple } from "react-native-paper";
import AccountLogo from "../../../assets/images/courses/profile/logo.png";
import SeamacCard from "../../../assets/images/SEAMAC_CARD.png";
import ShipCard from "../../../assets/images/cards/ships-card.png";
import CourseLogo from "../../../assets/images/Course_Logo/ship-catering-logo.png";
import Todos from "../../../assets/images/icon/clipboard.png";
import ChatBox from "../../../assets/images/icon/chatbox.png";
import Notif from "../../../assets/images/icon/notif.png";
import MenuPanel from "../../../assets/images/courses/profile/MENUPANEL2.png";

import CourseCard from "../../components/CourseCard";
import AppBar from "../../components/AppBar";

const PROFILE = {
  'student_number': '19-02031-t',
  'first_name': 'Andrei',
  'last_name': 'Domingo',
  'course': 'Ships’ Catering III',
  'year_sec': '1st Year, 1T2023',
  'birthdate': '04-21-2001',
  'gender': 'Male',
  'nationality': 'Filipino',
  'email': 'andreidomingo@gmail.com',
  'contact': '0978910123',
  'address': 'P. Paredes St., Sampaloc, Manila'
}

const Dashboard = ({ navigation, route }) => {
  return (
    <ScrollView style={{ height: '100%', backgroundColor: '#EEE' }}>
      <View>
        <AppBar navigation={navigation} route={route} />
        <Image source={MenuPanel} style={{ width: '100%', height: 180 }} />
        <View
          style={{
            backgroundColor: 'white',
            height: 570,
            weight: 326,
            top: -77,
            marginHorizontal: 16,
            borderRadius: 8,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 24,
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Text style={styles.name}>
              {PROFILE.first_name + ' ' + PROFILE.last_name}
            </Text>
            <Image
              source={AccountLogo}
              style={{ height: 80, width: 80, top: -30 }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.body_text2}>Student Number.:</Text>
            <Text style={styles.body_text1}>{PROFILE.student_number}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.body_text2}>Course:</Text>
            <Text style={styles.body_text1}>{PROFILE.course}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.body_text2}>Year & Section:</Text>
            <Text style={styles.body_text1}>{PROFILE.year_sec}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.body_text2}>Birth Date:</Text>
            <Text style={styles.body_text1}>{PROFILE.birthdate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.body_text2}>Gender:</Text>
            <Text style={styles.body_text1}>{PROFILE.gender}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.body_text2}>Nationality: </Text>
            <Text style={styles.body_text1}>{PROFILE.nationality}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.body_text2}>Email: </Text>
            <Text style={styles.body_text1}>{PROFILE.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.body_text2}>Contact #:</Text>
            <Text style={styles.body_text1}>{PROFILE.contact}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.body_text2}>Address:</Text>
            <Text style={styles.body_text1}>{PROFILE.address}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Nunito_Bold",
    fontSize: 14,
    fontWeight: "bold"
  },
  name: {
    fontFamily: "Allerta_Stencil_Regular",
    fontSize: 18,
    color: "#292929"
  },
  body_text1: {
    fontFamily: "Andika_Regular",
    fontSize: 13,
    fontWeight: "bold",
    color: "#2D2D2D",
    textTransform: 'uppercase'
  },
  body_text2: {
    fontFamily: "Andika_Bold",
    fontSize: 15,
    fontWeight: "bold",
    color: "#737373"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 5,
    alignItems: "center",
  },
  divider: {
    backgroundColor: '#DDDDDD',
    width: 295,
    height: 2,
    alignSelf: 'center',
    marginVertical: 35,
  }
});

export default Dashboard;
