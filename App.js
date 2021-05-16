import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Season from './components/Season';
import Award from './components/Award';
import TimeTravel from './components/TimeTravel';
import Critics from './components/Critics';
import FamilyTree from './components/FamilyTree';
import Information from './components/Information';
import Artist from './components/Artist';
import ArtistInfo from './components/ArtistInfo';

const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen name="Season" component={Season} options={({ route }) => ({
                    title: "", headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff'
                })} />
                <Stack.Screen name="FamilyTree" component={FamilyTree} options={{
                    title: "",
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff'
                }} />
                <Stack.Screen name="Artist" component={Artist} options={{
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff'
                }} />
                <Stack.Screen name="Critics" component={Critics} options={{
                    title: "",
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff'
                }}/>
                <Stack.Screen name="Award" component={Award} options={{
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff'
                }}/>
                <Stack.Screen name="Information" component={Information} options={({ route }) => ({
                    title: "", headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff'
                })}/>
                <Stack.Screen name="ArtistInfo" component={ArtistInfo} options={({ route }) => ({
                    title: "", headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff'
                })}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
