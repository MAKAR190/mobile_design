import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [thumbPosition] = useState(new Animated.Value(0));

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    Animated.timing(thumbPosition, {
      toValue: isEnabled ? 0 : 20,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableOpacity
      style={[
        styles.switchContainer,
        isEnabled ? styles.switchOn : styles.switchOff,
      ]}
      onPress={toggleSwitch}
    >
      <Animated.View style={[styles.thumb, { left: thumbPosition }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    marginRight: 10,
    fontSize: 16,
    color: "#333",
  },
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    padding: 3,
    backgroundColor: "#767577",
    position: "relative",
  },
  switchOn: {
    backgroundColor: "#8D1EE4",
  },
  switchOff: {
    backgroundColor: "#767577",
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: "absolute",
    top: 0,
    backgroundColor: "white",
  },
});

export default CustomSwitch;
