import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AduioList from "../screen/AduioList";
import PlayList from "../screen/PalyList";
import Player from "../screen/Player";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Navbar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Aduio List"
        component={AduioList}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="headset" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="play" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Play List"
        component={PlayList}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="heart" size={24} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

export default Navbar;
