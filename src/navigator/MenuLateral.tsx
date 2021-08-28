import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuInterno { ...props } /> }>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {

    return (
        <DrawerContentScrollView>

            {/*Prte del menu */}
            <View style={styles.avatarContent}>
                <Image
                    style={ styles.avatar }
                    source={{
                        uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'
                    }}/>
            </View>

            {/* Opciones de menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity 
                    onPress={ () => navigation.navigate('StackNavigator')}
                    style={styles.menuBoton}>
                    <Text style={styles.menuTexto}>Navegacion</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={ () => navigation.navigate('SettingsScreen')}
                    style={styles.menuBoton}>
                    <Text style={styles.menuTexto}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}