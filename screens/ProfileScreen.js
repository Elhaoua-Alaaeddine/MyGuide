import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Title, TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  default as Icon,
  default as MaterialCommunityIcon,
} from "react-native-vector-icons/MaterialCommunityIcons";
import { auth } from "../config/firebase";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState("Morocco");
  const [role, setRole] = React.useState("Tourist");

  React.useEffect(() => {
    setName(
      auth.currentUser.displayName.charAt(0).toUpperCase() +
        auth.currentUser.displayName.slice(1)
    );
    setEmail(auth.currentUser.email);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error: ", error);
      alert(error.message);
    }
  };
  const handleReportBug = () => {
    navigation.navigate("ReportBugScreen");
  };

  const handleUpgradeToBusiness = () => {
    navigation.navigate("UpgradeToBusinessScreen");
  };
  return (
    <SafeAreaView className="bg-purple-100 flex-1">
      <View>
        <View className="mx-3 mb-3 items-center justify-center">
          <TouchableOpacity>
            <View style={{ height: 100, width: 100, borderRadius: 15 }}>
              <ImageBackground
                source={require("../assets/images/Profile.png")}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View className="flex-1 items-center justify-center">
                  <Icon
                    name="camera"
                    size={40}
                    color="white"
                    className="items-center justify-center"
                    style={{ opacity: 0.7 }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text className="font-bold text-xl mt-2">{name}</Text>
          <Title className="text-gray-500 italic text-sm flex-row ">
            {role}
          </Title>
        </View>

        <View className="border-t border-gray-400 ">
          <View className="flex-row justify-start ml-7 mt-5 mb-5 relative">
            <Ionicons name="mail" className="" size={20} />
            <Title className=" text-lg ml-5 -mt-1 text-gray-500">{email}</Title>
          </View>
          <View className="absolute right-0 top-0.5 border-l border-gray-400">
            <TouchableRipple onPress={() => {}} className=" p-5">
              <MaterialCommunityIcon name="pencil" size={20} className="" />
            </TouchableRipple>
          </View>
        </View>

        <View className="border-t border-gray-400">
          <View className="flex-row justify-start ml-7 mt-5 mb-5 relative ">
            <Ionicons name="location" className="" size={20} />
            <Title className=" text-lg ml-5 -mt-1 text-gray-500">
              {country}
            </Title>
          </View>
          <View className="absolute right-0 top-0.5 border-l border-gray-400">
            <TouchableRipple onPress={() => {}} className=" p-5">
              <MaterialCommunityIcon name="pencil" size={20} className="" />
            </TouchableRipple>
          </View>
        </View>
      </View>
      {/* buttons to upgrade to business owner or authority */}
      {/* <TouchableOpacity className="flex-row justify-center items-center bg-yellow-500 rounded-lg mx-5 mt-10 p-2">
            <Title className="text-white text-xl text-gray-700">
              Upgrade to Business Owner
            </Title>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-center items-center bg-yellow-500 rounded-lg mx-5 mt-4 p-2">
            <Title className="text-white text-xl text-gray-700">
              Request Upgrade to Authority
            </Title>
          </TouchableOpacity> */}
      {/* button to logout  */}
      <View className="flex-1 self-stretch">
        <TouchableRipple onPress={handleUpgradeToBusiness}>
          <View className="flex-row px-7 py-3 border-y border-gray-400">
            <View className=" justify-center items-center">
              <MaterialCommunityIcon
                name="briefcase-account-outline"
                size={25}
              />
            </View>
            <Title className="px-3 -my-0.5">Upgrade to business owner</Title>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View className="flex-row px-7 py-3 border-b border-gray-400">
            <View className=" justify-center items-center">
              <MaterialCommunityIcon name="account-check-outline" size={25} />
            </View>
            <Title className="px-3 -my-0.5">Upgrade to authority</Title>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={handleReportBug}>
          <View className="flex-row px-7 py-3 border-b border-gray-400">
            <View className=" justify-center items-center">
              <Ionicons name="warning-outline" size={25} />
            </View>
            <Title className="px-3 -my-0.5">Report a problem</Title>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={handleLogout}>
          <View className="flex-row px-7 py-3 border-b border-gray-400">
            <View className=" justify-center items-center">
              <MaterialCommunityIcon name="logout" size={25} />
            </View>
            <Title className="px-3 -my-0.5">Log out</Title>
          </View>
        </TouchableRipple>
      </View>
      <View className="items-center align-center p-5 ">
        <TouchableOpacity>
          <Text>
            Language: <Text className="font-bold">English</Text>
          </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity className="flex-row justify-center items-center bg-red-400 rounded-lg mx-5 mt-14 p-2" onPress={handleLogout}>
            <Title className="text-white text-xl text-gray-700 font-bold">Logout</Title>
          </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default ProfileScreen;
