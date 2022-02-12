import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
import colors from "./colors";

export const styles = StyleSheet.create({
    bg_dark: { backgroundColor: colors.dark },
    bg_light: { backgroundColor: colors.light },
    bg_primary: { backgroundColor: colors.primary },
    bg_secondary: { backgroundColor: colors.secondary },

    rounded: { borderRadius: 15 },
    rounded: { borderRadius: 15 },

    center_x: { display: 'flex', alignSelf: 'center' },

    container: {
        margin: 15
    },

    container_full: {
        marginBottom: 15,
        marginHorizontal: 15,
        marginTop: Constants.statusBarHeight + 15,
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

    row: { display: 'flex', flexDirection: 'row' },
    row_center: { alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center' },
    row_center_x: { alignItems: 'center', display: 'flex', flexDirection: 'row' },
    row_center_y: { alignItems: 'center', display: 'flex', justifyContent: 'center' },

    p_5: { padding: 5 },
    p_15: { padding: 15 },
    pb_15: { paddingBottom: 15 },
    px_15: { paddingHorizontal: 15 },
    py_10: { paddingVertical: 10 },
    py_15: { paddingVertical: 15 },
    py_25: { paddingVertical: 25 },

    m_5: { margin: 5 },
    mb_5: { marginBottom: 5 },
    mb_10: { marginBottom: 10 },
    me_5: { marginRight: 5 },
    me_8: { marginRight: 8 },
    me_10: { marginRight: 10 },
    my_5: { marginVertical: 5 },
    my_10: { marginVertical: 10 },
    my_15: { marginVertical: 15 },

    w_25: { width: 25 },
    w_10p: { width: "10%", },
    w_15p: { width: "15%", },
    w_50p: { width: "50%" },
})

