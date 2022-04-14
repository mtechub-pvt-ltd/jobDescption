import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
    TouchableRipple, Text, Modal, Appbar, TextInput,
    ActivityIndicator
} from 'react-native-paper';
import BaseUrl from '../route/BaseUrl'
import { SvgXml } from 'react-native-svg';
import { createMaterialTopTabNavigator } from
    '@react-navigation/material-top-tabs';
import SplashScreen from 'react-native-splash-screen';
import VideoPlayer from "react-native-video";
import RBSheet from 'react-native-raw-bottom-sheet';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import DocumentPicker from 'react-native-document-picker'
import Button1 from '../comp/Button1';
import Entypo from 'react-native-vector-icons/Entypo'
import RNFetchBlob from 'rn-fetch-blob';
const StudentAddResume = ({ navigation }) => {
    SplashScreen.hide()

    const refRBSheetSelectType = useRef()

    const listSelectType = [
        {
            id: 1,
            label: "Public",
            value: "Public",
        },
        {
            id: 2,
            label: "Private",
            value: "Private",
        },


    ];



    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)

    const [stateIsValidUploadCover, setStateIsValidUploadCover] = useState(true);
    const [stateIsValidAddTitle, setStateIsValidAddTitle] = useState(true);
    const [stateIsValidAddExperience, setStateIsValidAddExperience] = useState(true);
    const [stateIsValidAddEducation, setStateIsValidAddEducation] = useState(true);

    const [stateIsValidSelectDescription, setStateIsValidSelectDescription] = useState(true);


    const [stateData, setStataData] = useState({

        uploadCover: '',
        addTitle: '',
        addExperience: '',
        addEducation: '',
        description: '',
    }
    )

    var val = Math.floor(10000000 + Math.random() * 90000000);

    const imageTakeFromGallery = () => {

        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateIsValidUploadCover(true)
            setStataData({ ...stateData, uploadCover: image.path })
        });
    }



    const create = async () => {




        if (stateData.uploadCover == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidUploadCover(false)

        }

        if (stateData.addTitle == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidAddTitle(false)
        }


        if (stateData.description == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidSelectDescription(false)
        }
        if (stateData.addExperience == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidAddExperience(false)
        }


        if (stateData.addEducation == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidAddEducation(false)
        }
        if (stateData.addTitle != '' && stateData.uploadCover != ''
            && stateData.description != ''
            && stateData.addExperience != ''
            && stateData.addEducation != ''
        ) {
            navigation.goBack()
            // setStateActivityIndicator(true)
            // await RNFetchBlob.fetch(

            //     'POST', BaseUrl + 'playlist/addPlaylist.php',
            //     {
            //         Authorization: 'Bearer access-token',
            //         'Content-Type': 'multipart/form-data',
            //     },
            //     [

            //         {
            //             name: 'cover',
            //             filename: val + '.jpg', type: 'image/jpg',
            //             data: RNFetchBlob.wrap(stateData.uploadCover),
            //         },

            //     ],
            // )

            //     .then(response => response.json())
            //     .then(response => {
            //         console.log(response)

            //         console.log(`playlist_id: ${response[0].playlist_id},
            //         "title": ${stateData.addTitle},
            //         "type": ${stateSelectType},
            //         "description": ${stateData.description}`)
            //         if (response[0].sucess) {
            //             fetch(BaseUrl + 'playlist/addPlaylistData.php', {
            //                 method: 'POST',
            //                 headers: {
            //                     Accept: 'application/json',
            //                     'Content-Type': 'application/json'
            //                 },
            //                 body: JSON.stringify({
            //                     "playlist_id": response[0].playlist_id,
            //                     "title": stateData.addTitle,
            //                     "type": stateSelectType,
            //                     "description": stateData.description
            //                 })
            //             })
            //                 .then((response) => response.json())
            //                 .then((json) => {
            //                     setStateActivityIndicator(false)
            //                     console.log(json)
            //                     if (json[0].sucess) {


            //                         //Alert.alert("Add Playlist Successfully")

            //                         navigation.navigate("CreatePlaylistMusic",
            //                             {
            //                                 routePlaylistTitle: json[0].title,
            //                                 routePlaylistId: json[0].playlist_id
            //                             }
            //                         )
            //                     }


            //                 })
            //                 .catch((error) => {

            //                     console.error(error);
            //                 });
            //         }
            //         // else {
            //         //     console.log("error in uploaded music and uploaded cover")
            //         // }
            //     })
            //     .catch(error => {
            //         alert('error' + error);
            //     });
        }


    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.black000000
            }}>
            <ScrollView>
                <Appbar.Header style={{
                    backgroundColor: COLORS.black000000,

                    //alignItems: 'center'
                }}>
                    <Appbar.BackAction
                        onPress={() =>
                            navigation.goBack()} />
                    <Appbar.Content title="ADD RESUME"
                        titleStyle={{
                            alignSelf: 'center',
                            marginLeft: "-7%"
                        }}
                        style={{
                        }} />


                </Appbar.Header>






                <View style={{
                    marginTop: '2%',
                    marginHorizontal: '5%',
                    borderWidth: 1,
                    borderColor: COLORS.purple6D47F4,
                    height: 120,
                    //backgroundColor: 'red',
                    borderRadius: 13,
                    borderStyle: 'dashed',

                    alignItems: 'center',
                    justifyContent: 'center'

                }}>
                    {stateData.uploadCover == '' ?
                        <TouchableRipple style={{
                            flexDirection: 'row',
                            backgroundColor: COLORS.purple6D47F4,
                            paddingHorizontal: "5%",
                            paddingVertical: '4%',
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => { imageTakeFromGallery() }}>
                            <>
                                <SvgXml xml={Svgs.uploadIcon} style={{ marginRight: "5%" }} />

                                <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Upload Cover</Text>
                            </>
                        </TouchableRipple>
                        :
                        <>
                            <Image style={{
                                flex: 1, width: "100%"
                            }}
                                source={{ uri: stateData.uploadCover }} />

                            <View style={{
                                flexDirection: 'row',
                                backgroundColor: COLORS.purple6D47F4,
                                paddingHorizontal: "5%",
                                paddingVertical: '4%',
                                borderRadius: 40,
                                justifyContent: 'center',
                                position: 'absolute',
                                alignItems: 'center'
                            }}>
                                <>
                                    {/* <SvgXml xml={Svgs.uploadIcon} style={{ marginRight: "5%" }} /> */}

                                    <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Uploaded Cover</Text>
                                    <Entypo name="cross" color={COLORS.whiteFFFFFF}
                                        size={20} style={{ marginLeft: "5%" }}
                                        onPress={() => {
                                            setStataData({
                                                ...stateData,
                                                uploadCover: ""
                                            })
                                        }} />
                                </>
                            </View>
                        </>
                    }





                </View>
                <View style={{ marginHorizontal: '5%', }}>

                    {stateIsValidUploadCover == false ? <Text style={{ color: 'red' }}>Upload Cover</Text> : null}
                </View>


                <View style={{ marginHorizontal: '5%', marginTop: '10%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Add Title</Text>
                    <TextInput style={{ height: 40 }}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidAddTitle(true)
                            setStataData({
                                ...stateData, addTitle: text
                            })
                        }} />
                    {stateIsValidAddTitle == false ? <Text style={{ color: 'red' }}>Enter Valid Title</Text> : null}
                </View>

                <View style={{ marginHorizontal: '5%', marginTop: '10%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Add Experience</Text>
                    <TextInput style={{ height: 40 }}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidAddExperience(true)
                            setStataData({
                                ...stateData, addExperience: text
                            })
                        }} />
                    {stateIsValidAddExperience == false ? <Text style={{ color: 'red' }}>Enter Valid Experience</Text> : null}
                </View>

                <View style={{ marginHorizontal: '5%', marginTop: '10%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Add Education</Text>
                    <TextInput style={{ height: 40 }}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidAddEducation(true)
                            setStataData({
                                ...stateData, addEducation: text
                            })
                        }} />
                    {stateIsValidAddEducation == false ? <Text style={{ color: 'red' }}>Enter Valid Education</Text> : null}
                </View>






                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Description</Text>
                    <TextInput style={{
                        //height: 140,
                        textAlignVertical: 'top',
                        //backgroundColor: "red"

                    }} multiline={true}
                        numberOfLines={3}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidSelectDescription(true)
                            setStataData({
                                ...stateData, description: text
                            })
                        }} />
                    {stateIsValidSelectDescription == false ? <Text style={{ color: 'red' }}>Enter Valid Description</Text> : null}
                </View>

                <View style={{ marginHorizontal: '5%', marginTop: '15%', marginBottom: '15%' }}>
                    {stateActivitityIndicator ?
                        <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> :
                        <Button1 text="POST"
                            onPress={() => { create() }}
                        />
                    }
                </View>





            </ScrollView>
        </SafeAreaView >
    );
};



export default StudentAddResume;