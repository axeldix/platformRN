import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreensParams} from './types';
import {NavigationContainer} from '@react-navigation/native';
import {Platform, StatusBar} from 'react-native';
import {StyledSafeAreaView, StyledGestureHandlerRootView} from './styled';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

const {Navigator, Screen} = createNativeStackNavigator<ScreensParams>();

const Root = () => {
  return (
    <NavigationContainer>
      <StyledGestureHandlerRootView>
        <StyledSafeAreaView platform={Platform}>
          {Platform.OS !== 'web' && <StatusBar barStyle={'dark-content'} />}
          <Navigator
            screenOptions={{
              headerShown: Platform.OS !== 'web',
            }}>
            <Screen name={'Screen1'} component={Screen1} />
            <Screen name={'Screen2'} component={Screen2} />
          </Navigator>
        </StyledSafeAreaView>
      </StyledGestureHandlerRootView>
    </NavigationContainer>
  );
};

export default Root;
