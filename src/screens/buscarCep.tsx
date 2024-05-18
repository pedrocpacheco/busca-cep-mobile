import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native"; 
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import api from "../services/api";

export default function BuscarCep(){

    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [uf, setUf] = useState("")

    async function buscarCep(){
        if(cep == ""){
            Alert.alert("Cep inválido!")
            setCep("")
        }

        try{
            const response = await api.get(`/${cep}/json/`)
            setLogradouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setLocalidade(response.data.localidade)
            setUf(response.data.uf)
        }catch(err){
            console.log(err)
        }


    }

    return(
        <View>
            <View style={styles.topBar}>
                <Text style={styles.title}>Buscador de Cep</Text>
            </View>
        
            <View style={styles.busca}>
                <TextInput
                style={{borderColor: "#000000", borderWidth: 2, width: 200,
                    fontSize: 18, marginTop: 20, borderRadius: 10, height: 70,
                    padding: 15
                }}
                value={cep}
                onChangeText={(texto => setCep(texto))}
                placeholder="Cep"
                />

                <TouchableOpacity style={styles.botaoBuscar} onPress={buscarCep}>
                    <Text style={styles.textoBotaoBuscar}>Buscar</Text>
                </TouchableOpacity>
            </View>

                <TextInput
                style={styles.caixaTexto}
                value={logradouro}
                onChangeText={(texto => setLogradouro(texto))}
                placeholder="Logradouro"
                />

                <TextInput
                style={styles.caixaTexto}
                value={bairro}
                onChangeText={(texto => setBairro(texto))}
                placeholder="Bairro"
                />

                <TextInput
                style={styles.caixaTexto}
                value={localidade}
                onChangeText={(texto => setLocalidade(texto))}
                placeholder="Cidade"
                />

                <TextInput
                style={{borderColor: "#000000", borderWidth: 2, width: 100,
                    fontSize: 18, marginTop: 10, borderRadius: 10, marginHorizontal: 20,
                    padding: 15
                }}
                value={uf}
                onChangeText={(texto => setUf(texto))}
                placeholder="Estado"
                />


        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: "row",
        height: 70,
        backgroundColor: "#018786"
    },
    title: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        margin: 20
    },
    busca:{
        justifyContent:'center',
        alignItems: 'center'
    },
    containerCep: {
        flexDirection: "row",
        height: 100,
        marginHorizontal: 20
    },
    botaoBuscar: {
        backgroundColor: "#018786",
        width: 120,
        height: 70,
        marginTop: 15,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center'
    },
    textoBotaoBuscar: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center"
    },
    caixaTexto: {
        borderColor: "#000000",
        borderWidth: 2,
        padding: 15,
        fontSize: 18,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 20
    }
})