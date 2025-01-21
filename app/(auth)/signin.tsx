import { View, Text  , Image , ScrollView } from 'react-native'
import React , {useState} from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/customButton'
import OAuth from '@/components/OAuth'
import { Link } from 'expo-router'



const signin = () => {

const [form, setForm] = useState({
  email: '',
  password: '',
  
})


const onSignInPress = ()=>{}
  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex-1 bg-white'>
      
        <View className='relative w-full h-[250px] '>
        <Image 
        source={images.signUpCar}
        className=' w-full h-full object-cover z-0'
        />
        <Text className='text-2xl font-JakartaSemiBold absolute bottom-5 left-5 '>Welcome 👋</Text>
        </View>

        <View className='p-5'>
        <InputField
            label="Email"
            icon={icons.email}
            placeholder='Enter your Email'
            value={form.email}
            onChangeText={(value) => { setForm({ ...form, email: value }) }}
          />

         


          <InputField
            label="Password"
            icon={icons.lock}
            placeholder='Enter your password'
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) => { setForm({ ...form, password: value }) }}
          />

          <View className='flex  justify-center w-full  items-center'>
            <CustomButton
              title="Sign In"
              onPress={onSignInPress}
              className="mt-6 w-11/12"
            />

            <OAuth/>
            <Link
              href="/signin"
              className='mt-10 text-lg text-center text-general-200 '
            >
              <Text className=''>Don't have an account?  </Text>
              <Text className='text-primary-500 font-semibold '>Sign up</Text>
            </Link>
          </View>
        </View>

       
        
      </View>
    </ScrollView>
  )
}

export default signin