import { Tabs } from "expo-router";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { Text, StyleSheet, Pressable } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function TabLayout() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.purple,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 15,
          paddingTop: 14,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"home"} color={focused ? color : Colors.black} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.purple : Colors.black,
                fontFamily: "SFPro",
                fontWeight: "400",
                fontSize: 10,
                lineHeight: 11.93,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="scanandpay"
        options={{
          title: "Scan&Pay",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"scan"} color={focused ? color : Colors.black} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.purple : Colors.black,
                fontFamily: "SFPro",
                fontWeight: "400",
                fontSize: 10,
                lineHeight: 11.93,
              }}
            >
              Scan&Pay
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="purchases"
        options={{
          title: "Purchases",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"purchases"}
              color={focused ? color : Colors.black}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.purple : Colors.black,
                fontFamily: "SFPro",
                fontWeight: "400",
                fontSize: 10,
                lineHeight: 11.93,
              }}
            >
              Purchases
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomWidth: 0.33,
            borderBottomColor: "#0000004D",
            backgroundColor: "#f8f9fa",
          },
          headerTitleStyle: {
            fontWeight: "700",
            letterSpacing: -0.4,
            lineHeight: 20.7,
            fontSize: 18,
            fontFamily: "Helvetica",
          },
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <Pressable
                onPressIn={() => {
                  setIsPressed(true);
                  navigation.goBack();
                }}
                onPressOut={() => setIsPressed(false)}
                style={styles.headerLeftWrapper}
              >
                <Svg
                  width="10"
                  rotation={180}
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                >
                  <Path
                    d="M0.982516 0L10 9L0.982516 18L0 17.0288L8.04443 9L0 0.980587L0.982516 0Z"
                    fill={isPressed ? Colors.purple : Colors.black}
                  />
                </Svg>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 17,
                    fontFamily: "SFPro",
                    letterSpacing: -0.4,
                    lineHeight: 20,
                    paddingLeft: 3,
                    color: isPressed ? Colors.purple : Colors.black,
                  }}
                >
                  Back
                </Text>
              </Pressable>
            );
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"profile"}
              color={focused ? color : Colors.black}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.purple : Colors.black,
                fontFamily: "SFPro",
                fontWeight: "400",
                fontSize: 10,
                lineHeight: 11.93,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerLeftWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 11,
    gap: 3,
  },
});
