import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import BuscarCep from '../screens/buscarCep';

const { Screen, Navigator } = createDrawerNavigator();

export function StackRoutes() {
    return (
            <Navigator>
                <Screen
                    name='Buscar Cep'
                    component={BuscarCep}
                />
            </Navigator>
    )
}
