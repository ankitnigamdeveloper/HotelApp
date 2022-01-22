import {StyleSheet,StatusBar,Dimensions} from "react-native"

export default  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainview:{
      flex:1, 
      marginTop:StatusBar.currentHeight,
      backgroundColor:"white",
      height:Dimensions.get("window").height - StatusBar.currentHeight,
      width:Dimensions.get("window").width,
      alignItems: 'center',
      justifyContent: "space-between",
      // marginHorizontal:17
      padding:15,
      },
      DBmages:{
        height:170,
        width:300,
        resizeMode:"contain",
       },
       text:{
        marginTop:44,
        fontSize:16,
        // marginRight:12,
        fontWeight:"700",
        alignSelf:"flex-start",
        marginBottom:18,
        
       },
       text1:{
        marginTop:1,
        fontSize:16,
        fontWeight:"bold",
        alignSelf:"center",
        fontWeight:"bold",
       },
      //  textinput2:{
      //   height:40,
      //   width:"99%",
      //   marginLeft:0.5,
      //   marginRight:0.5,
      //   // backgroundColor:"red",
      //   // paddingHorizontal:2,
      // //   padding:10,
      //   borderWidth:1,
      //   borderRadius:5,
      //   borderColor: 'white', 
      //   color:"black",
      //   fontWeight:'bold',
      //   fontSize:14,
      //   paddingLeft:12,
      //   fontWeight:"700",
      //   elevation:1,
      //   shadowOffset: { width: 1, height: 1 },
      //   shadowColor: 'gray',
      //   shadowOpacity: 0.3,
      //   marginTop:15,
      //   },
        logbutton:{
            
            height:50,
            width:Dimensions.get("window").width-60,
            // width:"100%",
            backgroundColor:"purple",
            margin:8,
            alignItems:"center",
            justifyContent:"space-evenly",
            borderRadius:7,
            // borderWidth:2,
            // padding:16,
            // color:"red",
            alignSelf:"center",
            
            },

            logbutton1:{   
              alignSelf:"center",
             // elevation:6,
              fontSize:22,
              },
              picker:{ 
                height: 40, 
                // width: "100%",
                // flex:1,
                borderWidth:1,
                borderRadius:5,
                shadowOffset: { width: 1, height: 1 },
                shadowColor: 'gray',
                shadowOpacity: 1,
                // borderColor:"red",
                // backgroundColor:"green",
                // borderBottomColor:"yellow" ,
                // margintop:77,
                color:"green",
                justifyContent:"center"
                }
    });