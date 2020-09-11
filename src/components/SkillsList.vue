<template>
    <div class="skills" id="skills">
        <div class="skill">
            <p class="skill__title">Навыки</p>
            <ul class="skill__list">
                <li class="skill__item" v-for="skill in skillsItems" :key="skill.name">
                    <div class="skill__item-info" v-if="skill.desc">
                        <p class="skill__item-text">{{ skill.desc }}</p>
                    </div>
                    <p class="skill__item-tag">{{ skill.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkillsList',
        props: ['skillsItems']
    }
</script>