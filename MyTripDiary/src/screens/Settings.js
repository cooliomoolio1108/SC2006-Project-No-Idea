import React from 'react';
import { View, Linking } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';
import { getAuth, signOut } from "firebase/auth";
import {
	Button,
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
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Section>
					<SectionContent>
						<Button
						text={isDarkmode ? "Light Mode" : "Dark Mode"}
						status={isDarkmode ? "success" : "warning"}
						onPress={() => {
							if (isDarkmode) {
							setTheme("light");
							} else {
							setTheme("dark");
							}
						}}
						style={{
							marginTop: 10,
						}}
						/>
						<Button
						status="danger"
						text="Logout"
						onPress={() => {
							signOut(auth);
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
