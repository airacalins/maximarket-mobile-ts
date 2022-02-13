import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import FormTextInput from '../../components/input/FormTextInput';
import AppText from '../../components/text/AppText';
import { useAppSelecter } from '../../store/configureStore';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppButton from '../../components/button/AppButton';
import { requestCameraPermissionsAsync } from 'expo-image-picker';


const PaymentFormScreen = () => {
    const { invoice, isFetchingInvoiceDetails } = useAppSelecter((state) => state.invoice)

    const [image, setImage] = useState(null);



    const { bg_light, container, my_5, p_30, row_center } = styles
    const { darkGrey, primary } = colors

    const { invoiceNumber } = invoice!

    if (isFetchingInvoiceDetails) return <LoadingScreen />

    return (
        <View style={container}>

            <View style={[my_5]}>
                <AppText as="h5" bold color={darkGrey} >Invoice Number</AppText>
                <AppText bold >{invoiceNumber}</AppText>
            </View>

            {/* <FormTextInput label='Mode of Payment' />
            <FormTextInput label='Amount' icon={<MaterialIcons name="money" size={20} color={primary} />} placeholder='Amount' /> */}

            <View style={my_5}>
                <AppText as="h5" bold color={darkGrey} >Proof of Payment</AppText>
                <View style={[bg_light, p_30, row_center]}>
                    <MaterialCommunityIcons name="camera-account" size={50} color={darkGrey} />
                </View>
            </View>

            {/* <AppButton title='Submit' /> */}

        </View>
    );
}

export default PaymentFormScreen;