import React,{
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'
import commonStyles from './styles/commonStyles'

var bookDetail=({detail})=>{
  return(
    <View style={styles.bookContainer}>
      <View style={[styles.section, styles.rowDirection]}>
        <View style={[styles.redBorder,{flex:0.4}]}>
          <Image source={require('./imgs/download.jpeg')}
           style={{width:160,height:240}}  />
        </View>
        <View style={[styles.blueBorder,{flex:0.6}]}>
          <View><Text style={commonStyles.bookTitle}>{detail.title}</Text></View>
          <View><Text>{detail.author}</Text></View>
          <View><Text>出版时间：{detail.publishedDate}</Text></View>
        </View>
      </View>

      <View style={[styles.section, {flex:0.6}]}>
        <View style={[{flex:0.1},styles.blueBorder]}><Text>购买来源：</Text></View>
        <View style={[styles.sourceSectionContainer, {flex:0.8}]}>

          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Amazon]}>
              <Text style={styles.link_Text}>亚马逊：6元</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Douban]}>
              <Text style={styles.link_Text}>豆瓣： 13.2元</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Dangdang]}>
              <Text style={styles.link_Text}>当当：10元</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Tuling]}>
              <Text style={styles.link_Text}>图灵：22元</Text>
            </View>
          </TouchableHighlight>


          </View>
      </View>
    </View>
  )
}

var styles= StyleSheet.create({
    rowDirection:{
      flexDirection:'row',
    },
    section:{
      flex:0.3,
      borderColor:'red',
      borderWidth:2,
      alignSelf: 'stretch',
    },
    bookContainer:{
      flexDirection:'column',
      flex:1,
      alignSelf:'stretch',
    },
    redBorder:{
      borderColor:'red',
      borderWidth:2,
    },
    blueBorder:{
      borderColor:'blue',
      borderWidth:2,
    },
    sourceSection:{
      width:150,
      borderColor:'red',
      borderWidth:1,
      height:100,
      margin:15,
      borderRadius:2
    },
    sourceSectionContainer:{
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent:'center'
    },
    link_Style:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    bgColor_Amazon:{
      backgroundColor:'orange',
    },
    bgColor_Douban:{
      backgroundColor:'green'
    },
    bgColor_Dangdang:{
      backgroundColor:'#CC3333'
    },
    bgColor_Tuling:{
      backgroundColor:'blue'
    },
    link_Text:{
      color:'white',
      fontSize: 18
    }
})

function mapStateToProps(state){
  let { ebookDetail } = state
  return {
    detail: ebookDetail
  }
}

var Result=connect(mapStateToProps)(bookDetail)

export default Result
