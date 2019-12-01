import React from 'react';
import { Image, Text, View, StyleSheet} from 'react-native';

const ResultDetails = ({ result, id }) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}}/>
            <Text style={styles.name}>{result.name} </Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image : {
        width: 250,
        height: 130,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15
    },
    container: {
        marginLeft: 10,
    },

})

export default ResultDetails