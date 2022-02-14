import React, { useEffect } from 'react';
import { View } from 'react-native';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import Detail from '../../components/item/Detail';
import { fetchInvoiceDetailsAsync, resetPaymentResult } from '../../reducers/invoiceSlice';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import { styles } from '../../styles/styles';
import { dateFormatter } from '../../utils/dateFormatter';

const PaymentReceiptScreen = ({ }) => {
    const dispatch = useAppDispatch()

    const { paymentResult } = useAppSelecter((state) => state.invoice)

    const { bg_light, container_full, flex_1, p_15, rounded } = styles

    // if (!paymentResult) return <LoadingScreen />

    // useEffect(() => {
    //     return (() => {

    //         dispatch(resetPaymentResult())
    //     })
    // }, [])

    return (
        <View style={[bg_light, container_full, flex_1, p_15, rounded]}>
            <Detail title='Date' value={"test"} />
            <Detail title='Date' value={!!paymentResult && dateFormatter(paymentResult?.dateCreated)} />
            <Detail title='Amount' value={paymentResult?.amount} />
            <Detail title='Reference Number' value={paymentResult?.referenceNumber} />
        </View>
    );
}

export default PaymentReceiptScreen;