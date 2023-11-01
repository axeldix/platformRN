import {type FC, memo} from 'react';

import {useNavigation} from '../../utils';
import {Wrapper, Title, StyledButton, StyledButtonText} from './styled';

const Screen1: FC = () => {
  const {navigate} = useNavigation();

  const screenName = 'Screen1';

  return (
    <Wrapper>
      <Title>{screenName}</Title>
      <StyledButton onPress={() => navigate('Screen2')}>
        <StyledButtonText>{'RN Navigation -> Screen 2'}</StyledButtonText>
      </StyledButton>
    </Wrapper>
  );
};

export default memo(Screen1);
