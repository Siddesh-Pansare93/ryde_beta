import { View, Text , Image } from 'react-native'
import React from 'react'
import { Ride } from '@/types/types'
import { icons } from '@/constants'
import { formatDate, formatTime } from '@/lib/utils'

const RideCard = ({ride : {
    destination_address , 
    destination_latitude , 
    destination_longitude , 
    driver , 
    created_at , 
    origin_address , 
    ride_time , 
    fare_price , 
    payment_status

}} : {ride : Ride}) => {
  return (
    <View className='flex flex-col justify-center bg-white p-3 m-2  rounded-lg shadow-md shadow-black'>
        <View className='flex flex-row ' >
                <Image 
                    source = {{
                        uri : `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat:${destination_latitude},${destination_longitude}&zoom=14.3497&apiKey=2ab77ef261194d8b8eddb5dd7da64f34` 
                    }}
                    className='w-[80px] h-[80px] rounded-lg'
                /> 
                <View className='bg-white ml-4  flex justify-evenly'>
                    <View className='flex flex-row'>
                        <Image source={icons.to} className='w-5 h-5' /> 
                        <Text>{destination_address}</Text>
                    </View>
                    <View className='flex flex-row'>
                        <Image source={icons.point} className='w-5 h-5' /> 
                        <Text>{origin_address}</Text>
                    </View>
                </View>
        </View>

        <View className='flex flex-col bg-general-500 my-5 rounded-lg p-2 shadow-md shadow-black'>
            <View className='flex flex-row justify-between mb-5'>
                <Text className='text-gray-500 text-md font-JakartaMedium'>Date & Time</Text>
                <Text className='text-gray-500 text-md font-JakartaMedium' >{formatDate(created_at)} ,{formatTime(ride_time)}</Text>
            </View>

            <View className='flex flex-row justify-between mb-5'>
                <Text className='text-gray-500 text-md font-JakartaMedium'>Driver</Text>
                <Text className='text-gray-500 text-md font-JakartaMedium' >{driver.first_name}  {driver.last_name}  </Text>
            </View>

            <View className='flex flex-row justify-between mb-5'>
                <Text className='text-gray-500 text-md font-JakartaMedium'>Car Seats</Text>
                <Text className='text-gray-500 text-md font-JakartaMedium' >{driver.car_seats}</Text>
            </View>
            <View className='flex flex-row justify-between mb-5'>
                <Text className='text-gray-500 text-md font-JakartaMedium'>Paymet Status</Text>
                <Text className={`text-gray-500 text-md font-JakartaMedium ${payment_status === 'paid' ? 'text-green-500' : 'text-red-50'}`} >{payment_status}</Text>
            </View>
           
        </View>

    </View>
  )
}

export default RideCard