import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Wrapper} from '@/components/Wrapper';
import { NavigationProps } from '@/types/index';

export default function Home() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <Wrapper>
      <View>
        <Text style={{backgroundColor: 'gray', color: 'black'}}>Home page</Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Navigated"
        />
      </View>
    </Wrapper>
  );
}