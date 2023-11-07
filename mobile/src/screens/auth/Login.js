import { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Button,
  TouchableOpacity, Dimensions, TextInput
} from "react-native";
import Logo from '../../../assets/images/Logo.png';
import Background from '../../../assets/images/background-login.png';
import { useFonts } from 'expo-font';
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from "../../components/CustomButton";

import DB_student from "../../../db_student.json"

const Login = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onChangeEmail = (email) => { setEmail(email) }
  const onChangePassword = (password) => { setPassword(password)}


  const handleLogin = () => {
    for (const obj of DB_student) {
      if (email === '' || password === '') {alert("Wrong Email. Please try again")}
      if(email === obj['email']) {
        if (password === obj['password'] ) {

          navigation.navigate('DrawerNavigation')
        } else  {
          alert("Wrong Password. Please try again.")

        }
      }
    }
    // navigation.navigate('DrawerNavigation')
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={Background}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.LoginHeader}>Login</Text>
          <CustomTextInput  inputMode="email" placeholder="Email" onChangeText={onChangeEmail} />
          <CustomTextInput  secureTextEntry={true} placeholder="Password" onChangeText={onChangePassword} />
          <View style={{ flexDirection: 'row', gap: 40}}>
            <Text style={styles.body_text}>Forgot Password?</Text>
            <CustomButton name="Login"
                          onPress={handleLogin}
             />

          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  body_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#EEEEEE',

    left: 14,
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
    gap: 26
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

export default Login;
