import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../../components/text/AppText';

const HomeScreen = () => {

    const { bg_dark, bg_light, bg_secondary, center_x, container, icon_circle_xs, me_8, my_5, my_15, p_15, pb_15, px_15, py_25, rounded, row, row_center_x, w_15p, w_50p } = styles;
    const { darkGrey, light, primary } = colors;

    return (
        <View style={container}>
            <View style={my_5}>
                <AppText bold color={darkGrey}>Hi, Name</AppText>
                <AppText bold>ACCNTNMBR</AppText>
            </View>

            <View style={[bg_dark, px_15, py_25, rounded, my_15]}>
                <View style={[pb_15, center_x]}>
                    <AppText as="h5" color={light}>Total Balance</AppText>
                    <AppText as="h3" bold color={light}>PHP 4,000</AppText>
                </View>

                <View style={row}>
                    <View style={[row_center_x, w_50p]}>
                        <View style={[icon_circle_xs, me_8, bg_secondary]}>
                            <Entypo name="location-pin" size={15} color={light} />
                        </View>

                        <View>
                            <AppText as="h5" color={light}>Slot Number</AppText>
                            <AppText as="h5" bold color={light}>A-002</AppText>
                        </View>
                    </View>

                    <View style={[row_center_x, w_50p]}>
                        <View style={[icon_circle_xs, me_8, bg_secondary]}>
                            <FontAwesome name="calendar-o" size={15} color={light} />
                        </View>

                        <View>
                            <AppText as="h5" color={light}>Nexy Billing Date</AppText>
                            <AppText as="h5" bold color={light}>Mar 07, 2022</AppText>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[row_center_x, bg_light, p_15, rounded, my_5]}>
                <View style={w_15p}>
                    <MaterialCommunityIcons name="contactless-payment-circle" size={28} color={primary} />
                </View>
                <View>
                    <AppText as="h4" bold>PAYMENTS</AppText>
                    <AppText as="h5" bold color={darkGrey}>View payment history</AppText>
                </View>
            </View>

            <View style={[row_center_x, bg_light, p_15, rounded, my_5]}>
                <View style={w_15p}>
                    <FontAwesome name="file-text-o" size={22} color={primary} />
                </View>
                <View>
                    <AppText as="h4" bold>INVOICES</AppText>
                    <AppText as="h5" bold color={darkGrey}>View invoices</AppText>
                </View>
            </View>

        </View >

    );
}


export default HomeScreen;