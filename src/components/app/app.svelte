<script>
    import meetups from '../../store/meetups';
    import Grid from '../grid/grid.svelte';
    import Form from '../form/form.svelte';
    import Detail from '../detail/detail.svelte';
    import Header from '../../UI/header/header.svelte';

    let isOpen = false;
    let page = 'overview';
    let id = null;

    const handleToggle = () => {
        isOpen = !isOpen;
    };
    const handleClose = () => {
        id = null;
        isOpen = false;
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

<Header />
<main>
    {#if page === 'overview'}
        <Grid meetups={$meetups} on:detail={handleDetail} on:edit={handleEdit} on:add={handleToggle} />
    {:else}
        <Detail {id} on:close={handleCloseDetail} />
    {/if}
</main>

{#if isOpen}
    <Form on:close={handleClose} {id} />
{/if}
