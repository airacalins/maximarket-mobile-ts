
import { View } from "react-native"
import colors from "../../styles/colors";
import { styles } from "../../styles/styles";
import AppText from "../text/AppText";

interface Props {
    status: number
}

const InvoiceBadge: React.FC<Props> = ({ status }) => {
    const { badge, bg_blue, bg_green, bg_red, bg_yellow } = styles;
    const { light } = colors;

    if (status === 0) return (
        <View style={[badge, bg_red]}>
            <AppText as="h5" color={light}>Unpaid</AppText>
        </View>
    )

    if (status === 1) return (
        <View style={[badge, bg_yellow]}>
            <AppText as="h5" color={light}>Pending</AppText>
        </View>
    )

    if (status === 2) return (
        <View style={[badge, bg_blue]}>
            <AppText as="h5" color={light}>Partially Paid</AppText>
        </View>
    )

    return (
        <View style={[badge, bg_green]}>
            <AppText as="h5" color={light}>Paid</AppText>
        </View>
    )
}

export default InvoiceBadge