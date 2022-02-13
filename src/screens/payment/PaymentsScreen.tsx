import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../../components/text/AppText';
import { useAppSelecter } from '../../store/configureStore';

const PaymentsScreen = () => {
    const { bg_light, container, me_5, my_5, p_15, row, row_center_x, row_center_x_between, rounded, w_30 } = styles;
    const { darkGrey, green, red, secondary, yellow } = colors;

    const { tenant } = useAppSelecter((state) => state.tenant)


    const renderIcon = (status: number) => {
        if (status == 2) { <FontAwesome name="check-circle" size={30} color={green} /> }
        if (status == 3) { <FontAwesome name="times-circle" size={30} color={red} /> }
        <FontAwesome name="exclamation-circle" size={30} color={yellow} />
    }

    return (
        <View style={container}>
            <View style={[bg_light, my_5, p_15, row_center_x_between, rounded]}>
                <View style={[row, row_center_x]}>
                    <View style={[me_5, w_30]}>
                        <FontAwesome name="check-circle" size={30} color={green} />
                    </View>
                    <AppText bold>2022 FEB 22</AppText>
                </View>
                <AppText as="h3" bold color={secondary}>20,000</AppText>
            </View>
        </View>
    );
}

export default PaymentsScreen;

// "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
// "status": 0,
// "bankName": "string",
// "accountName": "string",
// "accountNumber": "string",
// "dateCreated": "2022-02-12T22:40:23.112Z",
// "amount": 0,
// "referenceNumber": "string",
// "imageUrl": "string"