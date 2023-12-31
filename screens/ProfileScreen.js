import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Title } from "react-native-paper";
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
    <SafeAreaView className="bg-purple-100 flex-1 pt-4">
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
            <TouchableOpacity onPress={() => {}} className=" p-5">
              <MaterialCommunityIcon name="pencil" size={20} className="" />
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => {}} className=" p-5">
              <MaterialCommunityIcon name="pencil" size={20} className="" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="flex-1 self-stretch">
        <TouchableOpacity onPress={handleUpgradeToBusiness}>
          <View className="flex-row px-7 py-3 border-y border-gray-400">
            <View className=" justify-center items-center">
              <MaterialCommunityIcon
                name="briefcase-account-outline"
                size={25}
              />
            </View>
            <Title className="px-3 -my-0.5 text-black">Upgrade to business owner</Title>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View className="flex-row px-7 py-3 border-b border-gray-400">
            <View className=" justify-center items-center">
              <MaterialCommunityIcon name="account-check-outline" size={25} />
            </View>
            <Title className="px-3 -my-0.5 text-black">Upgrade to authority</Title>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReportBug}>
          <View className="flex-row px-7 py-3 border-b border-gray-400">
            <View className=" justify-center items-center">
              <Ionicons name="warning-outline" size={25} />
            </View>
            <Title className="px-3 -my-0.5 text-black">Report a problem</Title>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View className="flex-row px-7 py-3 border-b border-gray-400">
            <View className=" justify-center items-center">
              <MaterialCommunityIcon name="logout" size={25} />
            </View>
            <Title className="px-3 -my-0.5 text-black">Log out</Title>
          </View>
        </TouchableOpacity>
      </View>
      <View className="items-center align-center p-5 ">
        <TouchableOpacity>
          <Text>
            Language: <Text className="font-bold">English</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
