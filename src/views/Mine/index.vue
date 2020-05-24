<template>
   <div id="main">
        <Header />
        <TabBar />
        <div id="content">
            <Login />
        </div>
    </div>
</template>
<style scoped>

</style>

<script>
    import Header from '@/components/Header'
    import TabBar from '@/components/TabBar'
    import Login from '@/components/Login'
    export default {
        name: "mine",
        components: {
            Header,
            TabBar,
            Login
        }
    }
</script>
