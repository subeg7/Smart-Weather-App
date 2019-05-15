import React from "react";
import {View,StyleSheet,Text} from "react-native";

export default class FlexBox extends React.Component{
  render(){
    return(
      <View style={styles.container}>

        <View style={styles.row1}>
          <View style={styles.row1_col1}>
          <View style={styles.row1_col1_row1}></View>
            <View style={styles.row1_col1_row2}></View>

          </View>

          <View style={styles.row1_col2}>
          </View>

        </View>

        <View style={styles.row2}>
          <View style={styles.row2_col1}></View>
          <View style={styles.row2_col2}></View>
          <View style={styles.row2_col3}>
            <View style={styles.row2_col3_row1}></View>
            <View style={styles.row2_col3_row2}></View>
          </View>



        </View>


      </View>

    );
  }


}
const styles = StyleSheet.create({
  container:{
    flex:3,
    borderWidth:10,
    backgroundColor:'green',
    flexDirection:'column'
  },

  row1:{
    flex:2,
    borderWidth:5,
    backgroundColor:'yellow',
    flexDirection:"row"
  },
  row2:{
    flex:1,
    borderWidth:5,
    backgroundColor:'blue',
    flexDirection:"row"

  },

  row1_col1:{
    flex:1,
    flexDirection:'column',
    borderWidth:5,
    backgroundColor:'white',
  },
  row1_col2:{
    flex:2,
    borderWidth:5,
    backgroundColor:'red',
  },


  row1_col1_row1:{
    flex:1,
    borderWidth:5,
    // borderColor:'blue',
    backgroundColor:'white',

  },
  row1_col1_row2:{
    flex:2,
    borderWidth:5,
    backgroundColor:'white',
  },

  row2_col1:{
    flex:1,
    borderWidth:5,
    backgroundColor:'blue',
  },
  row2_col2:{
    flex:1.5,
    borderWidth:5,
    backgroundColor:'white',
  },
  row2_col3:{
    flex:0.5,
    borderWidth:5,
    backgroundColor:'green',
  },

  row2_col3_row1:{
    flex:0.5,
    borderWidth:5,
    backgroundColor:'white',
  },
  row2_col3_row2:{
    flex:0.5,
    borderWidth:5,
    backgroundColor:'yellow',
  },





});
