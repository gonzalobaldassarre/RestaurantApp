import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults';


const SearchScreen = () => {
    
    const [search,setSearch] = useState("");
    const [request,results,errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price 
        });
    }

    return (
        
        <>
            <SearchBar onSearcTextChange={ (newSearchText) => setSearch(newSearchText) } searchText={search} onSearchSubmit={ () => request(search) }  />
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Mas caro" />
                <ResultsList results={filterResultsByPrice('$$')} title="Normal" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Barato"/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        fontSize: 30
    }
});

export default SearchScreen