<template>
    <div>
        <section class="project"> 
            <div class="project__header">
                <h1 class="vissualy-hidden">
                    {{ dataList.name }}
                    <span class="project__header-data">{{ dataList.data }}</span>
                </h1>
                <div class="project__links">
                    <a class="project__link" v-if="dataList.detail.href" :if="dataList.detail.href" :href="dataList.detail.href" target="_blank">Ссылка на проект</a>
                    <a class="project__link" v-if="dataList.detail.linkCode" :if="dataList.detail.linkCode" :href="dataList.detail.linkCode" target="_blank">GitHub</a>
                </div>
            </div>

            <p class="project__text">
                {{ dataList.detail.text }}
            </p>

            <div class="project__info">
                <h2 class="subtitle">Описание</h2>
                <div class="screens">
                    <div class="screen" v-for="description in dataList.detail.descriptions" :key="description.src">
                        <img class="screen__img" v-if="description.src" :if="description.src" :src="path(description.src)" :alt="description.alt">
                        <video class="screen__video" v-if="description.video" :if="description.video" controls>
                            <source :src="path(description.video)" type="video/mp4">
                        </video>
                        <p class="screen__text">{{ description.text }}</p>
                    </div>
                </div>
            </div>

            <div class="tools">
                <h3 class="subtitle">Технологии</h3>
                <p class="tools__text">{{ dataList.detail.tools }}</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'ProjectDetail',
        props: ['dataList'],
        metaInfo() {
            return {
                title: `Проект "${this.dataList.name}" | Таня Л.`,
                meta: [{
                    name: 'description',
                    content: `Описание проекта "${this.dataList.name}" со скриншотами использованными инструментами`
                }]
            }
        },
        methods: {
            path(media) {
                return require('../assets/images/' + media)
            }
        }
    }
</script>