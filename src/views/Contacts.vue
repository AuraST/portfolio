<template>
    <main class="main">
        <h1 class="vissualy-hidden">Контакты</h1> 
        <section class="contacts">
            <p class="contacts__text">Связаться со мной можно любым доступным способом.</p>
            <ContactsList />
        </section>
    </main>
</template>

<script>
import ContactsList from '@/components/ContactsList'

export default {
    name: "Contacts",
    metaInfo() {
        return {
            title: "Контакты | Таня Л.",
            meta: [{
                name: 'description',
                content: "Список всех контактов для связи"
            }]
        }
    },
    components: {
        ContactsList
    }
}
</script>

<style>
    @import '../assets/build/styles/pages/contacts.css';
</style>