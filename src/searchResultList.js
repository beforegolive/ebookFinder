import React, {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actionCreator'

var SearchResult= ({keyword, bookList, goToDetail})=>{
  return(
    <View style={styles.container}>
      <View style={styles.bookContainer}>
      {
        bookList.map((item,i)=>{
         return <TouchableHighlight key={i} onPress={()=>goToDetail(item.id)}>
         <View style={styles.bookDetail} >
            <View style={styles.bookItem}>
              <Text style={styles.bookTitle}>{item.title}</Text>
            </View>
            <View style={styles.bookItem}>
              <View style={styles.bookSubTitle} >
                <Text style={styles.bookAuthor}>作者：{item.author}</Text>
                <Text style={styles.bookAuthor}>出版于：{item.publishedDate}</Text>
              </View>
            </View>
            <View style={styles.bookItem}>
              <View style={styles.bookAvailableSource} >
                <Text>可购买来源: </Text>
                <Text style={[styles.sourceText,styles.source_Amazon]}>亚马逊</Text>
                <Text style={[styles.sourceText,styles.source_Dangdang]}>当当</Text>
                <Text style={[styles.sourceText, styles.source_Douban]}>豆瓣</Text>
                <Text style={[styles.sourceText, styles.source_Tuling]}>图灵</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
       })
      }
      </View>
    </View>
  )
}

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



function mapStateToProps(state){
  const {searchBook} = state
  return{
    keyword:searchBook.keyword,
    bookList:searchBook.bookList
  }
}

function mapDispatchToProps(dispatch, ownProps){
  var boundActionCreators = bindActionCreators(Actions, dispatch)
  return {
    goToDetail: (bookId)=>{
      boundActionCreators.geteBookDetail(bookId);
      ownProps.navigator.push({id:3});
    }
  }
}

var Result=connect(mapStateToProps,mapDispatchToProps)(SearchResult)
export default Result
