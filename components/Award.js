import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Headers from './Headers'
import { globalStyles } from '../styles/global'
const Award = ({ navigation, route }) => {
    const { name } = route.params
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Headers props={name} />
                <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 20, marginBottom: 25, marginRight: 20 }}>The series was nominated for the Goldene Kamera TV awards 2018 in three categories: best series; best actress: Karoline Eichhorn as Charlotte Doppler; and best actor: Oliver Masucci as Ulrich Nielsen.None of these nominations resulted in awards, but Louis Hofmann received the "Best Newcomer" award in recognition (among others of his performances in several movies) of his lead role in Dark.[40] In August 2018, the series received a nomination in the category Best TV Show in the Brazilian BreakTudo Awards 2018, and actor Louis Hofmann was nominated in the category "International Actor".</Text>
                <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 20, marginBottom: 25, marginRight: 20 }}>
                    The series was awarded the 2018 Grimme-Preis award in the category "fiction", which singled out the following cast and crew for awards:</Text>
                <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 20, marginBottom: 25, marginRight: 20 }}>1)Jantje Friese (screenplay)</Text>
                <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 20, marginBottom: 25, marginRight: 20 }}>2)Baran bo Odar (director)</Text>
                <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 20, marginBottom: 25, marginRight: 20 }}>3)Udo Kramer (production design)</Text>
                <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 20, marginBottom: 25, marginRight: 20 }}>4)Simone Baer (casting)</Text>
                <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 20, marginBottom: 25, marginRight: 20 }}>5)Angela Winkler (actress)</Text>
                <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 20, marginBottom: 25, marginRight: 20 }}>6)Louis Hofmann (actor)</Text>
                <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 20, marginBottom: 25, marginRight: 20 }}>7)Oliver Masucci (actor)
</Text>
            </View>
        </ScrollView>
    )
}

export default Award
