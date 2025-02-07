import React from 'react';
import { Link, Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Foundation from '@expo/vector-icons/Foundation';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={25} name="home-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tracking"
        options={{
          title: 'Time Tracking',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={25} name="timer" color={color} />,
        }}
      />
      <Tabs.Screen
          name="languages"
          options={{
              title: 'Languages',
              headerShown: false,
              tabBarIcon: ({ color }) => <Foundation size={25} name="graph-bar" color={color} />
          }}
      />
      <Tabs.Screen
          name="analytics"
          options={{
              title: 'Analytics',
              headerShown: false,
              tabBarIcon: ({ color }) => <Ionicons size={25} name="analytics" color={color} />
          }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={25} name="person-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
