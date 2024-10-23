import {Image, ScrollView, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import React from "react";

const Movie = ({title, year, icon_name, poster}) => {
    return (
        <ScrollView>
            <Image source={poster} style={{width:400, height: 400}}/>
            <Icon name = {icon_name} size={20}><Text>{title} {year}</Text></Icon>
        </ScrollView>
    );
}

export default Movie;
