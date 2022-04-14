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

const CompanyJobPreviewFlatlist = ({ navigation }) => {
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
        },
        {
            id: 11,
            name: "CV 1 list",

        },
        {
            id: 12,
            name: "CV 1 list",
        },
        {
            id: 13,
            name: "CV 1 list",
        },
        {
            id: 14,
            name: "CV 1 list",
        },
        {
            id: 15,
            name: "CV 1 list",
        },
        {
            id: 16,
            name: "CV 1 list",
        },
        {
            id: 17,
            name: "CV 1 list",
        },
        {
            id: 18,
            name: "CV 1 list",
        },
        {
            id: 19,
            name: "CV 1 list",
        },
        {
            id: 20,
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
            <View style={{ marginTop: '5%', marginHorizontal: '5%' }}>
                <Text style={STYLES.fontSize33_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Title Here</Text>
            </View>
            <FlatList style={{
                marginTop: '10%',
                flex: 1, //backgroundColor: 'green',
                marginVertical: '3%',
                paddingHorizontal: '10%',

            }}
                showsVerticalScrollIndicator={false}
                // horizontal={false}

                data={stateListAddMembersFollowing}
                renderItem={({ item }) => {
                    return (

                        <View
                            style={{
                                // backgroundColor: COLORS.whiteFFFFFF,
                                // paddingVertical: '4%',
                                backgroundColor: COLORS.black000000,
                                paddingVertical: '4%',

                                borderBottomWidth: 1,


                            }}>
                            <Text style={STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.name}</Text>
                        </View>


                    )
                }}
                keyExtractor={(item) => item.id}

            />



        </SafeAreaView>
    );
};

CompanyJobPreviewFlatlist.propTypes = {

};

export default CompanyJobPreviewFlatlist;