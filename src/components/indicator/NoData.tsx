import React from 'react';
import { View } from 'react-native';

import { styles } from '../../styles/styles';
import AppText from '../text/AppText';

const NoData = ({ }) => {
    const { bg_light, flex_1, m_15, row_center, rounded } = styles;

    return (
        <View style={[bg_light, flex_1, m_15, rounded, row_center]}>
            <AppText >No data</AppText>
        </View >
    );
}

export default NoData;