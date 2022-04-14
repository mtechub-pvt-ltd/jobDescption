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



import RBSheet from 'react-native-raw-bottom-sheet';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import SplashScreen from 'react-native-splash-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Button1 from '../comp/Button1';

const CompanyJobPreview = ({ navigation }) => {

    SplashScreen.hide()


    const [stateListAddMembersFollowing, setStateListAddMambersFollowing] = useState([
        {
            id: 1,
            name: "CV 1 list",

        },
        {
            id: 2,
            name: "CV 1 list",
        },
        {
            id: 3,
            name: "CV 1 list",
        },
        {
            id: 4,
            name: "CV 1 list",
        },
        {
            id: 5,
            name: "CV 1 list",
        },
        {
            id: 6,
            name: "CV 1 list",
        },
        {
            id: 7,
            name: "CV 1 list",
        },
        {
            id: 8,
            name: "CV 1 list",
        },
        {
            id: 9,
            name: "CV 1 list",
        },
        {
            id: 10,
            name: "CV 1 list",
        }

    ]);

    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: COLORS.black000000,

        }}>
            <Appbar.Header style={{
                backgroundColor: COLORS.black000000,
                // backgroundColor: 'red'
                alignItems: 'center'
            }}>
                <Appbar.BackAction
                    onPress={() =>
                        navigation.goBack()} />
                <Appbar.Content title="Jobs Preview"
                    titleStyle={[STYLES.fontSize15_whiteFFFFFF_Archivo_Bold, {
                        alignSelf: 'center',
                        // marginRight: '10%'
                        marginLeft: '-15%',


                    }]}
                    style={{


                    }} />


            </Appbar.Header>
            <View style={{ marginHorizontal: '5%' }}>

                <TouchableOpacity style={{
                    //   backgroundColor: 'green',

                    height: 150,




                    marginVertical: '4%',
                    borderRadius: 20,


                }} //onPress={() => { modalOpen(item) }}
                >

                    <Image
                        source={require('../utilities/images/audioPlayerImage.png')} style={{
                            flex: 1, borderRadius: 16,
                            borderWidth: 1,
                            height: '100%',
                            width: '100%'
                        }} />





                </TouchableOpacity>

                <View style={{


                }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Title Here</Text>

                </View>
                <View style={{

                    marginTop: '10%'
                }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Experience Required</Text>

                </View>

                <View style={{ marginVertical: '10%' }}>
                    <Text numberOfLines={7}
                        style={STYLES.fontSize10_whiteFFFFFF_Arial_Regular}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</Text>
                </View>
            </View>
            <View style={{
                flex: 1, justifyContent: 'flex-end',
                marginBottom: '10%'
            }}>
                <Button1 text="See Applied list"
                    onPress={() => { navigation.navigate("CompanyJobPreviewFlatlist") }}
                />
            </View>



        </SafeAreaView>
    );
};

CompanyJobPreview.propTypes = {

};

export default CompanyJobPreview;