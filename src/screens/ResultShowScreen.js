import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList,Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const [result,setResult] = useState(null);    // coause its an object -> null(not {}), then we can check != null
    const id = navigation.getParam('id');
    const getDeatils = async (id) => {
        const result = await yelp.get(`/${id}`);
        setResult(result.data);
    }    
    
    /* fetching only once */
        useEffect( () => {
            getDeatils(id);
        }, [])
    //-------------------//

    if(!result) { return null }

    return(
        <View style={{alignItems: 'center', marginTop: 10, flex:1}}>
            
            <Text style={styles.text}> {result.name} </Text>
            <FlatList
                data={result.photos}
                keyExtractor={ ( item ) => item }
                renderItem={ ({ item }) => {
                    return (<Image style={styles.image} source={{ uri: item }}
                    />)
                }}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 400,
        marginBottom: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    }

});

export default ResultShowScreen