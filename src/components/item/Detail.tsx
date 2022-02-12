import React from 'react';
import { View } from 'react-native';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../text/AppText';

interface Props {
    title: string,
    value: string
}

const Detail: React.FC<Props> = ({ title, value }) => {
    const { my_10 } = styles
    const { darkGrey } = colors

    return (
        <View style={my_10}>
            <AppText as="h5" bold color={darkGrey} >{title}</AppText>
            <AppText>{value}</AppText>
        </View>
    );
}

export default Detail;