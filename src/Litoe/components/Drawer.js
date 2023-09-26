import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

const Drawer = ({ defaultOpen, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className="z-40">
      <Pressable
        onPress={toggleDrawer}
        className="py-2 px-4 absolute top-0 right-0 z-50"
      >
        <Text>{isOpen ? "-" : "+"}</Text>
      </Pressable>
      <View className="drawer absolute top-0 right-0 h-screen w-32 overflow-auto bg-slate-200 bg-opacity-30">
        {children}
      </View>
    </View>
  );
};

export default Drawer;
