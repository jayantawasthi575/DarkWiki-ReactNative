import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { globalStyles } from '../styles/global'
import Headers from './Headers'
const Artist = ({ navigation, route }) => {
    const { name } = route.params
    const [maincharactername, setmaincharactername] = useState([
        { name: "Jonas Kahnwald", key: '1', next: "Martha Nielsen" ,next1:"Claudia Tiedemann"},
        { name: "Martha Nielsen", key: '2', next: "Claudia Tiedemann" ,next1:"Noah"},
        { name: "Claudia Tiedemann", key: '3', next: "Noah" ,next1:"H.G. Tannhaus"},
        { name: "Noah", key: '4', next: "H.G. Tannhaus",next1:"The Unknown" },
        { name: "H.G. Tannhaus", key: '5', next: "The Unknown" ,next1:"Ulrich Nielsen"},
        { name: "The Unknown", key: '6', next: "Ulrich Nielsen",next1:"Hannah Kahnwald" },
        { name: "Ulrich Nielsen", key: '7', next: "Hannah Kahnwald" ,next1:"Mikkel Nielsen"},
        { name: "Hannah Kahnwald", key: '8', next: "Mikkel Nielsen",next1:"Magnus Nielsen" },
        { name: "Mikkel Nielsen", key: '9', next: "Magnus Nielsen",next1:"Bartosz Tiedemann" },
        { name: "Magnus Nielsen", key: '10', next: "Bartosz Tiedemann" ,next1:"Charlotte Doppler"},
        { name: "Bartosz Tiedemann", key: '11', next: "Charlotte Doppler",next1:"Franziska Doppler" },
        { name: "Charlotte Doppler", key: '12', next: "Franziska Doppler",next1:"Katharina Nielsen" },
        { name: "Franziska Doppler", key: '13', next: "Katharina Nielsen",next1:"Egon Tiedemann" },
        { name: "Katharina Nielsen", key: '14', next: "Egon Tiedemann",next1:"Regina Tiedemann" },
        { name: "Egon Tiedemann", key: '15', next: "Regina Tiedemann",next1:"Home" },
        { name: "Regina Tiedemann", key: '16', next: "Home",next1:"Home" }
    ])
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Headers props={name} />
                <View style={{ marginTop: 20 }}></View>
                {maincharactername.map((item) => (
                    <View key={item.key} style={globalStyles.touchables}>
                        <TouchableOpacity onPress={() => { navigation.navigate("ArtistInfo", { name: item.name, next: item.next,pointer: item.key }) }}>
                            <Text style={globalStyles.textTouchables}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default Artist
