import { ROUTES } from "@/utils/index";
import { NavigationProp } from "@react-navigation/native";
type RootStackProps = Record<(typeof ROUTES)[keyof typeof ROUTES], undefined>;
type NavigationProps = NavigationProp<RootStackProps>

export type {RootStackProps,NavigationProps}