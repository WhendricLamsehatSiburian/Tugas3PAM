import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {useState} from "react";

function HalamanUtama({ navigation }) {
    const [asal,setAsal] = useState('');
    const [tujuan,setTujuan] = useState('');
    const [tanggal,setTanggal] = useState('');

    const register = () =>{
        navigation.navigate('Pencarian',{
            asal: asal,
            tujuan: tujuan,
            tanggal, tanggal,
        })
    }

    return (

        <View style={Style.body}>
            <Text style={Style.title}>Pesawat Tugas PAM</Text>
            <Text style={Style.Label}>Asal Penerbangan</Text>
            <View style={Style.box}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Asal Penerbangan"
                    onChangeText={(text)=>setAsal(text)}
                />
            </View>

            <Text style={Style.Label}>Tujuan Penerbangan</Text>
            <View style={Style.box}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Tujuan Penerbangan"
                    onChangeText={(text)=>setTujuan(text)}
                />
            </View>

            <Text style={Style.Label}>Tanggal Penerbangan</Text>
            <View style={Style.box}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Tanggal Penerbangan"
                    onChangeText={(text)=>setTanggal(text)}
                />
            </View>

            <View style={Style.box2}>
                <TouchableOpacity style={Style.tombol} onPress={register}>
                    <Text style={Style.texttombol}>Cari Penerbangan</Text>
                </TouchableOpacity>
            </View>

            <View style={Style.box2}>
                <Text style={Style.credit}>Copyright Tugas PAM 119140043 Whendric Lamsehat Siburian</Text>
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
    body: {
        backgroundColor: '#00ffff',
        borderRadius: 5,
        padding: 20,
        margin: 10,
        elevation: 1,
        width: '95%',
        position: 'absolute',
    },

    Label: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10,
    },

    title:{
        fontSize: 40,
        color: '#fffff',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
        paddingBottom : 20,
    },
    TextInput: {
        flex: 1,
        paddingLeft: 5,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        height: 60,
        borderRadius: 5,
        margin: 10,
    },
    tombol: {
        backgroundColor: '#008000',
        borderRadius: 5,
        padding: 10,
        width: '70%',
    },

    box2: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    credit: {
		zIndex: 1,
		textAlign: 'center',
		color: '#000'
	},
    texttombol: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
    },

});

export default HalamanUtama
