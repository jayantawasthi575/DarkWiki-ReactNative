import React, { useEffect, useState } from 'react'
import { View, Text,Image, ScrollView } from 'react-native'
import {globalStyles} from '../styles/global'
import data from '../dbc.json'
import Headers from './Headers'
const ArtistInfo = ({ navigation, route }) => {
    const { name, next, pointer } = route.params
    const [img1,imgsta1]=useState('https://bingeguy.com/uploads/darkLG.jpg')
    const [img2,imgsta2]=useState('https://i0.wp.com/brainsandcareers.com/wp-content/uploads/2018/01/the_stranger_rough_3.jpg')
    const [img3,imgsta3]=useState('https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Adam-Is-Jonas.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5')
   
    useEffect(() => {
        let alphagamma=data[name]
        imgsta1(alphagamma["image1"])
        imgsta2(alphagamma["image2"])
        imgsta3(alphagamma["image3"])
    }, [])
    return (
        <ScrollView>
        <View style={globalStyles.container}>
            <Headers props={name}/>
            <Image style={globalStyles.AppImagesss} source={{ uri:img1 }} />
            <Image style={globalStyles.AppImagesss} source={{ uri:img2 }} />
            <Image style={globalStyles.AppImagesss} source={{ uri:img3 }} />   
        </View>
        </ScrollView>
    )
}

export default ArtistInfo

