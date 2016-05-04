import React,{
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'
import * as Actions from './actionCreator'
import {bindActionCreators} from 'redux'

var searchBox=({keyword, onPress})=>{
  var _localText
  return(
    <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to ebookFinder!
    </Text>
    <View style={styles.centerContainer}>
      <TextInput style={styles.textInput}
      defaultValue={keyword} onChangeText={(text)=> this._localText=text}/>
        <TouchableHighlight style={styles.button} onPress={(e)=>{
          onPress(this._localText)
        }
      }>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableHighlight>
    </View>
  </View>)
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
  textInput:{
    textAlign:'left',
    height:50,
    width:200,
    borderColor:'#aaa',
    borderWidth:1,
    borderRightWidth:0,
    borderRadius:2,
    paddingLeft:6,
  },
  centerContainer:{
    flexDirection:'row'
  },
  button:{
    backgroundColor:'#4285f4',
    padding:14,
    borderColor:'#aaa',
    borderWidth:1,
    borderRadius:2,
    borderLeftWidth:0,
  },
  buttonText:{
    color:'white',
  }
});

function mapStateToProps(state){
  const { searchBook } = state
  return {
    keyword: searchBook.keyword
  }
}

function mapDispatchToProps(dispatch, ownProps){
  var boundActionCreators= bindActionCreators(Actions,dispatch)
  return {
    onPress: (value)=>{
      boundActionCreators.searchBookAction(value);
      ownProps.navigator.push({id:2});
    }
  }
}

var Result=connect(
  mapStateToProps,
  mapDispatchToProps)(searchBox)

export default Result
