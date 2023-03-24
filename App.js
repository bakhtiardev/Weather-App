import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Weather } from "./components/Weather";

export default function App() {
  // console.log("App executed")

  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(null);

  async function getWeatherDataByCityName(cityname) {
    setLoaded(false);
    const API_KEY = "9244731bd86ed136aa2099ef5d11e2cb";
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`;

    await axios.get(API).then((res) => {
      // console.log(res.data);
      setWeatherData(res.data);
      setLoaded(true);
    });
  }

  useEffect(() => {
    getWeatherDataByCityName("Islamabad");
    // console.log(weatherData);
  }, []);

  return loaded ? (
    <View style={styles.container}>
      <Weather weatherData={weatherData} />
      {/* <Text>Hellow</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator color="gray" size={36} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
