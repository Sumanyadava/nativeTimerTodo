import React, {useState} from "react";
import { View,Text,StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/color";
import { RoundedButton } from "../components/RoundedButton";


export const Focus = ({addSubject}) => {

    const [input, setInput] = useState(null)
    return (
    <View style={style.container}>
        <Text style={style.text}>Focus Feature </Text>
        <View style={style.inputContainer}>
        <TextInput style={style.textInput} label="What would you like to focus on" onChangeText={setInput}/>
        <RoundedButton title="+" size={50} style={style.button} onPress={() => addSubject(input) } />
        
        </View>
        
        
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        

    },
    text: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputContainer: {
        padding: 5,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: "row",

    },
    textInput:{
        flex: 1,
        marginRight: 10,
        fontSize: 15,
    },
    button: {

    }

})