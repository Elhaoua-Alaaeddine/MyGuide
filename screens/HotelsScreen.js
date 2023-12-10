import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import PostCardUsers from "../components/PostCardUsers";
import { Context } from "../config/Context";

const HotelsScreen = () => {
  const { city, setCity } = React.useContext(Context);
  const [isCatFocus, setIsCatFocus] = React.useState(false);
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
                    "Located in Ifrane, Hotel L'empreinte of Ifrane offers a range of accommodations, free Wi-Fi, a terrace overlooking the town and a restaurant where you can enjoy your meals."
                  }
                  ratings={"4.5"}
                />
                <View className="py-2" />
                <PostCardUsers
                  title={"Michlifen Resort & Golf"}
                  image={
                    "https://static.verychic.com/images/15906/fr/desktop/michlifenifranesuites_01.jpg"
                  }
                  link={"https://maps.app.goo.gl/M9uFNaaSkpuaLwbS8"}
                  description={
                    "In the Atlas mountains, this upscale, modern resort is 2 km from Le Lion d'Ifrane landmark and 8 km from the Parc National d'Ifrane."
                  }
                  ratings={"4"}
                />
                <View className="py-2" />
                <PostCardUsers
                  title={"Farah Inn"}
                  image={
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/75001020.jpg?k=07ac14030759e6bed2347efe88821fe07baca8de89b7b0dcc8545686c546d11c&o=&hp=1"
                  }
                  link={"https://maps.app.goo.gl/m6yD7FJJHTdRoxEd6"}
                  description={
                    "Set within Ifrane National Park, this laid-back resort is 5 km from Park La Prairie and 10 km from Ifrane Airport."
                  }
                  ratings={"5"}
                />
                <View className="py-2" />

              </View>
            ) : (
              <Text className="text-center">
                No hotels for {city} at the moment.
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default HotelsScreen