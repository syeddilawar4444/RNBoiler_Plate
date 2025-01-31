module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/components': './src/components',  // Correct alias for components
          '@/utils': './src/utils',          // Correct alias for utils
          '@/types': './src/types',   
        },
      },
    ],
  ],
};