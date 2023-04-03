import { StyleSheet, Text, View, SafeAreaView, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainScreen from './screens/MainScreen';
import AccountScreen from './screens/AccountScreen';
import PersonalisationScreen from './screens/PersonalisationScreen';
import HelpScreen from './screens/HelpScreen';
import GeneralScreen from './screens/General';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{title: "Settings"}}
          />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{title: "Account"}}
          />
        <Stack.Screen
          name="Personalisation"
          component={PersonalisationScreen}
          options={{title: "Personalisation"}}
          />
        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={{title: "Help"}}
          />
        <Stack.Screen
          name="General"
          component={GeneralScreen}
          options={{title: "General"}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

