import React from "react";
import {
  Dimensions,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StarRating from 'react-native-star-rating-widget';
import {
  default as MaterialCommunityIcon,
} from "react-native-vector-icons/MaterialCommunityIcons";

const PostCardUsers = ({ title, image, link, description, ratings }) => {
  const dimensions = Dimensions.get("window");
  const width = dimensions.width * 0.95;
  const [rating, setRatings] = React.useState(0);

  const onStarRatingPress = (rating) => {
    setRatings(rating)
  }
  return (
    <View className="items-center">
      <View className="border rounded-lg"  style={{width: width}}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${link}`);
          }}
        >
          <View className="items-center justify-center ">
            <Image
              className=""
              source={{ uri: `${image}` }}
              style={{ borderRadius: 8, width: width, height: 200 }}
            />
          </View>
        </TouchableOpacity>

        <View className="p-4">
          <View className="flex-row justify-between">
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="font-bold text-lg">{ratings}/5
            <MaterialCommunityIcon
                name="star"
                size={20}
              />
            </Text>
          </View>
          <Text className="text-gray-500">{description}</Text>
          <View className="items-center">
          <StarRating rating={rating} onChange={onStarRatingPress} />
          </View>
          <View className="flex-row items-center justify-center pt-3">
            <TouchableOpacity className="border-r pr-10">
              <Text>Comments</Text>
            </TouchableOpacity>
            <TouchableOpacity className="pl-10">
              <Text>Report</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCardUsers;
