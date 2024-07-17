import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import { Foundation, Ionicons } from '@expo/vector-icons';
import HomeHeader from '@/components/HomeHeader';
import LibraryHeader from '@/components/LibraryHeader';
import UserProfile from '@/components/Profile';

export default function _layout() {
    return (
        <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#000000' }, tabBarActiveTintColor: '#ffffff', headerStyle: { backgroundColor: 'black' } }}>
            <Tabs.Screen
                name="(home)"
                options={{
                    // headerTitle: props => <HomeHeader {...props} />,
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Foundation size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="library"
                options={{
                    headerTitle: props => <LibraryHeader {...props} />,
                    title: 'Your Library',
                    tabBarIcon: ({ color }) => <Ionicons name="library-outline" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="(search)"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={24} color={color} />,
                }}
            />
        </Tabs>
    )
}