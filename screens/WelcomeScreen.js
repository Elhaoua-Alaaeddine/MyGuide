import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex-1 flex justify-around my-4">
      <Text className="text-center text-white font-bold text-4xl">
          Welcome to MyGuide!
        </Text>

        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/welcome.png")}
            style={{ width: 357, height: 392 }}
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity className="py-3 bg-yellow-400 mx-7 rounded-xl" onPress={() => navigation.navigate('SignUp')}>
            <Text className="text-xl font-bold text-gray-700 text-center">
              Create Account
            </Text>
          </TouchableOpacity>
        
        <View className="flex-row justify-center">
            <Text className="text-white font-semibold">
                Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-yellow-400 font-semibold"> Login</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
