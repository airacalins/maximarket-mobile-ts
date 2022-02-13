import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import AppText from '../../components/text/AppText';
import { ISlot } from '../../models/Slot';
import routes from '../../navigations/routes';
import { fetchSlotDetailsAsync, fetchSlotsAsync } from '../../reducers/slotSlice';
import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';

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
        navigation.navigate(routes.SLOT_DETAILS)
        await dispatch(fetchSlotDetailsAsync(id));
    }

    const { bg_light, container, flex_1, mb_25, mx_15, my_5, p_15, px_15, rounded, row_center_x_between } = styles
    const { darkGrey, primary } = colors

    if (isFetchingSlots) return <LoadingScreen />

    return (
        <View>
            <View style={[bg_light, container, px_15, rounded]}>
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

            <View>
                <View style={mx_15}>
                    <AppText as="h4" bold color={darkGrey}>Available Slots</AppText>
                </View>

                <View>
                    <FlatList
                        data={availableSlots}
                        keyExtractor={(a) => a.id}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => handleSlotDetails(item.id)}>
                                <View style={[bg_light, mx_15, my_5, p_15, rounded, row_center_x_between]}>
                                    <AppText as="h4" bold color={primary}>{item.slotNumber}</AppText>
                                    <AppText as="h4" bold color={primary}>{item.price}</AppText>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>
        </View>
    );
}

export default SlotsScreen;