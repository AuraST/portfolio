<template>
    <main class="main">
        <Loader v-if="loading" />
        <ProjectDetail 
            v-else-if="project"
            :dataList="project"
        />
        <p v-else>Такого элемента нет!</p>
    </main>
</template>

<script>
    import ProjectDetail from '@/components/ProjectDetail'
    import Loader from '@/components/Loader'

    export default {
        name: "ProjectsDetail",
        data () {
            return {
                project: {},
                loading: true
            }
        },
        mounted() {
            fetch('../data/projects.json')
            .then(response => response.json())
            .then(json => {
                this.project = json[this.$route.params.code]
                this.loading = false
            })
        },
        components: {
            ProjectDetail, Loader
        }
    }
</script>

<style>
    @import '../assets/build/styles/pages/project.css';
</style>