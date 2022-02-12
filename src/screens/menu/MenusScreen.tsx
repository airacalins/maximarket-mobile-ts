import React from 'react';
import { Text, View } from 'react-native';
import AppText from '../../components/text/AppText';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../../styles/styles';
import colors from '../../styles/colors';



const MenusScreen = () => {

    const { bg_light, bg_primary, container, p_15, me_5, py_10, rounded, row_center, row_center_x, w_15, } = styles;

    return (
        <View style={container}>
            <View style={[bg_light, rounded]}>
                <View style={[row_center_x, p_15]}>
                    <View style={[w_15, bg_primary, row_center, py_10, rounded, me_5]}>
                        <FontAwesome5 name="user" size={24} color={colors.light} />
                    </View>
                    <View>
                        <AppText as="h3" bold>Name</AppText>
                        <AppText as="h5" color={colors.darkGrey}>Edit Personal Information</AppText>
                    </View>
                </View>

                <FontAwesome5 name="store" size={24} color="black" />
                <FontAwesome5 name="phone" size={24} color="black" />
                <Ionicons name="card" size={24} color="black" />
                <Ionicons name="location-outline" size={24} color="black" />
                <MaterialCommunityIcons name="logout-variant" size={24} color="black" />

            </View>
        </View>
    );
}

export default MenusScreen;