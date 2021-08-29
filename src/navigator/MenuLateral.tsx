import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { SettingsScreen } from '../screens/SettingsScreen';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuInterno { ...props } /> }>
            <Drawer.Screen name="Tabs" component={ Tabs } />
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
                    onPress={ () => navigation.navigate('Tabs')}
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