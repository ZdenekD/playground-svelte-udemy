<script>
    import {tweened} from 'svelte/motion';
    import {cubicInOut} from 'svelte/easing';
    import {fade, fly, slide, scale} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    // import Spring from '../spring/spring.svelte';

    const progress = tweened(0, {
        delay: 0.25,
        duration: 700,
        easing: cubicInOut,
    });

    setTimeout(() => {
        progress.set(0.5);
    }, 1500);

    let input;
    let isVisible = false;
    let boxes = [];
    const addBox = () => {
        boxes = [input.value, ...boxes];
    };
    const discard = value => {
        boxes = boxes.filter(element => element !== value);
    };
</script>

<style>
    div {
        width: 10rem;
        height: 10rem;
        margin: 1rem;
        padding: 1rem;
        background: #ccc;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 5px;
    }
</style>

<!-- <progress value={$progress} />
<Spring /> -->

<input type="text" bind:this={input} />
<button on:click={addBox}>Add</button>
<hr />
<button
    on:click={() => {
        isVisible = !isVisible;
    }}>Toggle</button>

{#if isVisible}
    <p transition:fly={{x: 200}}>Can you see?</p>
    <p in:fade out:fly={{x: 200}}>Can you see?</p>
{/if}

{#if isVisible}
    {#each boxes as box (box)}
        <div
            transition:fly|local={{duration: 400, easing: cubicInOut, x: 300, y: 300}}
            on:click={discard.bind(this, box)}
            on:introstart={() => console.log('Adding the element starts')}
            on:introend={() => console.log('Adding the element ends')}
            on:outrostart={() => console.log('Removing the element starts')}
            on:outroend={() => console.log('Removing the element ends')}
            animate:flip={{duration: 400}}>
            {box}
        </div>
    {/each}
{/if}
