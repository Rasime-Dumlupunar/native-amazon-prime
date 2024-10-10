import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View>
      <LinearGradient 
      start={{ x:0, y:0 }}
      end={{ x:1, y :0}}
      style={styles.container}
      colors={["#88dae0", "#98e1d6", "#9ee4d4"]}>
        <View style={styles.inputBox}>
            <View style={styles.row}>
            <Ionicons name='search' size={22} color='#1f1f1f'/>
            <TextInput placeholder='Search Amazon'
            placeholderTextColor={"#848484"}
            style={ styles.textInput}
            />
            </View>
            <AntDesign name='scan1' size={22} color='#909594'/>
        </View>
        <View>
        <Feather name='mic' size={22} color='#000000'/>
        </View>

      </LinearGradient>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
    padding:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
        
    },
    inputBox:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#a1bcc0',
        borderWidth: 1,
        width: "90%",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    textInput: {
        padding: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
}) 