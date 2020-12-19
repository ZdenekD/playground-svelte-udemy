<script>
    import {createEventDispatcher} from 'svelte';
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

<div class="backdrop" on:click={handleClose} />
<div class="modal">
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
