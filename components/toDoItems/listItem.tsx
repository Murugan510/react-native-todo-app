import Checkbox from 'expo-checkbox';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ListItem = ({ item, onToggle }: { item: { id: string, text: string, completed: boolean }, onToggle: (id: string) => void }) => {
    return (
        <View style={styles.container}>
            <Checkbox
                value={item.completed}
                onValueChange={() => onToggle(item.id)}
                color={item.completed ? '#4630EB' : undefined}
                style={styles.checkbox}
            />
            <Text style={[styles.text, item.completed && styles.completedText]}>{item.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
    },
    checkbox: {
        marginRight: 10,
    },
    text: {
        fontSize: 18,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: 'gray',
    }
});