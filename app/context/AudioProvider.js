import { Text, View } from "react-native";
import React, { Component } from "react";
import * as MediaLibrary from "expo-media-library";

export default class AudioProvider extends Component {
  constructor(props) {
    super();
  }
  getPermission = async () => {
    // Object {
    //   "canAskAgain": true,
    //   "expires": "never",
    //   "granted": false,
    //   "status": "undetermined",
    // }
    const permission = await MediaLibrary.getPermissionsAsync();
    // console.log(permission);
    if (permission.granted) {
      //We want all Audio
    }
    if (!permission.granted && permission.granted) {
    }
  };
  componentDidMount() {
    this.getPermission();
  }
  render() {
    return (
      <View>
        <Text>AudioProvider</Text>
      </View>
    );
  }
}
