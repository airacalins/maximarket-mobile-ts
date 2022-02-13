import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../../components/text/AppText';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import { fetchInvoiceDetailsAsync, fetchInvoicesAsync } from '../../reducers/invoiceSlice';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import NoData from '../../components/indicator/NoData';
import { dateFormatter } from '../../utils/dateFormatter';
import routes from '../../navigations/routes';
import InvoiceBadge from '../../components/badge/InvoiceBadge';

interface Props {
    navigation: any
}

const InvoicesScreen: React.FC<Props> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { tenant } = useAppSelecter((state) => state.tenant)
    const { invoices, isFetchingInvoices } = useAppSelecter((state) => state.invoice)

    useEffect(() => {
        if (!tenant) navigation.navigate("AuthNavigator")
    }, [tenant])

    useEffect(() => {
        dispatch(fetchInvoicesAsync(tenant?.tenantUniqueId!))
    }, [])

    const { bg_light, container, me_5, my_5, p_15, row_center_x, row_center_x_between, rounded } = styles;
    const { darkGrey, secondary } = colors;

    const handleInvoiceDetails = async (id: string) => {
        navigation.navigate(routes.INVOICE_DETAILS)
        await dispatch(fetchInvoiceDetailsAsync(id))
    }

    if (isFetchingInvoices) return <LoadingScreen />
    if (!invoices) return <NoData />

    return (
        <View style={container}>
            <FlatList
                data={invoices}
                keyExtractor={(i) => i.id}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => handleInvoiceDetails(item.id)}>

                        <View style={[bg_light, my_5, p_15, rounded]}>
                            <View style={row_center_x}>
                                <View style={me_5}>
                                    <AppText as="h5" bold color={darkGrey}>{dateFormatter(item.dateCreated)}</AppText>
                                </View>

                                <InvoiceBadge status={item.invoiceStatus} />
                            </View>

                            <View style={row_center_x_between}>
                                <View>
                                    <AppText bold>{item.invoiceNumber}</AppText>
                                </View>

                                <AppText as="h3" bold color={secondary}>{item.amount}</AppText>
                            </View>
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

export default InvoicesScreen;
