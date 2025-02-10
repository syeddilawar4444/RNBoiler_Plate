import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Wrapper} from '@/components/Wrapper';
import { verifyInstallation } from 'nativewind';

export default function Home() {
  verifyInstallation();

  return (
    <Wrapper>
      <View className='bg-green-400'>
        {/* <Text style={{backgroundColor: 'gray', color: 'black'}}>Home page</Text>
        

        <View style={styles.container}>
      <Animated.View style={{ ...styles.box, width }} />
      <TouchableOpacity onPress={handlePress} style={{backgroundColor:"red"}}  >
        <Text style={{color:"green"}}>Click me</Text>
      </TouchableOpacity>
        </View> */}

        {/* <StyledComponent
          component={Text}
          className="font-bold bg-gray-200 android:text-blue-500 ios:text-red-500 hover:bg-black ">
          Hello world
        </StyledComponent>
        <Text
          className="ios:text-blue-800       active:bg-slate-500
 hover:bg-slate-300 text-3xl">
          This book
        </Text>
        <TextInput
          placeholder="entername"
          className={'active:bg-black hover:!bg-slate-300'}
        /> */}
        {/* <Pressable
          className={`
      // items-center
      // justify-center
      active:bg-black
      bg-blue-900
      !w-full
    `}  >
          <Text
            // selectable={false}
            className="ios:text-3xl active:text-white">
            Hover and click me! 🎉
          </Text>
        </Pressable> */}
        <Text className='android:text-blue-800'>
          Book we as nothing in the root we as nothing in the Root
        </Text>
      </View>
    </Wrapper>
  );
}
