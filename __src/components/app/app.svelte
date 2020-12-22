<script>
    import Contact from '../contact/contact.svelte';

    let count = 0;
    const initialState = {
        id: 0,
        name: '',
        title: '',
        description: '',
        image: '',
    };
    let values = {...initialState};
    let isSubmitted = false;
    let error = '';
    let contacts = [];

    $: if (count >= 10) {
        console.log('count is dangerously high!');
        count = 9;
    }

    $: uppercase = values.name.toUpperCase();

    const handleClick = () => {
        count += 1;
    };
    const handleInput = event => {
        const {name, value} = event.target;

        values = {
            ...values,
            [name]: value,
        };
    };
    const handleSubmit = () => {
        if (
            values.name.trim().length === 0
            || values.title.trim().length === 0
            || values.description.trim().length === 0
            || values.image.trim().length === 0
        ) {
            error = 'Value is empty';
        } else {
            error = '';
            isSubmitted = true;
            contacts = [
                ...contacts, {
                    id: Math.random(),
                    username: uppercase,
                    title: values.title,
                    description: values.description,
                    image: values.image,
                },
            ];
        }
    };
    const handleDeleteFirst = () => {
        contacts = contacts.slice(1);
    };
    const handleDeleteLast = () => {
        contacts = contacts.slice(0, -1);
    };
</script>

<style>
.form {
    width: 30rem;
    max-width: 100%;
}
</style>

{#each contacts as contact, index (contact.id)}
    <h2>#{index + 1}</h2>
    <Contact props={{...contact}} />
{:else}
    <p>Empty cards. Start adding</p>
{/each}

<h1>Hello {uppercase}!</h1>
<button on:click={handleClick}>
    Clicked
    {count}
    {count < 2 ? 'time' : 'times'}
</button>

{#if error}
    <p>{error}</p>
{/if}

<!-- Same functionality -> second one is shortcut -->
<div class="form">
    <div class="form-control">
        <input name="name" type="text" on:input={handleInput} value={values.name} />
        <input name="name" type="text" bind:value={values.name} />
    </div>
    <div class="form-control">
        <input
            name="title"
            type="text"
            on:input={handleInput}
            value={values.title} />
    </div>
    <div class="form-control">
        <input name="image" type="text" on:input={handleInput} value={values.image} />
    </div>
    <div class="form-control">
        <textarea
            name="description"
            on:input={handleInput}>{values.description}</textarea>
    </div>
    <button on:click|preventDefault={handleSubmit}>Add contact card</button>
    <button on:click|once={handleDeleteFirst}>Delete first</button>
    <button on:click={handleDeleteLast}>Delete last</button>
</div>
