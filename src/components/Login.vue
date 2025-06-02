<template>
    <main class="form-signin w-25 m-auto mt-5">
        <form>
          
            <h1 class="h3 mb-3 fw-normal mt-3">Login</h1>
            <k-input :label="'Email address'" :type="'email'"/> 
            <k-input class="mt-3" :label="'Password'" :type="'password'"/> 
            <k-button type="submit">
                Log in
            </k-button>
        </form>
    </main>
</template>
<script setup></script>
<style></style>
