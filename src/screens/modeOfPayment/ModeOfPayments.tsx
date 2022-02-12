import React from 'react';
import { View } from 'react-native';
import ModeOfPaymentItem from '../../components/item/ModeOfPaymentItem';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';

const ModeOfPaymentsScreen = () => {
    const { bg_light, container, p_10 } = styles

    return (
        <View style={container}>
            <View style={[bg_light, p_10]}>
                <ModeOfPaymentItem bankName='BDOd' accountName='BDO' accountNumber='BDO' />
                <ModeOfPaymentItem bankName='BDO' accountName='BDO' accountNumber='BDO' />
                <ModeOfPaymentItem bankName='BDO' accountName='BDO' accountNumber='BDO' />
            </View>
        </View>
    );
}

export default ModeOfPaymentsScreen;