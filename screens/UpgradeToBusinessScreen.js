import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const UpgradeToBusinessScreen = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [status, setStatus] = React.useState("pending");

  const handlePaypal = async () => {
    setShowModal(true);
  };
  const handleresponse = (data) => {
    if (data.title === "success") {
      setShowModal(false);
      setStatus("completed");
    } else if (data.title === "cancel") {
      setShowModal(false);
      setStatus("canceled");
    } else {
      return;
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center">
      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <WebView
          source={{ uri: "paypal server IP" }}
          onNavigationStateChange={(data) => handleresponse(data)}
          injectedJavaScript={`document.f1.submit()`}
        />
      </Modal>
      <View className="items-center mb-5">
        <Text>UpgradeToBusinessScreen</Text>
      </View>
      <View className="items-center justify-center ">
        <TouchableOpacity
          onPress={handlePaypal}
          className=" bg-purple-500 py-2 px-3 rounded-md shadow-md"
        >
          <Text>Upgrade to Business</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UpgradeToBusinessScreen;
