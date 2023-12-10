import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  TextInput,
} from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const handleResetPassword = async () => {
    setIsLoading(true);
    if (email) {
      try{
        await sendPasswordResetEmail(auth, email);
        console.log("Reset Password");
        alert("We have sent you an email to reset your password");
        setIsLoading(false);
      }
      catch(error){
        console.log(error.message);
        alert(error.message);
        setIsLoading(false);
      }
      
    } else if (!email) {
      alert("Please enter your email address");
      setIsLoading(false);
    } else {
      alert("Error");
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView
      className="flex-1 "
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex-1 ">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start ">
          <TouchableOpacity
            className="bg-yellow-400 rounded-tr-2xl rounded-bl-2xl p-2 ml-4"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View className="flex-1 flex justify-around my-4 max-h-96 ">
        <Text className="text-center text-white font-bold text-4xl">
          Forgot Password?
        </Text>
        <Text className="text-center text-white font-semibold text-xl px-3">
          Enter your email and we'll send you a link to reset your password.
        </Text>
        <TextInput
          className="border mb-4 border-stone-400 p-3 bg-gray-100 text-gray-700 rounded-2xl mx-7"
          placeholder="Enter your email address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <View className="space-y-4">
          {isLoading && (
            <ActivityIndicator
              className="flex-1 justify-center items-center"
              size="large"
              color="yellow"
            />
          )}
          {!isLoading && (
            <TouchableOpacity
              className="py-3 bg-yellow-400 mx-7 rounded-xl"
              onPress={handleResetPassword}
            >
              <Text className="text-xl font-bold text-gray-700 text-center">
                Send Reset Link
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
