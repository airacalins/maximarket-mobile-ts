import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/button/AppButton';
import FormTextInput from '../../components/input/FormTextInput';
import AppText from '../../components/text/AppText';
import colors from '../../styles/colors';

const LoginFormScreen = () => {
    return (
        <ImageBackground resizeMode="cover" source={require('../../../assets/images/login-bg.jpg')} style={{ height: '100%', width: '100%' }}>
            <View style={styles.container}>

                <View style={styles.title}>
                    <AppText as="title" color={colors.light}>Maximarket</AppText>
                </View>

                <View style={styles.formContainer}>
                    <FormTextInput placeholder='Enter Account Number' />
                    <AppButton onPress={() => console.log("Pressed")} title='Submit' />
                </View>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
    },
    title: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    formContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    }

})

export default LoginFormScreen;