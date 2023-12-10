import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context } from "../config/Context";
import { auth } from "../config/firebase";
import { themeColors } from "../theme";


const SignUpScreen = () => {
  const navigation = useNavigation();
  const [newName, setNewName] = React.useState("");
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState("");
  const [passwordR, setPasswordR] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const {name, setName} = React.useContext(Context)
  const {signedUp, setSignedUp} = React.useContext(Context)
  const handleSignUp = async () => {
    setIsLoading(true)
    if(email && password && passwordR && newName && password === passwordR)
    {
      try {
        setName(newName)
      setSignedUp(true);
        await createUserWithEmailAndPassword(auth, email, password)
        setIsLoading(false)
      } catch (error) {
        console.log('error: ', error)
        setIsLoading(false)
        alert(error.message)
      }
    }
    else if(password !== passwordR)
    {
      setIsLoading(false)
      alert("Passwords do not match")
    }
    else
    {
      setIsLoading(false)
      alert("Please fill out all fields")
    }
  }
React.useEffect(() => {
  console.log("name: "+newName, "email: "+email,"password: " +password, "rpassword: "+passwordR)}
  , [newName, email, password, passwordR, signedUp])
  return (
    <ScrollView className="bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          className="flex-none form space-y-2"
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
                  source={require("../assets/images/AlmostDone.png")}
                  style={{ width: 100, height: 150 }}
                />
              </View>
            </SafeAreaView>

            <View
              className="flex-1 bg-white px-8 pt-5"
              style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            >
              <View className="flex-1 flex justify-around mb-4">
                <Text className="text-gray-700 ml-4 mb-2 font-bold">
                  Full Name
                </Text>
                <TextInput
                  className="border mb-2 border-stone-400 p-2 bg-gray-100 text-gray-700 rounded-2xl"
                  placeholder="Enter your full name"
                  value={newName}
                  onChangeText={(text) => setNewName(text)}
                />
                <Text className="text-gray-700 ml-4 mb-2 font-bold">
                  Email Address
                </Text>
                <TextInput
                  className="border mb-2 border-stone-400 p-2 bg-gray-100 text-gray-700 rounded-2xl"
                  placeholder="Enter your email address"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />

                <Text className="text-gray-700 ml-4 mb-2 font-bold">
                  Password
                </Text>
                <TextInput
                  className="border border-stone-400 mb-2 p-2 bg-gray-100 text-gray-700 rounded-2xl"
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                />
                <Text className="text-gray-700 ml-4 mb-2 font-bold">
                  Repeat Password
                </Text>
                <TextInput
                  className="border border-stone-400 mb-4 p-2 bg-gray-100 text-gray-700 rounded-2xl"
                  placeholder="Enter your password"
                  value={passwordR}
                  onChangeText={(text) => setPasswordR(text)}
                  secureTextEntry={true}
                />
                {isLoading && (
                  <ActivityIndicator
                    className="flex-1 justify-center items-center"
                    size="large"
                    color="purple"
                  />
                )}
                {!isLoading && (
                  <TouchableOpacity className="bg-yellow-400 rounded-2xl p-3 mb-2"
                  onPress={handleSignUp}>
                    <Text className="text-xl font-bold text-gray-700 text-center">
                      Sign Up
                    </Text>
                  </TouchableOpacity>)}
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
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text className="text-yellow-400 font-semibold">
                      {" "}
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default SignUpScreen;
