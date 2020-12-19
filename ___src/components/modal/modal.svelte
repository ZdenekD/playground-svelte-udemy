<script>
    import {createEventDispatcher, onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte';

    const dispatch = createEventDispatcher();

    let agreed = false;
    let autoscroll = false;
    const handleClick = () => {
        agreed = true;
    };

    onMount(() => {
        console.log('On Mount');
    });

    onDestroy(() => {
        console.log('On Destroy');
    });

    beforeUpdate(() => {
        console.log('Before Update');

        autoscroll = agreed;
    });

    afterUpdate(() => {
        console.log('After Update');

        if (autoscroll) {
            const modal = document.querySelector('.modal');

            modal.scrollTo(0, modal.scrollHeight);
        }
    });

    console.log('Script executed!');
</script>

<style>
    @import './modal.css';
</style>

<div class="backdrop" on:click={() => dispatch('cancel')} />
<div class="modal">
    <header>
        <slot name="header" />
    </header>
    <div class="content">
        <slot />
    </div>
    <div class="disclaimer">
        <p>You need to agree to our terms!</p>
        <button on:click={handleClick}>Agree</button>
    </div>
    <footer>
        <slot name="footer" didAgreed={agreed}><button on:click={() => dispatch('close')} disabled={!agreed}>Close</button></slot>
    </footer>
</div>
