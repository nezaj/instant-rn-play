import React, { useState, useEffect } from "react";
import { init, useQuery, transact, tx, id } from "@instantdb/react-native";
import { View, Text, Button, Dimensions, Pressable } from "react-native";

const APP_ID = "f8779961-5c00-49c1-beb3-15bdd9b79f92";

init({
  appId: APP_ID,
  websocketURI: "wss://api.instantdb.com/runtime/session",
});

function App() {
  const roomId = "97c03f7b-754b-4eac-8ae3-a906f85e2c0c";
  const { isLoading, error, data } = useQuery({
    rooms: {
      players: {},
      $: { where: { id: roomId } },
    },
  });

  if (isLoading) return <Text>Loading ...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return <Main data={data} />;
}

const selectId = "4d39508b-9ee2-48a3-b70d-8192d9c5a059";

function randomCircle() {
  const randomRadius = 2 * Math.floor(Math.random() * 7) + 20; // Random integer between 2-8
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const offset = 100;

  const randomX = Math.floor(
    Math.random() * (screenWidth - 2 * randomRadius - 2 * offset)
  );
  const randomY = Math.floor(
    Math.random() * (screenHeight - 2 * randomRadius - 2 * offset)
  );

  return {
    width: randomRadius * 2,
    height: randomRadius * 2,
    borderRadius: randomRadius,
    backgroundColor: "blue",
    position: "absolute",
    left: offset + randomX,
    top: offset + randomY,
  };
}

function Main({ data }) {
  const [circleStyle, setCircleStyle] = useState({});

  useEffect(() => {
    setCircleStyle(randomCircle());
  }, []);

  return (
    <View className="flex-1">
      <Pressable
        style={circleStyle}
        onPress={() => {
          setCircleStyle(randomCircle());
        }}
      />
    </View>
  );
}

export default App;
