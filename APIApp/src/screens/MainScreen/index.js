import React, { useState } from 'react';
import { View, Image, Alert, Text, ActivityIndicator, FlatList, Linking } from 'react-native';
import { styles } from './styles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../components/CustomInput';

export default function MainScreen() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const apiKey = 'lhDgjGGhYkQwh4sFYzvgRsoV98uQh8Ib';

    const nullSearch = () => {
        Alert.alert(
            "Failed",
            "Search key not entered.",
            [{ text: "Dismiss", onPress: () => console.log("Alert Dismissed") }]
        );
    }

    async function onSearch() {
        if (search != '') {
            setIsLoading(true);
            // const api=`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=%22The%20New%20York%20Times%22&q=${search}&sort=newest&api-key=${apiKey}`;
            // console.log(api);
            const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=%22The%20New%20York%20Times%22&q=${search}&sort=newest&api-key=${apiKey}`);
            setData(response.data);
            setIsLoading(false);
        } else {
            nullSearch();
        }
    }

    function Content() {
        if (data != null) {
            return <View style={styles.articleBox}>
                <View style={styles.headerPanel}>
                    <Image source={{ uri: `https://www.nytimes.com/${data["response"]["docs"][0]["multimedia"][19]["url"]}` }} style={styles.articleImage} />
                    <View style={{ flexShrink: 1 }}>
                        <Text style={styles.articleTitle}>{data["response"]["docs"][0]["abstract"]}</Text>
                        <Text style={styles.articleByline}>{data["response"]["docs"][0]["lead_paragraph"]}</Text>
                    </View>
                </View>
                <Text style={styles.articleLink} onPress={() => {
                    Linking.openURL(`${data["response"]["docs"][0]["web_url"]}`);
                }} >{data["response"]["docs"][0]["web_url"]}</Text>

            </View>
        } else {
            return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={50} color={'white'} animating={isLoading} />
            </View>
        }
    }
    return (
        <>
            <Image source={require('../../assets/images/Gradient.png')} style={styles.bg} />
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <CustomInput propValue={search} propOnChangeText={setSearch} propPlaceholder={'Search'} propContainerStyle={styles.searchBar} propPlaceholderTextColour={'white'} propTextInputStyle={styles.searchText} />
                    <Icon name='search1' onPress={onSearch} style={styles.searchButton} />
                </View>

                <Content />
            </View>
        </>
    )
}