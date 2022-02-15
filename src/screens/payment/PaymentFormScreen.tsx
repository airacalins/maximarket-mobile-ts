import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import FormTextInput from '../../components/input/FormTextInput';
import AppText from '../../components/text/AppText';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { MaterialIcons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import AppButton from '../../components/button/AppButton';
import { fetchInvoiceDetailsAsync, fetchInvoicesAsync, createPaymentAsync, resetPaymentResult } from '../../reducers/invoiceSlice';
import { Formik } from 'formik';
import { fetchModeOfPaymentsAsync } from '../../reducers/modeOfPaymentSlice';
import routes from '../../navigations/routes';

interface Props {
    navigation: any
}

const PaymentFormScreen: React.FC<Props> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { tenant } = useAppSelecter((state: any) => state.tenant)
    const { invoice, isFetchingInvoiceDetails, isSaving } = useAppSelecter((state: any) => state.invoice)
    const { modeOfPayments, isFetchingModeOfPayments } = useAppSelecter((state: any) => state.modeOfPayment);

    const [modeOfPaymentId, setModeOfPaymentId] = useState("")
    const [amount, setAmount] = useState("")
    const [image, setImage] = useState<any>(null);
    const [imageData, setImageData] = useState<any>(null);

    const [payment, setPayment] = useState({
        modeOfPaymentId: "",
        amount: 0,
        file: ""
    })

    const { bg_light, container, my_5, p_5, row_center, p_30 } = styles
    const { darkGrey, primary } = colors

    useEffect(() => {
        if (modeOfPayments.length > 0) {
            setModeOfPaymentId(modeOfPayments[0].id)
        }
    }, [modeOfPayments])

    useEffect(() => {
        dispatch(fetchModeOfPaymentsAsync())
    }, [])

    useEffect(() => {
        if (!invoice) fetchInvoiceDetailsAsync(tenant?.tenantUniqueId!)
    }, [invoice])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
            setImageData(result.base64);
        }
    };

    const onSubmit = async () => {
        if (!!setModeOfPaymentId && !!amount && !!image && !isNaN(+amount)) {
            await dispatch(createPaymentAsync({
                invoiceId: invoice?.id!,
                modeOfPaymentId,
                amount,
                file: imageData!,
                imageUri: image
            }));
            dispatch(fetchInvoicesAsync(tenant?.tenantUniqueId!))
            dispatch(fetchInvoiceDetailsAsync(invoice?.id!))
            navigation.navigate("PaymentConfirmationNavigator")
        }
    }
    if (isFetchingInvoiceDetails || !invoice || isFetchingModeOfPayments || isSaving) return <LoadingScreen />
    const { invoiceNumber } = invoice

    return (
        <View style={container}>

            <View style={[my_5]}>
                <AppText as="h5" bold color={darkGrey} >Invoice Number</AppText>
                <AppText bold >{invoiceNumber}</AppText>
            </View>

            <Formik
                initialValues={payment}
                onSubmit={() => {
                    onSubmit();
                }}
            >
                {
                    ({ handleSubmit, setFieldTouched, errors, touched }) => (
                        <>
                            <View style={my_5}>
                                <AppText as="h5" bold color={darkGrey} >Mode of Payment</AppText>
                                <View style={[bg_light, my_5, p_5]} >
                                    <RNPickerSelect
                                        onValueChange={(value) => setModeOfPaymentId(value)}
                                        items={modeOfPayments.map((i: any) => {
                                            return { label: i.bankName, value: i.id || undefined }
                                        })}
                                        placeholder={{}}
                                        style={{ inputAndroid: { color: 'black' } }}
                                        useNativeAndroidPickerStyle={false}
                                        value={modeOfPaymentId || undefined}
                                    />
                                </View>
                            </View>

                            <FormTextInput
                                icon={<MaterialIcons name="money" size={20} color={primary} />}
                                onBlur={() => setFieldTouched('amount')}
                                onChangeText={(value: any) => setAmount(value)}
                                label='Amount'
                                placeholder='Amount'
                                errorMessage={touched && errors.amount}
                                value={amount}
                                isNuneric={true}
                            />

                            <View style={my_5}>
                                <AppText as="h5" bold color={darkGrey} >Mode of Payment</AppText>
                                <View style={bg_light}>
                                    {
                                        image ? <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> :
                                            <TouchableOpacity onPress={pickImage}>
                                                <View style={[row_center, p_30]}>
                                                    <FontAwesome name="camera" size={50} color={darkGrey} />
                                                </View>
                                            </TouchableOpacity>
                                    }
                                </View>
                            </View>

                            <AppButton onPress={handleSubmit} title='Submit' />

                        </>
                    )
                }
            </Formik>


        </View>
    );
}

export default PaymentFormScreen;