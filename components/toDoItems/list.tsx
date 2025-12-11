import { View } from "react-native";
import { ListItem } from "./listItem";

export const List = ({ items, onToggle }: { items: { id: string, text: string, completed: boolean }[], onToggle: (id: string) => void }) => {
    return (
        <View>
            {items.map((item) => (
                <ListItem key={item.id} item={item} onToggle={onToggle} />
            ))}
        </View>
    );
};