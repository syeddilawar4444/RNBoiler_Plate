import {View, Text, Animated, Easing, StyleSheet} from 'react-native';
import React, { useEffect, useRef } from 'react';
import {useNavigation} from '@react-navigation/native';
import {Wrapper} from '@/components/Wrapper';
import {NavigationProps} from '@/types/index';
import Button from '@/components/Button';

export default function Home() {
  const navigation = useNavigation<NavigationProps>();

  // const dd = [
  //   {
  //     startText: '0',
  //     endText: '30',
  //   },
  //   {
  //     startText: '55',
  //     endText: '25',
  //   },
  //   {
  //     startText: '50',
  //     endText: '20',
  //   },
  //   {
  //     startText: '45',
  //     endText: '15',
  //   },
  //   {
  //     startText: '40',
  //     endText: '10',
  //   },
  //   {
  //     startText: '35',
  //     endText: '5',
  //   },
  // ];

  const animation = useRef(new Animated.Value(0)).current; // Start from 0

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1, // Rotate full 180 degrees
      duration: 5000, // 5 seconds
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);
  const rotateStyle = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"], // Rotating blue view
        }),
      },
    ],
  };

  return (
    <Wrapper>
      <View>
        <Text style={{backgroundColor: 'gray', color: 'black'}}>Home page</Text>
        {/* <Button
        children={<View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:3}}>
          <View style={{width:30,height:30,backgroundColor:"green"}}></View>
          <Text>dddfdf</Text>
        </View>}
        buttonType={"pressable"}
          // onPress={() => navigation.navigate('Login')}
          // title="Navigated"
          // color={"red"}
        /> */}

        {/* <View
          style={{
            width: 200,
            height: 200,
            margin: 'auto',
          }}>
          <View  style={{display: 'flex', flexDirection: 'row',position:"relative",backgroundColor:"blue",width:160,height:160,margin:"auto",borderRadius:"100%",justifyContent:"center",alignItems:"center",zIndex:3}}>
            {dd.map((item,index)=>{
            const totalDash = dd.length * 2
            const rotateValue = (360 / totalDash)*index

            return (
            <View key={index} style={{display:"flex",alignItems:"center",justifyContent:"center",transform:[{rotate:`${rotateValue}deg`,}],position:"absolute",height:182,margin:"auto",right:0,left:0,zIndex:-1,gap:3}}>
            <Text style={{fontSize:8,transform:[{rotate:`-${rotateValue}deg`}]}}>{item.startText}</Text>
            <View style={{width:2,height:"100%",backgroundColor:"black"}} />
            <Text style={{fontSize:8,transform:[{rotate:`${-rotateValue}deg`}]}}>{item.endText}</Text>
            </View>
            )
          })}
          <View style={{backgroundColor:"gray",width:170,height:170,borderRadius:"100%",borderWidth:3,borderColor:"white"}}>
      </View>
          </View>
          </View> */}

          
        </View>
    </Wrapper>
  );
}