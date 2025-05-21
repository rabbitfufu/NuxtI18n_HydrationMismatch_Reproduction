<script setup>
const {setLocale} = useI18n()
</script>

<template>
	<div id="app">
    1) Set browser lang to english if not already<br />
    2) Click button to set i18n cookie:
    <button @click="setLocale('fr')">Set French</button>
    Language: {{$t("hello")}}
    <br />
    3) Refresh browser, look in console.
	</div>
</template>

<style lang="postcss"></style>
