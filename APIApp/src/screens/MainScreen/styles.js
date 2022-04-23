import { Dimensions, StyleSheet } from 'react-native';
const dim = Dimensions.get('window');

export const styles = StyleSheet.create(
    {
        container: {
            // backgroundColor: '#000000',
            flex: 1,
            padding: 15,
        },
        bg: {
            position: 'absolute',
            height: dim.height,
            width: dim.width,
        },
        NYTLogo: {
            // marginTop: 150,
            alignSelf: 'center',
        },
        searchBox: {
            // padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            // backgroundColor: 'white'
        },
        searchBar: {
            flex: 1,
            backgroundColor: '#303030',
            borderRadius: 30,
            marginRight: 5,
            height: 60,
        },
        searchText: {
            paddingLeft: 20,
            color: 'white',
            fontSize: 18,
        },
        searchButton: {
            marginLeft: 5,
            backgroundColor: '#303030',
            color: 'white',
            fontSize: 25,
            height: 60,
            width: 60,
            textAlignVertical: 'center',
            textAlign: 'center',
            // padding: 20,
            borderRadius: 30,
        },
        articleBox: {
            // flex: 1,
            borderRadius: 10,
            // marginTop: 10,
            padding: 10,
            backgroundColor: 'rgba(0,0,0,0.25)'
        },
        headerPanel: {
            flexDirection: 'row',
        },
        articleTitle: {
            paddingHorizontal: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            flexShrink: 1,
        },
        articleByline: {
            paddingHorizontal: 10,
            fontSize: 14,
            // fontWeight: 'bold',
            color: 'white',
            flexShrink: 1,
        },
        articleLink: {
            paddingVertical: 5,
            color: '#aaaaaa',
        },
        articleImage: {
            borderRadius: 10,
            // alignSelf: 'center',
            resizeMode: 'contain',
            width: 100,
            height: 100,
        },
    }
)