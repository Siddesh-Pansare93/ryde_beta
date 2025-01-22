
import { icons } from '@/constants';
import { Stack, Tabs } from 'expo-router';
import { View , Text, Image, ImageSourcePropType } from 'react-native';


const TabIcon = ({focused , source} : {focused : boolean , source : ImageSourcePropType}) =>{
  return(
    <View className={`flex  justify-center items-center rounded-full   ${focused ? 'bg-green-500' : ''} `}>
    <View className={`flex  w-12 h-12 justify-center items-center rounded-full  ${focused ? 'bg-green-500' : ''} `}>
        <Image source={source} className='w-7 h-7  ' tintColor="White" resizeMode='contain' /> 
      </View>
      </View>
  )
}

export default function RootLayout() {

  return (

      <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel : false ,
        tabBarStyle: {
          backgroundColor: '#333333',
          paddingTop : 5 ,
          marginBottom :20 ,
          marginHorizontal :20,
          borderRadius : 45 ,
          display :"flex"  , 

          // flexDirection : "row" , 
          justifyContent : "space-between" , 
          alignItems : "center", 
          overflow : "hidden"
          },
      }}
      >
        <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Home',
          headerShown: false,
          tabBarIcon : ({focused}) => (<TabIcon source={icons.home } focused={focused}/>)
         }} 
        
        />
        <Tabs.Screen 
        name="rides" 
        options={{ 
          title: 'Rides',
          headerShown: false,
          tabBarIcon : ({focused}) => (<TabIcon source={icons.list } focused={focused}/>)
         }} 
        
        />
        <Tabs.Screen 
        name="chat" 
        options={{ 
          title: 'Chat',
          headerShown: false,
          tabBarIcon : ({focused}) => (<TabIcon source={icons.chat } focused={focused}/>)
         }} 
        
        />
        <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile',
          headerShown: false,
          tabBarIcon : ({focused}) => (<TabIcon source={icons.profile } focused={focused}/>)
         }} 
        
        />
       

      </Tabs>
     
   
  );
}
