import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from '../../styles/styles';

const LoadingScreen = ({ }) => {
    const { flex_1 } = styles

    return (
        <View style={flex_1}>
            <ActivityIndicator />
        </View>
    );
}

export default LoadingScreen;