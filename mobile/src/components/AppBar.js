import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import AccountLogo from "../../assets/images/courses/profile/logo.png";
import Todos from "../../assets/images/icon/clipboard.png";
import ChatBox from "../../assets/images/icon/chatbox.png";
import Notif from "../../assets/images/icon/notif.png";

const AppBar = (props) => {
  return (
    <View

      style={{
        backgroundColor: '#FFF',
        marginTop: 35,
        width: '100%',
        height: 65,
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ flexDirection: 'row', gap: 18 }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Menu')}>
          <Image source={AccountLogo} style={{ height: 38, width: 38 }} />
        </TouchableOpacity>
        <View style={{ justifyContent: 'center' }}>
          {(props.route.name === 'Dashboard' || props.route.name === 'Course') ?  <><Text style={[styles.title, {textTransform: 'capitalize'}]}>Andrei</Text>
            <Text style={styles.subtitle}>19-02031-t</Text></> : <Text style={styles.title}>| { props.route.name}</Text> }
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 26, paddingRight: 15 }}>
        <TouchableOpacity>
          <Image source={Todos} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={ChatBox} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Notif} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Nunito_Bold',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
})

export default AppBar;
