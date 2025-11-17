import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

function TabBarIcon(props) {
    return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1E1E1E',
                },
                headerTintColor: '#FFFFFF',
                tabBarStyle: {
                    backgroundColor: '#1E1E1E',
                    borderTopColor: '#333',
                    height: 60,
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: '#888',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 5,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
                }}
            />
            <Tabs.Screen
                name="sobre"
                options={{
                    title: 'Tecnologias',
                    tabBarIcon: ({ color }) => <TabBarIcon name="hardware-chip-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="academica"
                options={{
                    title: 'Acadêmica',
                    tabBarIcon: ({ color }) => <TabBarIcon name="school" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profissional"
                options={{
                    title: 'Profissional',
                    tabBarIcon: ({ color }) => <TabBarIcon name="briefcase" color={color} />,
                }}
            />
            <Tabs.Screen
                name="projetos"
                options={{
                    title: 'Projetos',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code-slash" color={color} />,
                }}
            />
            <Tabs.Screen
                name="jogo"
                options={{
                    title: 'Forca',
                    headerTitle: 'Forca Tech',
                    tabBarIcon: ({ color }) => <TabBarIcon name="game-controller" color={color} />,
                }}
            />
        </Tabs>
    );
}