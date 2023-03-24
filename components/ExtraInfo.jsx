import React from "react";
import { View, Text } from "react-native";
export const ExtraInfo = () => {
  return (
    <View style={styles.extraInfo}>
      <View style={styles.info}>
        <Image source="" />
        <View>
            <Text style={{ fontSize: 22, color: "04263F" }}>{humidity} %</Text>
            <Text style={{ fontSize: 22, color: "04263F" }}>Humidity</Text>
        </View>
       
      </View>

      <View style={styles.info}>
      <Image source="" />
        <View>
            <Text style={{ fontSize: 22, color: "04263F" }}>{humidity} m/s</Text>
            <Text style={{ fontSize: 22, color: "04263F" }}>Wind speed</Text>
        </View>
      </View>
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
    info: {
      alignItems: "center",
      justifyContent: "center",
    },
    extraInfo:{
        flexDirection: 'row',
        marginTop:20,
        justifyContent:'space-between',
        padding:10
    }
    info:{
        width: Dimensions.get('screen').width,
        
    }
  });
  
