import React, { createFactory } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image,link, ScrollView } from 'react-native';


const DetailPage =({navigation}) =>{
    const home = ()=>{
        navigation.navigate('HomePage')
    }
    const bayar = ()=>{
        navigation.navigate('PaymentPage')
    }
    return ( 
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={home}>
                    <View style={{ borderWidth:1, width:40, height:40, alignItems:'center', justifyContent:'center', borderRadius:15}}>
                    <Image style={{ width:30, height:30, borderWidth:1}} source={require('../assets/arrow-left.png')} />
                </View>
                </TouchableOpacity>
                <View style={{ marginTop:15 }}>
                    <Text style={{ fontWeight:'200' , fontSize:18}} >Asset</Text>
                        <Text style={{ fontWeight:'500' , fontSize:25, marginTop:5}} >Management</Text>
                </View>
                <Image style={{ marginTop:20,width:350, height:350, borderRadius:25, alignSelf:'center'}} source={require('../assets/antik1.jpg')} />
                <Text style={{ fontSize:30,fontWeight:'bold', marginTop:20 }}>Deskripsi</Text>
                <Text style={{ marginTop:10 }}>
                Alat pemutar musik kuno yang ditemukan oleh Thomas Edison pada tahun 1877. Alat ini digerakkan menggunakan teknologi mekanik untuk merekam atau memutar suara. Pertama-tama, suara akan ditangkap oleh bagian fonograf yang berbentuk seperti tanduk besar.
                </Text>
                <Text style={{ fontSize:30,fontWeight:'bold', marginTop:20 }}>Jadwal Perawatan</Text>
                <Text style={{ marginTop:10 }}>
                Jadwal akan dilaksanakan 80 September 2024
                </Text>
                <TouchableOpacity onPress={bayar} style={{alignItems:'center', marginTop:20 }} >
                    <View style={{ backgroundColor:'red',borderWidth:1, height:40,alignItems:'center', justifyContent:'center', borderRadius:15, width:300 }}>
                        <Text style={{ color:'white', fontWeight:'bold' }}>Laporan Kerusakan</Text> 
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default DetailPage;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding : 20,
        marginLeft:5,
        marginTop:30
    },
});