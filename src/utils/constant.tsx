import { StyleSheet } from "react-native";

const FONT_SIZES = {
    micro: 8,
    xs: 9,
    //@type Thi is stypes 10
    sm: 10,
    smPlus: 11,
    md: 12,
    base: 14,
    mdPlus: 15,
    lg: 16,
    lgPlus: 17,
    xl: 18,
    '2xl': 20,
    '3xl': 22,
    '4xl': 24,
    '5xl': 26,
    '6xl': 28,
    '7xl': 30,
    '8xl': 32,
    '9xl': 34
  } as const; 

const COLORS = {
    BLACK_LIGHT: 'rgba(0, 0, 0, 0.1)',
    BLACK_MEDIUM: 'rgba(0, 0, 0, 0.4)',
    WHITE_TRANSPARENT: 'rgba(255, 255, 255, 0.7)',

    BLUE_DARK: 'rgba(18, 27, 61, 1)',
    BLUE_MEDIUM: 'rgba(63, 87, 174, 1)',
    BLUE: 'rgba(2, 63, 136, 1)',

    GREEN_DARK: 'rgba(58, 81, 22, 1)',
    GRAY_LIGHT: 'rgba(217, 217, 217, 1)',
    GRAY_MEDIUM: 'rgba(110, 110, 110, 1)',

    BLACK: 'rgba(19, 19, 19, 1)',
    GRAY_INPUT: 'rgba(235, 235, 235, 1)',
    SILVER_LIGHT: 'rgba(242, 242, 242, 1)',
    WHITE: 'rgba(255, 255, 255, 1)',
    WHITE_LIGHT: 'rgba(246, 246, 246, 1)',
    GRAY_PLACEHOLDER: 'rgba(153, 153, 153, 1)',

    YELLOW_LIGHT: 'rgba(248, 253, 232, 1)',
    YELLOW_EXTRA_LIGHT: 'rgba(238, 250, 205, 1)',

    SHADOW: 'drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.1))',

    BLUE_BRIGHT: 'rgba(0, 0, 255, 1)',
    GRAY_EXTRA_LIGHT: 'rgba(244, 245, 246, 1)',
    WHITE_OPACITY: 'rgba(255, 255, 255, 0.4)',
    WHITE_SURFACE: 'rgba(250, 250, 250, 1)',

    RED_ERROR: 'rgba(211, 47, 47, 1)',
    GRAY_DARK: 'rgba(52, 52, 52, 1)',
    PURPLE: 'rgba(128, 0, 128, 1)',
    RED: 'rgba(255, 0, 0, 1)',
    RED_WARNING: 'rgba(251, 52, 79, 1)',
    GREEN: 'rgba(0, 128, 0, 1)',
    YELLOW: 'rgba(255, 255, 0, 1)',
    ORANGE: 'rgba(255, 165, 0, 1)',
    PINK: 'rgba(255, 192, 203, 1)',
    CYAN: 'rgba(0, 255, 255, 1)',
    MAGENTA: 'rgba(255, 0, 255, 1)',
    LIME: 'rgba(0, 255, 0, 1)',
    TEAL: 'rgba(0, 128, 128, 1)',
    INDIGO: 'rgba(75, 0, 130, 1)',
    BROWN: 'rgba(165, 42, 42, 1)',
    SILVER: 'rgba(192, 192, 192, 1)',
    GOLD: 'rgba(255, 215, 0, 1)',
    MAROON: 'rgba(128, 0, 0, 1)',
    NAVY: 'rgba(0, 0, 128, 1)',
    OLIVE: 'rgba(128, 128, 0, 1)',
    GRAY: 'rgba(128, 128, 128, 1)',
    SKY_BLUE: 'rgba(135, 206, 235, 1)',
    ORANGE_LIGHT: 'rgba(255, 127, 80, 1)',
    PURPLE_LIGHT: 'rgba(230, 230, 250, 1)',
    TURQUOISE: 'rgba(64, 224, 208, 1)',
    RED_LIGHT: 'rgba(250, 128, 114, 1)',
    RED_DARK: 'rgba(220, 20, 60, 1)',
    GREEN_DARK_EXTRA: 'rgba(0, 100, 0, 1)',
    ORANGE_DARK: 'rgba(255, 140, 0, 1)',
    RED_EXTRA_DARK: 'rgba(139, 0, 0, 1)',
    VIOLET_DARK: 'rgba(148, 0, 211, 1)',
    RED_FIRE: 'rgba(178, 34, 34, 1)',
    GREEN_FOREST: 'rgba(34, 139, 34, 1)',
    GRAY_DARK_SLATE: 'rgba(47, 79, 79, 1)',
    RED_CORAL: 'rgba(240, 128, 128, 1)',
    GREEN_SEA: 'rgba(32, 178, 170, 1)',
    BLUE_MEDIUM_BRIGHT: 'rgba(0, 0, 205, 1)',
    PINK_MEDIUM: 'rgba(199, 21, 133, 1)',
    BLUE_NIGHT: 'rgba(25, 25, 112, 1)',
    BROWN_PERU: 'rgba(205, 133, 63, 1)',
    BROWN_ROSY: 'rgba(188, 143, 143, 1)',
    BROWN_SIENNA: 'rgba(160, 82, 45, 1)',
    GRAY_SLATE: 'rgba(133, 133, 133, 1)',
    BLUE_SLATE: 'rgba(106, 90, 205, 1)',
    RED_TOMATO: 'rgba(255, 99, 71, 1)',
    BLUE_STEEL: 'rgba(70, 130, 180, 1)',
} as const;


const FLEX = StyleSheet.create({
  item_center:{
    display:"flex",
    alignItems:"center"
  },
  center:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  justify_content:{
    display:"flex",
    justifyContent:"center",
  },
});

export {FONT_SIZES,COLORS,FLEX}