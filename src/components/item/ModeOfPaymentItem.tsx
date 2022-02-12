import React from 'react';
import { View } from 'react-native';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../text/AppText';

interface Props {
  bankName: string,
  accountName: string,
  accountNumber: string,
}

const ModeOfPaymentItem: React.FC<Props> = ({ bankName, accountName, accountNumber }) => {
  const { bg_light, container, row_center_x, p_10 } = styles
  const { darkGrey } = colors

  return (
    <View style={[bg_light, p_10]}>
      <View style={row_center_x}>
        <AppText as="h4" bold color={darkGrey}>Bank Name: </AppText>
        <AppText as="h4">{bankName}</AppText>
      </View>

      <View style={row_center_x}>
        <AppText as="h4" bold color={darkGrey}>Account Name: </AppText>
        <AppText as="h4">{accountName}</AppText>
      </View>

      <View style={row_center_x}>
        <AppText as="h4" bold color={darkGrey}>Account Number: </AppText>
        <AppText as="h4">{accountNumber}</AppText>
      </View>
    </View>
  );
}

export default ModeOfPaymentItem;