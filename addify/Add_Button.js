import React from "react";
import {TouchableHighlight,Text,View,StyleSheet} from "react-native";

export default class AddButton extends React.Component{

  constructor(props){
    super(props);
    this.state = {dayIndex:0,
      weekDay:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}

  }

  _pressedIn=()=>{
    if(this.state.dayIndex>6) this.state.dayIndex=-1;
    this.setState({dayIndex: ++this.state.dayIndex});
    console.log(this.state.weekDay[this.state.dayIndex]);
  }


  render(){
    let greenBox = false;
    if(this.state.pressing){
      greenBox = (
      <Text style={styles.pressed_out}>
      </Text>);
    }
    return(
      <View style = {styles.container}>

      {greenBox}

        <TouchableHighlight
          onPressIn={this._pressedIn}
          style={styles.pressed_out}>

            <View style={styles.button}>
              <Text style={styles.text} >
                {this.props.title}
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
