import { images } from "@/constant";
import { Image, ImageBackground, Text, View } from "react-native";

interface FeaturedBikeCardProps {
  discount: string;
  image: any;
}

export default function FeaturedBikeCard({ discount, image }: FeaturedBikeCardProps) {
  return (
    <View className="mb-6 w-full ">
      <ImageBackground
        source={images.hero}
        className="rounded-3xl overflow-hidden"
        style={{
          height: 260,  // Increased height
          width: '105%',  // Slightly wider
          marginLeft: '-5%'  // Center the overflow
        }}
        resizeMode="cover"
      >
        <View className="flex-1 relative">

          <View className="flex-1 items-center justify-center">
            <Image
              source={image}
              style={{
                width: 250,
                height: 175,
              }}
              className="mb-5"
              resizeMode="contain"
            />
          </View>


          <View className="absolute bottom-10 left-14">
            <Text
              className="text-white/60 font-poppins-bold text-[27px]"
            >
              {discount}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}