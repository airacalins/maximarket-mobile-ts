import React from 'react';
import { TextInput, View } from 'react-native';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../text/AppText';

interface Props {
    errorMessage?: string,
    icon: React.ReactNode,
    label?: string,
    onBlur: any,
    onChangeText: any,
    placeholder: string,
    value?: string,
    isNuneric?: boolean
}

const FormTextInput: React.FC<Props> = ({ errorMessage, icon, label, onBlur, onChangeText, placeholder, value, isNuneric }) => {

    const { bg_light, center_x, my_5, p_5, px_5, row_center_x, w_25, w_100p } = styles
    const { darkGrey, red } = colors

    return (
        <View style={my_5}>
            <AppText as="h5" bold color={darkGrey}>{label}</AppText>
            <View style={[bg_light, my_5, p_5, row_center_x]} >
                <View style={[center_x, w_25]}>
                    {icon}
                </View>

                <TextInput
                    autoCapitalize="characters"
                    onBlur={onBlur}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    style={w_100p}
                    value={value}
                    keyboardType={isNuneric ? "numeric" : undefined}
                />
            </View>

            {
                errorMessage &&
                <View style={px_5}>
                    <AppText as='h5' bold color={red}>{errorMessage}</AppText>
                </View>
            }

        </View>
    );
}


export default FormTextInput;