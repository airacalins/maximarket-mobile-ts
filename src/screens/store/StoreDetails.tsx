import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import * as reactNative from 'react-native';

import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { dateFormatter } from '../../utils/dateFormatter';
import { getTenantContractPhoto } from '../../reducers/tenantSlice';
import AppText from '../../components/text/AppText';
import Detail from '../../components/item/Detail';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import { currencyFormatter } from '../../utils/currencyFormatter';

const StoreDetails = ({ }) => {
    const { tenant, contractPhotos, isFetchingTenantDetails, isFetchingPhotos } = useAppSelecter((state) => state.tenant)

    const dispatch = useAppDispatch()

    const { tenantUniqueId } = tenant!;
    const { slotNumber, size, price, startDate, endDate, } = tenant?.contract!;

    useEffect(() => {
        if (!!tenant) dispatch(getTenantContractPhoto(tenant?.contract?.id!))
    }, [])

    const { bg_light, container, my_5, p_15, rounded } = styles;
    const { darkGrey } = colors

    if (isFetchingTenantDetails && isFetchingPhotos) return <LoadingScreen />

    return (
        <reactNative.View style={[bg_light, container, p_15, rounded]}>
            <reactNative.FlatList
                ListHeaderComponent={
                    <>
                        <Detail title="Account Number" value={tenantUniqueId} />
                        <Detail title="Slot Number" value={slotNumber} />
                        <Detail title="Size" value={`${size} sqm.`} />
                        <Detail title="Rental Fee" value={currencyFormatter(price)} />
                        <Detail title="Contract Start Date" value={dateFormatter(startDate)} />
                        <Detail title="Contract End Date" value={dateFormatter(endDate)} />
                        <AppText as="h5" bold color={darkGrey}>Contact Photos</AppText>
                    </>
                }
                showsVerticalScrollIndicator={false}
                data={contractPhotos}
                keyExtractor={(c => c.id)}
                renderItem={({ item }) =>
                    <>
                        <reactNative.Image
                            source={{ uri: item.url }}
                            resizeMode='contain'
                            style={{ aspectRatio: 1, width: '100%', height: undefined, borderColor: darkGrey, borderRadius: 10, }}
                        />
                    </>
                }
            />
        </reactNative.View>
    );
}

export default StoreDetails;