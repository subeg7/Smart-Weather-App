import React from "react";
import {View, Text, FlatList,StyleSheet} from 'react-native';

export default class MyList extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.day}
        </Text>


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
  title: {
        fontSize: 20,
        color: '#2f354b',
        textAlign: 'center'
    },
});
