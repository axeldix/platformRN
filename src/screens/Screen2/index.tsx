import {type FC, memo} from 'react';

import {Platform} from 'react-native';
import {StyledButton, StyledButtonText, Title, Wrapper} from './styled';

import {useNavigation} from '../../utils';

const Screen2: FC = () => {
  const {goBack} = useNavigation();

  const screenName = 'Screen2';

  return (
    <Wrapper>
      <Title>{screenName}</Title>
      {Platform.OS === 'web' && (
        <StyledButton onPress={() => goBack()}>
          <StyledButtonText>Go Back</StyledButtonText>
        </StyledButton>
      )}
    </Wrapper>
  );
};

export default memo(Screen2);
