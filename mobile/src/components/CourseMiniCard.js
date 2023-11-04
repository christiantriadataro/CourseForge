import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import ShipCard from '../../assets/images/cards/ships-card.png';
import CourseLogo from '../../assets/images/Course_Logo/ship-catering-logo.png';

const CourseMiniCard = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Course')}
      rippleColor="rgba(0, 0, 0, .32)"
      style={{
      marginVertical: 10
    }}>
      <ImageBackground
        imageStyle={{
          borderRadius: 8,
      }}
        source={props.course_img}
        style={{
          height: 67,
          width: 314,
          paddingLeft: 25,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: 10
        }}
      >
        <Text style={{ color: 'white', fontSize: 14}}>{props.course_id}</Text>
        <Text style={{ color: '#EEE', fontSize: 12}}>{props.course_name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CourseMiniCard;
