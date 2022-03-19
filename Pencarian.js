import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
var AsalPenerbangan = ['Chicago', 'Chicago', 'New York', 'New York'];
var TujuanPenerbangan = ['Berlin', 'Moskow', 'Kiev', 'Jakarta'];
var Jadwal = ['24 November 2033', '25 November 2033', '26 November 2033', '27 November 2033'];
var Pesawat = ['Batman airlines', 'Superman Airlines', 'Flash Airlines', 'Aquaman Airlines'];

export default function Pencarian() {
    const route = useRoute();

    if ((route.params.asal == AsalPenerbangan[0]) && (route.params.tujuan == TujuanPenerbangan[0]) && (route.params.tanggal == Jadwal[0])) {
        return (
            <View style={Style.FontStatus}>
                <View style={Style.Background}>
                    <Text style={Style.FontStatus}>Penerbangan Tersedia : </Text>
                </View>
                <View style={Style.Background}>
                <Text>Pesawat :
                    <Text style={Style.Pesawat}>  {Pesawat[0]}</Text>
                </Text>
                <Text>Jadwal  :
                    <Text style={Style.FontJadwal}>  {Jadwal[0]}</Text>
                </Text>
                <Text style={Style.FontPenerbangan}>{route.params.asal}    Tujuan Penerbangan    {TujuanPenerbangan[0]}</Text>
                </View>

                </View>
        )
    }

    else if ((route.params.asal == AsalPenerbangan[1]) && (route.params.tujuan == TujuanPenerbangan[1]) && (route.params.tanggal == Jadwal[1])) {
        return (
            <View style={Style.FontStatus}>
                <View style={Style.Background}>
                    <Text style={Style.FontStatus}>Penerbangan Tersedia : </Text>
                </View>
                <View style={Style.Background}>
                <Text>Pesawat :
                    <Text style={Style.Pesawat}>  {Pesawat[1]}</Text>
                </Text>
                <Text>Jadwal  :
                    <Text style={Style.FontJadwal}>  {Jadwal[1]}</Text>
                </Text>
                <Text style={Style.FontPenerbangan}>{route.params.asal}    Tujuan Penerbangan    {TujuanPenerbangan[1]}</Text>
                </View>

                </View>
        )
    }

    else if ((route.params.asal == AsalPenerbangan[2]) && (route.params.tujuan == TujuanPenerbangan[2]) && (route.params.tanggal == Jadwal[2])) {
        return (
            <View style={Style.FontStatus}>
                <View style={Style.Background}>
                    <Text style={Style.FontStatus}>Penerbangan Tersedia : </Text>
                </View>
                <View style={Style.Background}>
                <Text>Pesawat :
                    <Text style={Style.Pesawat}>  {Pesawat[2]}</Text>
                </Text>
                <Text>Jadwal  :
                    <Text style={Style.FontJadwal}>  {Jadwal[2]}</Text>
                </Text>
                <Text style={Style.FontPenerbangan}>{route.params.asal}    Tujuan Penerbangan    {TujuanPenerbangan[2]}</Text>
                </View>

                </View>
        )
    }

    else if ((route.params.asal == AsalPenerbangan[3]) && (route.params.tujuan == TujuanPenerbangan[3]) && (route.params.tanggal == Jadwal[3])) {
        return (
            <View style={Style.FontStatus}>
                <View style={Style.Background}>
                    <Text style={Style.FontStatus}>Penerbangan Tersedia : </Text>
                </View>
                <View style={Style.Background}>
                <Text>Pesawat :
                    <Text style={Style.Pesawat}>  {Pesawat[3]}</Text>
                </Text>
                <Text>Jadwal  :
                    <Text style={Style.FontJadwal}>  {Jadwal[3]}</Text>
                </Text>
                <Text style={Style.FontPenerbangan}>{route.params.asal}    Tujuan Penerbangan    {TujuanPenerbangan[3]}</Text>
                </View>

                </View>
        )
    }

    else {
        return (
            <View style={Style.FontStatus}>
                <View style={Style.Background}>
                    <Text style={Style.FontStatus}>Penerbangan yang anda inginkan saat ini tidak tersedia. daftar penerbangan tersedia :</Text>
                </View>
                <View style={Style.Background}>
                    <Text>Pesawat :
                        <Text style={Style.Pesawat}>  {Pesawat[0]} </Text>
                    </Text>
                    <Text>Jadwal  :
                        <Text style={Style.FontJadwal}>  {Jadwal[0]}</Text>
                    </Text>
                    <Text style={Style.FontPenerbangan}>{AsalPenerbangan[0]}                Tujuan Penerbangan             {TujuanPenerbangan[0]}</Text>
                </View>
                <View style={Style.Background}>
                    <Text>Pesawat :
                        <Text style={Style.Pesawat}>  {Pesawat[1]}</Text>
                    </Text>
                    <Text>Jadwal  :
                        <Text style={Style.FontJadwal}>  {Jadwal[1]}</Text>
                    </Text>
                    <Text style={Style.FontPenerbangan}>{AsalPenerbangan[1]}                Tujuan Penerbangan             {TujuanPenerbangan[1]}</Text>
                </View>
                <View style={Style.Background}>
                    <Text>Pesawat :
                        <Text style={Style.Pesawat}>  {Pesawat[2]}</Text>
                        </Text>
                    <Text>Jadwal  :
                        <Text style={Style.FontJadwal}>  {Jadwal[2]}</Text>
                    </Text>
                    <Text style={Style.FontPenerbangan}>{AsalPenerbangan[2]}                Tujuan Penerbangan             {TujuanPenerbangan[2]}</Text>
                </View>

                <View style={Style.Background}>
                    <Text>Pesawat :
                        <Text style={Style.Pesawat}>  {Pesawat[3]}</Text>
                        </Text>
                    <Text>Jadwal  :
                        <Text style={Style.FontJadwal}>  {Jadwal[3]}</Text>
                    </Text>
                    <Text style={Style.FontPenerbangan}>{AsalPenerbangan[3]}                Tujuan Penerbangan             {TujuanPenerbangan[3]}</Text>
                </View>

                </View>
        )
    }
}

const Style = StyleSheet.create({
    Background: {
        backgroundColor: '#00ffff',
        padding: 15,
        width: '90%',
        borderRadius: 9,
        elevation: 100,
        position: 'relative',
        textAlign: 'left',
        margin: 10,
        justifyContent: 'center',
        left: 7,
    },
    FontJadwal: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
    Pesawat: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
    FontStatus: {
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
    },
    FontPenerbangan: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,

    }

})
