import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from './customButton'
import { icons, images } from '@/constants'

const OAuth = () => {

    const loginWithGoogle = ()=>{}
  return (
    <View className='w-full'>
    <View className='flex  flex-row justify-center items-center gap-x-3 mt-4'>
     <View className=' flex-1 h-[1px] bg-general-100 '/>
     <Text>Or</Text>
     <View className=' flex-1 h-[1px] bg-general-100 '/>
    </View>
    
    <View className='flex justify-center  items-center mt-6'>
    <CustomButton
        title="Continue with Google"
        className='w-11/12 '
        IconLeft={()=> {
            return <Image
                source={icons.google}
                className='w-6 h-6 mr-4'
            />
        }}
        bgVariant='outline'
        textVariant='primary'
        onPress={()=>loginWithGoogle()}
    />
    </View>
    
    </View>
  )
}

export default OAuth