const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const { withNativeWind } = require("nativewind/metro");

// const { withNativeWind } = require("nativewind/metro");


const config = {
  resolver: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),  // Correct alias for components
      '@/utils': path.resolve(__dirname, 'src/utils'),          // Correct alias for utils
      '@/types': path.resolve(__dirname, 'src/types'),          // Correct alias for utils
      '@/navigation': path.resolve(__dirname, 'src/config/navigation'),    
      '@/config': path.resolve(__dirname, 'src/config'),    
      '@/screen': path.resolve(__dirname, 'src/screen'),    
      '@/assets': path.resolve(__dirname, 'src/assets'),    
      '@/images': path.resolve(__dirname, 'src/assets/images'),
    },
  },
};

const merge = mergeConfig(getDefaultConfig(__dirname), config); // this is Import alias
//{ input: './global.css' }
const nativeWindConfig = withNativeWind(merge,{ input: "./global.css" }); // This is Native wind config


module.exports = wrapWithReanimatedMetroConfig(nativeWindConfig) // this is Reanimated configuration