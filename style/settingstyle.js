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
    //   justifyContent: 'center',
      // marginHorizontal:17
      padding:15,
    
      },
      text1:{
        fontSize:22,
        fontWeight:"bold",
         textAlign:"center",
         color:"mediumvioletred",
        
    },
      text:{
          fontSize:22,
          marginTop:12,
          
      }
    });