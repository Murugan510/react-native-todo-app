import { View } from "react-native";
import { ListItem } from "./listItem";

export const List = ({ items }: { items: string[] }) => {
    return (
        <View>
            {items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </View>
    );
};