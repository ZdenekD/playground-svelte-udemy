<style>
@import './button.css';
</style>

<script>
    export let type = 'button';
    export let content;
    export let mode;
</script>

<button class={mode} {type}>{content}</button>
