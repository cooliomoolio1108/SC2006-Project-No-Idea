import { StyleSheet, Text, View, SafeAreaView, Button, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PersonalisationScreen( {navigation} ) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <Text style ={styles.optiontextf}><Entypo name='colours' size={30}/>   Change Theme</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      marginTop: 0,
      marginLeft: 0,
      paddingVertical: 0,
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    icon: {
      alignSelf: 'left',
      marginTop: 0,
      width: 1,
      height: 1,
    },
    optiontextf:{
      marginTop: 30,
      padding: 10,
      marginBottom: 20,
      fontSize: 20,
      fontWeight: 'light',
      borderBottomColor: 'grey',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optiontext: {
      padding: 10,
      marginBottom: 20,
      fontSize: 20,
      fontWeight: 'light',
      borderBottomColor: 'grey',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    ver:{
      marginTop: 50,
      textAlign: 'center',
    }
  });
  
  