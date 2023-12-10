import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import PostCardUsers from "../components/PostCardUsers";
import { Context } from "../config/Context";

const RestaurantsScreen = () => {
  const { city, setCity } = React.useContext(Context);
  const { isLoading, setIsLoading } = React.useContext(Context);

  return (
    <View className="flex-1  bg-purple-100">
      <ScrollView>
        <View className="py-3" />
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
            {city === "Ifrane" ? (
              <View>
                <PostCardUsers
                  title={"L'empreinte"}
                  image={
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/122826611.jpg?k=2723ec821676c7e8b6ec75f527df43ed6639260f32a4e693afb9d7c2dd7deb01&o=&hp=1"
                  }
                  link={"https://maps.app.goo.gl/6uvnN9ix4jHumV4QA"}
                  description={
                    "Restaurant serving Moroccan and international cuisine"
                  }
                  ratings={"4.5"}
                />
                <View className="py-2" />
                <PostCardUsers
                  title={"For You"}
                  image={
                    "https://youimg1.tripcdn.com/target/10010n000000er79rD7C8_C_551_310_R5.jpg"
                  }
                  link={"https://maps.app.goo.gl/6RKQfiSzq27bok2M8"}
                  description={
                    "Restaurant serving Moroccan and international cuisine"
                  }
                  ratings={"4"}
                />
                <View className="py-2" />
                <PostCardUsers
                  title={"Foodie"}
                  image={
                    "https://media-cdn.tripadvisor.com/media/photo-s/1d/c5/13/0f/nothing-like-a-house.jpg"
                  }
                  link={"https://maps.app.goo.gl/BDgmm3QHSR72bHNv9"}
                  description={
                    "Restaurant serving Moroccan and international cuisine"
                  }
                  ratings={"5"}
                />
                <View className="py-2" />

              </View>
            ) : (
              <Text className="text-center">
                No restaurants for {city} at the moment.
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default RestaurantsScreen;
