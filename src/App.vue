<template>
    <div id="app">       
        <header class="header">
            <nav class="menu">
                <button class="menu__button" type="button" aria-label="Открыть меню"></button>
                <HeaderNav :navList="nav"></HeaderNav>
            </nav>
        </header>
        
        <router-view/>

        <footer class="footer">
            <div class="footer__block">
                Репозиторий сайта на <a href="https://github.com/AuraST/portfolio" target="_blink">GitHub</a>
            </div>
        </footer>
    </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'

export default {
    name: "App",
    data () {
        return {
            nav: {}
        }
    },
    mounted() {
        console.log(process.env.BASE_URL)
        fetch('../data/nav.json')
        .then(response => response.json())
        .then(json => {
            this.nav = json
        })
    },
    components: {
        HeaderNav
    }
}
</script>