# 🚴‍♂️ Liftoff - Premium Bike Marketplace

A stunning React Native mobile application built with Expo that showcases a premium bike marketplace with slanted card designs, smooth animations, and an intuitive shopping experience.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Quick Start

**Get the app running in 3 simple steps:**

```bash
# 1. Clone and navigate to the project
git clone https://github.com/your-username/liftoff.git
cd liftoff

# 2. Install dependencies
yarn install

# 3. Start the development server
yarn start
or
npx expo start
```

Then choose your platform:
- **📱 iOS**: Press `i` or scan QR code with Camera app
- **🤖 Android**: Press `a` or scan QR code with Expo Go app
- **🌐 Web**: Press `w` to open in browser

> **Prerequisites**: Node.js 18+ and Expo CLI (`npm install -g @expo/cli`)

## 🎯 Key Features

### 🎨 **Premium Dark Theme UI**
- Sophisticated dark theme with gradient backgrounds
- **Slanted/Perspective Card Design** - Distinctive 3D tilted product cards
- Neumorphic design elements with custom shadows and depth
- Custom SVG bottom navigation with slanted design

### 🛒 **Complete Shopping Experience**
- **Product Catalog** - Browse 6 different bike categories
- **Product Details** - Detailed view with image carousel and specifications
- **Interactive Cart** - Full shopping cart with quantity management
- **Filter System** - Smart filtering with visual chips
- **Swipe-to-Checkout** - Innovative swipe button for purchase completion

### 🎭 **Advanced Animations & Interactions**
- Custom image carousel with dot indicators
- Smooth tab transitions between product details
- Gradient-filled heart animations for favorites
- Haptic feedback integration for touch interactions
- Spring animations and gesture-based controls

### 📱 **Modern Mobile Navigation**
- Custom bottom tab bar with gradient indicators
- Stack navigation between screens
- Dynamic routing for product details (`/product/[id]`)
- Seamless navigation flow with context preservation

## 🏗️ Architecture

### **Project Structure**
```
liftoff/
├── app/                          # Expo Router file-based routing
│   ├── (tabs)/                   # Tab navigation screens
│   │   ├── _layout.tsx          # Custom bottom tab bar with SVG design
│   │   ├── index.tsx            # Home screen with product grid
│   │   ├── cart.tsx             # Shopping cart with swipe checkout
│   │   ├── map.tsx              # Map/location screen
│   │   ├── person.tsx           # Profile screen
│   │   └── file.tsx             # Additional screen
│   ├── product/[id].tsx         # Dynamic product detail pages
│   ├── _layout.tsx              # Root layout with font loading
│   └── global.css               # TailwindCSS imports
├── components/                   # Reusable UI components
│   ├── card/
│   │   └── BikeCard.tsx         # Product cards with slanted design
│   ├── cart/
│   │   └── CartItem.tsx         # Individual cart item component
│   ├── general/                 # Shared UI components
│   │   ├── GradientButton.tsx   # Customizable gradient buttons
│   │   ├── SwipeButton.tsx      # Animated swipe-to-action button
│   │   ├── Header.tsx           # Screen headers with search
│   │   ├── SearchBar.tsx        # Search input component
│   │   ├── FilterChips.tsx      # Filter chip container
│   │   ├── FilterChip.tsx       # Individual filter chip
│   │   ├── FeaturedSection.tsx  # Featured product section
│   │   ├── FeaturedBikeCard.tsx # Large featured product card
│   │   └── ProductGrid.tsx      # 2-column product grid layout
│   └── product/                 # Product-specific components
│       ├── ProductHeader.tsx    # Product page header
│       ├── ProductImageCarousel.tsx # Image carousel with dots
│       ├── ProductDetails.tsx   # Tabbed product information
│       └── NeumorphicTabButton.tsx # 3D tab buttons
├── assets/images/               # Image assets and icons
├── constant/index.ts            # App constants and data
├── tailwind.config.js           # TailwindCSS configuration
└── package.json                 # Dependencies and scripts
```

## 🔧 Technology Stack

### **Core Framework**
- **[Expo SDK 54](https://expo.dev/)** - Complete development platform for React Native
- **[React Native 0.81.4](https://reactnative.dev/)** - Mobile app development framework
- **[React 19.1.0](https://react.dev/)** - Latest React with improved performance
- **[TypeScript 5.9.2](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Navigation & Routing**
- **[Expo Router 6.0.8](https://docs.expo.dev/router/introduction/)** - File-based routing system
- **[@react-navigation/native 7.1.8](https://reactnavigation.org/)** - Navigation library
- **[@react-navigation/bottom-tabs 7.4.0](https://reactnavigation.org/docs/bottom-tab-navigator)** - Tab navigation

### **UI & Styling**
- **[NativeWind 4.2.1](https://www.nativewind.dev/)** - TailwindCSS for React Native
- **[TailwindCSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Expo Linear Gradient 15.0.7](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** - Gradient backgrounds
- **[React Native SVG 15.12.1](https://github.com/software-mansion/react-native-svg)** - SVG support for custom shapes

### **Typography & Icons**
- **[@expo-google-fonts/poppins 0.4.1](https://docs.expo.dev/guides/using-custom-fonts/)** - Google Fonts integration
- **[@expo/vector-icons 15.0.2](https://docs.expo.dev/guides/icons/)** - Icon library (Ionicons)
- **[Lucide React Native 0.544.0](https://lucide.dev/)** - Beautiful SVG icons

### **Animations & Gestures**
- **[React Native Reanimated 3.17.4](https://docs.swmansion.com/react-native-reanimated/)** - Advanced animations
- **[React Native Gesture Handler 2.28.0](https://docs.swmansion.com/react-native-gesture-handler/)** - Gesture recognition
- **[Expo Haptics 15.0.7](https://docs.expo.dev/versions/latest/sdk/haptics/)** - Haptic feedback

### **Visual Effects**
- **[@react-native-masked-view/masked-view 0.3.2](https://github.com/react-native-masked-view/masked-view)** - Gradient text effects
- **[Expo Blur 15.0.7](https://docs.expo.dev/versions/latest/sdk/blur-view/)** - Blur effects
- **[Expo Image 3.0.8](https://docs.expo.dev/versions/latest/sdk/image/)** - Optimized image loading

### **Development Tools**
- **[ESLint 9.25.0](https://eslint.org/)** - Code linting with Expo config
- **[Prettier with TailwindCSS Plugin 0.5.11](https://prettier.io/)** - Code formatting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Expo CLI installed globally: `npm install -g @expo/cli`
- iOS Simulator (Mac) or Android Studio (Windows/Mac/Linux)
- Expo Go app on your mobile device (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/liftoff.git
   cd liftoff
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   yarn start
   # or
   npm start
   ```

4. **Run on your preferred platform**
   ```bash
   # iOS Simulator
   yarn ios

   # Android Emulator
   yarn android

   # Web browser
   yarn web
   ```

### Development Scripts
```bash
yarn start          # Start Expo development server
yarn android        # Run on Android emulator/device
yarn ios            # Run on iOS simulator/device
yarn web            # Run on web browser
yarn lint           # Run ESLint code linting
yarn reset-project  # Reset project to clean state
```

## 📱 App Screens & Features

### **🏠 Home Screen (`app/(tabs)/index.tsx`)**
- **Header** with "Choose Your Bike" title and search functionality
- **Featured Section** with large product card and filter chips
- **Product Grid** displaying bikes in a 2-column layout with slanted cards
- **Background** with gradient overlay and subtle image effects

### **🛍️ Product Detail (`app/product/[id].tsx`)**
- **Dynamic routing** for individual products
- **Image Carousel** with horizontal scrolling and dot indicators
- **Tabbed Interface** switching between Description and Specifications
- **Purchase Section** with price display and Add to Cart functionality

### **🛒 Shopping Cart (`app/(tabs)/cart.tsx`)**
- **Cart Items** with quantity increment/decrement controls
- **Promo Code** input with apply functionality
- **Order Summary** showing subtotal, delivery fee, discount, and total
- **Swipe-to-Checkout** button with haptic feedback and animations

### **📍 Additional Screens**
- **Map Screen** (`app/(tabs)/map.tsx`) - Location-based features
- **Profile Screen** (`app/(tabs)/person.tsx`) - User profile management
- **File Screen** (`app/(tabs)/file.tsx`) - Additional functionality

## 🎨 Design System

### **Color Palette**
```css
/* Primary Colors */
--bg-primary: #242C3B      /* Main background */
--bg-secondary: #1B2430    /* Card backgrounds */
--gradient-start: #34C8E8  /* Gradient start (cyan) */
--gradient-end: #4E4AF2    /* Gradient end (blue) */

/* Text Colors */
--text-primary: #FFFFFF    /* Primary text */
--text-secondary: rgba(255,255,255,0.6)  /* Secondary text */
--text-muted: rgba(255,255,255,0.4)      /* Muted text */
```

### **Typography (Poppins Font Family)**
- **Poppins 400 Regular** - Body text
- **Poppins 500 Medium** - Secondary headings
- **Poppins 600 SemiBold** - Important text
- **Poppins 700 Bold** - Primary headings
- **Poppins 800 ExtraBold** - Hero text

### **Component Styling**
- **Border Radius**: Consistent 16px rounded corners
- **Shadows**: Depth-based shadow system for elevation
- **Gradients**: Blue-to-cyan gradients for interactive elements
- **Slanted Design**: Alternating card heights and rotations for dynamic layouts

## 🔄 State Management

The app uses React's built-in state management with:
- **useState** for component-level state (cart items, filters, likes)
- **useLocalSearchParams** for navigation parameter handling
- **Context-free architecture** - state managed at component level
- **Props drilling** for parent-child communication

## 📦 Data Structure

### **Product Schema**
```typescript
interface Product {
  id: number;           // Unique identifier
  name: string;         // Product category (Road Bike, Mountain Bike, etc.)
  subtitle: string;     // Brand and model (PEUGEOT - LR01)
  price: string;        // Formatted price string ($1,999.99)
  discount: string;     // Discount percentage (30% Off)
  image: any;           // Product image asset
  color: string;        // Accent color for theming
  rotation: number;     // Card rotation angle (-3 to 4 degrees)
}
```

### **Filter Options**
```typescript
interface FilterOption {
  label: string;        // Filter identifier
  text?: string;        // Display text (for "All" filter)
  image?: any;          // Icon image (for visual filters)
  isActive: boolean;    // Selection state
}
```

## 🎯 Performance Optimizations

### **Image Handling**
- **Expo Image** for optimized loading and caching
- **Image preloading** for smoother carousel transitions
- **Proper resize modes** (contain/cover/stretch) for different use cases

### **Animation Performance**
- **useNativeDriver: true** for transform animations
- **React Native Reanimated** for complex gesture-based animations
- **Throttled scroll events** in image carousel
- **Spring animations** for natural motion

### **Memory Management**
- **Cleanup listeners** in animation components
- **Conditional rendering** for complex components
- **Optimized re-renders** with proper key props

## 🚨 Known Issues & TODOs

### **Pending Features**
- [ ] Search functionality implementation (`handleSearch` function)
- [ ] Promo code validation logic
- [ ] Checkout flow completion
- [ ] User authentication system
- [ ] Persistent cart state
- [ ] Product filtering logic
- [ ] Push notifications

### **Potential Improvements**
- [ ] Add loading states for navigation
- [ ] Implement error boundaries
- [ ] Add pull-to-refresh on home screen
- [ ] Optimize bundle size with code splitting
- [ ] Add unit and integration tests
- [ ] Implement accessibility features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Expo Team** for the excellent development platform
- **NativeWind** for bringing TailwindCSS to React Native
- **React Navigation** for smooth navigation experience
- **Figma Design** inspiration for the slanted card aesthetic

---

**Built with ❤️ using React Native & Expo**

For questions or support, please open an issue in the repository.
