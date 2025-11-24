import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 32, fontWeight: 900 }}>Conversor de unidades</Text>
            <View >
                <Link href="/longitud" style={styles.link}>LONGITUD</Link>
                <Link href="/peso" style={styles.link}>PESO</Link>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 70
    },
    link: {
        fontSize: 30,
    }
})