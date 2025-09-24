import BikeCard from "@/components/card/BikeCard";
import { View } from "react-native";

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  discount: string;
  image: any;
  color: string;
  rotation: number;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <View className="flex-row flex-wrap justify-between">
      {products.map((product, index) => (
        <BikeCard
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </View>
  );
}