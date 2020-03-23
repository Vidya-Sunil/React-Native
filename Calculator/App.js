/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button ,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component{
  constructor() {
    super()
    this.state= {}
  }


  render () {

     let rows = []
     let nums = [[1,2,3],[4,5,6],[7,8,9],[0,0,'=']]
     for(let i = 0;i < 4 ; i++){
        let row = []
        for (let j = 0 ; j < 3 ; j++){
         row.push(<TouchableOpacity style={styles.btn}>
                     <Text style={styles.btntext}>{nums[i][j]}</Text>
                  </TouchableOpacity >)
         }
         rows.push(<View style={styles.row}>{row}</View>)
     }
     let operations =['+','-','*','/']
     let opps= []
      for(let i = 0;i < 4 ; i++){
          opps.push(<TouchableOpacity style={styles.btn}>
                       <Text style={styles.white}>{operations[i]}</Text>
                    </TouchableOpacity >)
      }
    return (
        <View style={styles.container}>
            <View style={styles.result}>
               <Text style={styles.resultText}>11*11</Text>
            </View>
            <View style={styles.calculation}>
                <Text style={styles.calculationText}>121</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                  {rows}
                </View>
                <View style={styles.operations}>
                   {opps}
                </View>
            </View>
        </View>
     );
}
}

const styles = StyleSheet.create({
  container:{
     flex : 1,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'stretch',
    justifyContent: 'center',
  },
  btntext:{
     fontSize:30,
  },
  white: {
      color: 'white',
      fontSize:30,
  },
  row:{
     flexDirection: 'row',
     flex: 1,
     justifyContent: 'space-around',
     alignItems: 'center',
  },
  result: {
      flex : 2,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'flex-end',
  },
  resultText:{
       fontSize: 30,
        color: 'white',
  },
  calculation:{
      flex: 1,
      backgroundColor: 'green' ,
      justifyContent: 'center',
      alignItems: 'flex-end',
  },
  calculationText: {
      fontSize: 24,
      color: 'white',
  },
  buttons: {
      flex : 7,
      flexDirection: 'row',
  },
  numbers: {
      flex:3,
      backgroundColor:'yellow' ,
  },
  operations: {
      flex : 1,
      justifyContent: 'space-around',
      alignItems:'stretch',
      backgroundColor: 'black',
  },
});

