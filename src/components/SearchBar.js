import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const myIcon = <Icon name="search" size={30} color="#900" />;

const SearchBar = ({ onSearcTextChange, searchText, onSearchSubmit }) => {
    
    return (
        <View style={styles.view}>
            <Icon name="search" size={25} color="#900" style={styles.icon} />  
            <TextInput 
                placeholder="Buscar" 
                style={styles.text} 
                autoCapitalize="none" 
                autoCorrect={false} 
                value={searchText} 
                onChangeText={ onSearcTextChange }
                onEndEditing={ onSearchSubmit }
                />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 10,
        flexDirection: 'row',
        marginBottom: 10,
    },
    text: {
        marginLeft: 20,
        fontSize: 20,
        fontFamily: 'arial',
        alignSelf: 'center',
        flex: 1,
        borderRadius: 5,

    },
    icon: {
        alignSelf: 'center',        
        marginLeft: 17
    }
});

export default SearchBar