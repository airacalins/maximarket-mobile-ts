import React, { useEffect, useMemo, useState } from 'react';
import routes from '../../navigations/routes';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { dateFormatter } from '../../utils/dateFormatter';
import AppButton from '../../components/button/AppButton';
import AppText from '../../components/text/AppText';
import InvoiceBadge from '../../components/badge/InvoiceBadge';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import { fetchInvoiceDetailsAsync, setSelectedPayment } from '../../reducers/invoiceSlice';
import NoData from '../../components/indicator/NoData';
import { currencyFormatter } from '../../utils/currencyFormatter';

interface Props {
    navigation: any
}

const InvoiceDetailsScreen: React.FC<Props> = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const { tenant } = useAppSelecter((state) => state.tenant)
    const { invoice, isFetchingInvoiceDetails } = useAppSelecter((state) => state.invoice)

    const { bg_light, bg_primary, container, m_15, mt_15, mx_15, my_15, me_5, my_5, p_5, p_15, rounded, row_center_x_between, row_center_x, row, w_30, w_50p } = styles;
    const { darkGrey, green, light, red, secondary, yellow } = colors;

    useEffect(() => {
        if (!invoice) fetchInvoiceDetailsAsync(tenant?.tenantUniqueId!)
    }, [invoice])

    const handleRefreshPaymentHistories = () => {
        dispatch(fetchInvoiceDetailsAsync(tenant?.tenantUniqueId!))
    }

    const totalAmountPaid = useMemo(
        () => !!invoice && !!invoice.payments ?
            invoice.payments.filter(i => i.status == 2).reduce((previousValue, currentValue) =>
                previousValue + currentValue.amount, 0) : 0,
        [invoice]
    );

    const renderIcon = (status: number) => {
        if (status == 2) { return <FontAwesome name="check-circle" size={30} color={green} /> }
        if (status == 3) { return <FontAwesome name="times-circle" size={30} color={red} /> }
        return <FontAwesome name="exclamation-circle" size={30} color={yellow} />
    }

    if (isFetchingInvoiceDetails || !invoice) return <LoadingScreen />

    const { amount, dateCreated, dueDate, invoiceItems, invoiceNumber, invoiceStatus, payments } = invoice;

    const balance = amount - totalAmountPaid

    return (
        <>
            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={[bg_light, container, p_15, rounded]}>

                            <View style={row_center_x_between}>
                                <AppText as="h3" bold>{`INV-${invoiceNumber}`} </AppText>
                                <InvoiceBadge status={invoiceStatus} />
                            </View>
                            <AppText as="h2" bold>{currencyFormatter(amount)} </AppText>

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
                                        <AppText as="h5">{currencyFormatter(item.amount)}</AppText>
                                    </View>
                                }
                            />

                            <View style={[p_5, row_center_x_between]}>
                                <AppText as="h5" bold>Total</AppText>
                                <AppText as="h5" bold>{currencyFormatter(amount)}</AppText>
                            </View>
                        </View>

                        <View style={mx_15}>
                            {
                                balance >= 1 && <AppButton onPress={() => navigation.navigate("PaymentFormNavigator")} title='Add Payment' />
                            }

                        </View>

                        <View style={[mt_15, mx_15]}>
                            <AppText as="h5" bold>Payment Histories</AppText>
                            <View style={row}>
                                <AppText as="h5" bold>Current Balance: </AppText>
                                <AppText as="h5" bold>{currencyFormatter(balance)}</AppText>
                            </View>
                        </View>

                        {!payments && <NoData />}
                    </>
                }
                data={payments}
                keyExtractor={(p => p.id)}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        dispatch(setSelectedPayment(item))
                        navigation.navigate(routes.PAYMENT_DETAILS)
                    }}>
                        <View style={[bg_light, container, my_5, p_15, row_center_x_between]}>
                            <View style={[row, row_center_x]}>
                                <View style={[me_5, w_30]}>
                                    <>{renderIcon(item.status)}</>
                                </View>
                                <AppText bold>{dateFormatter(item.dateCreated)}</AppText>
                            </View>
                            <AppText as="h3" bold color={secondary}>{currencyFormatter(item.amount)}</AppText>
                        </View>
                    </TouchableOpacity>
                )}
                refreshing={isFetchingInvoiceDetails}
                onRefresh={handleRefreshPaymentHistories}
            />
        </>
    );
}

export default InvoiceDetailsScreen;