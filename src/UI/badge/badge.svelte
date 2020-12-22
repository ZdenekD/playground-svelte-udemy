<script>
    import {fade} from 'svelte/transition';
</script>

<style>
    @import './badge.css';
</style>

<span transition:fade={{duration: 200}}><slot /></span>
