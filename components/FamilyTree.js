import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { globalStyles } from '../styles/global'
import Headers from './Headers'

const FamilyTree = ({ navigation, route }) => {
    const { name } = route.params
    const [family, setfamily] = useState([
        { season: "Season1", imagesrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Dark_family_tree_season_1.jpg/1350px-Dark_family_tree_season_1.jpg", key: '1' },
        { season: "Season2", imagesrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dark_family_tree_season_2.jpg/1500px-Dark_family_tree_season_2.jpg", key: '2' },
        { season: "Season3", imagesrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dark_family_tree_season_3_-_version_1.jpg/1800px-Dark_family_tree_season_3_-_version_1.jpg", key: '3' }
    ])
    console.log(route.params["name"])
    return (
        <ScrollView>
        <View style={globalStyles.container}>
            <Headers props={name} />
            {family.map((item) => (
                <View key={item.key}>
                    <View style={{display:'flex',justifyContent:'center',marginBottom:10,alignItems:'center'}}>
                        <Text style={globalStyles.textTouchables}>{item.season}</Text>
                    </View>
                    <Image style={{ marginBottom:40, height: 200 }} source={{ uri: item.imagesrc }} />
                </View>
            ))}
        </View>
        </ScrollView>
    )
}

export default FamilyTree
