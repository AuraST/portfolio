<template>
    <ul class="menu__list">
        <li class="menu__item" v-for="item in navList" :key="item.name">
            <router-link class="menu__link" :to="item.link">{{ item.name }}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'HeaderNav',
        props: ['navList']
    }
</script>