<template>
    <div class='todo-list-edit'>
        <input type="text" v-model="title" />
        <button @click="handleSubmit">Submit</button>
    </div>
</template>

<script>

    import { ref, toRef } from "@vue/reactivity";
    import { onMounted } from "@vue/runtime-core";
    export default {
        name: 'TodoListContent',
        props: {
            todoList: {
                type: String
            }
        },
        setup(props) {
            const listData = toRef(props, 'todoList')
            const [title, handleSubmit] = useEditState()
            onMounted(() => {
            })
            return {
                listData,
                title,
                    handleSubmit
            }
        },

    };
    function useEditState() {
        const title = ref("")
        const submit = function () {
            console.log(title)
        }
        const clear = function () {
            title.value = ""
        }
        return [title, submit, clear]
    }
</script>
<style>
    .text-class {
        color: #409EFF;
    }
</style>
