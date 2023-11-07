import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput, ScrollView, Pressable, FlatList
} from "react-native";
import Logo from '../../../assets/images/Course_Logo/Logo_white_background.png';
import Background from '../../../assets/images/background-login.png';
import { useFonts } from 'expo-font';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { Appbar, TouchableRipple } from "react-native-paper";
import AccountLogo from '../../../assets/images/courses/profile/logo.png';
import SeamacCard from '../../../assets/images/SEAMAC_CARD.png';
import ShipCard from '../../../assets/images/cards/ships-card.png';
import CourseLogo from '../../../assets/images/Course_Logo/ship-catering-logo.png';
import Todos from '../../../assets/images/icon/clipboard.png';
import ChatBox from '../../../assets/images/icon/chatbox.png';
import Notif from '../../../assets/images/icon/notif.png';


import CourseCard from "../../components/CourseCard";
import AppBar from "../../components/AppBar";

import findKey from 'lodash/findKey'
import MENU from '../../../db_menu.json'


const Dashboard = (props) => {
  const course_title = findKey(MENU, value => value === MENU.engine)
  return (
    <ScrollView style={{ height: '100%', backgroundColor: '#EEE'}}>
      <View>
        <AppBar navigation={props.navigation} route={props.route} />
        <View style={{ alignItems: 'center', paddingVertical: 15, gap: 15 }}>
          {/* Card 1*/}
          <TouchableOpacity>
            <ImageBackground
              source={SeamacCard}
              style={{
                height: 137,
                width: 360,
                alignItems: 'center',
                paddingHorizontal: 25,
                flexDirection: 'row',
                gap: 20,
              }}
            >
              <Image source={Logo} style={{ height: 68, width: 72 }} />
              <View>
                <Text style={styles.body_text1}>SEAMAC Institute Inc.</Text>
                <Text style={styles.body_text2}>
                  867 G Tolentino Street, Sampaloc, Manila, Philippines
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {/*Card2*/}
          <TouchableOpacity>
            <ImageBackground
              source={ShipCard}
              style={{
                height: 99,
                width: 360,
                alignItems: 'center',
                paddingHorizontal: 25,
                flexDirection: 'row',
                gap: 20,
                borderRadius: 50,
              }}
            >
              <Image source={CourseLogo} style={{ height: 68, width: 72 }} />
              <View>
                <Text style={styles.body_text1}>Ships' Catering NC III</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.body_text,
            { color: 'black', fontSize: 18, paddingLeft: 18, paddingBottom: 15 },
          ]}
        >
          My Courses
        </Text>
        <View style={{ alignItems: 'center' ,marginBottom: 40}}>
          <FlatList scrollEnabled={false} data={MENU.engine} renderItem={({item}) =>  <CourseCard course_id={item.title} course_name={course_title}/>} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  test: {
    borderWidth: 1,
    borderColor: 'green',
  },
  title: {
    fontFamily: 'Nunito_Bold',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'Nunito_Regular',
    fontSize: 11,
  },
  body_text1: {
    fontFamily: 'Advent_Pro_Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#EEEEEE',
  },
  body_text2: {
    fontFamily: 'Allerta_Stencil_Regular',
    fontSize: 12,
    width: 202,
    textAlign: 'center',
    color: '#EEEEEE',
  },
  body_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EEEEEE',
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 50,
  },
  container: {
    top: 322,
    left: 31,
    gap: 26,
  },
  LoginHeader: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Nunito_Bold',
    fontSize: 36,
    // color: 'rgba(0, 0, 0, 0.6)'
  },
  header: {
    fontFamily: 'Nunito_Light',
    fontSize: 22,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default Dashboard;
