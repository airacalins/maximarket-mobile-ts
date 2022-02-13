import React, { useEffect } from 'react';
import { ImageBackground, Keyboard, ToastAndroid, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import { fetchTenantDetailsAsync } from '../../reducers/tenantSlice';
import AppButton from '../../components/button/AppButton';
import AppText from '../../components/text/AppText';
import FormTextInput from '../../components/input/FormTextInput';
import LoadingScreen from '../../components/indicator/LoadingScreen';

interface Props {
    navigation: any
}

const LoginFormScreen: React.FC<Props> = ({ navigation }) => {

    const { isFetchingTenantDetails, errorMessage } = useAppSelecter((state) => state.tenant)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!!errorMessage) {
            ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        };
    }, [errorMessage])

    const validationSchema = Yup.object({
        accountNumber: Yup.string().required("Account Number is required.")
    })

    const onSubmit = async (values: any) => {
        await dispatch(fetchTenantDetailsAsync(values.accountNumber));
        Keyboard.dismiss()
    }

    const { bg_darken, centered, flex_1, p_15, row_center, w_100p } = styles

    if (isFetchingTenantDetails) return <LoadingScreen />

    return (
        <ImageBackground resizeMode="cover" source={require('../../../assets/images/login-bg.jpg')} style={{ height: '100%', width: '100%' }}>
            <View style={[flex_1, bg_darken]}>

                <View style={[flex_1, row_center]}>
                    <AppText as="title" color={colors.light}>Maximarket</AppText>
                </View>

                <View style={[centered, flex_1, p_15, w_100p]}>
                    <Formik
                        initialValues={{ accountNumber: '' }}
                        onSubmit={values => onSubmit(values)}
                        validationSchema={validationSchema}
                    >
                        {
                            ({ handleChange, handleSubmit, setFieldTouched, errors, touched }) => (
                                <>
                                    <FormTextInput
                                        icon={<MaterialCommunityIcons name="clipboard-account" size={18} color={colors.primary} />}
                                        onBlur={() => setFieldTouched('accountNumber')}
                                        onChangeText={handleChange('accountNumber')}
                                        placeholder='Enter Account Number'
                                        errorMessage={touched && errors.accountNumber}
                                    />
                                    <AppButton onPress={handleSubmit} title='Submit' />
                                </>
                            )
                        }
                    </Formik>
                </View>
            </View>
        </ImageBackground >

    );
}

export default LoginFormScreen;