import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GameParams } from "../../@types/navigation";
import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo";
import { TouchableOpacity, View } from "react-native";
import { GameController } from 'phosphor-react-native';

export interface DuoCardProps {
    id: string;
    hourEnd: string;
    hourStart: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props {
    data: DuoCardProps
    onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
    const route = useRoute();
    const game = route.params as GameParams;
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <DuoInfo 
                label="Nome" 
                value={data.name} 
            />

            <DuoInfo 
                label="Tempo de jogo" 
                value={`${data.yearsPlaying} anos` } 
            />  

            <DuoInfo 
                label="Disponibilidade" 
                value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd} ` } 
            />  

            <DuoInfo 
                label="Chama de aúdio" 
                value={data.useVoiceChannel? "Sim": "Não"} 
                colorValue={data.useVoiceChannel? THEME.COLORS.SUCCESS :  THEME.COLORS.ALERT } 
            />

            <TouchableOpacity
                style={styles.button}
                onPress={onConnect}
            >
                <GameController
                    color={THEME.COLORS.TEXT}
                    size={20}
                />

            </TouchableOpacity>
        </View>
    );
}