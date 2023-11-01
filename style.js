import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  headerDark: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginTop: 20,
  },
  textDark: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#afafaf',
    width: '80%',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    color: "black",
  },
  inputDark: {
    borderWidth: 1,
    borderColor: '#afafaf',
    width: '80%',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    color: "white",
  },
  output: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  radioLabel: {
    color: 'black',
  },
  radioLabelDark: {
    color: 'white',
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    color: "black",
  },
  darkButton: {
    marginTop: 20,
    alignItems: "center",
    color: "white"
  }
});