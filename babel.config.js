module.exports = {
  presets: ['module:@react-native/babel-preset','nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/components': './src/components',
          '@/utils': './src/utils',
          '@/types': './src/types',   
          '@/navigation': './src/config/navigation',   
          '@/config': './src/config',   
          '@/screen': './src/screen',   
          '@/assets': './src/assets',   
          '@/images': './src/assets/images',   
        },
      },
    ],
    // 'nativewind/babel',
    'react-native-reanimated/plugin'
  ],
};