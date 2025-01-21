import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/customButton'
import { Link } from 'expo-router'
import OAuth from '@/components/OAuth'



const signin = () => {

  const [form, setForm] = useState({
    name: "",
    email: '',
    password: '',

  })

  const onSignUpPress = ()=> {}

  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex-1 bg-white'>

        <View className=' w-full h-[250px] '>
          <Image
            source={images.signUpCar}
            className=' w-full h-full object-cover z-0'
          />
          <Text className='text-2xl font-JakartaSemiBold absolute bottom-5 left-5 '>Create Your Account</Text>
        </View>

        <View className='p-5'>

        <InputField
            label="Name"
            icon={icons.person}
            placeholder='Enter your Name'
            value={form.name}
            onChangeText={(value) => { setForm({ ...form, name: value }) }}
          />

          <InputField
            label="Email"
            icon={icons.email}
            placeholder='Enter your Email'
            value={form.email}
            onChangeText={(value) => { setForm({ ...form, email: value }) }}
          />

         


          <InputField
            label="PassWord"
            icon={icons.lock}
            placeholder='Enter your password'
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) => { setForm({ ...form, password: value }) }}
          />

          <View className='flex  justify-center w-full  items-center'>
            <CustomButton
              title="Sign Up"
              onPress={onSignUpPress}
              className="mt-6 w-11/12"
            />

            <OAuth/>
            <Link
              href="/signin"
              className='mt-10 text-lg text-center text-general-200 '
            >
              <Text className=''>Already have an account?  </Text>
              <Text className='text-primary-500 font-semibold '>Sign In</Text>
            </Link>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default signin