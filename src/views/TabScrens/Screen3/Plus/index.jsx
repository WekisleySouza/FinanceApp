import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'

export default function Plus({ focused, size, color }){
    return (
        <View style={[styles.container, {backgroundColor: focused ? '#3eccf5' : '#6fdfff'}]}>
            <Entypo name='plus' color={color} size={size} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginBottom: 25,
        borderRadius: 25,
    }
})