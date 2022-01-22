import {StyleSheet,Dimensions,} from "react-native"

export default  StyleSheet.create({
    
    flat:{
        height:170,
        flex:1,
        borderRadius:5, 
        // marginBottom:50,
        marginTop:10,
        marginRight:2, 
        flexDirection:"column",
        borderColor:"black",
        // backgroundColor:"green",
        marginVertical:2,
        alignItems:"center",
    },
       Flat1:{
        height:60,
        width:60,
        margin:2,
        borderRadius:30,
        // resizeMode:"contain",
        borderWidth:2,
        borderColor:"black",
        margin:12,
        marginVertical:2,
        marginLeft:44,
        alignItems:"flex-start",
        justifyContent:"center",
        padding:30,
        backgroundColor: "red"
       },
       images:{
         height:170,
        //  flex:1,
        //  width:"100%",
        width:Dimensions.get("window").width-60,
        borderRadius:44,
        flexDirection:"row",
      
       },
       nametxt:{
           fontSize:22,
           fontWeight:"bold",
           color:"yellow",
        },
        desctxt:{
            color:"white", 
            fontSize:18
        }
      
})