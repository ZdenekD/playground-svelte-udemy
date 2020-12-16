<style>
@import './grid.css';
</style>

<script>
import Item from '../item/item.svelte';

export let meetups;
</script>

<section>
    {#each meetups as meetup (meetup.id)}
    <Item
        title={meetup.title}
        subtitle={meetup.subtitle}
        description={meetup.description}
        image={meetup.image}
        email={meetup.email}
        address={meetup.address}
    />
    {/each}
</section>
