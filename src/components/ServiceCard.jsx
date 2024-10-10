import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.outherCountainer}>
      <Text style={styles.recentSearch}>{item.title}</Text>
      <Image source={item.image} style={styles.serviceImg}/>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
    outherCountainer: {
        backgroundColor: '#ffffff',
        marginLeft: 8,
        width: 140,
        padding: 5,
        borderRadius: 5,
    }, 
    recentSearch: {
        fontSize: 13,
        marginBottom: 8,

    },
    serviceImg: {
    width: '100%',
    height: 130,

    },
});