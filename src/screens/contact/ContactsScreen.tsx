import React from 'react';
import { Text, View } from 'react-native';
import AppText from '../../components/text/AppText';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';

const ContactScreen = () => {
    const { secondary } = colors
    const { bg_light, container, flex_1, rounded, row_center_y, my_10 } = styles;

    return (
        <View style={[bg_light, container, flex_1, rounded, row_center_y,]}>
            <View style={my_10}>
                <AppText as="h1" bold>Maximarket</AppText>
            </View>

            <View style={my_10}>
                <AppText as="h3">Maximarket, De Castro Avenue, Brgy. Santa Lucia, Pasig City</AppText>
            </View>

            <View style={my_10}>
                <AppText>0927-6960322</AppText>
            </View>
        </View>
    );
}

export default ContactScreen;