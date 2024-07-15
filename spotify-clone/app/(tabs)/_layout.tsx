import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import { Foundation, Ionicons } from '@expo/vector-icons';
import HomeHeader from '@/components/HomeHeader';
import LibraryHeader from '@/components/LibraryHeader';

export default function _layout() {
    return (
        <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#000000' }, tabBarActiveTintColor: '#ffffff', headerStyle:{backgroundColor:'black'} }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: props => <LibraryHeader {...props} />,
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Foundation size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="library"
                options={{
                    headerTitle: props => <HomeHeader {...props} />,
                    title: 'Your Library',
                    tabBarIcon: ({ color }) => <Ionicons name="library-outline" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={24} color={color} />,
                }}
            />
        </Tabs>
    )
}