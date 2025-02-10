import { View, Text, Image } from 'react-native'
import React from 'react'
import { Wrapper } from '../components'

export default function LetsYouIn() {

  return (
    <Wrapper useKeyboardView > 
    <View className='flex-1 ' >
      {/* <Text className='ios:text-blue-800 text-4xl bg-red-600 active:!text-white active:!bg-black first-letter:text-8xl odd:!text-red-800'>LetsYouIn</Text> */}
      <View  className='bg-[#273996] rounded-full size-72 mx-auto flex items-center justify-end overflow-ellipsis'>
        <Image source={require("../assets/images/logo.png")} width={20} height={20} className='object-cover !size-56`' resizeMode='contain' />

      </View>
      <Text className='font-bold text-[40px] text-center'>
      Listen to the best podcasts every day with <Text className='text-[#121D97]'>Socotra</Text> now!
      </Text>
    </View>
    </Wrapper>
  )
}