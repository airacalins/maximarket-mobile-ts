import React from 'react';
import routes from '../../navigations/routes';
import { FlatList, View } from 'react-native';

import { useAppSelecter } from '../../store/configureStore';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { dateFormatter } from '../../utils/dateFormatter';
import AppButton from '../../components/button/AppButton';
import AppText from '../../components/text/AppText';
import InvoiceBadge from '../../components/badge/InvoiceBadge';
import LoadingScreen from '../../components/indicator/LoadingScreen';

interface Props {
    navigation: any
}

const InvoiceDetailsScreen: React.FC<Props> = ({ navigation }) => {

    const { invoice, isFetchingInvoiceDetails } = useAppSelecter((state) => state.invoice)

    const { amount, dateCreated, dueDate, invoiceItems, invoiceNumber, invoiceStatus } = invoice!

    const { bg_light, bg_primary, container, mx_15, my_15, p_5, p_15, rounded, row_center_x_between, row, w_50p } = styles;
    const { darkGrey, light } = colors

    if (isFetchingInvoiceDetails) return <LoadingScreen />

    return (
        <>
            <View style={[bg_light, container, p_15, rounded]}>

                <View style={row_center_x_between}>
                    <AppText as="h3" bold>{`INV-${invoiceNumber}`} </AppText>
                    <InvoiceBadge status={invoiceStatus} />
                </View>
                <AppText as="h2" bold>{amount} </AppText>

                <View style={[my_15, row]}>
                    <View style={w_50p}>
                        <AppText as="h5" bold color={darkGrey}>Date</AppText>
                        <AppText as="h4" bold>{dateFormatter(dateCreated)}</AppText>
                    </View>

                    <View style={w_50p}>
                        <AppText as="h5" bold color={darkGrey}>Due Date</AppText>
                        <AppText as="h4" bold>{dateFormatter(dueDate)}</AppText>
                    </View>
                </View>

                <View style={[bg_primary, p_5, row_center_x_between]}>
                    <AppText as="h5" bold color={light}>Description</AppText>
                    <AppText as="h5" bold color={light}>Amount</AppText>
                </View>

                <FlatList
                    data={invoiceItems}
                    keyExtractor={(i) => i.id}
                    renderItem={({ item }) =>
                        <View style={[p_5, row_center_x_between]}>
                            <AppText as="h5">{item.description}</AppText>
                            <AppText as="h5">{item.amount}</AppText>
                        </View>
                    }
                />

                <View style={[p_5, row_center_x_between]}>
                    <AppText as="h5" bold>Total</AppText>
                    <AppText as="h5" bold>{amount}</AppText>
                </View>

            </View>

            <View style={mx_15}>
                <AppButton onPress={() => navigation.navigate(routes.PAYMENT_FORM)} title='Pay' />
            </View>
        </>
    );
}

export default InvoiceDetailsScreen;