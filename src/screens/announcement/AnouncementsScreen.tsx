import React, { useEffect } from 'react';
import routes from '../../navigations/routes';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { fetchAnnouncementDetailsAsync, fetchAnnouncementsAsync } from '../../reducers/announcementSlice';
import { useAppSelecter } from '../../store/configureStore';
import colors from '../../styles/colors';
import { styles } from '../../styles/styles';
import { dateFormatter } from '../../utils/dateFormatter';
import AppText from '../../components/text/AppText';
import LoadingScreen from '../../components/indicator/LoadingScreen';
import NoData from '../../components/indicator/NoData';

interface Props {
    navigation: any
}

const AnnouncementsScreen: React.FC<Props> = ({ navigation }) => {
    const { tenant } = useAppSelecter((state) => state.tenant)
    const { announcements, isFetchingAnnouncements } = useAppSelecter((state) => state.announcement)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!tenant) navigation.navigate("AuthNavigator")
    }, [tenant])

    useEffect(() => {
        dispatch(fetchAnnouncementsAsync());
    }, [])

    const handleAnnouncementDetails = async (id: string) => {
        await dispatch(fetchAnnouncementDetailsAsync(id));
        navigation.navigate(routes.ANNOUNCEMENT_DETAILS)
    }

    const { bg_light, container, my_5, p_15, rounded } = styles
    const { darkGrey } = colors

    if (isFetchingAnnouncements) return <LoadingScreen />
    if (!announcements) return <NoData />

    return (
        <View style={container}>
            <FlatList
                data={announcements}
                keyExtractor={(a) => a.id}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => handleAnnouncementDetails(item.id)}>
                        <View style={[bg_light, my_5, p_15, rounded,]}>
                            <AppText as='h4' bold>{item.title}</AppText>
                            <AppText as='h5' bold color={darkGrey}>{dateFormatter(item.dateCreated)}</AppText>
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

export default AnnouncementsScreen;