import React from 'react';
import { View } from 'react-native';

import { useAppSelecter } from '../../store/configureStore';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { dateFormatter } from '../../utils/dateFormatter';
import Detail from '../../components/item/Detail';
import AppText from '../../components/text/AppText';
import LoadingScreen from '../../components/indicator/LoadingScreen';

const StoreDetails = ({ }) => {
    const { tenant, isFetchingTenantDetails } = useAppSelecter((state) => state.tenant)

    const { tenantUniqueId, isActive } = tenant!;
    const { slotNumber, size, price, startDate, endDate, } = tenant?.contract!;

    const { badge, bg_light, bg_green, bg_red, container, p_5, p_15, rounded } = styles;
    const { light } = colors

    if (isFetchingTenantDetails) return <LoadingScreen />

    return (
        <View style={[bg_light, container, p_15, rounded]}>
            <Detail title="Status" value={
                isActive ?
                    <View style={[badge, bg_green]} >
                        <AppText as="h5" bold color={light} italic>Active</AppText>
                    </View> :

                    <View style={[badge, bg_red]} >
                        <AppText as="h5" bold color={light} italic>Deativated</AppText>
                    </View>
            } />
            <Detail title="Account Number" value={tenantUniqueId} />
            <Detail title="Slot Number" value={slotNumber} />
            <Detail title="Size" value={size} />
            <Detail title="Rental Fee" value={price} />
            <Detail title="Contract Start Date" value={dateFormatter(startDate)} />
            <Detail title="Contract End Date" value={dateFormatter(endDate)} />
        </View>

    );
}

export default StoreDetails;