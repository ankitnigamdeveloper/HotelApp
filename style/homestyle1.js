import {StyleSheet,StatusBar, Dimensions} from 'react-native'

export default StyleSheet.create({
    mainview: {
    //   flex: 1,
    //   width:Dimensions.get("window").width,
    //   height:Dimensions.get('window').height,
      paddingVertical:15,
      paddingHorizontal:30,
      backgroundColor: 'white',
    //   marginTop: StatusBar.currentHeight,
    //   alignItems: 'center',
      justifyContent: 'space-between',
    //   marginBottom: 150
    },
    topbarview:{
        height:50,
        // backgroundColor:"red",
        borderRadius: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'purple',
        marginLeft: 1,
        marginRight: 1

    },
    lefttab:{
        alignItems: 'center',
        flex:1,
        // backgroundColor:'white',
        justifyContent:"center",
        borderTopLeftRadius: 10, 
        borderBottomLeftRadius:10,
        

    },
    righttab:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        borderTopRightRadius: 10, 
        borderBottomRightRadius:10
    },
    selectedtxt:{
        fontSize: 18,
        fontWeight: 'bold', 
        color:"white"
    },
    unselectedtxt:{
        color:"black", 
        fontSize:16
    }
})