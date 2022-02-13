import { DefaultTheme } from '@react-navigation/native';
import colors from './colors';

const {lightGrey, secondary} = colors;

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: secondary ,
    background: lightGrey,
  },
};
