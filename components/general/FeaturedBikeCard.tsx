import { images } from "@/constant";
import { Image, ImageBackground, Text, View } from "react-native";

interface FeaturedBikeCardProps {
  discount: string;
  image: any;
}

export default function FeaturedBikeCard({ discount, image }: FeaturedBikeCardProps) {
  return (
    <View className="mb-6 w-full "> {/* Added px-4 for screen padding */}
      <ImageBackground
        source={images.hero2}
        className="h-[240px] w-full rounded-3xl overflow-hidden" // Removed max-w-[350px]
        resizeMode="cover"
      >
        <View className="flex-1 relative">
          {/* Bike Image - centered and larger */}
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

          {/* Discount Text - bottom left */}
          <View className="absolute bottom-3 left-4">
            <Text
              className="text-white/60 font-poppins-bold text-[26px]"
            >
              {discount}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}