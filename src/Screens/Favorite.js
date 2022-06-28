import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Favorite() {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={{color:'white'}}>Favorite</Text>
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