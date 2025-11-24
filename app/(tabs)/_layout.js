import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'INICIO',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),

                }}
            />
            <Tabs.Screen
                name="longitud"
                options={{
                    title: 'LONGITUD',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'barcode-sharp' : 'barcode-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="peso"
                options={{
                    title: 'PESO',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'flash-sharp' : 'flash-outline'} color={color} size={24} />
                    ),
                }}
            />

        </Tabs>
    );
}