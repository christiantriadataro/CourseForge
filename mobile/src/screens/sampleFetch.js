import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Button} from "react-native";
import {Text} from 'react-native-paper';
import axios from 'axios';
import {BACKEND_URL} from "../config";
const ip_url = '192.168.56.1'
const andriod_url = '10.0.2.2'

const sampleFetch = () => {

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(BACKEND_URL + '/api/customers')
            console.log(response)
            const data = response.json()
            console.log(data)
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <View style={styles.container}>
            <Button title="nice" onPress={fetchData}/>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: 'gray',
        padding: 20,
        margin: 5
    }
})

export default sampleFetch;
