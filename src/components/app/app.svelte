<script>
    import {onMount} from 'svelte';
    import meetups from '../../store/meetups';
    import Grid from '../grid/grid.svelte';
    import Form from '../form/form.svelte';
    import Detail from '../detail/detail.svelte';
    import Message from '../message/message.svelte';
    import Header from '../../UI/header/header.svelte';
    import Loader from '../../UI/loader/loader.svelte';

    let isOpen = false;
    let isLoading = false;
    let page = 'overview';
    let id = null;
    let message;

    onMount(() => {
        isLoading = true;

        fetch('https://svelte-c89da-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('An error occurred, please try again!');
                }

                return response.json();
            })
            .then(data => {
                const items = [];

                Object.keys(data).forEach(key => {
                    items.push({
                        ...data[key],
                        id: key,
                    });
                });

                setTimeout(() => {
                    isLoading = false;
                    meetups.setList(items.reverse());
                }, 1000);
            })
            .catch(error => {
                isLoading = false;
                message = error.message;
            });
    });

    const handleToggle = () => {
        isOpen = !isOpen;
    };
    const handleClose = () => {
        id = null;
        isOpen = false;
        message = '';
    };
    const handleDetail = event => {
        id = event.detail;
        page = 'detail';
    };
    const handleEdit = event => {
        id = event.detail;
        isOpen = true;
    };
    const handleCloseDetail = () => {
        id = null;
        page = 'overview';
    };
</script>

<style>
    @import './app.css';
</style>

{#if message}
    <Message {message} on:close={handleClose} />
{/if}

<Header />
<main>
    {#if page === 'overview'}
        {#if isLoading}
            <Loader />
        {:else}
            <Grid meetups={$meetups} on:detail={handleDetail} on:edit={handleEdit} on:add={handleToggle} />
        {/if}
    {:else}
        <Detail {id} on:close={handleCloseDetail} />
    {/if}
</main>

{#if isOpen}
    <Form on:close={handleClose} {id} />
{/if}
