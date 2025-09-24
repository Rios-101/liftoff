# Liftoff Project - Claude Tasks

**Working Directory**: `/c/Users/RIOS/Desktop/Richard/Liftoff/liftoff`

## Project Overview
React Expo app called "Liftoff" - building a bike marketplace interface based on Figma design with slanted/perspective card effects.

## Current Status
- Basic Expo project created with Expo Router
- NativeWind and TailwindCSS packages added to package.json
- Node_modules deleted (needs yarn install)

## Todo List

### 1. Setup Tasks
- [ ] Create `tailwind.config.js` with proper NativeWind preset configuration
- [ ] Configure Metro bundler for NativeWind CSS processing
- [ ] Set up TypeScript types for NativeWind className prop

### 2. Implementation Tasks
- [ ] Implement bike marketplace design from Figma in `app/index.tsx`
- [ ] Create header with 'Choose Your Bike' title and blue search icon
- [ ] Implement dark blue gradient background
- [ ] Build horizontal filter chips (All, bike icon, location, mountain, etc.)
- [ ] Create 2-column product grid with slanted/perspective card effects
- [ ] Design product cards with bike images, names, prices, and heart icons
- [ ] Add '30% Off' discount badges to cards
- [ ] **Implement the distinctive slanted/tilted perspective view for all cards** (KEY FEATURE)
- [ ] Test the app on mobile to ensure design matches Figma mockup

## Key Design Features from Figma
- **Dark theme**: Deep blue/navy gradient background
- **Slanted cards**: All product cards have a 3D tilted/perspective effect
- **2-column grid**: Product cards arranged in 2 columns
- **Filter chips**: Horizontal row of pill-shaped filter buttons
- **Product elements**: Bike images, names, prices, heart icons, discount badges

## Dependencies Added
```json
"dependencies": {
  "nativewind": "^4.2.1"
},
"devDependencies": {
  "tailwindcss": "^4.1.13"
}
```

## Next Steps
1. Start with yarn install
2. Set up NativeWind configuration
3. Begin implementing the Figma design with focus on the slanted card effects