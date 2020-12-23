<script>
    import {createEventDispatcher} from 'svelte';
    import {fly} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import Filter from '../filter/filter.svelte';
    import Item from '../item/item.svelte';
    import Button from '../../UI/button/button.svelte';

    export let meetups;

    const dispatch = createEventDispatcher();
    let selected = 'all';

    $: filtered = selected === 'favorites' ? meetups.filter(meetup => meetup.isFavorite) : meetups;

    const handleFilter = event => {
        selected = event.detail;
    };
</script>

<style>
    @import './grid.css';
</style>

<section class="controls">
    <Filter on:filter={handleFilter} />
    <Button on:click={() => dispatch('add')}>Add Meetup</Button>
</section>
<section class="grid">
    {#if filtered.length === 0}
        <p class="message">No meetups found.</p>
    {/if}
    {#each filtered as meetup (meetup.id)}
        <div transition:fly={{duration: 400, y: 20}} animate:flip={{duration: 300}}>
            <Item
                id={meetup.id}
                title={meetup.title}
                subtitle={meetup.subtitle}
                description={meetup.description}
                image={meetup.image}
                email={meetup.email}
                address={meetup.address}
                isFavorite={meetup.isFavorite}
                on:detail
                on:edit />
        </div>
    {/each}
</section>
