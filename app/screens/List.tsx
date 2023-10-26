import { View, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebaseConfig";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => navigation.navigate("details")}
        title="Open Details"
      />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="LogOut" />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
