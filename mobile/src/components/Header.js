import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from '../pages/global';

export default function Header(props) {

    const navigation = useNavigation();

    function navigateToBack() {
        navigation.goBack();
    }

    const logShow = () => console.log(show.current.styles.navigateToBack)

    return(
        <TouchableOpacity
            style={styles.navigationButton}
            onPress={navigateToBack}
        >
            <Feather name="arrow-left" size={32} color="#585858" />
        </TouchableOpacity>  
    )
}