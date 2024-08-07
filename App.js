import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";

const App = () => {
  const [value, setValue] = useState(0);
  const screenWidth = Dimensions.get("window").width;
  const sliderWidth = screenWidth * 0.9; // 90% of the screen width
  const thumbSize = 30; // Thumb size (for positioning purposes)
  const labelWidth = 50; // Width of the value label
  const onPress = () => console.log(value);
  // Calculate the position for the value display, centered on the thumb
  const valuePosition =
    (sliderWidth - thumbSize) * (value / 100) + thumbSize / 2;

  // Constrain the label's position to ensure it stays within the slider bounds
  const constrainedValuePosition = Math.min(
    Math.max(valuePosition - labelWidth / 2, 0), // Prevent overflow on the left
    sliderWidth - labelWidth // Prevent overflow on the right
  );

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Compared to your neighbors, how much trash do you generate?
      </Text>
      <View style={styles.sliderContainer}>
        <View
          style={[styles.valueContainer, { left: constrainedValuePosition }]}
        >
          <Text style={styles.valueLabel}>{value}</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={2}
          value={value}
          onValueChange={setValue}
          minimumTrackTintColor="#d3d3d3"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#000"
          thumbStyle={styles.thumb}
          trackStyle={styles.track}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  sliderContainer: {
    width: "90%",
    position: "relative",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  valueContainer: {
    position: "absolute",
    top: -30,
    width: 50,
    alignItems: "center",
  },
  valueLabel: {
    fontSize: 18,
    color: "#000",
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#000",
  },
  track: {
    height: 5,
    borderRadius: 5,
    backgroundColor: "#d3d3d3",
  },
  button: {
    height: 10,
    width: 20,
    paddingHorizontal: 120,
    paddingVertical: 40,
    justifyContent: "center",
    backgroundColor: "green",
    alignItems: "center",
    marginTop: 80,
    borderRadius: 20,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
