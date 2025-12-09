import { Text, View } from "react-native";

export const ListItem = ({ item }: { item: string }) => {
    return (
        <View>
            <Text>{item}</Text>
        </View>
    );
};  