import React, { useEffect, useState } from 'react';
import { FlatList, Image, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { fetchSlotDetailsAsync, fetchSlotsAsync } from '../../reducers/slotSlice';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import { ISlot } from '../../models/Slot';
import colors from '../../styles/colors';
import routes from '../../navigations/routes';
import { styles } from '../../styles/styles';
import AppText from '../../components/text/AppText';
import LoadingScreen from '../../components/indicator/LoadingScreen';

interface Props {
    navigation: any
}

const SlotsScreen: React.FC<Props> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { slots, isFetchingSlots } = useAppSelecter(state => state.slot);
    const [availableSlots, setAvailableSlots] = useState<Array<ISlot>>([])

    useEffect(() => {
        dispatch(fetchSlotsAsync());
    }, [])

    useEffect(() => {
        if (!!slots) {
            setAvailableSlots(slots.filter(i => i.status === 0));
        }
    }, [slots])

    const handleSlotDetails = async (id: string) => {
        await dispatch(fetchSlotDetailsAsync(id));
        navigation.navigate(routes.SLOT_DETAILS)
    }

    const { bg_light, bg_dark, container, flex_1, mb_25, mx_15, my_5, p_5, p_15, px_15, rounded, row_center_x_between } = styles
    const { darkGrey, primary, secondary } = colors

    if (isFetchingSlots) return <LoadingScreen />

    return (
        <View>

            <View style={[bg_light, container, p_15, rounded]}>
                <FlatList
                    ListHeaderComponent={
                        <View>
                            <View style={[bg_dark, container, rounded]}>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    <View>
                                        <Image
                                            resizeMode='contain'
                                            style={{ height: 300, width: 700 }}
                                            source={require('../../../assets/images/maximarket-map.png')}
                                        />
                                    </View>
                                </ScrollView>
                            </View>

                            <AppText as="h4" bold color={darkGrey}>Available Slots</AppText>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            colors={[secondary, primary]}
                            refreshing={isFetchingSlots}
                            onRefresh={() => dispatch(fetchSlotsAsync())} />
                    }
                    data={availableSlots}
                    keyExtractor={(a) => a.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => handleSlotDetails(item.id)}>
                            <View style={[my_5, p_5, row_center_x_between]}>
                                <AppText as="h4" bold color={primary}>{item.slotNumber}</AppText>
                                <AppText as="h4" bold color={primary}>{item.price}</AppText>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    );
}

export default SlotsScreen;