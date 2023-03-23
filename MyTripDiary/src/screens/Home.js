import React from "react";
import { View, Linking } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Saved Trips
            </Text>
            <Button
              style={{ marginTop: 10 }}
              text="Google Maps"
              status="info"
              onPress={() => Linking.openURL("https://www.google.com/maps")}
            />
            <Button
              text="Trip 1"
              onPress={() => {
                navigation.navigate("TripInfo");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              text="Trip 2"
              onPress={() => {
                navigation.navigate("TripInfo");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              text="Trip History"
              onPress={() => {
                navigation.navigate("TripHistory");
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
