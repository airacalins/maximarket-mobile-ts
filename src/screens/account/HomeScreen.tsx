import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../../components/text/AppText';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.my_5}>
                <AppText bold color={colors.darkGrey}>Hi, Name</AppText>
                <AppText bold>ACCNTNMBR</AppText>
            </View>

            <View style={[styles.bg_dark, styles.px_15, styles.py_25, styles.rounded, styles.my_15]}>
                <View style={[styles.pb_15, styles.center_x]}>
                    <AppText as="h5" color={colors.light}>Total Balance</AppText>
                    <AppText as="h3" bold color={colors.light}>PHP 4,000</AppText>
                </View>

                <View style={styles.row}>
                    <View style={[styles.row_center_x, styles.w_50]}>
                        <View style={[styles.icon_circle_xs, styles.me_8, styles.bg_secondary]}>
                            <Entypo name="location-pin" size={15} color={colors.light} />
                        </View>

                        <View>
                            <AppText as="h5" color={colors.light}>Slot Number</AppText>
                            <AppText as="h5" bold color={colors.light}>A-002</AppText>
                        </View>
                    </View>

                    <View style={[styles.row_center_x, styles.w_50]}>
                        <View style={[styles.icon_circle_xs, styles.me_8, styles.bg_secondary]}>
                            <FontAwesome name="calendar-o" size={15} color={colors.light} />
                        </View>

                        <View>
                            <AppText as="h5" color={colors.light}>Nexy Billing Date</AppText>
                            <AppText as="h5" bold color={colors.light}>Mar 07, 2022</AppText>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[styles.row_center_x, styles.bg_light, styles.p_15, styles.bordered, styles.my_5]}>
                <View style={styles.w_15}>
                    <MaterialCommunityIcons name="contactless-payment-circle" size={28} color={colors.primary} />
                </View>
                <View>
                    <AppText as="h4" bold>PAYMENTS</AppText>
                    <AppText as="h5" bold color={colors.darkGrey}>View payment history</AppText>
                </View>
            </View>

            <View style={[styles.row_center_x, styles.bg_light, styles.p_15, styles.bordered, styles.my_5]}>
                <View style={styles.w_15}>
                    <FontAwesome name="file-text-o" size={22} color={colors.primary} />
                </View>
                <View>
                    <AppText as="h4" bold>INVOICES</AppText>
                    <AppText as="h5" bold color={colors.darkGrey}>View invoices</AppText>
                </View>
            </View>

        </View >

    );
}


export default HomeScreen;