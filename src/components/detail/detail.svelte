<script>
    import {onDestroy, createEventDispatcher} from 'svelte';
    import meetups from '../../store/meetups';
    import Button from '../../UI/button/button.svelte';

    export let id;

    let meetup;

    const dispatch = createEventDispatcher();
    const unsubscribe = meetups.subscribe(items => {
        meetup = items.find(item => item.id === id);
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<style>
    @import './detail.css';
</style>

<section>
    <div class="image"><img src={meetup.image} alt={meetup.title} /></div>
    <div class="content">
        <h1>{meetup.title}</h1>
        <h2>{meetup.subtitle}</h2>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
        <a href="mailto:{meetup.email}">Contact me</a>
        <Button type="button" mode="outline" on:click={() => dispatch('close')}>Close</Button>
    </div>
</section>
