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
      marginTop:StatusBar.currentHeight,
      backgroundColor:"white",
      height:Dimensions.get("window").height - StatusBar.currentHeight,
      width:Dimensions.get("window").width,
      alignItems: 'center',
      justifyContent: 'center',
      // marginHorizontal:17
      padding:15,
      },
      text:{
        marginTop:12,
        fontSize:16,
        fontWeight:"bold",
        alignSelf:"center",
        fontWeight:"bold",
       },
        // componentDidMount(){
    //     const  Language = this.props.route.params.Language
  
    // //   this.setState({signuptoken:token})
    //   // this.setState({restourant:restourant})
    //     console.log(Language)
    // }
    });