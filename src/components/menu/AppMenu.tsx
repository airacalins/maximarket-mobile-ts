import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import AppText from '../text/AppText';

interface Props {
    title: string,
    subtitle: string,
    icon: React.ReactNode,
    onPress: () => void
}

const AppMenu: React.FC<Props> = ({ title, subtitle, icon, onPress }) => {

    const { bg_light, bg_primary, icon_rounded_s, me_10, p_15, rounded, row_center, row_center_x, w_15p } = styles;
    const { darkGrey } = colors;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[bg_light, rounded]} >
                <View style={[row_center_x, p_15]}>
                    <View style={[w_15p, bg_primary, row_center, icon_rounded_s, me_10]}>
                        {icon}
                    </View>

                    <View>
                        <AppText as="h3" bold>{title}</AppText>
                        <AppText as="h5" color={darkGrey}>{subtitle}</AppText>
                    </View>
                </View>
            </View >
        </TouchableOpacity>
    )
}
export default AppMenu;