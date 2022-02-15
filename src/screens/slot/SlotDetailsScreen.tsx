import React, { useEffect, useState } from 'react';
import { Text, View, ToastAndroid } from 'react-native';
import AppButton from '../../components/button/AppButton';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import NoData from '../../components/indicator/NoData';
import Detail from '../../components/item/Detail';
import { ISlot } from '../../models/Slot';
import routes from '../../navigations/routes';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { currencyFormatter } from '../../utils/currencyFormatter';

interface Props {
    navigation: any
}

const SlotDetailsScreen: React.FC<Props> = ({ navigation }) => {

    const { slot, isFetchingSlotDetails } = useAppSelecter(state => state.slot);

    const { bg_light, container, p_15, rounded } = styles;

    useEffect(() => {
        if (!slot)
            ToastAndroid.show("Slot is not available", ToastAndroid.SHORT);
    }, [slot])

    const { slotNumber, size, price } = slot!;

    if (isFetchingSlotDetails) return <LoadingScreen />

    return (
        <>
            <View style={[bg_light, container, p_15, rounded]}>
                <Detail title="Slot Number" value={slotNumber} />
                <Detail title="Size" value={`${size} sqm.`} />
                <Detail title="Rental Fee" value={currencyFormatter(price!)} />

                <AppButton onPress={() => navigation.navigate(routes.CONTACTS)} title="Contact us to reserve" />

            </View>
        </>
    );
}

export default SlotDetailsScreen;