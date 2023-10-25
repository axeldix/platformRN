import {type FC, memo} from 'react';

import {Platform, Pressable, Text, View} from 'react-native';

import {useNavigation} from './utils';

const Screen2: FC = () => {
  const {goBack} = useNavigation();

  const screenName = 'Screen2';

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
      {Platform.OS === 'web' && (
        <Pressable
          style={{
            backgroundColor: '#b8e378',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => goBack()}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Go Back
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default memo(Screen2);
