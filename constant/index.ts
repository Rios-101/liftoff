import bg from "@/assets/images/BG.png";
import bg2 from "@/assets/images/BG2.png";
import Bicycle from "@/assets/images/Bicycle.png";
import Bicycle1 from "@/assets/images/bicycle1.png";
import Bicycle2 from "@/assets/images/bicycle2.png";
import hero from "@/assets/images/hero.png";
import hero2 from "@/assets/images/hero3.png";
import icon1 from "@/assets/images/icon-1.png";
import icon2 from "@/assets/images/icon-2.png";
import icon3 from "@/assets/images/icon-3.png";
import iconBike from "@/assets/images/icon-bike.png";
import nav from "@/assets/images/nav.png";

export const images = {
    bg,
    Bicycle,
    hero,
    hero2,
    nav,
    iconBike,
    icon1,
    icon2,
    icon3,
    bg2,
    Bicycle1,
    Bicycle2
}


export const bikeProducts = [
    {
        id: 1,
        name: "Road Bike",
        subtitle: "PEUGEOT - LR01",
        price: "$1,999.99",
        discount: "30% Off",
        image: images.Bicycle1,
        color: "#3B82F6",
        rotation: -3,
    },
    {
        id: 2,
        name: "Mountain Bike",
        subtitle: "SMITH - Trade",
        price: "$2,499.99",
        discount: "30% Off",
        image: images.Bicycle2,
        color: "#EF4444",
        rotation: 2,
    },
    {
        id: 3,
        name: "E-Bike",
        subtitle: "TREK - E-Power",
        price: "$3,299.99",
        discount: "25% Off",
        image: images.Bicycle,
        color: "#10B981",
        rotation: -1,
    },
    {
        id: 4,
        name: "BMX Bike",
        subtitle: "MONGOOSE - Stunt",
        price: "$899.99",
        discount: "20% Off",
        image: images.Bicycle,
        color: "#F59E0B",
        rotation: 4,
    },
    {
        id: 5,
        name: "Hybrid Bike",
        subtitle: "SPECIALIZED - City",
        price: "$1,599.99",
        discount: "15% Off",
        image: images.Bicycle,
        color: "#8B5CF6",
        rotation: -2,
    },
    {
        id: 6,
        name: "Gravel Bike",
        subtitle: "CANNONDALE - Adventure",
        price: "$2,199.99",
        discount: "30% Off",
        image: images.Bicycle,
        color: "#06B6D4",
        rotation: 3,
    },
];

export const filterOptions = [
    { label: "All", text: "All", isActive: true },
    { label: "bicycle", image: images.iconBike, isActive: false },
    { label: "location", image: images.icon1, isActive: false },
    { label: "mountain", image: images.icon2, isActive: false },
    { label: "Road", image: images.icon3, isActive: false },
];