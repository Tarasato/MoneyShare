import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import taiga from './assets/TaigaIcon.png';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

const MoneyShare = () => {
    const [money, setMoney] = useState('');
    const [people, setPeople] = useState('');
    const [tip, setTip] = useState(false);
    const [tipValue, setTipValue] = useState('');
    const [moneyShare, setMoneyShare] = useState("0.00");

    const calculate = () => {
        if (money == '' ) {
            alert('กรุณาป้อนข้อมูลจำนวนเงิน');
            return;
        }else if(people == ''){
            alert('กรุณาป้อนข้อมูลจำนวนคน');
            return;
        }else if(tip == true && tipValue == ''){
            alert('กรุณาป้อนข้อมูลจำนวนเงินทิป');
            return;
        }
        setMoneyShare(((parseFloat(money) + (tip ? parseFloat(tipValue) : 0)) / parseFloat(people)).toFixed(2).toString());
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{ flex: 1, width: '100%' }}>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={styles.appbar}>
                    <Text style={styles.titleAppbar}>MoneyShare</Text>
                </View>
                <Image source={taiga} style={styles.logo}></Image>

                <TextInput keyboardType='numeric' placeholder='ป้อนจำนวนเงิน' style={styles.inputNumber} value={money} onChangeText={setMoney} ></TextInput>

                <TextInput keyboardType='numeric' placeholder='ป้อนจำนวนคน' style={styles.inputNumber} value={people} onChangeText={setPeople} ></TextInput>
                <View style={{ height: 30 }} />
                <View style={{ flexDirection: 'row' }}>
                    <Checkbox value={tip} onValueChange={() => {
                        setTip(!tip)
                        if (tip == true) {
                            setTipValue('');
                        }
                    }} />
                    <View style={{ width: 5 }} />
                    <Text>ทิปให้พนักงาน</Text>
                </View>
                <TextInput keyboardType='numeric' placeholder='ป้อนจำนวนเงินทิป' style={styles.inputNumber} value={tipValue} onChangeText={setTipValue} editable={tip} ></TextInput>
                <TouchableOpacity style={styles.btnCal} onPress={() => calculate()}>
                    <Text style={{ color: 'white', textAlign: 'center' }} >คำนวณ</Text>
                </TouchableOpacity>
                <View style={{ height: 30 }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.result}>หารกันคนละ</Text>
                    <Text style={styles.result}> {moneyShare} </Text>
                    <Text style={styles.result}>บาท</Text>
                </View>
            </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default MoneyShare

const styles = StyleSheet.create({
    appbar: {
        flexDirection: "row",
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },
    titleAppbar: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    logo: {
        width: 150,
        height: 165,
        marginBottom: 50
    },
    inputNumber: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 5,
        padding: 10
    },
    btnCal: {
        backgroundColor: '#22AA59',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20
    },
    result: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    }
})