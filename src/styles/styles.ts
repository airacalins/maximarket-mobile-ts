import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
import colors from "./colors";

const { dark, green, light, primary, red, secondary } = colors

export const styles = StyleSheet.create({

    badge: {
        paddingHorizontal: 5,
        borderRadius: 5,
    },

    bg_dark: { backgroundColor: dark },
    bg_darken: { backgroundColor: "rgba(0,0,0,0.5)" },
    bg_green: { backgroundColor: green },
    bg_light: { backgroundColor: light },
    bg_primary: { backgroundColor: primary },
    bg_red: { backgroundColor: red },
    bg_secondary: { backgroundColor: secondary },

    rounded: { borderRadius: 15 },

    centered: { alignSelf: 'center', display: 'flex', justifyContent: 'center' },
    center_x: { alignSelf: 'center', display: 'flex' },

    container: {
        margin: 15
    },

    container_full: {
        marginBottom: 15,
        marginHorizontal: 15,
        marginTop: Constants.statusBarHeight + 15,
    },

    flex_1: {
        flex: 1
    },

    icon_circle_xs: {
        alignItems: 'center',
        borderRadius: 12.5,
        display: 'flex',
        justifyContent: 'center',
        height: 25,
        width: 25,
    },

    icon_rounded_s: {
        borderRadius: 5,
        height: 35,
        width: 35,
    },

    m_5: { margin: 5 },
    m_15: { margin: 15 },
    mb_5: { marginBottom: 5 },
    mb_10: { marginBottom: 10 },
    mb_15: { marginBottom: 15 },
    mb_25: { marginBottom: 25 },
    me_5: { marginRight: 5 },
    me_8: { marginRight: 8 },
    me_10: { marginRight: 10 },
    mt_15: {marginTop: 15},
    mx_15: {marginHorizontal: 15},
    my_5: { marginVertical: 5 },
    my_10: { marginVertical: 10 },
    my_15: { marginVertical: 15 },

    p_5: { padding: 5 },
    p_10: { padding: 10 },
    p_15: { padding: 15 },
    pb_15: { paddingBottom: 15 },
    px_5: { paddingHorizontal: 5 },
    px_15: { paddingHorizontal: 15 },
    py_10: { paddingVertical: 10 },
    py_15: { paddingVertical: 15 },
    py_25: { paddingVertical: 25 },

    row: { display: 'flex', flexDirection: 'row' },
    row_center: { alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center' },
    row_center_x: { alignItems: 'center', display: 'flex', flexDirection: 'row' },
    row_center_x_between: { alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    row_center_y: { alignItems: 'center', display: 'flex', justifyContent: 'center' },

    separator: { borderWidth: 0.5, borderColor: secondary },

    w_20: { width: 20 },
    w_25: { width: 25 },
    w_30: { width: 30 },
    w_10p: { width: "10%", },
    w_15p: { width: "15%", },
    w_50p: { width: "50%" },
    w_100p: { width: "100%" }
})

