import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";

import {
  cloudy,
  cloudyNoRain,
  snowy,
  storm,
  sun,
} from "../assets/cloud-images/index";
import SearchBar from "./SearchBar";

export const Weather = ({ weatherData }) => {
  const [weatherIcon, setWeatherIcon] = useState(null);
  const {
    weather,
    name,
    main: { temp, humidity },
  } = weatherData;

  const main = weather[0].main;
  // const icon = weather[0].icon;
  // console.log(weather[0].icon);

  function getIconUri(weather) {
    if (weather === "Snow") return snowy;
    if (weather === "Clear") return sun;
    if (weather === "Rain") return cloudy;
    if (weather === "Haze") return cloudyNoRain;
    return cloudyNoRain;
  }
  useEffect(() => {
    setWeatherIcon(getIconUri(main));
  }, [weatherIcon]);

  return (
    <View style={styles.container}>
      <SearchBar />
      <Image source={weatherIcon} style={{ width: 180, height: 180 }} />
      <Text>{temp}</Text>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    color: "#04263F",
    fontFamily: "sans-sarif",
  },
});
