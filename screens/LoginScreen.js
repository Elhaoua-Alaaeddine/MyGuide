import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../config/firebase";
import { themeColors } from "../theme";


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };
  const handleLogin = async () => {
    setIsLoading(true);
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setIsLoading(false);
      } catch (error) {
        console.log("error: ", error);
        setIsLoading(false);
        alert(error.message);
      }
    } else {
      setIsLoading(false);
      alert("Please fill out all fields");
    }
  };

  return (
    <ScrollView className="bg-white">
        <KeyboardAvoidingView
          className="flex-1 form space-y-2"
          behavior={Platform.OS === "ios" ? "padding" : "size"}
        >
          <View
            className="flex-1 bg-white"
            style={{ backgroundColor: themeColors.bg }}
          >
            <SafeAreaView className="flex">
              <View className="flex-row justify-start mt-3">
                <TouchableOpacity
                  className="bg-yellow-400 rounded-tr-2xl rounded-bl-2xl p-2 ml-4"
                  onPress={() => navigation.goBack()}
                >
                  <ArrowLeftIcon size="20" color="black" />
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-center">
                <Image
                  source={require("../assets/images/login.png")}
                  style={{ width: 98, height: 200 }}
                />
              </View>
            </SafeAreaView>
            <View
              className="flex-1 bg-white px-8 pt-5"
              style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            >
              <View className="flex-1 flex justify-around mb-4">
                <Text className="text-gray-700 ml-4 mb-2 font-bold">
                  Email Address
                </Text>
                <TextInput
                  className="border mb-4 border-stone-400 p-3 bg-gray-100 text-gray-700 rounded-2xl"
                  placeholder="Enter your email address"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />

                <Text className="text-gray-700 ml-4 mb-2 font-bold">
                  Password
                </Text>
                <TextInput
                  className="border border-stone-400 mb-2 p-3 bg-gray-100 text-gray-700 rounded-2xl"
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                />
                <TouchableOpacity
                onPress={handleForgotPassword}>
                  <Text className="text-black font-semibold text-right mr-4 mb-3">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                {isLoading && (
                  <ActivityIndicator
                    className="flex-1 justify-center items-center"
                    size="large"
                    color="purple"
                  />
                )}
                {!isLoading && (
                  <TouchableOpacity
                    className="bg-yellow-400 rounded-2xl p-3 mb-2"
                    onPress={handleLogin}
                  >
                    <Text className="text-xl font-bold text-gray-700 text-center">
                      Login
                    </Text>
                  </TouchableOpacity>
                )}
                <Text className="justify-center flex-1 text-center font-bold text-xl mt-2">
                  Or
                </Text>
                <View className="flex-row mt-3 justify-center space-x-12">
                  <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                    <Image
                      source={require("../assets/icons/google.png")}
                      className="w-10 h-10"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                    <Image
                      source={require("../assets/icons/apple.png")}
                      className="w-10 h-10"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                    <Image
                      source={require("../assets/icons/facebook.png")}
                      className="w-10 h-10"
                    />
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-center pt-3">
                  <Text className="text-black font-semibold">
                    Don't have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SignUp")}
                  >
                    <Text className="text-yellow-400 font-semibold">
                      {" "}
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;
