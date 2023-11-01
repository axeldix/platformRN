import {type FC, memo, useCallback} from 'react';

import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '../../utils';

const Screen1: FC = () => {
  const {navigate} = useNavigation();

  const screenName = 'Screen1';

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(67,241,181,0.3)',
      }}>
      <Text
        style={{
          fontSize: 50,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        {screenName}
      </Text>
      <Pressable
        style={{
          backgroundColor: '#b8e378',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigate('Screen2')}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {'RN Navigation -> Screen 2'}
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(Screen1);
