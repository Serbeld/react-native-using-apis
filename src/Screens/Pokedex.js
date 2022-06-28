import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Pokedex() {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={{color:'white'}}>Pokedex</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020914',
        alignItems: 'center',
        justifyContent: 'center',
    },
});