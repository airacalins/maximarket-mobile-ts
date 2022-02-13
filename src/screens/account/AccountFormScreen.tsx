import React, { useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppButton from '../../components/button/AppButton';
import FormTextInput from '../../components/input/FormTextInput';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import { Formik } from 'formik';
import { fetchTenantDetailsAsync, updateTenantDetailsAsync } from '../../reducers/tenantSlice';
import { IUpdateTenantInput } from '../../models/Tenant';
import routes from '../../navigations/routes';

interface Props {
    navigation: any
}

const AccountFormScreen: React.FC<Props> = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const { tenant } = useAppSelecter((state) => state.tenant)

    const [tenantInput, setTenantInput] = useState({
        id: "",
        firstName: "",
        lastName: "",
        businessName: "",
        contact: "",
        address: ""
    });

    useEffect(() => {
        if (!!tenant) setTenantInput({
            id: tenant.id,
            firstName: tenant.firstName,
            lastName: tenant.lastName,
            businessName: tenant.businessName,
            contact: tenant.phone,
            address: tenant.address
        })
    }, [tenant])

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required().label('First name is required.'),
        lastName: Yup.string().required().label('Last name is required.'),
        businessName: Yup.string().required().label('Business name is required.'),
        contact: Yup.string().required().label('Phone is required.'),
        address: Yup.string().required().label('Address is required.'),
    });

    const onSubmit = async (values: IUpdateTenantInput) => {
        navigation.navigate(routes.MENU)
        Keyboard.dismiss()
        await dispatch(updateTenantDetailsAsync(values));
        await dispatch(fetchTenantDetailsAsync(tenant?.tenantUniqueId!))
    }

    const { container } = styles

    return (
        <View style={[container]}>

            <Formik
                enableReinitialize
                initialValues={tenantInput}
                onSubmit={values => onSubmit(values)}
                validationSchema={validationSchema}
            >
                {
                    ({ handleChange, handleSubmit, setFieldTouched, errors, touched, values }) => (
                        <>
                            <FormTextInput
                                icon={<FontAwesome name="user" size={18} color={colors.primary} />}
                                onBlur={() => setFieldTouched('firstName')}
                                onChangeText={handleChange('firstName')}
                                label='First Name'
                                placeholder='First Name'
                                value={values.firstName}
                                errorMessage={touched && errors.firstName}
                            />

                            <FormTextInput
                                icon={<FontAwesome name="user" size={18} color={colors.primary} />}
                                onBlur={() => setFieldTouched('lastName')}
                                onChangeText={handleChange('lastName')}
                                label='Last Name'
                                placeholder='Last Name'
                                value={values.lastName}
                                errorMessage={touched && errors.lastName}
                            />

                            <FormTextInput
                                icon={<AntDesign name="idcard" size={18} color={colors.primary} />}
                                onBlur={() => setFieldTouched('businessName')}
                                onChangeText={handleChange('businessName')}
                                label='Business Name'
                                placeholder='Business Name'
                                value={values.businessName}
                                errorMessage={touched && errors.businessName}
                            />

                            <FormTextInput
                                icon={<FontAwesome name="phone" size={18} color={colors.primary} />}
                                onBlur={() => setFieldTouched('contact')}
                                onChangeText={handleChange('contact')}
                                label='Contact Number'
                                placeholder='Contact Number'
                                value={values.contact}
                                errorMessage={touched && errors.contact}
                            />

                            <FormTextInput
                                icon={<FontAwesome name="home" size={18} color={colors.primary} />}
                                onBlur={() => setFieldTouched('address')}
                                onChangeText={handleChange('address')}
                                label='Address'
                                placeholder='Address'
                                value={values.address}
                                errorMessage={touched && errors.address}
                            />

                            <AppButton onPress={handleSubmit} title='Update' />

                        </>
                    )

                }

            </Formik>

            {/* <Detail title="Status" value={
                isActive ?
                    <View style={[badge, bg_green]} >
                        <AppText as="h5" bold color={light} italic>Active</AppText>
                    </View> :

                    <View style={[badge, bg_red]} >
                        <AppText as="h5" bold color={light} italic>Deativated</AppText>
                    </View>
            } /> */}
            {/* <FormTextInput icon={<FontAwesome name="user" size={18} color={colors.primary} />} label='First Name' placeholder='First Name' />
            <FormTextInput icon={<FontAwesome name="user" size={18} color={colors.primary} />} label='Last Name' placeholder='Last Name' />
            <FormTextInput icon={<AntDesign name="idcard" size={18} color={colors.primary} />} label='Business Name' placeholder='Business Name' />
            <FormTextInput icon={<FontAwesome name="phone" size={18} color={colors.primary} />} label='Contact Number' placeholder='Contact Number' />
            <FormTextInput icon={<FontAwesome name="home" size={18} color={colors.primary} />} label='Address' placeholder='Address' />
            <AppButton title='UPDATE' onPress={() => { { } }} /> */}
        </View>
    );
}

export default AccountFormScreen;