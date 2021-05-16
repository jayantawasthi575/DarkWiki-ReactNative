import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { globalStyles } from '../styles/global'
import Header from './Header'
const Home = ({ navigation }) => {
    const [locate, setlocate] = useState([
        { location: "Season", name: "Season1",key:'1' },
        { location: "Season", name: "Season2",key:'2' },
        { location: "Season", name: "Season3",key:'3' },
        { location: "FamilyTree", name: "FamilyTree",key:'4' },
        { location: "Artist", name: "Main Characters",key:'5' },
        { location: "Critics", name: "Critics",key:'6' },
        { location: "Award", name: "Award",key:'7' },
    ])
    const onPress = () => {
        navigation.navigate('Season',{name:"Season1"})
    }
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Header />
                <Image style={globalStyles.AppImage} source={{ uri: 'https://i.pinimg.com/originals/bc/6b/77/bc6b779e800744abe0122646ffe5ae51.png ' }} />
                {locate.map((item)=>(
                <View key={item.key} style={globalStyles.touchables}>
                    <TouchableOpacity onPress={()=>{navigation.navigate(item.location,{ name:item.name })}}>
                        <Text style={globalStyles.textTouchables}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
                ))}
                <View style={{ height: 100 }}>

                </View>
            </View>
            </ScrollView> 
    )
}

export default Home




