
import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob'
import {
    TouchableRipple, Text, Appbar, TextInput,
    Modal, Snackbar, ActivityIndicator
} from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import Video from 'react-native-video';
import RBSheet from 'react-native-raw-bottom-sheet';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

import DateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Button1 from '../comp/Button1';
import BaseUrl from '../route/BaseUrl';
var routeEmail, routeLogin;
const CompanySetting = ({ navigation }) => {


    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)
    // console.log(routeEmail)
    const refRBSheetSelectGenere = useRef();

    const refRBSheetGender = useRef()
    const refRBSheetChangePassword = useRef()
    const refRBSheetCamera = useRef();
    var val = Math.floor(10000000 + Math.random() * 90000000);
    const [stateSelectGenere, setStateSelectGenere] = useState([])
    const [stateSelectGenereId, setStateSelectGenereId] = useState([]);
    const [stateIsValidSelectGenere, setStateIsValidSelectGenere] = useState(true);

    const [stateDummy, setStateDummy] = useState(false)
    useEffect(() => {
        getMultiple()
    }, [])

    const [stateAsyncEmail, setStateAsyncEmail] = useState();
    const [stateAsyncUserId, setStateAsyncUserId] = useState();
    const [stateAsyncPassword, setStateAsyncPassword] = useState();

    const listSelectGender = [
        {
            id: 1,
            label: "Male",
            value: "Male",
        },
        {
            id: 1,
            label: "Female",
            value: "Female",
        },


    ];




    const [stateImage, setStateImage] = useState("");
    const [stateIsValidImage, setStateIsValidImage] = useState(true);
    const [stateIsValidFirstName, setStateIsValidFirstName] = useState(true);
    const [stateIsValidLastName, setStateIsValidLastName] = useState(true);
    const [stateIsValidDob, setStateIsValidDob] = useState(true);
    const [stateIsValidGender, setStateIsValidGender] = useState(true);

    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidBio, setStateIsValidBio] = useState(true);
    const [stateIsValidCountryName, setStateIsValidCountryName] = useState(true);

    const [stateIsValidOldPassword, setStateIsValidOldPassword] = useState(true);
    const [stateCorrectOldPassword, setStateCorrectOldPassword] = useState(true);
    const [stateIsValidPasswordConfirmPassword, setStateIsValidPasswordConfirmPassword] = useState(true)
    const [stateIsValidNewPassword, setStateIsValidNewPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);


    const [stateImageLoader, setStateImageLoader] = useState(false);



    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    // useEffect(() => {
    //     fetch(BaseUrl + 'genere/viewAll.php')
    //         .then((response) => response.json())
    //         .then((json) => {
    //             console.log(json)
    //             console.log(json[0])
    //             //  setModalVisible(false)
    //             setListSelectGenere(json)


    //         })
    //         .catch((error) => console.error(error))

    // }, [])
    const [listSelectGenere, setListSelectGenere] = useState([


    ]);

    const [stateData, setStateData] = useState({

        firstName: '',
        lastName: '',
        gender: 'Male',
        dob: '',
        email: routeEmail,
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        bio: '',

    }
    )

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);



        let date = new Date();
        date = selectedDate

        if (date != undefined) {
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let day = date.getDate().toString().padStart(2, "0");

            let q = year + '-' + month + '-' + day
            console.log(typeof (year + '-' + month + '-' + day))

            setStateData({
                ...stateData,
                dob: day + "." + month + "." + year
            })
            setStateIsValidDob(true)


        }
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };



    const imageTakeFromCamera = () => {
        refRBSheetCamera.current.close()
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setStateImage(image.path)
            console.log(image.path);
            console.log(image);
            // setStateImageLoader(true)
            // RNFetchBlob.fetch('POST',
            //     BaseUrl + 'myProfile/updateProfileImage.php/'
            //     ,
            //     {
            //         Authorization: "Bearer access-token",
            //         otherHeader: "foo",
            //         'Content-Type': 'multipart/form-data',
            //     }, [

            //     // part file from storage
            //     {
            //         name: 'image', filename: val + '.jpg', type: 'image/jpg',
            //         data: RNFetchBlob.wrap(image.path)
            //     },

            //     // elements without property `filename` will be sent as plain text

            // ]).then((resp) => {
            //     // ...
            //     setStateImageLoader(false)
            //     console.log(resp)

            //     let obj = JSON.parse(resp.data)
            //     console.log(obj)
            //     console.log(obj[0].img_link)

            //     if (obj[0].res) {
            //         console.log("image uploaded")
            //         //   navigation.navigate("Login1")
            //     }



            // }).catch((err) => {
            //     // ...
            //     Alert.alert(JSON.stringify(err));
            // })


        });
        setStateIsValidImage(true)
    }

    const imageTakeFromGallery = () => {
        refRBSheetCamera.current.close()
        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateImage(image.path)
            // setStateImageLoader(true)
            // RNFetchBlob.fetch('POST',
            //     BaseUrl + 'myProfile/updateProfileImage.php/'
            //     ,
            //     {
            //         Authorization: "Bearer access-token",
            //         otherHeader: "foo",
            //         'Content-Type': 'multipart/form-data',
            //     }, [

            //     // part file from storage
            //     {
            //         name: 'image', filename: val + '.jpg', type: 'image/jpg',
            //         data: RNFetchBlob.wrap(image.path)
            //     },

            //     // elements without property `filename` will be sent as plain text

            // ]).then((resp) => {
            //     // ...
            //     setStateImageLoader(false)
            //     console.log(resp)

            //     let obj = JSON.parse(resp.data)
            //     console.log(obj)
            //     console.log(obj[0].img_link)

            //     console.log(obj[0].res)

            //     if (obj[0].res) {
            //         console.log("image uploaded")
            //         //   navigation.navigate("Login1")
            //     }



            // }).catch((err) => {
            //     // ...
            //     Alert.alert(JSON.stringify(err));
            // })

        });
        setStateIsValidImage(true)
    }



    const passwordCheck = () => {
        if (stateData.newPassword === stateData.confirmPassword) {
            console.log('true')
            return true;
        }
        else {
            console.log('false')
            return false;
        }
    }

    const oldPasswordCheck = () => {
        if (stateData.oldPassword === stateAsyncPassword) {
            console.log('true')
            return true;
        }
        else {
            console.log('false')
            return false;
        }
    }

    const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);

    const onToggleSnackBar = () => {
        setVisibleSnackbar(true)
        console.log('eeeeeeeee')
    };

    const onDismissSnackBar = () => setVisibleSnackbar(false);

    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            console.log('true')
            return true;

        }
        else {
            console.log('false')
            return false;
        }
    }

    const getMultiple = async () => {

        let values
        try {
            values = await AsyncStorage.multiGet(['asyncEmail', 'asyncUserId',
                'asyncPassword'])
        } catch (e) {
            // read error
        }
        console.log(values)
        console.log(values[0][1])
        console.log(values[1][1])
        console.log(values[2][1])
        setStateAsyncEmail(values[0][1])
        setStateAsyncPassword(values[2][1])
        setStateAsyncUserId(values[1][1])


    }


    const multiSet = async (email, id, bio, image, username) => {

        console.log("asyncEmail", email)
        console.log("asyncUserId", id)

        console.log("asyncBio", bio)
        console.log("asyncImage", image)
        console.log("asyncUserName", username)
        const firstPair = ["asyncEmail", email]
        const secondPair = ["asyncUserId", id]

        const fourthPair = ["asyncBio", bio]
        const fifthPair = ["asyncImage", image]
        const sixthPair = ["asyncUserName", username]

        try {
            await AsyncStorage.multiSet([firstPair, secondPair, fourthPair, fifthPair, sixthPair])
        } catch (e) {
            Alert.alert(e)
        }


    }

    const update = () => {
        if (stateData.oldPassword == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidOldPassword(false)

        }
        if (!oldPasswordCheck()) {
            setStateIsValidOldPassword(false)
            //onToggleSnackBar()
        }

        if (stateData.newPassword == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidNewPassword(false)
        }

        if (stateData.confirmPassword == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidConfirmPassword(false)
        }
        if (!passwordCheck()) {
            setStateIsValidPasswordConfirmPassword(false)
            //onToggleSnackBar()
        }

        if (stateData.oldPassword != '' && oldPasswordCheck() &&
            stateData.newPassword != '' && stateData.confirmPassword != ''
            & passwordCheck()
        ) {

            console.log(`${BaseUrl} user/updatePassword.php/+
            email: ${stateData.email},
            password: ${stateData.password},
            `)
            // setStateActivityIndicator(true)
            // fetch(BaseUrl + 'user/updatePassword.php/', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         email: stateAsyncEmail,
            //         password: stateData.newPassword,

            //     })
            // })
            //     .then((response) => response.json())
            //     .then((json) => {
            //         setStateActivityIndicator(false)
            //         console.log(json)
            //         if (json[0].message == "Password Updated successfully") {


            //             refRBSheetChangePassword.current.close()
            //         }

            //         else {
            //             Alert.alert('')
            //         }
            //     })
            //     .catch((error) => {

            //         console.error(error);
            //     });

        }
    }

    const updateAccount = () => {




        if (stateImage == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidImage(false)

        }

        if (stateData.firstName == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidFirstName(false)
        }
        if (stateData.lastName == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidLastName(false)
        }

        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }
        if (stateSelectGenere == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidSelectGenere(false)
        }
        if (stateData.dob == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidDob(false)



        }
        if (stateData.bio == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidBio(false)



        }
        if (countryCode == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidCountryName(false)



        }

        if (stateData.email != '' && stateImage != ''
            && stateData.dob != "" && stateData.bio != '' && stateSelectGenere != ''
            && stateData.firstName != '' && stateData.lastName != ''
            && countryCode != ''
            //&& passwordCheck()
            && handleValidEmail(stateData.email)) {
            //navigation.navigate("Login1")
            console.log(BaseUrl + `myProfile/updateProfileData.php
            username: ${stateData.firstName, stateData.lastName},                  
            gender: ${stateData.gender},
            dateOfBirth:${stateData.dob},
            email:${stateData.email},
            country:${country}, `)


            // fetch(BaseUrl + 'myProfile/updateProfileData.php', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         "username": stateData.firstName + " " + stateData.lastName,
            //         "gender": stateData.gender,
            //         "dateOfBirth": stateData.dob,
            //         "email": stateData.email,
            //         "country": country,
            //         "bio": stateData.bio

            //     })
            // })
            //     .then((response) => response.json())
            //     .then((json) => {

            //         console.log(json)
            //         if (json[0].message == "User Updated") {
            //             multiSet(stateData.email, json[0].id,
            //                 json[0].bio, json[0].image, json[0].username)

            //             fetch(BaseUrl + 'user/update_user_genere.php', {
            //                 method: 'POST',
            //                 headers: {
            //                     Accept: 'application/json',
            //                     'Content-Type': 'application/json'
            //                 },
            //                 body: JSON.stringify({
            //                     user_id: stateAsyncUserId,
            //                     genere_id: stateSelectGenereId

            //                 })
            //             })
            //                 .then((response) => response.json())
            //                 .then((json) => {
            //                     setStateActivityIndicator(false)


            //                     console.log(json)
            //                     if (json[0].message == "data inserted") {


            //                         navigation.navigate("TabNavigation1")
            //                     }


            //                 })
            //                 .catch((error) => {

            //                     console.error(error);
            //                 });

            //         }

            //         else {
            //             Alert.alert('Account can not update')
            //         }
            //     })
            //     .catch((error) => {

            //         console.error(error);
            //     });



        }


    }




    const [countryCode, setCountryCode] = useState('')
    const [country, setCountry] = useState('')
    const [withCountryNameButton, setWithCountryNameButton] =
        useState(
            true
        )
    const [withFlagButton, setWithFlagButton] = useState(true)
    const [withCallingCodeButton, setWithCallingCodeButton] = useState(
        true
    )
    const [withFlag, setWithFlag] = useState(true)
    // const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(true)
    const [withCallingCode, setWithCallingCode] = useState(true)
    const [withModal, setWithModal] = useState(true)
    ////
    const [visible, setVisible] = useState(false)
    const [dark, setDark] = useState(true)
    const [fontScaling, setFontScaling] = useState(true)
    const [disableNativeModal, setDisableNativeModal] = useState(false)
    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country.name)
        setStateIsValidCountryName(true)
        // console.log(country.cca2)
        console.log(country)
        // setCountryCode(country.callingCode)
        //   funcCountryNameSelect(country.name)
        //setCountry(country.name)
    }
    const switchVisible = () => setVisible(!visible)
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.black000000
            }}>
            <ScrollView>
                <Appbar.Header style={{
                    backgroundColor: COLORS.black000000,
                    // backgroundColor: 'red',
                    justifyContent: 'space-between'
                    //alignItems: 'center'
                }}>
                    {routeLogin === undefined ?
                        <>
                            <Appbar.BackAction
                                color={COLORS.whiteFFFFFF}
                                onPress={() =>
                                    navigation.goBack()} />
                            <Appbar.Content title="ACCOUNT"
                                titleStyle={[{

                                    alignSelf: 'center',

                                }, STYLES.fontSize36_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}
                                style={{

                                }} />
                            <TouchableRipple style={{ marginRight: '5%' }}
                                onPress={() => navigation.navigate("Login1")}>
                                <SvgXml xml={Svgs.accountBackToLogin}
                                />
                            </TouchableRipple>

                        </> :
                        <>
                            <Appbar.Content title="ACCOUNT"
                                titleStyle={[{
                                    //   alignSelf: 'center',

                                }, STYLES.fontSize36_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}
                                style={{
                                }} />

                            <TouchableRipple style={{ marginRight: '2%' }}>
                                <Text style={STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Skip</Text>
                            </TouchableRipple>
                        </>

                    }

                </Appbar.Header>





                <View style={{
                    marginTop: "10%",
                    alignItems: 'center',
                    justifyContent: 'center', flexDirection: 'row',
                    // backgroundColor: 'red'
                }}>
                    <TouchableRipple style={{
                        //alignItems: 'center',
                        //justifyContent: 'center',
                        //  backgroundColor: 'green'
                    }} onPress={() => refRBSheetCamera.current.open()}
                    >
                        <>

                            {stateImageLoader ?

                                <ActivityIndicator animating={stateImageLoader} color={COLORS.green074B08} /> :
                                stateImage == "" ?
                                    <>
                                        <Image source={require('../utilities/images/greyCircle.png')}
                                            style={{
                                                // backgroundColor: 'red',
                                                height: 140, width: 140,
                                                borderRadius: 100
                                            }} />

                                        <SvgXml xml={Svgs.accountHumanLogo}
                                            style={{ position: "absolute", top: "25%", left: '20%' }} />
                                    </>
                                    :
                                    <>
                                        <Image source={{ uri: stateImage }} style={{
                                            height: 140, width: 140,
                                            borderRadius: 100,
                                            //backgroundColor: 'green',
                                        }} />


                                        <SvgXml xml={Svgs.backgroundWhitePlusBlack} style={{
                                            position: "absolute", right: "5%", top: '5%'

                                        }} />
                                    </>
                            }


                        </>

                    </TouchableRipple>


                </View>
                {stateIsValidImage == false ? <Text style={{ color: 'red', alignSelf: 'center' }}>Add  Image</Text> : null}
                <View style={{ marginTop: '5%', marginHorizontal: '5%' }}>
                    <Text style={STYLES.fontSize20_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Contact</Text>
                </View>

                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>First Name</Text>
                    <TextInput style={{ height: 40 }}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}

                        onChangeText={(text) => {
                            setStateIsValidFirstName(true)
                            setStateData({
                                ...stateData, firstName: text
                            })
                        }} />
                    {stateIsValidFirstName == false ? <Text style={{ color: 'red' }}>Enter Valid FirstName</Text> : null}
                </View>

                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Last Name</Text>
                    <TextInput style={{ height: 40 }}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidLastName(true)
                            setStateData({
                                ...stateData, lastName: text
                            })
                        }} />
                    {stateIsValidLastName == false ? <Text style={{ color: 'red' }}>Enter Valid LastName</Text> : null}
                </View>







                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Email</Text>
                    <TextInput style={{ height: 40 }}
                        value={stateData.email}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidEmail(true)
                            setStateData({
                                ...stateData, email: text
                            })
                        }} />
                    {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}
                </View>



                <View style={{ marginTop: '5%', marginHorizontal: '5%' }}>
                    <Text style={STYLES.fontSize20_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Account</Text>
                </View>

                <TouchableRipple style={{
                    marginTop: '5%', marginHorizontal: '5%',
                    marginBottom: "10%"
                }} onPress={() => {
                    //onToggleSnackBar()
                    refRBSheetChangePassword.current.open()
                }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Change password</Text>
                </TouchableRipple>







                <View style={{
                    alignItems: 'center',
                    marginBottom: "10%"
                }}>

                    {stateActivitityIndicator == true ?
                        <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> :
                        <Button1 text="UPDATE"
                            onPress={() => { updateAccount() }} />
                    }

                </View>












            </ScrollView>
            {/* Bottom sheet My change Password */}
            <RBSheet
                closeOnPressMask={false}
                //  closeOnDragDown={false}
                //  closeOnDragDown={true}
                dragFromTopOnly={true}
                closeOnPressBack={false}
                height={370}
                animationType="slide"
                ref={refRBSheetChangePassword}
                closeOnDragDown={true}
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
                        borderWidth: 1,
                        width: "95%",
                        alignSelf: "center",
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        borderColor: COLORS.green0DC1A7,
                        zIndex: 1
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}


            >
                <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent:
                            'space-between',
                        marginBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                            UPDATE PASSWORD</Text>
                        {stateActivitityIndicator ? null :
                            <TouchableRipple
                                onPress={() => refRBSheetChangePassword.current.close()}

                                style={{


                                }}>
                                <SvgXml xml={Svgs.cross} />
                            </TouchableRipple>}


                    </View>
                    <ScrollView>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={STYLES.fontSize12_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Old Password</Text>
                            <TextInput style={{ height: 35 }}
                                selectionColor={COLORS.whiteFFFFFF}
                                secureTextEntry={true}
                                value={stateData.oldPassword}
                                activeUnderlineColor={COLORS.whiteFFFFFF}
                                onChangeText={(text) => {
                                    setStateIsValidOldPassword(true)
                                    setStateData({
                                        ...stateData, oldPassword: text
                                    })
                                }} />
                            {stateIsValidOldPassword == false ? <Text style={{ color: 'red' }}>Enter Valid OldPassword</Text> : null}

                        </View>

                        <View style={{ marginTop: '5%' }}>
                            <Text style={STYLES.fontSize12_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>New Password</Text>
                            <TextInput style={{ height: 35 }}
                                value={stateData.newPassword}
                                selectionColor={COLORS.whiteFFFFFF}
                                secureTextEntry={true}
                                activeUnderlineColor={COLORS.whiteFFFFFF}
                                onChangeText={(text) => {
                                    setStateIsValidNewPassword(true)
                                    setStateData({
                                        ...stateData, newPassword: text
                                    })
                                }} />
                            {stateIsValidNewPassword == false ? <Text style={{ color: 'red' }}>Enter Valid New Password</Text> : null}
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={STYLES.fontSize12_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Confirm New Password</Text>
                            <TextInput style={{ height: 35 }}
                                value={stateData.confirmPassword}
                                selectionColor={COLORS.whiteFFFFFF}
                                secureTextEntry={true}
                                activeUnderlineColor={COLORS.whiteFFFFFF}
                                onChangeText={(text) => {
                                    setStateIsValidConfirmPassword(true)
                                    setStateData({
                                        ...stateData, confirmPassword: text
                                    })
                                }} />
                            {stateIsValidConfirmPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Confirm Password</Text> : null}
                            {stateIsValidPasswordConfirmPassword == false ? <Text style={{ color: 'red' }}>Password and  Confirm Password
                                are not same</Text> : null}
                        </View>

                        <View style={{
                            marginHorizontal: '5%', marginTop: '15%',
                            marginBottom: '5%', //backgroundColor: 'red',


                        }}>
                            {stateActivitityIndicator ?
                                <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} />
                                :
                                <Button1 text="UPDATE"
                                    onPress={() => { update() }}
                                />}

                        </View>
                    </ScrollView>

                </View>

            </RBSheet>
            {/* Bottom sheet camera        */}
            <RBSheet

                closeOnPressMask={false}
                dragFromTopOnly={true}
                height={220}
                animationType="slide"
                ref={refRBSheetCamera}

                //  closeOnDragDown={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,0.84)',
                        //backgroundColor: "transparent"

                    },
                    container: {
                        //borderRadius: 40,
                        backgroundColor: COLORS.black000000,
                        paddingVertical: "5%",
                        backgroundColor: COLORS.black000000,
                        marginHorizontal: '5%',
                        borderWidth: 1,
                        width: "95%",
                        alignSelf: "center",
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        borderColor: COLORS.green0DC1A7
                    },

                }}


            >
                <View style={{
                    justifyContent: 'space-evenly', flex: 1,
                    paddingHorizontal: '5%'
                }}>
                    {/* <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>Add Photo! </Text> */}
                    <TouchableOpacity onPress={() => { imageTakeFromCamera() }}>
                        <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>
                            Take Photo Camera </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { imageTakeFromGallery() }}>
                        <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>
                            Take Photo Gallery </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => refRBSheetCamera.current.close()}>
                        <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>Cancel </Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </SafeAreaView >
    );
};






const styles = StyleSheet.create({
    //   root: {flex: 1, padding: 20,backgroundColor:'green'},

    containerStyle: {
        padding: 20,
        width: "70%",
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: COLORS.green10CFA3,
        alignItems: 'center',
        borderRadius: 18,
        zIndex: 2
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default CompanySetting;