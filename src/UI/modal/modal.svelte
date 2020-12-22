<script>
    import {createEventDispatcher} from 'svelte';
    import {fade, fly} from 'svelte/transition';
    import Button from '../button/button.svelte';

    export let title;

    const dispatch = createEventDispatcher();
    const handleClose = () => {
        dispatch('close');
    };
</script>

<style>
    @import './modal.css';
</style>

<div transition:fade={{duration: 200}} class="backdrop" on:click={handleClose} />
<div transition:fly={{duration: 400, y: -40}} class="modal">
    <header>
        <h2>{title}</h2>
    </header>
    <div class="content">
        <slot />
    </div>
    <footer>
        <slot name="footer">
            <Button on:click={handleClose}>Close</Button>
        </slot>
    </footer>
</div>
