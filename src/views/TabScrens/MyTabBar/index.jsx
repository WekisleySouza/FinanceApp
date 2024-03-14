import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MyTabBar({ state, descriptors, navigation }){
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
            const color = '#000000'
            const size = 10
            const { options } = descriptors[route.key];
            const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const tabIcon = descriptors[route.key].options.tabBarIcon 
                ? descriptors[route.key].options.tabBarIcon
                : false;

            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

            return (
            <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1 }}
            >
                {() => tabIcon({ isFocused, size, color })}
                <Text style={{ color: isFocused ? '#eeeeee' : '#000000' }}>
                    {label}
                </Text>
            </TouchableOpacity>
            );
        })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        width: '95%',
        marginLeft: '2.5%',
        marginBottom: 10,
        backgroundColor: 'blue',
        flexDirection: 'row',
    }
}) 