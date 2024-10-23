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
import {View, Text, StatusBar, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const Movie = ({title, year, icon_name, poster}) => {
    return (
        <ScrollView>
            <Image source={poster} style={{width:400, height: 400}}/>
            <Icon name = {icon_name} size={20}><Text>{title} {year}</Text></Icon>
        </ScrollView>
    );
}

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

