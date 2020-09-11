<template>
    <main class="main">
        <h1 class="vissualy-hidden">Обо мне</h1> 
        <section class="about">
            <div class="about__info">
                <p class="about__info-text">
                    Здравствуйте! Меня зовут Таня.<br>
                    Живу в городе Ростов-на-Дону.<br>
                    Занимаюсь версткой интерфейсов уже 3 года. 
                    Прошла базовый курс в <a href="https://assets.htmlacademy.ru/certificates/intensive/155/148047.pdf" target="_blank">HTML Academy</a>. 
                    Более подробную информацию можно посмотреть в <a href="data/docs/Резюме_Любимова_Татьяна.pdf" target="_blank">резюме</a>.
                </p>
                <Loader v-if="loading" />
                <Skills 
                    v-else-if="skills"
                    :skillsItems="skills"
                />
            </div>
            <div class="about__photo"></div>
        </section>
    </main>
</template>

<script>
    import Skills from '@/components/SkillsList'
    import Loader from '@/components/Loader'

    export default {
        name: 'About',
        metaInfo() {
            return {
                title: "Главная | Таня Л.",
                meta: [{
                    name: 'description',
                    content: "Краткая информация обо мне и список навыков"
                }]
            }
        },
        data() {
            return {
                skills: {},
                loading: true
            }
        },
        mounted() {
            fetch('data/skills.json')
            .then(response => response.json())
            .then(json => {
                this.skills = json
                this.loading = false
            })
        },
        components: {
            Skills, Loader
        }
    }
</script>

<style>
    @import '../assets/build/styles/pages/about.css';
</style>
