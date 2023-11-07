import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CourseCard1 from '../../assets/images/courses/course_cards/courses_1.png';

const CourseCard = (props) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed')}
      rippleColor="rgba(0, 0, 0, .32)"
      style={{
        width: 326,
        height: 190,
        marginVertical: 10
      }}
    >
      <Image source={CourseCard1} style={{ height: 128, width: '100%' }} />
      <View
        style={{
          height: 62,
          width: '100%',
          justifyContent: 'center',
          paddingLeft: 12,
          backgroundColor: '#FFF',
          shadowColor: '#000',
          shadowOffset: {
            width: 4,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 9.84,

          elevation: 1,
        }}
      >
        <Text style={styles.title}>{props.course_id}</Text>
        <Text style={styles.subtitle}>{props.course_name}</Text>
      </View>
    </TouchableOpacity>
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
    fontFamily: 'Nunito_Bold',
    fontSize: 12,
    textTransform: 'capitalize'

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

export default CourseCard;
