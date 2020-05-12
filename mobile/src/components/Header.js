import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as MI } from '@expo/vector-icons';
import styles from '../pages/global';

export function Header(props) {

    const navigation = useNavigation();

    function navigateToBack() {
        navigation.goBack();
    }

    return(
        <View style={styles.header}>
            <View>
                <TouchableOpacity
                    onPress={navigateToBack}
                >
                    <MI name="arrow-left" size={32} color="#585858" />
                </TouchableOpacity>
            </View>
            <View>
                {props.children}
            </View>
        </View>
          
    )
}

export function TransparentHeader(props) {

    const navigation = useNavigation();

    function navigateToBack() {
        navigation.goBack();
    }

    return(
        <View style={[styles.boxFluid, {
            position: 'absolute',
            zIndex: 999,
            top: 0,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }]}>
            <View>
                <TouchableOpacity
                    onPress={navigateToBack}
                >
                    <MI name="arrow-left" size={32} color="#585858" />
                </TouchableOpacity>      
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                {props.children}
            </View>
        </View>
    )
}