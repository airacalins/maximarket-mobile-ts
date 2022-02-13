import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelecter } from '../../store/configureStore';

import { fetchModeOfPaymentsAsync } from '../../reducers/modeOfPaymentSlice';
import { styles } from '../../styles/styles';
import ModeOfPaymentItem from '../../components/item/ModeOfPaymentItem';
import NoData from '../../components/indicator/NoData';
import LoadingScreen from '../../components/indicator/LoadingScreen';

const ModeOfPaymentsScreen = () => {
    const { modeOfPayments, isFetchingModeOfPayments } = useAppSelecter(state => state.modeOfPayment);

    const { container } = styles

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchModeOfPaymentsAsync());
    }, [])

    if (isFetchingModeOfPayments) return <LoadingScreen />
    if (!modeOfPayments) return <NoData />

    return (
        <View style={container}>

            <FlatList
                data={modeOfPayments}
                keyExtractor={(m) => m.id}
                renderItem={({ item }) =>
                    <ModeOfPaymentItem bankName={item.bankName} accountName={item.accountName} accountNumber={item.accountNumber} />
                }
            />

        </View>

    );
}

export default ModeOfPaymentsScreen;