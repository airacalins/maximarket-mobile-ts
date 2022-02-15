import React from 'react';
import { useAppSelecter } from '../../store/configureStore';
import { View } from 'react-native';

import colors from '../../styles/colors';
import { dateFormatter } from '../../utils/dateFormatter';
import { styles } from '../../styles/styles';
import Detail from '../../components/item/Detail';
import AppText from '../../components/text/AppText';
import { currencyFormatter } from '../../utils/currencyFormatter';

interface Props {
}

const PaymentDetailsScreen: React.FC<Props> = ({ }) => {
    const { selectedPayment } = useAppSelecter((state) => state.invoice)
    const { status, bankName, accountName, accountNumber, dateCreated, amount, referenceNumber } = selectedPayment!

    const { bg_green, bg_light, bg_red, bg_yellow, container, m_15, px_5, p_15, rounded } = styles
    const { light } = colors

    const renderPaymentStatusBadge = (status: number) => {
        if (status == 0 || 1) {
            return (
                <View style={[bg_yellow, px_5, rounded]}>
                    <AppText as='h5' color={light}>Pending</AppText>
                </View >
            )
        }
        if (status == 2) {
            return (

                <View style={[bg_green, px_5, rounded]}>
                    <AppText as='h5' color={light}>Approved</AppText>
                </View>)
        }
        return (
            <View style={[bg_red, px_5, rounded]}>
                <AppText as='h5' color={light}>Declined</AppText>
            </View>
        )
    }

    return (
        <View style={[bg_light, container, m_15, p_15, rounded]}>
            <Detail title='Reference Number' value={referenceNumber} />
            <Detail title='Status' value={renderPaymentStatusBadge(status)} />
            <Detail title='Status' value={status} />
            <Detail title='Date' value={dateFormatter(dateCreated)} />
            <Detail title='Bank Name' value={bankName} />
            <Detail title='Account Name' value={accountName} />
            <Detail title='Account Number' value={accountNumber} />
            <Detail title='Amount' value={currencyFormatter(amount)} />
        </View>
    );
}

export default PaymentDetailsScreen;