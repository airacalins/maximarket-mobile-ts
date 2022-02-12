import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useAppSelecter } from '../../store/configureStore';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../../components/text/AppText';
import AppMenu from '../../components/menu/AppMenu';

interface Props {
    navigation: any
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { tenant, isFetchingTenantDetails, errorMessage } = useAppSelecter((state) => state.tenant)

    useEffect(() => {
        if (!tenant) navigation.navigate("AuthNavigator")
    }, [tenant])

    const { firstName, tenantUniqueId } = tenant!;
    const { bg_dark, bg_light, bg_secondary, center_x, container_full, icon_circle_xs, mb_10, me_8, my_5, my_15, p_15, pb_15, px_15, py_25, rounded, row, row_center_x, row_center_x_between, w_30, w_50p } = styles;
    const { darkGrey, light, primary } = colors;

    return (

        <View style={container_full}>
            <View style={[my_5, row_center_x_between]}>
                <View>
                    <AppText bold color={darkGrey}>Hi, {firstName}</AppText>
                    <AppText bold>{tenantUniqueId}</AppText>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('AnnouncementNavigator')}>
                    <FontAwesome name="bell" size={20} color={colors.darkGrey} />
                </TouchableOpacity>
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

            <View style={[bg_light, rounded, mb_10]}>
                <AppMenu
                    title='Payments'
                    subtitle='View payment histories'
                    icon={<MaterialCommunityIcons name="contactless-payment-circle" size={28} color={light} />}
                    onPress={() => navigation.navigate("PaymentsNavigator")}
                />
            </View>

            <View style={[bg_light, rounded, mb_10]}>
                <AppMenu
                    title='Invoices'
                    subtitle='View recent invoices'
                    icon={<FontAwesome name="file-text-o" size={22} color={light} />}
                    onPress={() => navigation.navigate("InvoicesNavigator")}
                />
            </View>

        </View >

    );
}


export default HomeScreen;