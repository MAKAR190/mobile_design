import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { Colors } from "@/constants/Colors";
import CustomSwitch from "../../components/CustomSwitch";

const ProfileScreen = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require("../../assets/images/profile.jpg")}
          alt={"profile"}
        />
        <Text style={styles.profileTitle}>Alona Drobiazko</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.offerTitle}>Achievements</Text>
        <Pressable
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          style={styles.ctaLine}
        >
          <Text
            style={{
              fontFamily: "SFPro",
              fontSize: 16,
              fontWeight: "400",
              color: isPressed ? Colors.purple : Colors.black,
              paddingHorizontal: 20,
              paddingBottom: 2,
            }}
          >
            view all
          </Text>
          <Svg
            style={{ marginRight: 4 }}
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <Path
              d="M0.982516 0L10 9L0.982516 18L0 17.0288L8.04443 9L0 0.980587L0.982516 0Z"
              fill={isPressed ? Colors.purple : Colors.black}
            />
          </Svg>
        </Pressable>
      </View>
      <View style={styles.achievementsContainer}>
        <View style={styles.achievementsList}>
          <View style={styles.achievement}>
            <View
              style={{
                backgroundColor: Colors.white,
                padding: 5,
                borderRadius: 50,
                shadowColor: Colors.black,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../../assets/images/fruits.png")}
                alt={"achievement"}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
            </View>
            <Text style={styles.achievementTitle}>Eggs fan</Text>
          </View>
          <View style={styles.achievement}>
            <View
              style={{
                backgroundColor: Colors.white,
                padding: 5,
                borderRadius: 50,
                shadowColor: Colors.black,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../../assets/images/fruits.png")}
                alt={"achievement"}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
            </View>
            <Text style={styles.achievementTitle}>Vitamin pack</Text>
          </View>
          <View style={styles.achievement}>
            <View
              style={{
                backgroundColor: Colors.white,
                padding: 5,
                borderRadius: 50,
                shadowColor: Colors.black,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../../assets/images/fruits.png")}
                alt={"achievement"}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
            </View>
            <Text style={styles.achievementTitle}>Fish fan</Text>
          </View>
          <View style={styles.achievement}>
            <View
              style={{
                backgroundColor: Colors.white,
                padding: 17,
                borderRadius: 50,
                shadowColor: Colors.black,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 5,
              }}
            >
              <Svg width="24" height="24" viewBox="0 0 18 18" fill="none">
                <Path
                  d="M8.88778 13.9692C9.09544 13.9692 9.27119 13.8975 9.41503 13.7542C9.55886 13.6108 9.63078 13.4353 9.63078 13.2276C9.63078 13.0199 9.55908 12.8442 9.4157 12.7004C9.27232 12.5565 9.09679 12.4846 8.88912 12.4846C8.68148 12.4846 8.50573 12.5563 8.3619 12.6997C8.21807 12.8431 8.14615 13.0186 8.14615 13.2263C8.14615 13.4339 8.21784 13.6096 8.36123 13.7535C8.50461 13.8973 8.68013 13.9692 8.88778 13.9692ZM8.38845 10.7346H9.2923C9.31795 10.3122 9.40177 9.96762 9.54375 9.70095C9.68573 9.43428 9.96218 9.09423 10.3731 8.68078C10.8192 8.24488 11.1461 7.85019 11.3539 7.49673C11.5615 7.14324 11.6654 6.74368 11.6654 6.29803C11.6654 5.52348 11.3983 4.90709 10.8643 4.44888C10.3302 3.99064 9.69238 3.76152 8.95095 3.76152C8.247 3.76152 7.65023 3.95039 7.16063 4.32812C6.67103 4.70586 6.30851 5.14135 6.07308 5.6346L6.9494 5.9846C7.10748 5.6205 7.33512 5.30384 7.6323 5.03463C7.92947 4.76539 8.3546 4.63078 8.9077 4.63078C9.55642 4.63078 10.0301 4.80866 10.3288 5.16443C10.6276 5.52019 10.7769 5.91153 10.7769 6.33845C10.7769 6.68643 10.6845 6.99328 10.4997 7.259C10.3148 7.5247 10.0752 7.79606 9.78078 8.07308C9.21988 8.59551 8.84759 9.0431 8.66393 9.41585C8.48028 9.78862 8.38845 10.2282 8.38845 10.7346ZM8.85073 17.6923C7.62744 17.6923 6.47688 17.4599 5.39905 16.9952C4.32122 16.5304 3.38365 15.8996 2.58635 15.1029C1.78905 14.3062 1.15867 13.3704 0.6952 12.2957C0.231734 11.221 0 10.0727 0 8.85073C0 7.62744 0.232383 6.47688 0.69715 5.39905C1.16192 4.32122 1.79267 3.38365 2.5894 2.58635C3.38615 1.78905 4.32188 1.15867 5.3966 0.6952C6.47132 0.231733 7.61964 0 8.84157 0C10.0649 0 11.2154 0.232383 12.2933 0.69715C13.3711 1.16192 14.3087 1.79267 15.106 2.5894C15.9033 3.38615 16.5336 4.32188 16.9971 5.3966C17.4606 6.47132 17.6923 7.61964 17.6923 8.84157C17.6923 10.0649 17.4599 11.2154 16.9952 12.2933C16.5304 13.3711 15.8996 14.3087 15.1029 15.106C14.3062 15.9033 13.3704 16.5336 12.2957 16.9971C11.221 17.4606 10.0727 17.6923 8.85073 17.6923ZM8.84553 16.7692C11.0504 16.7692 12.9223 16.0001 14.4611 14.4617C15.9998 12.9233 16.7692 11.0517 16.7692 8.84678C16.7692 6.64188 16.0001 4.77003 14.4617 3.23125C12.9233 1.69247 11.0517 0.923076 8.84678 0.923076C6.64188 0.923076 4.77003 1.69225 3.23125 3.2306C1.69247 4.76897 0.923075 6.64061 0.923075 8.84553C0.923075 11.0504 1.69225 12.9223 3.2306 14.4611C4.76897 15.9998 6.64061 16.7692 8.84553 16.7692Z"
                  fill={Colors.purple}
                />
              </Svg>
            </View>
            <Text style={styles.achievementTitle}>French pack</Text>
          </View>
        </View>
      </View>
      <View style={styles.line}>
        <Text style={styles.offerTitle}>Security</Text>
      </View>
      <View style={styles.general}>
        <View style={styles.generalList}>
          <View style={styles.generalListItem}>
            <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path
                  d="M3.26167 20H17.28C18.9717 20 19.7708 19.4763 19.7708 18.3446C19.7708 15.4983 16.1579 11.4105 10.2666 11.4105C4.38381 11.4105 0.770844 15.4983 0.770844 18.3446C0.770844 19.4763 1.56995 20 3.26167 20ZM2.84511 18.5895C2.42856 18.5895 2.27554 18.4797 2.27554 18.1757C2.27554 16.2077 5.15741 12.8294 10.2666 12.8294C15.3842 12.8294 18.2662 16.2077 18.2662 18.1757C18.2662 18.4797 18.1131 18.5895 17.6966 18.5895H2.84511ZM10.2836 9.97466C12.8594 9.97466 14.9337 7.71959 14.9337 4.92399C14.9337 2.17905 12.8594 0 10.2836 0C7.71625 0 5.62497 2.21283 5.62497 4.94088C5.62497 7.72804 7.70775 9.97466 10.2836 9.97466ZM10.2836 8.56419C8.55786 8.56419 7.12967 6.97635 7.12967 4.94088C7.12967 2.96452 8.54936 1.41047 10.2836 1.41047C12.0178 1.41047 13.429 2.93919 13.429 4.92399C13.429 6.95946 12.0093 8.56419 10.2836 8.56419Z"
                  fill={Colors.purple}
                />
              </Svg>
              <Text style={styles.generalListItemTitle}>
                My personal information
              </Text>
            </View>
            <Svg
              width="10"
              style={{ marginRight: 14 }}
              height="18"
              viewBox="0 0 10 18"
              fill="none"
            >
              <Path
                d="M0.982516 0L10 9L0.982516 18L0 17.0288L8.04443 9L0 0.980587L0.982516 0Z"
                fill={Colors.purple}
              />
            </Svg>
          </View>
          <View style={styles.generalListItem}>
            <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
              <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                <Path
                  d="M0.770844 16.1563C0.770844 16.8022 1.26711 17.2355 2.07847 17.2355H6.70244C6.77333 19.1575 8.23063 20.7724 10.2708 20.7724C12.311 20.7724 13.7684 19.1654 13.8393 17.2355H18.4553C19.2746 17.2355 19.7708 16.8022 19.7708 16.1563C19.7708 15.1401 18.7626 14.2343 17.9039 13.3362C17.1319 12.5091 17.0138 10.8234 16.8799 9.38187C16.746 5.71103 15.714 3.25331 13.0909 2.36318C12.7758 1.01617 11.7124 0 10.2708 0C8.82929 0 7.75799 1.01617 7.45077 2.36318C4.82764 3.25331 3.79572 5.71103 3.6618 9.38187C3.52789 10.8234 3.40973 12.5091 2.63776 13.3362C1.77125 14.2343 0.770844 15.1401 0.770844 16.1563ZM2.4487 15.92V15.8018C2.59049 15.4316 3.24431 14.762 3.81147 14.1397C4.66222 13.2102 4.89066 11.5874 5.04033 9.50786C5.19787 5.49046 6.41885 4.04892 8.17549 3.56841C8.45906 3.49751 8.61661 3.3636 8.63236 3.09577C8.69538 2.04022 9.30196 1.284 10.2708 1.284C11.2397 1.284 11.8463 2.04022 11.9014 3.09577C11.925 3.3636 12.0826 3.49751 12.3662 3.56841C14.1228 4.04892 15.3438 5.49046 15.5013 9.50786C15.651 11.5874 15.8795 13.2102 16.7302 14.1397C17.2974 14.762 17.9512 15.4316 18.093 15.8018V15.92H2.4487ZM8.05732 17.2355H12.4844C12.4056 18.6455 11.5154 19.5514 10.2708 19.5514C9.02625 19.5514 8.1361 18.6455 8.05732 17.2355Z"
                  fill={Colors.purple}
                />
              </Svg>
              <Text style={styles.generalListItemTitle}>Push-messages</Text>
            </View>
            <CustomSwitch />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
  },
  profile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 14,
  },
  profileTitle: {
    fontWeight: "700",
    fontFamily: "SFPro",
    fontSize: 20,
    letterSpacing: -0.4,
    lineHeight: 23.87,
  },
  ctaLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  offerTitle: {
    fontFamily: "SFPro",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: -0.4,
    color: Colors.black,
  },
  line: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 22,
  },
  achievementsContainer: {
    borderRadius: 14,
    backgroundColor: Colors.lavander,
    padding: 16,
    gap: 7,
  },
  achievementsList: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    paddingHorizontal: 8,
  },
  achievement: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  achievementTitle: {
    fontFamily: "SFPro",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14.32,
    color: Colors.black,
  },
  general: {
    marginTop: 14,
    backgroundColor: Colors.lavander,
    borderRadius: 14,
    gap: 10,
  },
  generalList: {
    display: "flex",
    flexDirection: "column",
  },
  generalListItem: {
    flex: 1,
    flexDirection: "row",
    padding: 14,
    marginVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 54,
    borderBottomWidth: 0.5,
    borderBottomColor: "#3A3A3C",
    paddingBottom: 25,
  },
  generalListItemTitle: {
    fontFamily: "SFPro",
    fontWeight: "400",
    lineHeight: 19.09,
    fontSize: 16,
  },
});

export default ProfileScreen;
