import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from '../pages/global';
import { FontAwesome as FA, Feather } from '@expo/vector-icons';
import { API_DOMAIN } from '../constants/api';

import cardImage from '../assets/illustrations/repeat_food.png';

export function NavItem(props) {
    return (
        <TouchableOpacity style={styles.action} onPress={props.action}>
            <View style={styles.iconAction}>
                <Feather name={props.icon}  size={24} color="#333" />	
            </View>
            <View style={{flexGrow: 1, justifyContent: 'center'}}>
                <Text style={styles.textAction}>{props.title}</Text>
                <Text style={styles.subtitleTextAction}>{props.subtitle}</Text>
            </View>
            <View style={styles.arrowAction}>
                <Feather name="chevron-right" size={24} color="#333" />	
            </View>
        </TouchableOpacity>
    )
}

export function Avatar(props) {
    return (
        <View style={[styles.store, { marginTop: 20 }]}>
            <TouchableOpacity onPress={props.action}>
                <Image
                    style={[styles.storeAvatar, { backgroundColor: '#FF5216' }]}
                    source={
                        props.image === undefined ?
                        cardImage
                    : 
                        {uri: `${API_DOMAIN}/uploads/${props.image}` }
                    }
                    resizeMode={'cover'}
                />
                { props.isChangeable ? 
                <View style={styles.boxFloatButton}>
                    <View
                    style={[styles.buttonFloat, { width: 48, height: 48, display: props.transparent ? 'none' : 'flex' }]}>
                        <Feather
                            name={props.icon}
                            color='#fff'
                            size={32}
                        />
                    </View> 
                </View>
                : null
                }
                       
            </TouchableOpacity>
            
            <View style={{ flexGrow: 1, paddingLeft: 16}}>
                <View style={{ flexDirection: 'row'}}>
                    {props.title === '' ?
                        <View style={styles.titleHide} />
                    :
                        <Text style={[styles.title, styles.textWrap, {
                            marginBottom: 0,
                            fontSize: 30 - (props.title.length * 0.3)
                        }]}>{props.title}</Text>
                    }
                </View>
                    {props.subtitle === '' ? 
                        <View style={styles.textHide}/>
                    : 
                        <View style={{flexDirection: 'row'}}>
                            <FA name='whatsapp' color='#666' size={16} style={{ marginTop: 3, marginRight: 8}}/>
                            <Text style={styles.text}>{props.subtitle}</Text>
                        </View>
                    }
            </View>
        </View>
    )
}

export function Card(props) {

    function regexName(name) {
        if(name.length > 30) {
            let nameCut = name.match(/^[\s\S]{0,30}/) + '...'
            return nameCut;
        }
        return name;
    }

    return (
        <TouchableOpacity style={styles.card} onPress={props.action}>
            <Image
                style={styles.cardImage}
                source={ 
                    props.image !== undefined ?
                        {uri: `${API_DOMAIN}/uploads/${props.image}` }
                    : 
                        cardImage
                }
                resizeMode='cover'
            />
            
            <View style={styles.cardBody}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.textWrap, styles.cardTitle]}>{regexName(props.title)}</Text>
                </View>
                <Text style={styles.price}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(props.price)}
                </Text>
            </View>

        </TouchableOpacity>
    )
}