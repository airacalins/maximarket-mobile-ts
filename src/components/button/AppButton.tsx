import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import colors from '../../styles/colors';

interface Props {
    onPress: () => void,
    title: string,
}

const AppButton: React.FC<Props> = ({ onPress, title }) => {
    return (
        <View style={styles.container}>
            <Button color={colors.secondary} onPress={onPress} title={title} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: "90%"
    }
})

export default AppButton;