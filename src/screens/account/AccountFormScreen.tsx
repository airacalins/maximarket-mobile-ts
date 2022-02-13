import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppButton from '../../components/button/AppButton';
import FormTextInput from '../../components/input/FormTextInput';

const AccountFormScreen = () => {
    const { container, } = styles

    return (
        <View style={[container]}>
            <FormTextInput icon={<FontAwesome name="user" size={18} color={colors.primary} />} label='First Name' placeholder='First Name' />
            <FormTextInput icon={<FontAwesome name="user" size={18} color={colors.primary} />} label='Last Name' placeholder='Last Name' />
            <FormTextInput icon={<AntDesign name="idcard" size={18} color={colors.primary} />} label='Business Name' placeholder='Business Name' />
            <FormTextInput icon={<FontAwesome name="phone" size={18} color={colors.primary} />} label='Contact Number' placeholder='Contact Number' />
            <FormTextInput icon={<FontAwesome name="home" size={18} color={colors.primary} />} label='Address' placeholder='Address' />
            <AppButton title='UPDATE' onPress={() => { { } }} />
        </View>
    );
}

export default AccountFormScreen;