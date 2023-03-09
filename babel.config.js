module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      '@babel/plugin-transform-react-jsx-source',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': ['./src/Components/'],
            '@constants': ['./src/Constants/'],
            '@helpers': ['./src/Helpers/'],
            '@navigators': ['./src/Navigators/'],
            '@store': ['./src/Store/'],
            '@screens': ['./src/Screens/'],
            '@services': ['./src/Services/'],
            '@models': ['./src/Models/'],
            '@styles': ['./src/Styles/'],
          },
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
        },
      ],
    ],
  }
}
