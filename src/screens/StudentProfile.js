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

const Tab = createMaterialTopTabNavigator();






const StudentProfile = ({ route, navigation }) => {


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
                <TouchableRipple onPress={() => navigation.navigate("StudentAddResume")}
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
                            <View style={{
                                //   backgroundColor: 'green',

                                height: 150,




                                marginVertical: '4%',
                                borderRadius: 20,


                            }} //onPress={() => { modalOpen(item) }}
                            >

                                <Image
                                    source={{ uri: item.thumbnail }} style={{
                                        flex: 1, borderRadius: 16,
                                        borderWidth: 1,
                                        height: '100%',
                                        width: '100%'
                                    }} />





                            </View>
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



            {/* Bottom sheet Create        */}
            <RBSheet
                closeOnPressMask={false}
                closeOnDragDown={false}
                height={220}
                animationType="slide"
                ref={refRBSheetCreate}

                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,0.84)',
                        //backgroundColor: "transparent"

                    },
                    container: {
                        //justifyContent: "center",
                        //  alignItems: "center"
                        backgroundColor: COLORS.black000000,
                        marginHorizontal: '5%',
                        paddingVertical: '7%',
                        borderWidth: 1,
                        width: "95%",
                        alignSelf: "center",
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        borderColor: COLORS.green0DC1A7
                    },
                    // draggableIcon: {
                    //     backgroundColor: "#000"
                    // }
                }}


            >
                <View style={{
                    // justifyContent: 'space-evenly', 
                    flex: 1,
                    paddingHorizontal: '5%', //backgroundColor: COLORS.black000000,
                    //  backgroundColor: 'red',

                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={[{

                            // alignSelf: 'center'
                        }, STYLES.fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}>CREATE</Text>

                        <TouchableRipple onPress={() => {
                            refRBSheetCreate.current.close()
                        }}>
                            <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                        </TouchableRipple>
                    </View>

                    <View style={{
                        borderBottomColor: COLORS.whiteFFFFFF_50,
                        borderBottomWidth: 1,

                        marginTop: "7%"

                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("AddMusic")
                                refRBSheetCreate.current.close()
                            }
                            }
                            style={{
                                flexDirection: 'row', marginBottom: '3%'
                            }}  >
                            <SvgXml xml={Svgs.music} style={{ marginRight: '7%' }} />
                            <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>
                                Music </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        borderBottomColor: COLORS.whiteFFFFFF_50,
                        borderBottomWidth: 1,

                        marginTop: "7%"

                    }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("CreateSpace")
                            refRBSheetCreate.current.close()
                        }}
                            style={{
                                flexDirection: 'row', marginBottom: '3%'
                            }}  >
                            <SvgXml xml={Svgs.space} style={{ marginRight: '7%' }} />
                            <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>
                                Space </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{


                        marginTop: "7%"

                    }}>
                        <TouchableOpacity
                            onPress={() => {


                                refRBSheetCreate.current.close()
                            }}
                            style={{
                                flexDirection: 'row', marginBottom: '3%'
                            }}  >
                            <SvgXml xml={Svgs.playList} style={{ marginRight: '7%' }} />
                            <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>
                                Playlist </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RBSheet>

        </SafeAreaView >

    );
};

export default StudentProfile;