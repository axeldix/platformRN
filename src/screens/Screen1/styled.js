import styled from 'styled-components/native';
import {Pressable, Text} from 'react-native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(67,241,181,0.3);
`;

export const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Pressable)`
  background-color: #b8e378;
  padding: 10px;
  border-radius: 5px;
`;

export const StyledButtonText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;