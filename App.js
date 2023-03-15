import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './components/Home.js'
import My from './components/My.js'
import Login from './views/login/index.js'
import Detail from './views/detail/index.js'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/themed'

const Tab = createBottomTabNavigator()
const RootStack = createNativeStackNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline'
        } else if (route.name === 'My') {
          iconName = focused ? 'md-person' : 'md-person-outline'
        }

        return <Icon name={iconName} type='ionicon' size={size} color={color} />
      },
      tabBarActiveTintColor: '#33a0d3',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={Home} options={{ title: '首页' }} />
      <Tab.Screen name="My" component={My} options={{ title: '我的' }} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [token, setToken] = useState('')

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack.Navigator>
        <RootStack.Screen name="HomeTab" component={HomeTabs} options={{ headerShown: false }} />
        <RootStack.Screen name="Detail" component={Detail} options={({ navigation }) => ({
          title: '详情页'
        })} />
        <RootStack.Screen name="Login" component={Login} options={{ title: '登录', animationTypeForReplace: 'pop' }} />
        {/* {
          token ? (
            <>
            </>
          ) :
            (
            )
        } */}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
