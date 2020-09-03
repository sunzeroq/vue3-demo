<template>
    <div class='todo-list-container'>
        <div class="todo-list-title">
            <span>TodoList</span>
            <button @click="handleClick">Add</button>
        </div>
        <TodoListContent :todoList="todoList"></TodoListContent>
        <TodoListEdit></TodoListEdit>
    </div>
</template>

<script>
    import { ref, reactive } from 'vue'
    import { TodoListContent, TodoListEdit } from "./components";

    export default {
        name: 'home',
        components: { TodoListContent, TodoListEdit },
        setup() {
            const editState = ref(false)
            const todoList = ref([])
            const reactiveObject = reactive({
                a: 1
            })
            const handleClick = () => {
                editState.value = true
            }

            todoList.value = useDataInit()

            return {
                reactiveObject,
                editState,
                todoList,
                handleClick,
            }
        },
    };
    function useDataInit() {
        return [
            {
                uuid: 'asdsadas',
                title: 'Test Title',
                content: 'Test Content',
            }
        ]
    }
</script>
