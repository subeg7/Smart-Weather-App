import React from "react";
import {View,StyleSheet,Text} from "react-native";

export default class FlexBox extends React.Component{
  render(){
    return(
      <View style={styles.parent}>
          <Text style={styles.child}> Child One </Text>
          <Text style={styles.child}> Child Two </Text>
          <Text style={styles.child}> Child Three </Text>
      </View>

    );
  }


}
const styles = StyleSheet.create({
parent: {
backgroundColor: '#F5FCFF',
borderColor: '#0099AA',
borderWidth: 5,
marginTop: 30
},
child: {
borderColor: '#AA0099',
borderWidth: 2,
textAlign: 'center',
fontSize: 24,
}
});
