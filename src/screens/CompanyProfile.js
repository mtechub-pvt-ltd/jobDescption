import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import { TouchableRipple, Text, Modal, ActivityIndicator } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { createMaterialTopTabNavigator } from
    '@react-navigation/material-top-tabs';
import SplashScreen from 'react-native-splash-screen';
import VideoPlayer from "react-native-video";
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import BaseUrl, { url } from '../route/BaseUrl';
import { reportLogBoxError } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import CompanyJobPreview from './CompanyJobPreview';

const Tab = createMaterialTopTabNavigator();






const CompanyProfile = ({ route, navigation }) => {


    const refRBSheetCreate = useRef();

    const [stateAsyncImage, setStateAsyncImage] = useState('')
    const [stateAsyncUserName, setStateAsyncUserName] = useState('Username Here')

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


    SplashScreen.hide()
    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black000000,
            paddingHorizontal: '5%',
            paddingVertical: '4%'

        }}>




            <View style={{

            }}>
                <TouchableRipple onPress={() => navigation.navigate("CompanyAddJob")}
                    style={{ alignSelf: 'flex-start' }}>
                    <SvgXml xml={Svgs.circlePlus} />
                </TouchableRipple>

            </View>



            <View style={{ //position: 'absolute', 
                top: -5,
                alignItems: 'center',
                height: '10%',
                width: '23%',
                // backgroundColor: 'green',
                alignSelf: 'center'
            }}>
                <Image

                    // source={require('../utilities/images/humanBeing.png')}
                    source={require('../utilities/images/humanBeing.png')}
                    style={{
                        borderRadius: 50,
                        borderColor: COLORS.green074B08,

                        height: '100%', width: '100%'
                    }} />
            </View>

            <View style={{ marginTop: '2%', alignItems: 'center' }}>
                <Text style={STYLES.fontSize25_whiteFFFFFF_Archivo_Bold}>{stateAsyncUserName}</Text>
            </View>


            <View style={{ alignItems: 'center', marginTop: '7%' }}>
                <View style={{
                    flexDirection: 'row'
                    , justifyContent: "space-between",
                    width: '85%',
                }}>
                    <View style={{}}>
                        <Text style={[STYLES.fontSize17_whiteFFFFFF_Archivo_Bold,
                        { textAlign: 'center' }]}>
                            Total CVs
                        </Text>
                        <Text style={[STYLES.fontSize18_greyA3A3A3_Archivo_Regular,
                        { textAlign: 'center' }]}>32</Text>
                    </View>
                    <View style={{}}>
                        <Text style={[STYLES.fontSize17_whiteFFFFFF_Archivo_Bold,
                        { textAlign: 'center' }]}>
                            Total Jobs Applied
                        </Text>
                        <Text style={[STYLES.fontSize18_greyA3A3A3_Archivo_Regular,
                        { textAlign: 'center' }]}>32</Text>
                    </View>

                </View>
            </View>


            <View style={{ marginTop: '10%', marginLeft: '4%' }}
            >
                <Text style={STYLES.fontSize15_whiteFFFFFF_Archivo_Bold}>My CVs</Text>
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
                            <TouchableRipple style={{
                                //   backgroundColor: 'green',

                                height: 150,




                                marginVertical: '4%',
                                borderRadius: 20,


                            }} onPress={() => { navigation.navigate("CompanyJobPreview") }}
                            >

                                <Image
                                    source={{ uri: item.thumbnail }} style={{
                                        flex: 1, borderRadius: 16,
                                        borderWidth: 1,
                                        height: '100%',
                                        width: '100%'
                                    }} />





                            </TouchableRipple>
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





        </SafeAreaView >

    );
};

export default CompanyProfile;