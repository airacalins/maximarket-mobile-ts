import React, { useEffect } from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';

import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import { styles } from '../../styles/styles';
import { dateFormatter } from '../../utils/dateFormatter';
import Detail from '../../components/item/Detail';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import { getTenantContractPhoto } from '../../reducers/tenantSlice';
import AppText from '../../components/text/AppText';
import colors from '../../styles/colors';

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

    if (isFetchingTenantDetails || isFetchingPhotos) return <LoadingScreen />

    return (
        <View style={[bg_light, container, p_15, rounded]}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <Detail title="Account Number" value={tenantUniqueId} />
                        <Detail title="Slot Number" value={slotNumber} />
                        <Detail title="Size" value={`${size} sqm.`} />
                        <Detail title="Rental Fee" value={price} />
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
                        <Image
                            source={{ uri: item.url }}
                            resizeMode='contain'
                            style={{ aspectRatio: 1, width: '100%', height: undefined, borderColor: darkGrey, borderRadius: 10, }}
                        />
                    </>
                }
            />
        </View>
    );
}

export default StoreDetails;

// {
//     !!contractPhotos ?
//       contractPhotos.map(i =>
//         <>
//           <Image
//             source={{ uri: i.url }}
//             resizeMode='contain'
//             style={{
//               aspectRatio: 1,
//               width: '100%',
//               height: undefined,
//               borderColor: colors.grey,
//               borderRadius: 10,
//               borderWidth: 1,
//             }}
//           />
//           <TextStyle as="h5" italic>Uploaded on {moment(i.dateCreated).format("MMM DD, YYYY")}</TextStyle>
//         </>
//       )
//       :
//       <Segment alignItems="center" borderWidth={1} borderColor={colors.grey}>
//         <TextStyle italic bold color={colors.red}>
//           No contract photo yet.
//         </TextStyle>
//       </Segment>

//   }