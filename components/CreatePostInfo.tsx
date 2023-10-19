import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";

export default function CreatePostInfo() {
  return (
    <View>
      <View style={styles.createContainer}>
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Create
        </Text>

        <View darkColor="rgba(255,255,255,0.05)" lightColor="rgba(0,0,0,0.05)">
          <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
            Swipe to pick which type of content you want to create for your
            audiences and your profile
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  createContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
});
