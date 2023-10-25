import {useNavigation as useNavigationNative} from '@react-navigation/native';
import {DefaultNavigation} from '../types';

const useNavigation = () => {
  return useNavigationNative<DefaultNavigation>();
};

export default useNavigation;
