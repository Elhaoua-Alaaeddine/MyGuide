import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import countrydata from "./../config/countrydata.json";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../config/firebase";

const EditProfile = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState("Morocco");

  var res = [];
  for (var i in countrydata)
    res.push({
      id: countrydata[i].country_id,
      name: countrydata[i].country_name,
    });

  const [showCountry, setShowCountry] = React.useState(false);
  const toggleCountry = () => {
    setShowCountry(!showCountry);
  };

  React.useEffect(() => {
    console.log(country);
  }, [country]);

  React.useEffect(() => {
    setName(
      auth.currentUser.displayName.charAt(0).toUpperCase() +
        auth.currentUser.displayName.slice(1)
    );
    setEmail(auth.currentUser.email);
  }, []);
  const renderLabel = () => {
    return <Text style={[styles.label, { color: "gray" }]}>Username</Text>;
  };
  const renderLabel2 = () => {
    return <Text style={[styles.label2, { color: "gray" }]}>Email</Text>;
  };
  return (
    <SafeAreaView className="flex-1 bg-purple-100">
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
      </View>
      <View className="flex-1">
        <View>
          {renderLabel()}
          <TextInput
            className="border border-gray-400 rounded-lg mx-4 pr-3 bg-purple-100"
            editable
            maxLength={20}
            placeholder={name}
            onChangeText={(text) => {
              setName(text);
            }}
          />
        </View>
        <View className="mt-3">
          {renderLabel2()}
          <TextInput
            className="border border-gray-400 rounded-lg mx-4 mt-2 pr-3 bg-purple-100"
            editable
            maxLength={40}
            placeholder={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </View>
        <View>
          
            <SearchableDropdown
            value={country}
              onTextChange={(text) => console.log(text)}
              onItemSelect={(item) => {
                setCountry(item.name);
                toggleCountry();
              }}
              containerStyle={{ padding: 5 }}
              textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: "#ccc",
                backgroundColor: "#FAF7F6",
              }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: "#FAF9F8",
                borderColor: "#bbb",
                borderWidth: 1,
              }}
              itemTextStyle={{
                color: "#222",
              }}
              itemsContainerStyle={{
                maxHeight: "60%",
              }}
              items={res}
              defaultIndex={2}
              placeholder="Enter Country Name"
              resetValue={false}
              underlineColorAndroid="transparent"
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    backgroundColor: "rgb(243 232 255)",
    left: 22,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  label2: {
    position: "absolute",
    backgroundColor: "rgb(243 232 255)",
    left: 22,
    top: 2,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
});
