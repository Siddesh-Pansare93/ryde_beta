import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import "../global.css"

const Home = () => {

  return (
    <Redirect href="/(auth)/welcome" /> 
    // <View className='bg-red-200 h-full w-full '>
    //     <Text>Home</Text>
    // </View>
  )
}

export default Home