import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../../styles/colors';

interface Props {
    placeholder: string,
}

const FormTextInput: React.FC<Props> = ({ placeholder }) => {
    return (
        <View style={styles.container} >
            <TextInput placeholder={placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 2,
        overflow: "hidden",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        width: "90%"
    }
})

export default FormTextInput;