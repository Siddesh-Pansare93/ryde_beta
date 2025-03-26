import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Rides } from '@/assets/mockData/ridesData'
import RideCard from '@/components/RideCard'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '@/constants'
import Map from '@/components/Map'
import GoogleTextInput from '@/components/GoogleTextInput'




const home = () => {
  const { user } = useUser()

  const handleSignOut = () => { }
  return (
    <SafeAreaView className='bg-general-500 p-3'>
      <StatusBar backgroundColor='black' />
      <View className='flex flex-row justify-between items-center'>
        <Text className='text-xl font-JakartaBold'>Welcome 👋 ,  {user?.emailAddresses[0].emailAddress.slice(0, user?.emailAddresses[0].emailAddress.indexOf('@'))}</Text>
        <TouchableOpacity onPress={handleSignOut}>
          <Image source={icons.out} className='w-5 h-5' />
        </TouchableOpacity>
      </View>

      <View className='my-4'>
        <GoogleTextInput />
      </View>

      <View className='flex flex-col  '>
        <Text className='text-xl font-JakartaBold'>Your Current Location</Text>
        <View className='flex flex-row w-full h-[300px] p-4'>
          <Map/>
        </View>
      </View>

      <Text className='text-xl font-JakartaBold'>Recent Rides</Text>
      <FlatList
        data={Rides}
        renderItem={({ item }) => (
          // <Text >{item.driver.first_name}</Text>
          <RideCard ride={item} />
          
        )}
        keyboardShouldPersistTaps = "handled"
        ListEmptyComponent={() => (
          <View className='flex justify-center items-center'>
            <Image 
              source={images.noResult}
              className='w-40 h-40'
            /> 
            <Text className='text-lg font-JakartaMedium italic'>No Recent Rides found</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default home