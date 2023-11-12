import React, { createFactory } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, ScrollView } from 'react-native';


const PaymentPage =({navigation}) =>{
    const [rusak, setRusak] = useState('')
    const [pernah, setPernah] = useState('')
    const [hasil, setHasil]= useState('')

    const detail = ()=>{
        navigation.navigate('DetailPage')
    }



    const kondisi = () => {
        if (pernah.toLowerCase() === 'ya') {
            if (rusak.toLowerCase() === 'sebagian') {
            setHasil('4');
            } else if (rusak.toLowerCase() === 'sedang') {
            setHasil('8');
            } else if (rusak.toLowerCase() === 'parah') {
            setHasil('14');
            }
        } else if(pernah.toLowerCase() === 'tidak') {
            if (rusak .toLowerCase() === 'sebagian') {
            setHasil('2');
            } else if (rusak.toLowerCase() === 'sedang') {
            setHasil('4');
            } else if (rusak.toLowerCase() === 'parah') {
            setHasil('7');
            }
        }else{
            alert('Yang bener dong')
        }
    }
    
    const risk = (val) => {
        setRusak(val)
    }
    const kejadian = (val) => {
        setPernah(val)
    }


    return ( 
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={detail}>
                    <View style={{ borderWidth:1, width:40, height:40, alignItems:'center', justifyContent:'center', borderRadius:15}}>
                    <Image style={{ width:30, height:30, borderWidth:1}} source={require('../assets/arrow-left.png')} />
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop:15 }}>
                    <Text style={{ fontWeight:'200' , fontSize:18}} >Nama Asset</Text>
                        <Text style={{ fontWeight:'500' , fontSize:25, marginTop:5}}>Fonograf</Text>
                </View>
                <View style={{ padding:30, marginTop:-10 }}>
                    <Text style={{ fontSize:15, }}>Type Kerusakan</Text>
                    <View style={{ height:40,borderRadius:10,marginTop:10, width:300, borderWidth:1 }}>
                    <TextInput style={{ fontSize:15, marginTop:6, marginLeft:15, width:250}}
                            onChangeText={risk}
                            placeholder={''}
                            />
                    </View>
                    <Text style={{ fontSize:15, marginTop:15 }}>Uraian Kerusakan</Text>
                    <View style={{ height:40,borderRadius:10,marginTop:10, width:300, borderWidth:1 }}>
                    <TextInput style={{ fontSize:15, marginTop:6, marginLeft:15, width:250}}
                            // onChangeText={}
                            placeholder={''}
                            />
                    </View>
                    <Text style={{ fontSize:15, marginTop:15 }}>Pernah Rusak Sebelumnya?</Text>
                    <View style={{ height:40,borderRadius:10,marginTop:10, width:300, borderWidth:1 }}>
                    <TextInput style={{ fontSize:15, marginTop:6, marginLeft:15, width:250}}
                            onChangeText={kejadian}
                            placeholder={''}
                            />
                    </View>
                </View>
                <View style={{ marginTop:50 }} >
                    <Text style={styles.texthasil}>Type Kerusakan : {rusak}</Text>
                    <Text style={styles.texthasil}>Pernah Rusak Sebelumnya : {pernah}</Text>
                    <Text style={{ marginTop:5, fontWeight:'200' }}>Estimasai Perbaikan</Text>
                    <Text style={{ marginTop:5, fontSize:20 }}>{hasil} hari (dari pelaporan)</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'center', marginTop:80}}>
                    <TouchableOpacity style={styles.tombol1}
                        onPress={kondisi}>
                            <Text style={styles.textakun}>
                                Hitung
                            </Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.tombol}
                    onPress={kondisi}>
                        <Text style={styles.textakun}>
                        Laporkan
                        </Text>
                    </TouchableOpacity>
                </View>
                    </ScrollView>
        </View>
    );
};

export default PaymentPage;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding : 20,
        marginLeft:5,
        marginTop:30
    },

    tombol:{
        marginTop:30,
        borderWidth:1,
        backgroundColor: 'rgb(0, 173, 239)',
        padding: 10,
        borderRadius: 20,
        width:150,
        height: 50,
    },
    tombol1:{
        marginTop:30,
        borderWidth:1,
        backgroundColor: 'rgb(0, 173, 239)',
        padding: 10,
        borderRadius: 20,
        width:150,
        height: 50,
        marginRight:20
    },
    textakun:{
        color: 'white',
        fontWeight: 'bold',
        fontSize : 15,
        textAlign: 'center', 
    },
    texthasil:{
        marginTop:5,
    }
});
