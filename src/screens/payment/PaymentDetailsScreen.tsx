import React from 'react';
import { Text, View } from 'react-native';
import Detail from '../../components/item/Detail';
import routes from '../../navigations/routes';
import { useAppSelecter } from '../../store/configureStore';
import { styles } from '../../styles/styles';
import { dateFormatter } from '../../utils/dateFormatter';

interface Props {
}

const PaymentDetailsScreen: React.FC<Props> = ({ }) => {
    const { selectedPayment } = useAppSelecter((state) => state.invoice)
    const { status, bankName, accountName, accountNumber, dateCreated, amount, referenceNumber } = selectedPayment!

    const { bg_light, container, m_15, p_15, rounded } = styles

    return (
        <View style={[bg_light, container, m_15, p_15, rounded]}>
            <Detail title='Reference Number' value={referenceNumber} />
            <Detail title='Status' value={status} />
            <Detail title='Date' value={dateFormatter(dateCreated)} />
            <Detail title='Bank Name' value={bankName} />
            <Detail title='Account Name' value={accountName} />
            <Detail title='Account Number' value={accountNumber} />
            <Detail title='Amount' value={amount} />
        </View>
    );
}

export default PaymentDetailsScreen;