import { View, Text  , Image , ScrollView, Alert } from 'react-native'
import React , {useCallback, useState} from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/customButton'
import OAuth from '@/components/OAuth'
import { Link , useRouter } from 'expo-router'
import { useSignIn } from "@clerk/clerk-expo";



const signin = () => {

  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter()

const [form, setForm] = useState({
  email: '',
  password: '',
  
})


const onSignInPress = useCallback(async () => {
  if (!isLoaded) return;

  try {
    const signInAttempt = await signIn.create({
      identifier: form.email,
      password: form.password,
    });

    if (signInAttempt.status === "complete") {
      await setActive({ session: signInAttempt.createdSessionId });
      router.replace("/(root)/(tabs)/home");
    } else {
      // See https://clerk.com/docs/custom-flows/error-handling for more info on error handling
      console.log(JSON.stringify(signInAttempt, null, 2));
      Alert.alert("Error", "Log in failed. Please try again.");
    }
  } catch (err: any) {
    console.log(JSON.stringify(err, null, 2));
    Alert.alert("Error", err.errors[0].longMessage);
  }
}, [isLoaded, form]);


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