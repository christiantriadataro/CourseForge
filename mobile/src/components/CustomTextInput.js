import { TextInput, StyleSheet } from "react-native";


const CustomTextInput = (props) => {
  return (
    <TextInput
      style={styles.email}
      {...props}
      placeholderTextColor="#EEEEEE"
    />
  )
}

const styles = StyleSheet.create({
  email: {
    width: 312,
    height: 60,
    borderRadius: 12,
    borderColor: '#EEEEEE',
    borderWidth: 2,
    backgroundColor: '#176B87',

    // text
    fontSize: 16,
    paddingLeft: 15,
    color: '#EEEEEE',
    fontWeight: "bold"
  },
})

export default CustomTextInput