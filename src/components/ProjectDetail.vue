<template>
    <div>
        <section class="project"> 
            <div class="project__header">
                <h1 class="vissualy-hidden">{{ dataList.name }}</h1>
                <a class="project__link" v-if="dataList.detail.href" :if="dataList.detail.href" :href="dataList.detail.href" target="_blank">Ссылка на проект</a>
            </div>

            <p class="project__text">
                {{ dataList.detail.text }}
            </p>

            <div class="project__info">
                <h2 class="subtitle">Описание</h2>
                <div class="screens">
                    <div class="screen" v-for="image in dataList.detail.images" :key="image.src">
                        <img class="screen__img" :src="path(image.src)" :alt="image.alt">
                        <p class="screen__text">{{ image.desc }}</p>
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
            path(image) {
                return require('../assets/images/' + image)
            }
        }
    }
</script>