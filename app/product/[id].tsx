
import ProductDetails from "@/components/product/ProductDetails";
import ProductHeader from "@/components/product/ProductHeader";
import ProductImageCarousel from "@/components/product/ProductImageCarousel";
import { bikeProducts, images } from "@/constant";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ProductDetail() {
  const { id } = useLocalSearchParams();

  // Find the product by id
  const product = bikeProducts.find(p => p.id === parseInt(id as string));

  if (!product) {
    return (
      <SafeAreaView className="flex-1 bg-[#1B2430]">
        <Text className="text-white text-center mt-10">Product not found</Text>
      </SafeAreaView>
    );
  }

  const handleBack = () => {
    router.back();
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', product.name);
    router.push({
      pathname: '/(tabs)/cart',
      params: { fromProduct: product.id }
    });
  };

  return (
    <View className="flex-1 bg-[#1B2430]">
      <StatusBar style="light" />

      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

          <ImageBackground
            source={images.bg}
            className="flex-1"
            resizeMode="cover"
            imageStyle={{ transform: [{ translateX: 20 }] }}
          >

            {/* Header */}
            <ProductHeader
              title={product.subtitle}
              onBackPress={handleBack}
            />


            {/* Bike Image Carousel */}
            <ProductImageCarousel productImage={product.image} />



          </ImageBackground>

          <ProductDetails
            productName={product.name}
            productPrice={product.price}
            onAddToCart={handleAddToCart}
          />


        </ScrollView>

      </SafeAreaView>

    </View>
  );
}

