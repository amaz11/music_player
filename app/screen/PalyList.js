import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
// import * as MediaLibrary from "expo-media-library";

const PlayList = () => {
  // Object {
  //   "canAskAgain": true,
  //   "expires": "never",
  //   "granted": false,
  //   "status": "undetermined",
  // }
  // const getPermission = async () => {
  //   const permission = await MediaLibrary.getPermissionsAsync();
  //   console.log(permission);
  // };
  // useEffect(() => {
  //   getPermission();
  // }, []);
  return (
    <View style={styles.container}>
      <Text>Play List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlayList;
