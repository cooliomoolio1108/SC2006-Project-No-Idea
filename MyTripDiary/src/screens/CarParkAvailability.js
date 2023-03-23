import React from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {
    Layout,
    TopNav,
    Text,
    themeColor,
    useTheme,
    TextInput,
    component,
    Picker,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
    return (
        <Layout>
            <TopNav
                middleContent="Car Park Availability"
                leftContent={
                    <Ionicons
                        name="chevron-back"
                        size={20}
                        color={isDarkmode ? themeColor.white100 : themeColor.black}
                    />
                }
                leftAction={() => navigation.goBack()}
            />

        </Layout>
    )
}