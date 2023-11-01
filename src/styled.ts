import {GestureHandlerRootView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface PlatformOS {
  ios: string;
  android: string;
  web: string;
}

interface StyledSafeAreaViewProps {
  platform: {OS: PlatformOS};
}

export const StyledSafeAreaView = styled.SafeAreaView<StyledSafeAreaViewProps>`
  height: ${({platform}) => (platform.OS === 'web' ? '100vh' : '100%')};
`;

export const StyledGestureHandlerRootView = styled(GestureHandlerRootView)`
  flex: 1;
`;
