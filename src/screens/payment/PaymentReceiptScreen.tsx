import React, { useEffect } from 'react';
import { View } from 'react-native';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import Detail from '../../components/item/Detail';
import AppText from '../../components/text/AppText';
import { fetchInvoiceDetailsAsync, resetPaymentResult } from '../../reducers/invoiceSlice';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { dateFormatter } from '../../utils/dateFormatter';
import { FontAwesome } from '@expo/vector-icons';
import AppButton from '../../components/button/AppButton';
import routes from '../../navigations/routes';

interface Props {
    navigation: any
}

const PaymentReceiptScreen: React.FC<Props> = ({ navigation }) => {
    const dispatch = useAppDispatch()

    const { paymentResult } = useAppSelecter((state) => state.invoice)

    const { bg_light, container_full, flex_1, my_5, my_15, p_15, py_25, rounded, row_center_y, row_center } = styles
    const { darkGrey, green } = colors

    if (!paymentResult) return <LoadingScreen />

    const { dateCreated, amount, referenceNumber } = paymentResult

    return (
        <View style={[bg_light, container_full, flex_1, py_25, rounded]}>
            <View style={[py_25, row_center_y]}>
                <FontAwesome name="check-circle" size={75} color={green} />
                <View style={[my_5, my_15, row_center_y]}>
                    <AppText>The status of your payment is pending.</AppText>
                    <AppText>Please wait for approval.</AppText>
                    <AppText>Thank you!</AppText>
                </View>

                <View style={[row_center_y, my_15]}>
                    <AppText as='h5' bold color={darkGrey}>Reference Number</AppText>
                    <AppText as='h4' bold >{referenceNumber}</AppText>
                </View>

                <View style={[row_center_y, my_15]}>
                    <AppText as='h5' bold color={darkGrey}>Payment Date</AppText>
                    <AppText as='h4' bold >{dateFormatter(dateCreated)}</AppText>
                </View>

                <View style={[row_center_y, my_15]}>
                    <AppText as='h5' bold color={darkGrey}>Amount</AppText>
                    <AppText as='h4' bold >{amount}</AppText>
                </View>

                <AppButton onPress={() => { navigation.navigate(routes.INVOICES) }} title="Go back to Invoices" />

            </View>
        </View>
    );
}

export default PaymentReceiptScreen;


