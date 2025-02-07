import {Pressable, PressableProps, Text, TextProps, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {RenderContent} from '../utils';

type AllBooleanTypes = 'pressable' | 'touchable';
//extends Partial<Record<AllBooleanTypes, boolean>>
interface ButtonProps extends PressableProps {
  children: ReactNode;
  buttonType?: AllBooleanTypes;
}

export default function Button({
  children,
  //   isPressable,
  //   isTouchable,
  buttonType = "touchable",
  ...rest
}: ButtonProps) {
  const render = <RenderContent<TextProps> render={children} />;

  return buttonType === 'touchable' ? (
    <TouchableOpacity>{render}</TouchableOpacity>
  ) : (
    <Pressable
      onPress={() => console.log('Pressed!')}
      style={({pressed}) => [
        {padding: 10, backgroundColor: pressed ? 'darkblue' : 'blue'},
      ]}
      {...rest}
      >
     {/* {render} */}
     {/* {({pressed}) => (
            <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>
      )} */}
      {render}
    </Pressable>
  );
}
