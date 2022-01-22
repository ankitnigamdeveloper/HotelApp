import {StyleSheet,StatusBar,Dimensions} from "react-native"

export default  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    view:{
      flex:1, 
      // marginTop:StatusBar.currentHeight,
      backgroundColor:"white",
      // height:Dimensions.get("window").height - StatusBar.currentHeight,
      width:Dimensions.get("window").width,
      alignSelf:"center",
    //   alignItems: 'center',
      justifyContent: 'center',
      // marginHorizontal:17
    //   padding:15,
      },
    });