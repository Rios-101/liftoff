import FeaturedSection from "@/components/general/FeaturedSection";
import Header from "@/components/general/Header";
import ProductGrid from "@/components/general/ProductGrid";
import { bikeProducts, filterOptions, images } from "@/constant";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // TODO: Implement search functionality
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#242C3B' }} >
      <ImageBackground
        source={images.bg}
        className="flex-1"
        resizeMode="cover"
        imageStyle={{ transform: [{ translateY: 50 }] }}
      >
        <StatusBar style="light" />
        <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
          {/* Header */}
          <Header
            title="Choose Your Bike"
            onSearch={handleSearch}
          />

          <FeaturedSection
            discount="30% Off"
            image={images.Bicycle}
            filterOptions={filterOptions}
            onFilterPress={(label) => {
              console.log('Pressed:', label);
            }}
          />


          {/* Product Grid */}
          <ProductGrid products={bikeProducts} />

          {/* Bottom Padding for Navigation */}
          <View style={{ height: 104 }} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
