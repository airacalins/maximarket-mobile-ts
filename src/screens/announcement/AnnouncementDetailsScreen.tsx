import React, { useEffect } from 'react';
import moment from 'moment';
import { View } from 'react-native';

import { useAppDispatch, useAppSelecter } from '../../store/configureStore';
import { styles } from '../../styles/styles';
import AppText from '../../components/text/AppText';
import LoadingScreen from '../../components/indicator/LoadingScreen';

interface Props {
    navigation: any,
    route: any
}

const AnnouncementDetailsScreen: React.FC<Props> = ({ navigation }) => {
    const { tenant } = useAppSelecter((state) => state.tenant)
    const { announcement } = useAppSelecter((state) => state.announcement)

    useEffect(() => {
        if (!tenant) navigation.navigate("AuthNavigator")
    }, [tenant])

    if (!announcement) return <LoadingScreen />

    const { title, message, dateCreated } = announcement
    const { bg_light, container, flex_1, my_5, p_15 } = styles;

    return (
        <View style={[bg_light, container, flex_1, p_15]}>
            <AppText bold>{title}</AppText>
            <View style={my_5}>
                <AppText>{moment(dateCreated).format("MMM DD, YYYY")}</AppText>
            </View>
            <AppText>{message}</AppText>
        </View>
    );
}

export default AnnouncementDetailsScreen;