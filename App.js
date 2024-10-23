// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import {Text, StatusBar, ScrollView} from 'react-native';
import Movie from './components/Movie.js';


const App = () => {
  return (
      <ScrollView>
          <StatusBar hidden={true}/>
          <Movie title= "Doctor Sleep" year = "2019" icon_name="skull" poster={require("./img/doctor-sleep.jpg")}/>
          <Movie title= "Midway" year = "2020" icon_name="person-rifle" poster={require("./img/midway.jpg")}/>
      </ScrollView>
  );
}
export default App;

