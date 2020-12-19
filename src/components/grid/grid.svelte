<script>
    import Item from '../item/item.svelte';

    export let meetups;
</script>

<style>
    @import './grid.css';
</style>

<section>
    {#each meetups as meetup (meetup.id)}
        <Item
            id={meetup.id}
            title={meetup.title}
            subtitle={meetup.subtitle}
            description={meetup.description}
            image={meetup.image}
            email={meetup.email}
            address={meetup.address}
            isFavorite={meetup.isFavorite}
            on:togglefavorite />
    {/each}
</section>
