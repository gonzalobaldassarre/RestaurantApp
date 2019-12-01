import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity  } from 'react-native';
import ResultDetails from './ResultDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){ return null }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ result => result.id }
                renderItem={ ({item}) => {
                    return (
                    <TouchableOpacity onPress={ () => navigation.navigate('ResulShow', { id: item.id })}>
                        <ResultDetails result={item}  />
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'left',
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }
});

export default withNavigation(ResultsList);