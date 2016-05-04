/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { searchBook } from './src/reducer.js'
import SearchResultList2 from './src/searchResultList'
import SearchBox from './src/searchBox'

var reducers = combineReducers({searchBook})
var store = createStore(reducers)

var IndexComponent= React.createClass({
  render(){
    return(
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to ebookFinder!
      </Text>
      <View style={styles.centerContainer}>
        <TextInput style={styles.textInput} defaultValue='123' />
          <TouchableHighlight style={styles.button} onPress={this._clickButton}>
            <Text style={styles.buttonText}>Press Me</Text>
          </TouchableHighlight>
      </View>
    </View>
    )
  },
  _clickButton(){
    this.props.navigator.push({id:2});
  },
  componentDidMount(){

  }
})

var SearchResultList= React.createClass({
  render(){
    return(
    <View style={styles.container}>
      <Text>This Is SearchResultList</Text>
      <TouchableHighlight style={styles.button} onPress={this._handleClick}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableHighlight>
    </View>
  )
  },
  _handleClick(){
    this.props.navigator.pop();
  }
})

Navigator.contextTypes = { store: React.PropTypes.object };
class ebookFinder extends Component {
  _renderScene(r,n){
    switch (r.id) {
      case 1:
        return <SearchBox navigator={n}/>
      case 2:
        return <SearchResultList2 navigator={n}/>
      default:
        return <IndexComponent navigator={n}/>
    }
  }

  componentDidMount(){
    // alert('Navigator componentDidMount')
    // console.log(this.context.store);

  }

  render() {
    return (
    <Provider store={store}>
      <Navigator initialRoute={{id:1}}
          configureScene={(route,routeStack) =>
          Navigator.SceneConfigs.FloatFromRight}
          renderScene={(r, n)=>{
            return(
              <View style={styles.container}>
                  <View style={styles.routeHeader}>
                    <TouchableHighlight onPress={()=>{
                        n.pop();
                      }}>
                      <Text style={styles.routeHeaderText}>Back {n.length}</Text>
                    </TouchableHighlight>
                  </View>
                  {this._renderScene(r,n)}
              </View>
            )
          }} />
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  routeHeader:{
    backgroundColor:'#4285f4',
    borderColor:'#aaa',
    borderWidth:1,
    borderRadius:2,
    borderLeftWidth:0,
    height:40,
    alignSelf: 'stretch',
  },
  routeHeaderText:{
    color:'white',
    paddingLeft:8,
    paddingTop:8,
    fontSize:17,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:21,
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

AppRegistry.registerComponent('ebookFinder', () => ebookFinder);
