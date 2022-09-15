import { styles } from "./styles";
import { ColorValue, Image, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../theme";

interface DuoInfoProps {
    label: string;
    value: string;
    colorValue?: ColorValue;
}

export function DuoInfo({ label, value, colorValue = THEME.COLORS.TEXT}: DuoInfoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>

            <Text style={[styles.value, {color: colorValue}]}>
                {value}
            </Text>
        </View>
    );
}