const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const config = {
  resolver: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),  // Correct alias for components
      '@/utils': path.resolve(__dirname, 'src/utils'),          // Correct alias for utils
      '@/types': path.resolve(__dirname, 'src/types'),          // Correct alias for utils
      '@/navigation': path.resolve(__dirname, 'src/config/navigation'),    
      '@/config': path.resolve(__dirname, 'src/config'),    
      '@/screen': path.resolve(__dirname, 'src/screen'),    
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);