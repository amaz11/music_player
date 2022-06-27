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
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="headset" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <FontAwesome name="play" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Play List"
        component={PlayList}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <AntDesign name="heart" size={size} color={color} />;
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
