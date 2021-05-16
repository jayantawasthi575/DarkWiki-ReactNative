import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Headers from './Headers'
import { globalStyles } from '../styles/global'
const Critics = ({ navigation, route }) => {
    const { name } = route.params
    return (
        <ScrollView>
        <View style={globalStyles.container}>
            <Headers props={name} />
            <Text style={{ color: 'white', marginTop: 10, fontSize: 14, marginLeft: 20, marginBottom: 25,marginRight:20 }}>The first season of Dark received mostly positive reviews from critics, with many noting its similarities to the TV series Twin Peaks and the Netflix series Stranger Things. The review aggregator website Rotten Tomatoes gave the first season an approval rating of 89%, with an average rating of 7.36 out of 10 based on 45 critics. The website's critical consensus is "Dark's central mystery unfolds slowly, both tense and terrifying, culminating in a creepy, cinematic triumph of sci-fi noir." The Guardian praised the series for its tone, the complexity of its narrative, and its pacing. Metacritic reported a score of 61 out of 100 based on 10 reviews, indicating "generally favorable reviews". Refinery29 noted that the series was darker and more in-depth than Stranger Things. However, there was some criticism by a reviewer for a heavy-handed approach to its message, a lack of sympathetic characters, and unoriginality of certain aspects of the series.

            The second season received critical acclaim. Metacritic, which assigns a weighted average score out of 100 to reviews and ratings from mainstream publications, gave the season an average score of 82, based on 4 reviews, indicating "universal acclaim".On Rotten Tomatoes, season two of the series holds an approval rating of 100% based on 29 reviews, with an average rating of 8.07/10, with the "Certified Fresh" status. The site's critical consensus states, "Dark's sumptuous second season descends deeper into the show's meticulously-crafted mythos and cements the series as one of streaming's strongest and strangest science fiction stories." Critics referred to season two as ominous and much more bizarre than season one, and that the series managed to subvert several tropes regarding the concepts of time travel.

            The third season received critical acclaim. It holds an approval rating of 97% on Rotten Tomatoes based on 30 reviews, with an average rating of 8.54/10, with the "Certified Fresh" status. The site's critical consensus states, "Dark's final chapter is as thrilling as it is bewildering, bringing viewers full circle without sacrificing any of the show's narrative complexities." At Metacritic the season received an average score of 92, based on 4 reviews, indicating "universal acclaim".</Text>
        </View>
        </ScrollView>
    )
}

export default Critics
