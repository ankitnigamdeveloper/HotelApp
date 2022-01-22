import {StyleSheet,StatusBar,Dimensions} from "react-native"

export default  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainview:{
      // flex:1, 
      // marginTop:StatusBar.currentHeight,
      backgroundColor:"white",
      height:Dimensions.get("window").height - StatusBar.currentHeight,
      width:Dimensions.get("window").width,
    //   alignItems: 'center',
      // justifyContent: 'center',
      // marginHorizontal:17
    //   padding:15,
    // marginTop:50,
      },
      Backgroundimage:{
        resizeMode:"cover",
        width:"100%",
        height:"100%",
      },
      Image:{
          height:100,
          width:200,
          resizeMode:"cover",
          alignSelf:"center",
          marginTop:60,
      },
      logbutton:{
        height:35,
        width:55,
        backgroundColor:"red",
        marginTop:25,
        marginLeft:20,
       },
        Menu:{
            height:25,
            width:25,
            resizeMode:"contain",
        },
    })