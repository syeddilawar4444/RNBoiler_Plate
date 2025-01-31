const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const config = {
  resolver: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),  // Correct alias for components
      '@/utils': path.resolve(__dirname, 'src/utils'),          // Correct alias for utils
      '@/types': path.resolve(__dirname, 'src/types'),          // Correct alias for utils
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);