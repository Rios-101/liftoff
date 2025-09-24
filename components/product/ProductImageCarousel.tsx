import { images } from "@/constant";
import { useState } from "react";
import { Dimensions, Image, ScrollView, View } from "react-native";

interface ProductImageCarouselProps {
  productImage: any;
}

const { width } = Dimensions.get('window');

export default function ProductImageCarousel({ productImage }: ProductImageCarouselProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imageArray = [productImage, images.Bicycle1, images.Bicycle2];

  return (
    <View style={{ height: 300 }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setActiveImageIndex(index);
        }}
        scrollEventThrottle={16}
      >
        {imageArray.map((img, idx) => (
          <View
            key={idx}
            style={{
              width, // full screen width for paging
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={img}
              style={{
                width: width * 0.85,
                height: 250,
                marginBottom: width * 0.1
              }}
              resizeMode="contain"
            />
          </View>
        ))}
      </ScrollView>

      {/* Image Indicators */}
      <View
        style={{
          position: "absolute",
          bottom: 30,
          left: 0,
          right: 0,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {imageArray.map((_, idx) => (
          <View
            key={idx}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 4,
              backgroundColor:
                activeImageIndex === idx ? "white" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </View>
    </View>
  );
}