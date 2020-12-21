<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    let selected = 'all';

    const handleClick = type => {
        selected = type;
        dispatch('filter', type);
    };
</script>

<style>
    @import './filter.css';
</style>

<div>
    <button type="button" class="button" class:active={selected === 'all'} on:click={() => handleClick('all')}>All</button>
    <button type="button" class="button" class:active={selected === 'favorites'} on:click={() => handleClick('favorites')}>Favorites</button>
</div>
