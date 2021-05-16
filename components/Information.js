import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { globalStyles } from '../styles/global'
import Headers from './Headers'
import data from '../dbs1.json'
import datas2 from '../dbs2.json'
import datas3 from '../dbs3.json'
const Information = ({ navigation, route }) => {
    const { name, season, keydist, end } = route.params
    const [next, setnext] = useState('')
    const [num, setnum] = useState('')
    const [alpha, setalpha] = useState(false)
    const [datastate, setdatastate] = useState({ name: "", info: "", image: "https://i.pinimg.com/originals/bc/6b/77/bc6b779e800744abe0122646ffe5ae51.png" })
    useEffect(() => {
        if (season == "Season1") {
            let gammabeta = data[name]
            setdatastate({
                name: gammabeta['epsname'],
                info: gammabeta['epinfo'],
                image: gammabeta['image']
            })
        }
        else if(season=="Season2")
        {
            let gammabeta = datas2[name]
            setdatastate({
                name: gammabeta['epsname'],
                info: gammabeta['epinfo'],
                image: gammabeta['image']
            })
        }else if(season=="Season3")
        {
            let gammabeta = datas3[name]
            setdatastate({
                name: gammabeta['epsname'],
                info: gammabeta['epinfo'],
                image: gammabeta['image']
            })
        }
        if (parseInt(end) > parseInt(keydist)) {
            setnext('Episode' + String(parseInt(keydist) + 1))
            setnum(String(parseInt(keydist) + 1))
        } else {
            setalpha(true)
        }
    }, [])
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Headers props={datastate['name']} />
                <Image style={globalStyles.AppImagess} source={{ uri: datastate['image'] }} />
                <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 5, marginBottom: 10 }}>{datastate['info']}</Text>
                <View style={globalStyles.touchables}>
                    {alpha === false && (
                        <>
                            <TouchableOpacity onPress={() => { navigation.push('Information', { name: next, season: season, keydist: num, end: end }) }}>
                                <Text style={globalStyles.textTouchables}>{next}</Text>
                            </TouchableOpacity>
                            <View style={{ marginTop: 20 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Text style={globalStyles.textTouchables}>Home</Text>
                            </TouchableOpacity>
                        </>)}
                    {alpha === true && (<TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={globalStyles.textTouchables}>Home</Text>
                    </TouchableOpacity>)}
                </View>
            </View>
        </ScrollView>
    )
}

export default Information


