import React from 'react';
import { TextInput, View } from 'react-native';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../text/AppText';

interface Props {
    icon: React.ReactNode,
    label: string,
    placeholder: string,
}

const FormTextInput: React.FC<Props> = ({ icon, label, placeholder }) => {

    const { bg_light, center_x, my_5, p_5, row_center_x, w_25 } = styles
    const { darkGrey, primary } = colors

    return (
        <View style={my_5}>
            <AppText as="h5" bold color={darkGrey}>{label}</AppText>
            <View style={[bg_light, my_5, p_5, row_center_x]} >
                <View style={[center_x, w_25]}>
                    {icon}
                </View>
                <TextInput placeholder={placeholder} />
            </View>
        </View>
    );
}


export default FormTextInput;