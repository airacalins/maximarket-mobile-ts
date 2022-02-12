import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';

interface Props {
    onPress: () => void,
    title: string,
}

const AppButton: React.FC<Props> = ({ onPress, title }) => {
    const { my_10 } = styles;

    return (
        <View style={my_10}>
            <Button color={colors.secondary} onPress={onPress} title={title} />
        </View>
    );
}


export default AppButton;