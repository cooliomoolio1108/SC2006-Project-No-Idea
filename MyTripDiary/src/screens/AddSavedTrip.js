import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Section, SectionContent, Text, TextInput, TopNav, useTheme } from "react-native-rapi-ui";

function AddSavedTrip({ navigation }) {
    const { isDarkmode } = useTheme();
    const [name, setName] = React.useState('');
    const [origin, setOrigin] = React.useState('');
    const [dest, setDest] = React.useState('');
    return (
        <Layout>
            <TopNav
                leftContent={<Ionicons name="chevron-back" color={isDarkmode ? 'white' : 'black'} size={20}/>}
                leftAction={navigation.goBack}
                middleContent="Input Trip Details"
            />
            <Section>
                <SectionContent style={styles.inputs}>
                    <Text style={styles.text}>Trip Name</Text>
                    <TextInput
                        placeholder="Enter name of the trip"
                        value={name}
                        onChangeText={(val) => setName(val)}
                    />
                    <Text style={styles.text}>Origin</Text>
                    <TextInput
                        placeholder="Enter origin location"
                        value={origin}
                        onChangeText={(val) => setOrigin(val)}
                    />
                    <Text style={styles.text}>Destination</Text>
                    <TextInput
                        placeholder="Enter destination location"
                        value={dest}
                        onChangeText={(val) => setDest(val)}
                    />
                </SectionContent>
                <Button 
                    text='Add Trip' 
                    style={styles.button}
                />
            </Section>
        </Layout>
    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical : 10,
    },
    button: {
        marginHorizontal: 16
    }
})

export default AddSavedTrip;