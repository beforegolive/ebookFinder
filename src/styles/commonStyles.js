import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  },
  bookContainer:{
    borderWidth:1,
    flex:1,
    padding:1,
    alignSelf: 'stretch',
  },
  bookDetail:{
    borderWidth:1,
    margin:3,
    borderColor:'#eee'
  },
  bookItem:{
    margin:2,
  },
  bookSubTitle:{
    flexDirection:'row'
  },
  bookTitle:{
    fontWeight:'bold',
    fontSize:17
  },
  bookAuthor:{
    color:'#999',
    marginRight:16
  },
  bookAvailableSource:{
    flexDirection:'row',
    paddingTop:8,
    paddingBottom:8
  },
  sourceText:{
    fontSize:18,
    fontWeight:'bold',
    paddingLeft: 4
  },
  source_Amazon:{
    color:'orange'
  },
  source_Douban:{
    color:'green'
  },
  source_Dangdang:{
    color:'#CC3333'
  },
  source_Tuling:{
    color:'blue'
  }
});

export default styles
