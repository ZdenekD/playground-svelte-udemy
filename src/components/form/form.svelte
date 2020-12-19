<script>
    import {createEventDispatcher} from 'svelte';
    import Button from '../../UI/button/button.svelte';
    import Input from '../../UI/input/input.svelte';
    import Modal from '../../UI/modal/modal.svelte';

    const dispatch = createEventDispatcher();
    const initialState = {
        title: '',
        subtitle: '',
        address: '',
        email: '',
        image: '',
        description: '',
    };
    const values = {...initialState};
    const handleSubmit = () => {
        dispatch('save', {...values});
    };
    const handleCancel = () => {
        dispatch('close');
    };
</script>

<style>
    @import './form.css';
</style>

<Modal title="Add meetup data" on:close>
    <form on:submit|preventDefault={handleSubmit}>
        <Input
            id="title"
            label="Title"
            value={values.title}
            on:input={event => {
                values.title = event.target.value;
            }} />
        <Input
            id="subtitle"
            label="Subtitle"
            value={values.subtitle}
            on:input={event => {
                values.subtitle = event.target.value;
            }} />
        <Input
            id="address"
            label="Address"
            value={values.address}
            on:input={event => {
                values.address = event.target.value;
            }} />
        <Input
            id="image"
            label="Image"
            value={values.image}
            on:input={event => {
                values.image = event.target.value;
            }} />
        <Input
            id="email"
            label="E-mail"
            value={values.email}
            type="email"
            on:input={event => {
                values.email = event.target.value;
            }} />
        <Input
            id="description"
            label="Description"
            value={values.description}
            controlType="textarea"
            on:input={event => {
                values.description = event.target.value;
            }} />
    </form>
    <div slot="footer">
        <Button type="button" mode="outline" on:click={handleCancel}>Cancel</Button>
        <Button type="button" on:click={handleSubmit}>Save</Button>
    </div>
</Modal>
