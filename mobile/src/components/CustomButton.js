import { Text, TouchableOpacity, StyleSheet } from "react-native";


const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.btn} {...props}>
      <Text style={styles.btn_text}>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: 140,
    height: 60,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
  },
})

export default CustomButton;