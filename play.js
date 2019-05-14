import React from "react";
import {TouchableHighlight,Text,View,StyleSheet} from "react-native";

export default class Play extends React.Component{

  constructor(props){
    super(props);
    this.state = {pressing:false,touchableStyle:styles.pressed_in}

  }

  _pressedIn=()=>{
    this.setState({pressing:true});
    this.setState({touchableStyle:styles.pressed_in})
  }

  _pressedOut=()=>{
    this.setState({pressing:false});
    this.setState({touchableStyle:styles.pressed_out})
  }

  render(){
    let greenBox = false;
    if(this.state.pressing){
      greenBox = (
      <Text style={styles.touchable}>
      </Text>);
    }
    return(
      <View style = {styles.container}>

      {greenBox}

        <TouchableHighlight
          onPressIn={this._pressedIn}
          onPressOut={this._pressedOut}
          accessibilityLabel={'accessibilityLabel'}
          style={this.state.touchableStyle}>

            <View style={styles.button}>
              <Text style={styles.text}>
                {this.state.pressing ? "RELEASE ME" : "PUSH ME"}
              </Text>
            </View>

        </TouchableHighlight>

        {greenBox}



      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height:130,
    justifyContent: 'center',
    flex: 1,
     alignItems: "center",
     paddingTop: 30
  },

  text: {
        // fontFamily: "CircularStd-Book",
        fontSize: 20,
        color: '#2f354b',
        textAlign: 'center'
    },

 pressed_out: {
   borderRadius: 1000,
   height: 100,
   width: 100,
   backgroundColor:'yellow',
   justifyContent: "center"

  },

 pressed_in: {
   backgroundColor: "#8C0000",
   borderRadius: 10,
   height: 100,
   width: 100,
   justifyContent: "center"
 }
});
