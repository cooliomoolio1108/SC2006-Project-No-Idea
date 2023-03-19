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
    Button,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
    const [nameOfTrip, setNameOfTrip] = React.useState('');
    const [startLocation, setStartLocation] = React.useState('');
    const [endLocation, setEndLocation] = React.useState('');
    const [pickerValue, setPickerValue] = React.useState(null);
    const items = [
        { label: 'Private Car', value: 'Car' },
        { label: 'Public Transport', value: 'Public' },
        { label: 'Taxi', value: 'Taxi' },
    ];
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
                <View style={{
                    backgroundColor: component[isDarkmode ? 'dark' : 'light'].textInput.backgroundColor,
                    borderColor: component[isDarkmode ? 'dark' : 'light'].textInput.borderColor,
                    borderWidth: 1,
                    borderRadius: 8,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <GooglePlacesAutocomplete
                        placeholder="Search"
                        suppressDefaultStyles={true}
                        styles={{
                            flex: 1,
                            color: component[isDarkmode ? 'dark' : 'light'].textInput.color,
                            paddingVertical: 10,
                            fontFamily: "Ubuntu_400Regular",
                        }}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: '',
                            language: 'en',
                        }}
                    />
                </View>
                <Text fontWeight="bold">End Location</Text>
                <View style={{
                    backgroundColor: component[isDarkmode ? 'dark' : 'light'].textInput.backgroundColor,
                    borderColor: component[isDarkmode ? 'dark' : 'light'].textInput.borderColor,
                    borderWidth: 1,
                    borderRadius: 8,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <GooglePlacesAutocomplete
                        placeholder="Search"
                        suppressDefaultStyles={true}
                        styles={{
                            flex: 1,
                            color: component[isDarkmode ? 'dark' : 'light'].textInput.color,
                            paddingVertical: 10,
                            fontFamily: "Ubuntu_400Regular",
                        }}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: '',
                            language: 'en',
                        }}
                    />
                </View>
                <Text fontWeight="bold">Mode of Transport</Text>
                <Picker
                    items={items}
                    value={pickerValue}
                    placeholder="Choose your mode of Transport"
                    onValueChange={(val) => navigation.navigate("PriceEstimator")}
                />
                <Button text="Add Trip" onPress={() => console.log('Button tapped')} />
            </View>
        </Layout>
    );
}
