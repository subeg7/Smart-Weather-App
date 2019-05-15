import React from "react";
import {View,StyleSheet,Text} from "react-native";

import AddButton from "./addify/Add_Button";


export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <TextButton>
              faster
        </TextButton>
      </View>

    );
  }
}

class TextButton extends React.Component{
  render(){
    return (
        <Text style={[styles.button, styles.accentText, {color: "#FFFFFF"}]}>
          {this.props.children}
        </Text>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
     alignItems: "center",
     paddingTop: 30
  },

  button: {
    borderRadius:100,
    backgroundColor: "#99CCFF"
  },

  accentText: {
    fontSize: 18,
    fontWeight: "bold"
  }

});
