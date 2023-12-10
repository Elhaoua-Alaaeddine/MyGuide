import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Context } from "../config/Context";
import HomeScreen from "../screens/HomeScreen";
import HotelsScreen from "../screens/HotelsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ReportBugScreen from "../screens/ReportBugScreen";
import RestaurantsScreen from "../screens/RestaurantsScreen";
import UpgradeToBusinessScreen from "../screens/UpgradeToBusinessScreen";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Swipe = createMaterialTopTabNavigator();
const data = [
  { label: "Ifrane", value: "1" },
  { label: "Casablanca", value: "2" },
  { label: "Rabat", value: "3" },
  { label: "Tangier", value: "4" },
  { label: "Fes", value: "5" },
  { label: "Marrakesh", value: "6" },
  { label: "Meknes", value: "7" },
];

const HomeStack = () => {
  return (
    <Swipe.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FFF3C2",
        tabBarInactiveTintColor: "#fff",
        tabBarIndicatorStyle: { backgroundColor: "#F9CB11" },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "#7677B7" },
      }}
    >
      <Swipe.Screen
        name="Attractions"
        component={HomeScreen}
        options={{ tabBarLabel: "Attractions" }}
      />
      <Swipe.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{ tabBarLabel: "Restaurants" }}
      />
      <Swipe.Screen
        name="Hotels"
        component={HotelsScreen}
        options={{ tabBarLabel: "Hotels" }}
      />
    </Swipe.Navigator>
  );
};

// const SwipeScreen = () => {
//   <Swipe.Navigator>
//     <Swipe.Screen name="Hotels" component={HotelsScreen} />
//     <Swipe.Screen name="Restaurants" component={RestaurantsScreen} />
//     <Swipe.Screen name="Attractions" component={AttractionsScreen} />
//   </Swipe.Navigator>
// }

const ProfileStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#7677B7" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerTitleAlign: "center",

        }}
      />
      
      <Stack.Screen
        name="ReportBugScreen"
        component={ReportBugScreen}
        options={{
          title: "",
          headerLeft: () => (
            <Ionicons.Button
              style={{ paddingRight: -5 }}
              name="arrow-back"
              size={30}
              backgroundColor="#7677B7"
              onPress={() => navigation.navigate("ProfileScreen")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="UpgradeToBusinessScreen"
        component={UpgradeToBusinessScreen}
        options={{
          title: "",
          headerLeft: () => (
            <Ionicons.Button
              style={{ paddingRight: -5 }}
              name="arrow-back"
              size={30}
              backgroundColor="#7677B7"
              onPress={() => navigation.navigate("ProfileScreen")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const HeaderSearch = () => {
const [isCatFocus, setIsCatFocus] = React.useState(false);
const {city, setCity} = React.useContext(Context);
const {isLoading, setIsLoading} = React.useContext(Context); 

const loadScreen = () => {
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
}
  return (
    <View style={{flex: 1 }}>

    <View  style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isCatFocus && { borderColor: "yellow" }]}
          placeholder="Select a City"
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          searchPlaceholder="Search..."
          value={city}
          onFocus={() => setIsCatFocus(true)}
          onBlur={() => setIsCatFocus(false)}
          onChange={(item) => {
            setCity(item.label);
            loadScreen();
            setIsCatFocus(false);
          }}
        />
      </View>
    </View>

  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#7677B7" },
        tabBarItemStyle: { marginBottom: 5, marginTop: 5 },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#F9CB11",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerTitleAlign: "center",
          headerTitle: () => <HeaderSearch />
          ,
          headerStatusBarHeight: 50,
          headerStyle: { backgroundColor: "#7677B7" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    width: 350,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#7677B7",
    paddingHorizontal: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  label2: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    color: "white",
    paddingHorizontal: 8,
    fontSize: 16,
  },
  selectedTextStyle: {
    color: "white",
    fontSize: 16,
  },
  inputSearchStyle: {
    color: "black",
    height: 40,
    fontSize: 16,
  },
});