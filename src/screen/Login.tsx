import {View, Text, Button} from 'react-native';
import React from 'react';
import {Wrapper} from '@/components/Wrapper';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/types/index';

export default function Login() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <Wrapper>
      <View>
        <Text>Login Page</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Navigated" />
      </View>
    </Wrapper>
  );
}
