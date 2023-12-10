import React from "react";
import {
  Dimensions,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PostCard = ({title , image , link , description}) => {
  const dimensions = Dimensions.get("window");
  const width = dimensions.width * 0.95;
  return (
    <View className="items-center">
      <View className="border rounded-lg" style={{width: width}}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              `${link}`
            );
          }}
        >
          <View className="items-center justify-center ">
          <Image
            className=""
            source={{uri : `${image}`} }
            style={{ borderRadius: 8, width: width, height: 200 }}
          />
          </View>
        </TouchableOpacity>

          <View className="p-4">
            <View className="flex-row justify-between">
              <Text className="font-bold text-lg">{title}</Text>
            </View>
            <Text className="text-gray-500">
              {description}
            </Text>
          </View>
      </View>
    </View>
  );
};

export default PostCard;
