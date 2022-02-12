import React from 'react';
import { Text, View } from 'react-native';
import FormTextInput from '../../components/input/FormTextInput';
import { styles } from '../../styles/styles';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { AntDesign } from '@expo/vector-icons';
import AppButton from '../../components/button/AppButton';


const AccountFormScreen = () => {
    const { bg_light, container, my_5, p_5 } = styles

    return (
        <View style={container}>
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