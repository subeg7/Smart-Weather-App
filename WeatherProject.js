import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { zip:""}
  }

  _handleTextChange = event => {
    console.log("text changed", event.nativeEvent.text);
    this.setState({zip: event.nativeEvent.text});
    }

  render() {
    console.log("rendering:...")
    return (
       <View style={styles.container}>
           <Text style={styles.welcome}>
              You input {this.state.zip}
           </Text>

           <TextInput
            style={styles.input}
            onSubmitEditing = {this._handleTextChange }
           />

           <Text style={styles.instructions}>
           To get started, edit index.ios.js
           </Text>

           <Text style={styles.instructions}>
           Press Cmd+R to reload,{'\n'}
           Cmd+D or shake for dev menu
           </Text>
       </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
 input: {
  fontSize: 20,
  borderWidth: 2,
  height: 40
},
});
