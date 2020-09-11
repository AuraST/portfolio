<template>
    <main class="main">
        <h1 class="vissualy-hidden">Проекты</h1>
        <Loader v-if="loading" />
        <ProjectList
            v-else-if="projects"
            :projectsList="projects"
        />
    </main>
</template>

<script>
    import ProjectList from '@/components/ProjectList'
    import Loader from '@/components/Loader'

    export default {
        name: 'Projects',
        metaInfo() {
            return {
                title: "Проекты | Таня Л.",
                meta: [{
                    name: 'description',
                    content: "Список основных проектов"
                }]
            }
        },
        data() {
            return {
                projects: {},
                loading: true
            }
        },
        mounted() {
            fetch('../data/projects.json')
            .then(response => response.json())
            .then(json => {
                this.projects = json
                this.loading = false
            })
        },
        components: {
            ProjectList, Loader
        }
    }
</script>

<style>
    @import '../assets/build/styles/pages/projects.css';
</style>