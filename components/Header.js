import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { globalStyles } from '../styles/global'
const Header = () => {
    return (
            <View style={globalStyles.headerContainer}>
                <Image style={globalStyles.headerImage} source={require('../assests/img/1.jpg')} />
                <Text style={globalStyles.headerText}>DarkWiki</Text>
                <Image style={globalStyles.headerImage} source={require('../assests/img/1.jpg')} />
            </View>
    
    )
}

export default Header
