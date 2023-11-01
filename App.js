import React from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
  Switch,
  useColorScheme,
} from "react-native";
import NumericInput from "react-native-numeric-input";
import RadioForm from "react-native-simple-radio-button";
import { useState, useEffect } from "react";
import { Header as HeaderRNE } from "react-native-elements";
import styles from "./style";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  const [weight, setWeight] = useState(0);
  const [bottle, setBottle] = useState(1);
  const [gender, setGender] = useState("male");
  const [time, setTime] = useState(1);
  const [alcoholLevel, setAlcoholLevel] = useState(0);
  const [isVisibleResult, setIsVisibleResult] = useState(false);
  const [outputColor, setOutputColor] = useState("");

  const colorScheme = useColorScheme();

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  {
  }

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const callAlert = () =>
    Alert.alert("Warning", "Weight can not be empty or zero!", [
      { text: "Dismiss" },
    ]);

  useEffect(() => {
    setIsEnabled(colorScheme === "dark");
  }, [colorScheme]);

  function calculate() {
    let result = 0;

    if (weight != 0) {
      if (gender === "male") {
        result =
          (bottle * 0.33 * 8 * 4.5 - (weight / 10) * time) / (weight * 0.7);
      } else {
        result =
          (bottle * 0.33 * 8 * 4.5 - (weight / 10) * time) / (weight * 0.6);
      }

      if (result < 0) {
        result = 0;
      }
      setIsVisibleResult(true);
      setAlcoholLevel(result);

      if (result < 0.16) {
        setOutputColor("green");
      }
      if (result < 0.55 && result >= 0.16) {
        setOutputColor("yellow");
      }
      if (result > 0.54) {
        setOutputColor("red");
      }
    } else {
      setIsVisibleResult(false);
      callAlert();
    }
  }

  return (
    <View style={isEnabled ? styles.containerDark : styles.container}>
      <HeaderRNE
        centerComponent={{
          text: "Alcometer",
          style: isEnabled ? styles.headerDark : styles.header,
        }}
      />
      <Switch
        style={{ marginBottom: 10, marginLeft: 10 }}
        trackColor={{ false: "light", true: "dark" }}
        thumbColor={
          isEnabled
            ? colorScheme === "light"
              ? "light"
              : "dark"
            : colorScheme === "light"
            ? "light"
            : "dark"
        }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <ScrollView>
        <View style={styles.field}>
          <Text style={isEnabled ? styles.textDark : styles.text}> Weight</Text>
          <TextInput
            style={isEnabled ? [styles.input, styles.inputDark] : styles.input}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.field}>
          <Text style={isEnabled ? styles.textDark : styles.text}>Bottles</Text>
          <NumericInput
            value={bottle}
            onChange={setBottle}
            minValue={1}
            maxValue={99}
            totalWidth={100}
            totalHeight={40}
            iconSize={10}
            step={1}
            valueType="real"
            rounded
            textColor={isEnabled ? "white" : "black"}
            iconStyle={{ color: isEnabled ? "white" : "black" }}
            rightButtonBackgroundColor={isEnabled ? "dark" : "light"}
            leftButtonBackgroundColor={isEnabled ? "dark" : "light"}
          />
        </View>
        <View style={styles.field}>
          <Text style={isEnabled ? styles.textDark : styles.text}>Time</Text>
          <NumericInput
            value={time}
            onChange={setTime}
            minValue={1}
            maxValue={99}
            totalWidth={100}
            totalHeight={40}
            iconSize={10}
            step={1}
            valueType="real"
            rounded
            textColor={isEnabled ? "white" : "black"}
            iconStyle={{ color: isEnabled ? "white" : "black" }}
            rightButtonBackgroundColor={isEnabled ? "dark" : "light"}
            leftButtonBackgroundColor={isEnabled ? "dark" : "light"}
          />
        </View>
        <View style={styles.field}>
          <Text style={isEnabled ? styles.textDark : styles.text}>Gender</Text>
          <RadioForm
            style={styles.radio}
            buttonSize={10}
            radio_props={genders}
            initial={0}
            onPress={(value) => setGender(value)}
            labelStyle={isEnabled ? styles.radioLabelDark : styles.radioLabel}
          />
          {isVisibleResult ? (
            <Text style={[styles.output, { color: outputColor }]}>
              {alcoholLevel.toFixed(2)}
            </Text>
          ) : null}
        </View>
        <View style={[styles.button, styles.centeredButton]}>
          <Button
            title="Calculate"
            style={isEnabled ? styles.darkButton : styles.button}
            onPress={calculate}
          />
        </View>
      </ScrollView>
    </View>
  );
}
