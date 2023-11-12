import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image,link, ScrollView } from 'react-native';



const HomePage =({navigation}) =>{

    const detail = ()=>{
        navigation.navigate('DetailPage')
    }
    return (
        <View style={styles.container}>
            <ScrollView> 
                <View style={{flexDirection : 'row'}}>
                    <View>
                        <Text style={{ fontWeight:'200' , fontSize:18}} >Asset</Text>
                        <View style={{flexDirection : 'row'}}>
                            <Text style={{ fontWeight:'500' , fontSize:25, marginTop:5}} >Management</Text>
                        </View>
                    </View>
                </View>
                <ScrollView horizontal={true} style={{ marginTop:20 }}>
                        <TouchableOpacity onPress={detail}>
                            <Image style={{ width:260, height:320, borderRadius:25}} source={require('../assets/antik1.jpg')} />
                            <Text style={{ fontWeight:900,fontSize:18,color:'white',position:'absolute', left:15,bottom:55}}>Fonograf</Text>
                            <Text style={{ color:'white',position:'absolute', left:15,bottom:30}}>Tahun 1877</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft:25 }} >
                            <Image style={{ width:260, height:320, borderRadius:25}} source={require('../assets/antik2.jpg')} />
                            <Text style={{ fontWeight:900,fontSize:18,color:'white',position:'absolute', left:15,bottom:55}}>Patung Menari</Text>
                            <Text style={{ color:'white',position:'absolute', left:15,bottom:30}}>Tahun 1888</Text>
                        </TouchableOpacity>
                </ScrollView>
                <View style={{flexDirection : 'row', marginTop:40}}>
                    <View style={{flexDirection : 'row', backgroundColor:'#E7EAF2', borderRadius:15, width:290, height:50, alignItems:'center'}}>
                        <Image style={{ marginLeft:10, width:30, height:30}} source={require('../assets/search.png')} />
                        <TextInput style={{ marginLeft : 20, fontSize:15, fontWeight:'300', width:210}}
                            // onChangeText={}
                            placeholder={'Search'}
                            />
                    </View>
                    <View style={{ marginLeft:10,borderRadius:15,width:60, backgroundColor:'#00B9FF', alignItems:'center', justifyContent:'center'}}>
                        <Image style={{ width:30, height:30,}} source={require('../assets/filter.png')} />
                    </View>
                </View>
                <View style={{ flexDirection:'row',marginTop:35, alignItems:'center' }}>
                    <Text style={{ fontWeight:"400" , fontSize:25}}>Rekomendasi</Text>
                    <Text style={{ marginLeft:130,fontWeight:"200" , fontSize:15}}>See more</Text>
                </View>
                <View style={{ marginTop:20}}>
                    <View style={{ flexDirection:'row'}}>
                        <Image style={{ width:90, height:90, borderRadius:20}} source={require('../assets/antik1.jpg')} />
                        <View style={{ marginLeft:20, justifyContent:'center'}}>
                            <Text style={{ fontSize:20,fontWeight:'500' }}>Fenograf</Text>
                            <Text style={{ marginTop:10,fontSize:15,fontWeight:'500' }}>1877</Text>
                        </View>
                        <Image style={{ width:40, height:40, marginTop:30, marginLeft:110}} source={require('../assets/plus.png')} />
                    </View>
                </View>
                <View style={{ marginTop:20}}>
                    <View style={{ flexDirection:'row'}}>
                        <Image style={{ width:90, height:90, borderRadius:20}} source={require('../assets/antik2.jpg')} />
                        <View style={{ marginLeft:20, justifyContent:'center'}}>
                            <Text style={{ fontSize:20,fontWeight:'500' }}>Patung Menari</Text>
                            <Text style={{ marginTop:10,fontSize:15,fontWeight:'500' }}>1888</Text>
                        </View>
                        <Image style={{ width:40, height:40, marginTop:30, marginLeft:60}} source={require('../assets/plus.png')} />
                    </View>
                </View>
                <View style={{ marginTop:20}}>
                    <View style={{ flexDirection:'row'}}>
                        <Image style={{ width:90, height:90, borderRadius:20}} source={require('../assets/antik3.jpeg')} />
                        <View style={{ marginLeft:20, justifyContent:'center'}}>
                            <Text style={{ fontSize:20,fontWeight:'500' }}>Jam Antik</Text>
                            <Text style={{ marginTop:10,fontSize:15,fontWeight:'500' }}>1976</Text>
                        </View>
                        <Image style={{ width:40, height:40, marginTop:30, marginLeft:100}} source={require('../assets/plus.png')} />
                    </View>
                </View>
                <View style={{ marginTop:20}}>
                    <View style={{ flexDirection:'row'}}>
                        <Image style={{ width:90, height:90, borderRadius:20}} source={require('../assets/antik4.jpg')} />
                        <View style={{ marginLeft:20, justifyContent:'center'}}>
                            <Text style={{ fontSize:20,fontWeight:'500' }}>Timbangan</Text>
                            <Text style={{ marginTop:10,fontSize:15,fontWeight:'500' }}>1950</Text>
                        </View>
                        <Image style={{ width:40, height:40, marginTop:30, marginLeft:90}} source={require('../assets/plus.png')} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding : 20,
        marginLeft:5,
        justifyContent:'center',
        marginTop:30
    },
    scrolsamping:{
        height:40,
        marginLeft:10,
        borderRadius:15,
        width:100, 
        backgroundColor:'#E4E4E4', 
        alignItems:'center', 
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        color:'black', 
        fontSize:15
    },
});