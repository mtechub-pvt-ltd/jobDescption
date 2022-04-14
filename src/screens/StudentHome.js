import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
    TouchableRipple, Text, Appbar, TextInput,
    Modal, Snackbar
} from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import SplashScreen from 'react-native-splash-screen';

import RBSheet from 'react-native-raw-bottom-sheet';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

import DateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Button1 from '../comp/Button1';

const StudentHome = ({ navigation }) => {


    const [myPlaylistFlatlist, setMyPlaylistFlatlist] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },])



    return (
        <View style={{
            flex: 1, backgroundColor: COLORS.black000000,
            paddingHorizontal: "5%", paddingVertical: '3%'
        }}>
            <View style={{

            }}>

                <SvgXml xml={Svgs.leftArrow} style={{

                }}
                    onPress={() =>
                        navigation.goBack()} />



                <View style={{ marginTop: '4%', marginLeft: '4%' }}
                >
                    <Text style={STYLES.fontSize15_whiteFFFFFF_Archivo_Bold}>Search Jobs</Text>
                </View>
            </View>
            <FlatList style={{
                marginTop: '10%',
            }}
                showsVerticalScrollIndicator={false}
                // horizontal={false}

                data={myPlaylistFlatlist}
                renderItem={({ item }) => {
                    return (

                        <>
                            <TouchableOpacity style={{
                                //   backgroundColor: 'green',

                                height: 150,




                                marginVertical: '4%',
                                borderRadius: 20,


                            }} onPress={() => { navigation.navigate("StudentJobPreview") }}
                            >

                                <Image
                                    source={{ uri: item.thumbnail }} style={{
                                        flex: 1, borderRadius: 16,
                                        borderWidth: 1,
                                        height: '100%',
                                        width: '100%'
                                    }} />





                            </TouchableOpacity>
                            <View style={{

                                paddingRight: '3%'
                            }}>
                                <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Title Here</Text>

                            </View>

                            <View style={{ marginVertical: '3%' }}>
                                <Text numberOfLines={4}
                                    style={STYLES.fontSize10_whiteFFFFFF_Arial_Regular}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</Text>
                            </View>
                            <View style={{
                                borderBottomColor: COLORS.whiteFFFFFF_33,
                                borderBottomWidth: 1
                            }}></View>
                        </>


                    )
                }}
                keyExtractor={(item) => item.id}

            />



        </View>
    );
};

export default StudentHome;