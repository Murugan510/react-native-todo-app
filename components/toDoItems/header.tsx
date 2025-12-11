import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { TextInput, View } from "react-native";
import { List } from "./list";

export const Header = () => {

    //state management
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<{ id: string, text: string, completed: boolean }[]>([]);

    const handleAddTask = () => {
        if (!task.trim()) return;
        console.log('Task added:', task);
        setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
        setTask('');
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
        <>
            <View>
                <TextInput
                    placeholder="Add a new todo"
                    value={task}
                    onChangeText={setTask}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10 }}
                />
                <Button onPress={handleAddTask}>Add Task</Button>
            </View>
            <List items={tasks} onToggle={toggleTask} />
        </>
    );
};