import React from "react";
import { StyleSheet } from "react-native";
import PlusSign from "./PlusSign";
import { Text, View } from "./Themed";

export default function AddPostContainer() {
  return (
    <View style={styled.addContentContainer}>
      <View style={styled.addContentButton}>
        <PlusSign />
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  addContentContainer: {
    borderRadius: 21,
    height: 211,
    width: 155,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addContentButton: {
    borderRadius: 50,
    width: 51,
    height: 51,
  },
});
