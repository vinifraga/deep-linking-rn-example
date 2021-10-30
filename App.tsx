import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

function HomeScreen() {
  const { params } = useRoute();

  console.log(params);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  const { params } = useRoute();

  console.log(params);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const config = {
  screens: {
    Home: {
      path: 'home',
    },
    Settings: {
      path: 'settings/:options'
    }
  },
};

export default function App() {
  const linking = {
    prefixes: ['https://deep.com', 'http://deep.com', "deep://deep"],
    config,
  };
  
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}