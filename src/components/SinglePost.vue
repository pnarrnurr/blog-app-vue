<template>
    <div class="post">
        <router-link :to="{ name: 'Post', params: { id: post.id } }">
            <h3>{{ post.title }}</h3>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style>
.post {
    margin: 20px auto;
    background-color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
    border-left: 4px solid #ff5500;
}

h3 {
    cursor: pointer;
}
</style>