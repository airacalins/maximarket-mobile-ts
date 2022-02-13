import React from 'react';
import { View } from 'react-native';

import { useAppSelecter } from '../../store/configureStore';
import { styles } from '../../styles/styles';
import { dateFormatter } from '../../utils/dateFormatter';
import Detail from '../../components/item/Detail';
import LoadingScreen from '../../components/indicator/LoadingScreen';

const StoreDetails = ({ }) => {
    const { tenant, isFetchingTenantDetails } = useAppSelecter((state) => state.tenant)
    const { tenantUniqueId } = tenant!;
    const { slotNumber, size, price, startDate, endDate, } = tenant?.contract!;

    const { bg_light, container, p_15, rounded } = styles;

    if (isFetchingTenantDetails) return <LoadingScreen />

    return (
        <View style={[bg_light, container, p_15, rounded]}>
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