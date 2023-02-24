import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet } from "react-native";
import { Layout, Section, SectionContent, Text, TopNav } from "react-native-rapi-ui";
import { Trip } from "../models/Trip";

function SavedTrips({ navigation }) {
    return (
        <Layout>
            <TopNav
                leftContent={<Ionicons name="chevron-back" size={20}/>}
                leftAction={navigation.goBack}
                middleContent="Saved Trips"
            />
            <FlatList 
                data={dummyData}
                renderItem={renderSavedTrip}
            />
        </Layout>
    )
}

function renderSavedTrip(SavedTrips) {
    return (
        <Section style={styles.section}>
            <Text>{SavedTrips.item.name}</Text>
            <SectionContent>
                <Text>{SavedTrips.item.originName} ---------------------------- {SavedTrips.item.destName}</Text>
            </SectionContent>
        </Section>
    )   
}

const styles = StyleSheet.create({
    section: {
        elevation: 16,
        margin: 8,
        alignItems: 'center'
    },
})

let dummyData = [
    new Trip('Go to school', 'Sentosa Cove', "location", 'NTU', "location"),
    new Trip('Go home', 'NTU', "location", 'Sentosa Cove', "location"),
    new Trip('Go to Orchard', 'Sentosa Cove', "location", 'Orchard', "location"),
    new Trip('Go to Seans', 'Sentosa Cove', "location", 'Sean', "location"),
    new Trip('Go back to hall', 'NTU', "location", 'Hall 5', "location")
];

export default SavedTrips;