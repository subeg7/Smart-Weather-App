import React from "react";
import {View,StyleSheet,Text} from "react-native";


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={longitude:"",latitude:""}
  }

  _setLocationState(){
    var geoPosition="not set";
      navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({longitude:position.coords.longitude,latitude:position.coords.latitude})
    },
    (error) => {alert(error.message)},
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    console.log(geoPosition);

}

  render(){

    return (
          <View style={styles.container}>
          <Text>
            Your Current Location is:
          </Text>

          <Text>
            {this._setLocationState()}
            Longitude:  {this.state.longitude}
          </Text>

          <Text>
            Latitude: {this.state.latitude}
          </Text>
          </View>
    );
  }
}

const styles  = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',

  }
});
