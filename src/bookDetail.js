import React,{
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

var bookDetail=({bookDetail})=>{
  return(
    <View>
      <Image source={require('./src/imgs/download.jpeg')}
      style={{width:50,height:80}} />
      <Text>{bookDetail.title}}</Text>
      
    </View>
  )
}
