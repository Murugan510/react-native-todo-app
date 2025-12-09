import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { TextInput, View } from "react-native";
import { List } from "./list";

export const Header = () => {

    //state management
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);

    const handleAddTask = () => {
        console.log('Task added:', task);
        setTasks([...tasks, task]);
        setTask('');
    };

    return (
        <>
            <View>
                <TextInput placeholder="Add a new todo" value={task} onChangeText={setTask} style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10 }} />
                <Button onPress={handleAddTask}>Add Task</Button>
            </View>
            <List items={tasks} />
        </>
    );
};