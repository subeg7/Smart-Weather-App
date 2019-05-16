import React from "react";
import {View,StyleSheet,Text} from "react-native";


export default class App extends React.Component{

  _displayLocation(){
      navigator.geolocation.getCurrentPosition(
    (position) => {
    console.log(position);
    },
    (error) => {alert(error.message)},
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
}


  // this._displayLocation();
  render(){
    this._displayLocation();
    
    return (
          <View style={styles.container}>
          <Text>
              GeoLocation
          </Text>
          </View>
    );
  }
}

const styles  = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',

  }
});
