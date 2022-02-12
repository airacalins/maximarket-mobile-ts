import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../../styles/colors';

import { styles } from '../../styles/styles';

const LoadingScreen = ({ }) => {
    const { bg_darken, flex_1, row_center } = styles
    const { secondary } = colors

    return (
        <View style={[bg_darken, flex_1, row_center]}>
            <ActivityIndicator size="large" color={secondary} />
        </View>
    );
}

export default LoadingScreen;