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
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
    const [nameOfTrip, setNameOfTrip] = React.useState('');
    const [startLocation, setStartLocation] = React.useState('');
    const [endLocation, setEndLocation] = React.useState('');
    return (
        <Layout style={{ flexDirection: 'column' }}
        >
            <TopNav
                middleContent="Add Trip"
                leftContent={
                    <Ionicons
                        name="chevron-back"
                        size={20}
                        color={isDarkmode ? themeColor.white100 : themeColor.black}
                    />
                }
                leftAction={() => navigation.goBack()}
            />
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: 20,
                }}
            >
                {/* This text using ubuntu font */}
                <Text fontWeight="bold">Name of the Trip</Text>
                <TextInput
                    placeholder="Enter your text"
                    value={nameOfTrip}
                    onChangeText={(val) => setNameOfTrip(val)}
                />
                <Text fontWeight="bold">Start Location</Text>
                <TextInput
                    placeholder="Enter your text"
                    value={startLocation}
                    onChangeText={(val) => setStartLocation(val)}
                />
                <Text fontWeight="bold">End Location</Text>
                <TextInput
                    placeholder="Enter your text"
                    value={endLocation}
                    onChangeText={(val) => setEndLocation(val)}
                />
                <GooglePlacesAutocomplete
                    placeholder="Search This sisiisis"
                    minLength={2}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyCrky0_IHJW4TyxQmIUa9oz_jkGIvNki8Y',
                        language: 'en',
                    }}
                />
            </View>
        </Layout>
    );
}