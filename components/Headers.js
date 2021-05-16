import React from 'react'
import { View, Text,Image } from 'react-native'
import { globalStyles } from '../styles/global'
const Headers = ({props}) => {
    return (
        <View style={globalStyles.headerContainer}>
            <Image style={globalStyles.headerImage} source={require('../assests/img/1.jpg')} />
            <Text style={globalStyles.headerText}>{props}</Text>
            <Image style={globalStyles.headerImage} source={require('../assests/img/1.jpg')} />
        </View>
    )
}

export default Headers
