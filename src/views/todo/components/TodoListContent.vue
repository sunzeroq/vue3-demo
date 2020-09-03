<template>
    <div class='todo-list-content'>
        <div
                v-for="(item, index) in listData"
                :key="item.uuid"
        >
            <span>{{ index }}</span>
            <span>{{ item.title }}</span>
            <span>{{ item.content }}</span>
        </div>
    </div>
</template>

<script>

    import { toRef } from "@vue/reactivity";
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
            console.log(listData)
            onMounted(() => {
            })

            return {
                listData,
            }
        },

    };
</script>
<style>
    .text-class {
        color: #409EFF;
    }
</style>
