import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import TaskScreen from "./screens/TaskScreen";
import RewardsScreen from "./screens/RewardsScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === "Home") iconName = "home";
                        else if (route.name === "Tasks") iconName = "list";
                        else if (route.name === "Rewards") iconName = "gift";
                        else if (route.name === "Leaderboard") iconName = "trophy";
                        else if (route.name === "Profile") iconName = "person";
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarStyle: { backgroundColor: "#121212", borderTopWidth: 0 },
                    tabBarActiveTintColor: "#ff9800",
                    tabBarInactiveTintColor: "#777",
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Tasks" component={TaskScreen} />
                <Tab.Screen name="Rewards" component={RewardsScreen} />
                <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
