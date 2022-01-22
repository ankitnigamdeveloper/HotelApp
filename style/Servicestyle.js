import {StyleSheet,StatusBar, Dimensions} from 'react-native'

export default StyleSheet.create({
    mainview: {
    //   flex: 1,
    //   width:Dimensions.get("window").width,
    //   height:Dimensions.get('window').height,
      paddingVertical:15,
      paddingHorizontal:30,
      backgroundColor: 'white',
      marginTop: StatusBar.currentHeight,
    //   alignItems: 'center',
      justifyContent: 'space-between',
    //   marginBottom: 150
    },
});