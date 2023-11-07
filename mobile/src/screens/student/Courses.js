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
  TextInput,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import Logo from '../../../assets/images/Course_Logo/Logo_white_background.png';
import Background from '../../../assets/images/background-login.png';
import { useFonts } from 'expo-font';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { Appbar, TouchableRipple } from 'react-native-paper';
import AccountLogo from '../../../assets/images/courses/profile/logo.png';
import SeamacCard from '../../../assets/images/SEAMAC_CARD.png';
import Todos from '../../../assets/images/icon/clipboard.png';
import ChatBox from '../../../assets/images/icon/chatbox.png';
import Notif from '../../../assets/images/icon/notif.png';

import CourseCard from '../../components/CourseCard';
import AppBar from '../../components/AppBar';
import CourseMiniCard from '../../components/CourseMiniCard';
import findKey from "lodash/findKey";

const MENU = [
  { course_id: 'Course 01', course_name: 'PL 101', course_img: require('../../../assets/images/courses/course_cards/courses_1.png') },
  { course_id: 'Course 02', course_name: 'PL 102', course_img: require('../../../assets/images/courses/course_cards/courses_2.png') },
  { course_id: 'Course 03', course_name: 'PL 103', course_img: require('../../../assets/images/courses/course_cards/courses_3.png') },
  { course_id: 'Course 04', course_name: 'PL 104', course_img: require('../../../assets/images/courses/course_cards/courses_4.png') },
  { course_id: 'Course 05', course_name: 'PL 105', course_img: require('../../../assets/images/courses/course_cards/courses_5.png') },
  { course_id: 'Course 06', course_name: 'PL 106', course_img: require('../../../assets/images/courses/course_cards/courses_6.png') },
  { course_id: 'Course 07', course_name: 'PL 107', course_img: require('../../../assets/images/courses/course_cards/courses_7.png') },
  { course_id: 'Course 08', course_name: 'PL 108', course_img: require('../../../assets/images/courses/course_cards/courses_8.png') },
  { course_id: 'Course 09', course_name: 'PL 109', course_img: require('../../../assets/images/courses/course_cards/courses_9.png') },
];

const Courses = ({ navigation, route }) => {
  const course_title = findKey(MENU, value => value === MENU.engine)
  return (
    <ScrollView style={{ height: '100%', backgroundColor: '#EEE' }}>
      <View>
        <AppBar navigation={navigation} route={route} />

        {/*</View>*/}
        <View
          style={{
            alignSelf: 'center',
            borderRadius: 8,
            marginVertical: 20,
            alignItems: 'center',
            backgroundColor: 'white',
            width: 342,
            shadowColor: '#000',
            shadowOffset: {
              width: 4,
              height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 9.84,

            elevation: 5,
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15, paddingTop: 25, alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.body_text1}>Student: </Text>
              <Text style={styles.body_text2}>19-51321jT</Text>
            </View>
            <Text style={styles.body_text2}>9 Courses</Text>
          </View>
          {/*<FlatList scrollEnabled={false} data={MENU.engine} renderItem={({item}) =>  <CourseCard course_id={item.title} course_name={course_title}/>} />*/}

          <FlatList scrollEnabled={false} data={MENU.engine} renderItem={({item}) => <CourseMiniCard navigation={navigation} route={route} course_id={item.title} course_name={course_title} course_img={item.course_img}/>} />
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
    fontFamily: 'Allerta_Stencil_Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#818181'
  },
  body_text2: {
    fontFamily: 'Allerta_Stencil_Regular',
    fontSize: 14,
    fontWeight: 'bold',
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

export default Courses;
