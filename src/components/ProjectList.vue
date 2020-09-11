<template>
    <section class="projects">
        <router-link class="project" v-for="item in projectsList" :key="item.code" :to="{name: 'ProjectsDetail', params: {code: item.code}}" :style="item.styleBlock">
            <img class="project__photo" :src="path(item.src)" width="360px" :alt="'Скриншот проекта ' + item.name">
            <p class="project__desc">
                {{ item.description }}
            </p>
        </router-link>
    </section>
</template>

<script>
    export default {
        name: 'ProjectList',
        props: ['projectsList'],
        methods: {
            path(image) {
                return require('../assets/images/' + image)
            }
        }
    }
</script>