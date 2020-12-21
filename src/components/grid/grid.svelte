<script>
    import {createEventDispatcher} from 'svelte';
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
    {#each filtered as meetup (meetup.id)}
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
    {/each}
</section>
