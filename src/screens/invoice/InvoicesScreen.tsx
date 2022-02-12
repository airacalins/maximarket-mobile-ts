import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { FontAwesome } from '@expo/vector-icons';
import AppText from '../../components/text/AppText';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import { useDispatch } from 'react-redux';
import { fetchInvoicesAsync } from '../../reducers/invoiceSlice';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import NoData from '../../components/indicator/NoData';

interface Props {
    navigation: any
}

const InvoicesScreen: React.FC<Props> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { tenant } = useAppSelecter((state) => state.tenant)
    const { invoices, isFetchingInvoiceDetails } = useAppSelecter((state) => state.invoice)

    useEffect(() => {
        if (!tenant) navigation.navigate("AuthNavigator")
    }, [tenant])

    useEffect(() => {
        dispatch(fetchInvoicesAsync(tenant?.id!))
    }, [])

    const { bg_light, container, my_5, p_15, row_center_x_between, rounded } = styles;
    const { darkGrey, secondary } = colors;

    if (isFetchingInvoiceDetails) return <LoadingScreen />
    if (!invoices) return <NoData />

    return (
        <TouchableOpacity>
            <View style={container}>
                <FlatList
                    data={invoices}
                    keyExtractor={(i) => i.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={[bg_light, my_5, p_15, row_center_x_between, rounded]}>
                                <View>
                                    <AppText bold>{item.invoiceNumber}</AppText>
                                    <AppText as="h5" bold color={darkGrey}>{item.dateCreated}</AppText>
                                </View>
                                <AppText as="h3" bold color={secondary}>{item.amount}</AppText>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        </TouchableOpacity>
    );
}

export default InvoicesScreen;