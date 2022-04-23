import axios from 'axios';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, Linking, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../components/CustomInput';
import { styles } from './styles';

export default function MainScreen() {
    const [search, setSearch] = useState('');
    const [fetchData, setFetchData] = useState(null);
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
        // try {
            if (search != '') {
                setIsLoading(true);
                // const api=`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=%22The%20New%20York%20Times%22&q=${search}&sort=newest&api-key=${apiKey}`;
                // console.log(api);

                const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=%22The%20New%20York%20Times%22&q=${search}&sort=newest&api-key=${apiKey}`);
                setFetchData(response.data);
                setIsLoading(false);
                console.log(fetchData["response"]["docs"]);
            } else {
                nullSearch();
            }
        // } catch {
        //     console.log('NoResponse')
        // }
    }

    function Content() {
        if (fetchData != null) {
            return (
                <FlatList
                // contentContainerStyle={{paddingVertical: 10}}
                    data={fetchData["response"]["docs"]}
                    renderItem={({ item }) => {
                        return (
                            < View style={styles.articleBox} >
                                <View style={styles.headerPanel}>
                                    {/* <Image source={{ uri: `https://www.nytimes.com/${item["multimedia"][0]["url"]}` }} style={styles.articleImage} /> */}

                                    <View style={{ flexShrink: 1 }}>
                                        <Text style={styles.articleTitle}>{item["abstract"]}</Text>

                                        <Text style={styles.articleByline}>{item["lead_paragraph"]}</Text>
                                    </View>
                                </View>
                                <Text style={styles.articleLink} onPress={() => {
                                    Linking.openURL(`${item["web_url"]}`);
                                }} >{item["web_url"]}</Text>
                            </View >
                        )
                    }}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={()=>(<View style={{height: 10}}></View>)}
                    
                />
            )
        } else {
            if (isLoading) {
                return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={50} color={'white'} animating={isLoading} />
                </View>
            } else {
                return (<></>);
            }
        }
    }

    return (
        <>
            <Image source={require('../../assets/images/Gradient.png')} style={styles.bg} />
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <CustomInput propValue={search} propOnChangeText={setSearch} propPlaceholder={'Search'} propContainerStyle={styles.searchBar} propPlaceholderTextColour={'#909090'} propTextInputStyle={styles.searchText} />
                    <Icon name='search1' onPress={onSearch} style={styles.searchButton} />
                </View>
                <Content />
            </View>
        </>
    )
}