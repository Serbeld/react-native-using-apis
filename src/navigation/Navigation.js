import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5"
import Favorite from "../Screens/Favorite";
import Pokedex from "../Screens/Pokedex";
import Account from "../Screens/Account"

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Favoritos"
                component={Favorite}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: () => <Icon name="heart" color="#020914" size={20} />
                }} />
            <Tab.Screen name="Pokedex" component={Pokedex} />
            <Tab.Screen name="Mi espacio" component={Account} />
        </Tab.Navigator>
    )
}
