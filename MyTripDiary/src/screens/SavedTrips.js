import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Layout, TopNav } from "react-native-rapi-ui";

function SavedTrips({ navigation }) {
    return (
        <Layout>
            <TopNav
                leftContent={<Ionicons name="chevron-back" size={20}/>}
                leftAction={navigation.goBack}
                middleContent="Saved Trips"
            />
            <FlatList />
        </Layout>
    )
}

export default SavedTrips;