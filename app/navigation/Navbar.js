import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AduioList from "../screen/AduioList";
import PlayList from "../screen/PalyList";
import Player from "../screen/Player";

const Tab = createBottomTabNavigator();
const Navbar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Aduio List" component={AduioList} />
      <Tab.Screen name="Player" component={Player} />
      <Tab.Screen name="Play List" component={PlayList} />
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
