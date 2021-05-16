import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image,TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'
import Headers from './Headers'

const Season = ({ navigation, route }) => {
    const { name } = route.params
    const [end,setend]=useState('')
    const [episode, setepisode] = useState([
    { location: "Information", name: "Episode1", key: '1' },
    { location: "Information", name: "Episode2", key: '2' },
    { location: "Information", name: "Episode3", key: '3' },
    { location: "Information", name: "Episode4", key: '4' },
    { location: "Information", name: "Episode5", key: '5' },
    { location: "Information", name: "Episode6", key: '6' },
    { location: "Information", name: "Episode7", key: '7' },
    { location: "Information", name: "Episode8", key: '8' }])
    const [image,setimage]=useState('https://mfiles.alphacoders.com/760/760498.jpg')
    useEffect(() => {
        if (name == 'Season1') {
            setepisode([...episode,
                { location: "Information", name: "Episode9", key: '9' },
                { location: "Information", name: "Episode10", key: '10' }  
            ])
            setend('10')
        }
        else if(name=='Season2'){
            setimage('https://i.pinimg.com/474x/57/8b/95/578b952b711703a708c327486febf93e.jpg')
            setend('8')
        }
        else if(name=='Season3'){
            setimage('https://static.wikia.nocookie.net/dark-netflix/images/f/fd/DarkS3Poster.jpg/revision/latest?cb=20200619224417')
            setend('8')
        }
    }, [])
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Headers props={name} />
                <Image style={globalStyles.AppImages} source={{ uri: image }} />
                {episode.map((item)=>(
                <View key={item.key} style={globalStyles.touchables}>
                    <TouchableOpacity onPress={()=>{navigation.navigate(item.location,{ name:item.name , season:name, keydist:item.key ,end:end})}}>
                        <Text style={globalStyles.textTouchables}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default Season
