import React from 'react';

import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MySpace from '../screens/MySpace';
import Chat from '../screens/Chat';
import Account from '../screens/Account';
import { Text } from 'react-native-paper';
import STYLES from '../STYLES';
import { View } from 'react-native';
import COLORS from '../utilities/colors/Color';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import TabProfile from '../screens/TabProfile';
import CircleUsernameHere from '../screens/CircleUsernameHere';
import Podcast from '../screens/Podcast';
import Feather from 'react-native-vector-icons/Feather'
import StudentHome from '../screens/StudentHome';
import StudentProfile from '../screens/StudentProfile';
import StudentSetting from '../screens/StudentSetting';
import CompanyProfile from '../screens/CompanyProfile';
import CompanySetting from '../screens/CompanySetting';
const Tab = createBottomTabNavigator();
const TabNavigationCompany = ({ route }) => {
    SplashScreen.hide()
    // const { routeImage,
    //     routeUserName,
    //     routeBio } = route.params;
    return (
        <View style={{
            flex: 1,// backgroundColor: COLORS.black000000
        }}>

            <Tab.Navigator
                //    initialRouteName='HomeHomeSearch'
                screenOptions={{
                    headerShown: false,
                    // tabBarBackground: COLORS.black000000
                    tabBarStyle: {
                        backgroundColor: COLORS.black171717,
                        //backgroundColor: 'red'
                        //     height: 60,
                        //backgroundColor: 'red',
                        //     // paddingVertical: 25
                        paddingBottom: 5,
                        //     paddingHorizontal: '3%',
                        //     paddingTop: 10,
                        //     //    borderColor: COLORS.cylindricalFA4248,
                        //     borderTopWidth: 2,
                        //     borderTopColor: COLORS.cylindricalFA4248,
                        //     borderRightWidth: 2,
                        //     borderRightColor: COLORS.cylindricalFA4248,
                        //     borderLeftWidth: 2,
                        //     borderLeftColor: COLORS.cylindricalFA4248,
                        //     marginTop: 20

                    },

                }}>

                <Tab.Screen name="CompanyProfile" component={CompanyProfile}
                    options={{
                        tabBarLabel: ({ focused }) => {
                            if (focused) {
                                return (
                                    <Text style={STYLES.fontSize12_green0DC1A7_Nunito_Bold}>Profile</Text>
                                )
                            } else {
                                return (
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_Nunito_Bold}>Profile</Text>
                                )
                            }
                        },
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <SvgXml xml={Svgs.greenProfile} />
                                )
                            }
                            else {
                                return (
                                    <SvgXml xml={Svgs.whiteProfile}
                                    />
                                )
                            }

                        }
                    }} />


                <Tab.Screen name="CompanySetting" component={CompanySetting}
                    options={{
                        tabBarLabel: ({ focused }) => {
                            if (focused) {
                                return (
                                    <Text style={STYLES.fontSize12_green0DC1A7_Nunito_Bold}>Setting</Text>
                                )
                            } else {
                                return (
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_Nunito_Bold}>Setting</Text>
                                )
                            }
                        },
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <SvgXml xml={Svgs.greenSetting}
                                    />
                                )
                            }
                            else {
                                return (
                                    <SvgXml xml={Svgs.whiteSetting}
                                    />
                                )
                            }

                        }
                    }} />





            </Tab.Navigator>
        </View>

    );
};

export default TabNavigationCompany;