import React, { useEffect } from 'react';
import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../../components/text/AppText';
import AppMenu from '../../components/menu/AppMenu';
import routes from '../../navigations/routes';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import { resetTenant } from '../../reducers/tenantSlice';

interface Props {
    navigation: any
}

const MenusScreen: React.FC<Props> = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const { tenant, isFetchingTenantDetails, isSaving } = useAppSelecter((state) => state.tenant)
    const { firstName, lastName } = tenant!

    useEffect(() => {
        if (!tenant) navigation.navigate("AuthNavigator")
    }, [])

    const { bg_light, container_full, mb_10, rounded } = styles;
    const { light } = colors;

    if (isFetchingTenantDetails || isSaving) return <LoadingScreen />

    return (
        <View style={container_full}>

            <View style={[bg_light, rounded, mb_10]}>
                <AppMenu
                    title={`${firstName} ${lastName}`}
                    subtitle='Edit Personal Information'
                    icon={<FontAwesome5 name="user" size={20} color={light} />}
                    onPress={() => navigation.navigate(routes.ACCOUNT_FORM)}
                />

                <AppMenu
                    title='My Store'
                    subtitle='View rented slot details'
                    icon={<FontAwesome5 name="store" size={20} color={light} />}
                    onPress={() => navigation.navigate(routes.STORE_DETAILS)}
                />
            </View>

            <View style={[bg_light, rounded]}>
                <AppMenu
                    title='Slot Locator'
                    subtitle='Visual map and available slots'
                    icon={<Ionicons name="location" size={20} color={light} />}
                    onPress={() => navigation.navigate('SlotNavigator')}
                />

                <AppMenu
                    title='Mode of Payments'
                    subtitle='List of acceptable payment methods'
                    icon={<Ionicons name="card" size={20} color={light} />}
                    onPress={() => navigation.navigate(routes.MODE_OF_PAYMENTS)}
                />

                <AppMenu
                    title='Contacts'
                    subtitle='Where to find us?'
                    icon={<FontAwesome5 name="phone" size={20} color={light} />}
                    onPress={() => navigation.navigate(routes.CONTACTS)}
                />

                <AppMenu
                    title='Logout'
                    subtitle='Logout'
                    icon={<MaterialCommunityIcons name="logout-variant" size={20} color={light} />}
                    onPress={
                        () => {
                            dispatch(resetTenant());
                        }
                    }
                />
            </View>
        </View>
    );
}

export default MenusScreen;