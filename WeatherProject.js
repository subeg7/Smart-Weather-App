import React from 'react';
import { StyleSheet, Text, View,TextInput, ImageBackground } from 'react-native';
import Forecast from "./Forecast.js";
import OpenWeatherMap from "./weather/open_weather_map";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { zip:"",forecast:null}
  }

  _handleTextChange = event => {
    console.log("text changed", event.nativeEvent.text);

    zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      console.log(forecast);
      this.setState({ forecast: forecast });
    });

    }

  render() {
    // console.log("rendering...");
    let content = null;
    if(this.state.forecast!==null){
      content = (
        <Forecast
          main = {this.state.forecast.main}
          description = {this.state.forecast.description}
          temp= {this.state.forecast.temp}
          />
      );
    }
    return (
      <View style={styles.container}>
        <ImageBackground
        source={require("./images/flowers.png")}
        resizeMode="cover"
        style={styles.backdrop}>

          <View style={styles.overlay}>

              <View style={styles.row}>

                <Text style={styles.mainText}>
                Current weather for
                </Text>

                <View style={styles.zipContainer}>
                 <TextInput
                 style={[styles.zipCode, styles.mainText]}
                 onSubmitEditing={event => this._handleTextChange(event)}
                 />
                </View>

              </View>

              {content}
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const baseFontSize = 16;
const styles = StyleSheet.create({
 container: { flex: 1, alignItems: "center", paddingTop: 30 },
 backdrop: { flex: 1, flexDirection: "column" },
 overlay: {
 paddingTop: 5,
 backgroundColor: "#000000",
 opacity: 0.5,
 flexDirection: "column",
 alignItems: "center"
 },
 row: {
 flexDirection: "row",
 flexWrap: "nowrap",
 alignItems: "flex-start",
 padding: 30
 },
 zipContainer: {
 height: baseFontSize + 10,
 borderBottomColor: "#DDDDDD",
 borderBottomWidth: 1,
 marginLeft: 5,
 marginTop: 3
 },
 zipCode: { flex: 1, flexBasis: 1, width: 50, height: baseFontSize },
 mainText: { fontSize: baseFontSize, color: "#FFFFFF" }
});
