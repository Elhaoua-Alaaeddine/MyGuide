import { useNavigation } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  { label: "Bug", value: "1" },
  { label: "Abuse", value: "2" },
  { label: "Other", value: "Other" },
];

const ReportBugScreen = () => {
  const navigation = useNavigation();
  const [description, setDescription] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const [isCatFocus, setIsCatFocus] = React.useState(false);
  const [isDesFocus, setIsDesFocus] = React.useState(false);

  const renderLabel = () => {
    return <Text style={[styles.label, { color: "gray" }]}>Category</Text>;
  };
  const renderLabel2 = () => {
    return <Text style={[styles.label2, { color: "gray" }]}>Description</Text>;
  };
  const handleSubmit = () => {
    console.log("description: ", description);
    console.log("category: ", category);
    alert("Your report has been sent successfully")
    navigation.navigate("ProfileScreen");
  }


  return (
    <ScrollView className="bg-purple-100">
    <KeyboardAvoidingView
    className="flex-1 form space-y-2"
    behavior={Platform.OS === "ios" ? "padding" : "position"}>
    <SafeAreaView className="flex-1">
      <View className="items-center flex-row justify-center px-3 my-5">
        <Text className="text-base text-center">
          If you have encountered a bug or a problem while using our application
          please fill this form
        </Text>
      </View>
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isCatFocus && { borderColor: "blue" }]}
          placeholder="Select Category"
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
          value={category}
          onFocus={() => setIsCatFocus(true)}
          onBlur={() => setIsCatFocus(false)}
          onChange={(item) => {
            setCategory(item.value);
            setIsCatFocus(false);
          }}
        />
      </View>
      <View >
      {renderLabel2()}
        <TextInput
          className="border border-gray-400 rounded-lg m-4  align-top pl-4 pr-3 py-2"
          editable
          multiline
          numberOfLines={4}
          placeholder="Please describe the problem you have encountered"
          maxLength={500}
          onChangeText={(text) => {
            setDescription(text);
            setIsDesFocus(false);
          }}
          value={description}
        />
      </View>
      <View className="items-center ">
        <TouchableOpacity onPress={handleSubmit} className="border-2 px-6 py-2 rounded-md">
          <Text className="text-xl font-bold">
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ReportBugScreen;

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
