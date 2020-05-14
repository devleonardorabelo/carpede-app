import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons as MI } from '@expo/vector-icons';
import styles from "../pages/global";


export function Button(props) {

    const [ color, setColor ] = useState('#FF5216');
    const [ content, setContent ] = useState(<Text style={styles.buttonWhiteText}>{props.title}</Text>);
    const [ disabled, setDisabled ] = useState(false);

    useEffect(() => {
        if(!props.status) {
            setColor('#ff6e73');
            setContent(<Text style={styles.buttonWhiteText}>{props.title}</Text>);
            setDisabled(false);
        }
        if(props.status === 'loading') {
            setColor('#e2e2e2');
            setContent(<ActivityIndicator size="large" color="#ff6e73" />)
            setDisabled(true);
        }
        if(props.status === 'done') {
            setColor('#02c39a');
            setContent(<Text style={styles.buttonWhiteText}>Feito!</Text>)
            setDisabled(false);
        }
    }, [props])

    return(
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, { backgroundColor: color }]}
            onPress={props.action}
            disabled={disabled}
        >
            {content}
        </TouchableOpacity>
    )
}

export function ButtonTransparent(props) {
    return(
        <TouchableOpacity style={styles.buttonTransparent} onPress={props.action}>
            <MI
                style={{ paddingRight: 5 }}
                name={props.icon} 
                size={16}
                color='#585858'
            />
            <Text style={styles.buttonBlackText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export function ActionButton(props) {
    return (
        <TouchableOpacity style={[styles.actionButton, props.style, props.title ? { backgroundColor: null } : null]} onPress={props.action}>
            <MI
                name={props.icon}
                size={32}
                color={ props.title ? '#ff6e73' : '#FFFFFF' }
            />
            {props.title ?
                <Text style={[styles.text, { color: '#ff6e73' }]}>{props.title}</Text>
                :null    
            }
        </TouchableOpacity>
    )
}

export function LinearButton(props) {
    return (
        <TouchableOpacity onPress={props.action}>
            <MI
                name={props.icon}
                size={32}
                color='#ff6e73'
            />
        </TouchableOpacity>
    )
}