<script>
    import Grid from '../grid/grid.svelte';
    import Form from '../form/form.svelte';
    import Header from '../../UI/header/header.svelte';
    import Button from '../../UI/button/button.svelte';

    let meetups = [
        {
            id: 'm1',
            title: 'Coding Bootcamp',
            subtitle: 'Learn to code in 2 hours',
            description: 'In this meetup, we will have some experts that teach you how to code',
            image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG',
            address: '27th Nerd Road, 32523 New York',
            email: 'code@test.com',
            isFavorite: false,
        },
        {
            id: 'm2',
            title: 'Swim Together',
            subtitle: 'Let go for some swimming',
            description: 'We will simply swim some rounds',
            image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg',
            address: '27th Nerd Road, 32523 New York',
            email: 'swim@test.com',
            isFavorite: false,
        },
    ];
    let editMode = false;

    const handleSubmit = event => {
        const meetup = {
            id: Math.ceil(Math.random() * 10000000000).toString(),
            ...event.detail,
        };

        meetups = [meetup, ...meetups];
        editMode = false;
    };
    const handleFavorite = event => {
        const id = event.detail;
        const meetup = {...meetups.find(item => item.id === id)};
        const index = meetups.findIndex(item => item.id === id);

        meetup.isFavorite = !meetup.isFavorite;

        const updated = [...meetups];

        updated[index] = meetup;
        meetups = updated;
    };
    const handleToggle = () => {
        editMode = !editMode;
    };
    const handleClose = () => {
        editMode = false;
    };
</script>

<style>
    @import './app.css';
</style>

<Header />
<main>
    <div class="controls">
        <Button on:click={handleToggle}>Add Meetup</Button>

        {#if editMode}
            <Form on:save={handleSubmit} on:close={handleClose} />
        {/if}
    </div>

    <Grid {meetups} on:togglefavorite={handleFavorite} />
</main>
