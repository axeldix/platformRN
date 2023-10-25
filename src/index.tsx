import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreensParams} from './types';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const {Navigator, Screen} = createNativeStackNavigator<ScreensParams>();

const Root = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView
          // @ts-ignore
          style={{
            height: Platform.OS === 'web' ? '100vh' : '100%',
          }}>
          {Platform.OS !== 'web' && <StatusBar barStyle={'dark-content'} />}
          <Navigator
            screenOptions={{
              headerShown: Platform.OS !== 'web',
            }}>
            <Screen name={'Screen1'} component={Screen1} />
            <Screen name={'Screen2'} component={Screen2} />
          </Navigator>
        </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default Root;
