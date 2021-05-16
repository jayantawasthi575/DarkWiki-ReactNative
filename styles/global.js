import React from 'react'
import { StyleSheet,Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black'
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        paddingTop:5,
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
        color:'white',
        fontSize:20
    },
    headerImage:{
        height:80,
        width:80
    },
    AppImage:{
        width:windowWidth,
        height:windowHeight-90
    },
    AppImages:{
        width:windowWidth,
        height:windowHeight-90,
        marginBottom:40
    },
    touchables:{
        display:'flex',
        justifyContent:'center',
        marginBottom:40,
        alignItems:'center'
    },
    AppImagess:{
        height:300
    },
    AppImagesss:{
        height:300,
        marginBottom:10,
        marginTop:10
    },
    textTouchables:{
        fontSize:18,
        color:'white',
        fontFamily:'Cambria',
        fontWeight:'100',
        letterSpacing:1
    }
})


