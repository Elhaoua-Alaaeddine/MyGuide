import { updateProfile } from "firebase/auth";
import React from "react";
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import PostCard from "../components/PostCard";
import { Context } from "../config/Context";
import { auth } from "../config/firebase";

const data = [
  { label: "Ifrane", value: "1" },
  { label: "Casablanca", value: "2" },
  { label: "Rabat", value: "3" },
  { label: "Tangier", value: "4" },
  { label: "Fes", value: "5" },
  { label: "Marrakesh", value: "6" },
  { label: "Meknes", value: "7" },
];

const HomeScreen = () => {
  const { name, setName } = React.useContext(Context);
  const { city, setCity } = React.useContext(Context);
  const [isCatFocus, setIsCatFocus] = React.useState(false);
  const { signedUp, setSignedUp } = React.useContext(Context);
  const { isLoading, setIsLoading } = React.useContext(Context);
  React.useEffect(() => {
    const updateName = async () => {
      if (signedUp) {
        console.log("signedUp " + name);
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        setSignedUp(false);
      } else {
        setName(auth.currentUser.displayName);
        console.log(auth.currentUser.displayName);
      }
    };
    updateName();
  }, []);

  React.useEffect(() => {
    console.log("name " + name);
  }, [name]);

  return (
    <View className="flex-1  bg-purple-100">
      <ScrollView>
        {isLoading && (
          <View className="items-center justify-center flex-1">
            <ActivityIndicator
              size="extra large"
              color="purple"
            ></ActivityIndicator>
          </View>
        )}
        {!isLoading && (
          <View>
            <View className=" items-center border-b pb-5 border-gray-500 pt-5">
              {city === "Ifrane" ? (
                <View>
                  <Text className="font-bold text-center">
                    Announcement for {city}!
                  </Text>
                  <Text className="text-center">
                    The city of Ifrane is currently under lockdown due to the
                    snow storm. Please stay home and stay safe!
                  </Text>
                </View>
              ) : (
                <Text className="text-center">
                  There are no announcements for {city} at the moment.
                </Text>
              )}
            </View>
            <View className="py-2" />

            {city === "Ifrane" ? (
              <View>
                <PostCard
                  title={"Ifrane Lion"}
                  image={"https://fnh.ma//uploads/actualites/5e1d9c92ef1e1.png"}
                  link={"https://maps.app.goo.gl/qUeGfqRGvgYxJou79"}
                  description={
                    "It was carved by a German soldier during WWII, when Ifrane was used briefly as a prisoner-of-war camp, in exchange for the prisoner's freedom – or so the story goes – and commemorates the last wild Atlas lion, which was shot near here in the early 1920s."
                  }
                />
                <View className="py-2" />
                <PostCard
                  title={"Ifrane National Park"}
                  image={
                    "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/3f/28/9d.jpg"
                  }
                  link={"https://maps.app.goo.gl/JSVyu1P5VNhMFGpU9"}
                  description={
                    "Ifrane National Park is a national park located in the Middle Atlas mountain range, in Morocco. Its territory extends over the Western part of the Middle Atlas mountains and areas within the provinces of Ifrane."
                  }
                />
                <View className="py-2" />
              </View>
            ) : (
              <Text className="text-center">
                No attractions for {city} at the moment.
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(243 232 255)",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  label: {
    position: "absolute",
    backgroundColor: "rgb(243 232 255)",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  label2: {
    position: "absolute",
    backgroundColor: "rgb(243 232 255)",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    paddingHorizontal: 8,
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
