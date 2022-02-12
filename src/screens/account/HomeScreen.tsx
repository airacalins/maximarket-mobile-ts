import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import AppText from '../../components/text/AppText';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../../styles/styles';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.my_5}>
                <AppText bold color={colors.darkGrey}>Hi, Name</AppText>
                <AppText bold>ACCNTNMBR</AppText>
            </View>

            <View style={[styles.bg_dark, styles.px_15, styles.py_25, styles.bordered, styles.my_15]}>
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

// const styles = StyleSheet.create({
//     bg_dark: { backgroundColor: colors.dark },
//     bg_light: { backgroundColor: colors.light },
//     bg_primary: { backgroundColor: colors.primary },
//     bg_secondary: { backgroundColor: colors.secondary },

//     bordered: { borderRadius: 15 },

//     center_x: { display: 'flex', alignSelf: 'center' },

//     container: {
//         marginBottom: 15,
//         marginHorizontal: 15,
//         marginTop: Constants.statusBarHeight + 15,
//     },

//     icon_circle_xs: {
//         alignItems: 'center',
//         borderRadius: 12.5,
//         display: 'flex',
//         justifyContent: 'center',
//         height: 25,
//         width: 25,
//     },

//     row: { display: 'flex', flexDirection: 'row' },
//     row_center: { alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center' },
//     row_center_x: { alignItems: 'center', display: 'flex', flexDirection: 'row' },
//     row_center_y: { alignItems: 'center', display: 'flex', justifyContent: 'center' },

//     p_15: { padding: 15 },
//     pb_15: { paddingBottom: 15 },
//     px_15: { paddingHorizontal: 15 },
//     py_15: { paddingVertical: 15 },
//     py_25: { paddingVertical: 25 },

//     m_5: { margin: 5 },
//     my_5: { marginVertical: 5 },
//     my_10: { marginVertical: 10 },
//     my_15: { marginVertical: 15 },
//     me_5: { marginRight: 5 },
//     me_8: { marginRight: 8 },

//     w_10: { width: "10%", },
//     w_15: { width: "15%", },
//     w_50: { width: "50%" },

// })

export default HomeScreen;