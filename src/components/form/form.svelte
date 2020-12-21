<script>
    import {createEventDispatcher} from 'svelte';
    import meetups from '../../store/meetups';
    import Button from '../../UI/button/button.svelte';
    import Input from '../../UI/input/input.svelte';
    import Modal from '../../UI/modal/modal.svelte';
    import {isEmpty, isValidEmail} from '../../helpers/validation';

    export let id = null;

    const dispatch = createEventDispatcher();
    const initialState = {
        title: '',
        titleValidity: false,
        subtitle: '',
        subtitleValidity: false,
        address: '',
        addressValidity: false,
        email: '',
        emailValidity: false,
        image: '',
        imageValidity: false,
        description: '',
        descriptionValidity: false,
    };
    let isFormValid = false;
    let values = {...initialState};
    const handleSubmit = () => {
        if (id) {
            meetups.update(id, values);
        } else {
            meetups.add({...values});
        }

        dispatch('close');
    };
    const handleCancel = () => {
        dispatch('close');
    };
    const handleRemove = () => {
        meetups.remove(id);
        dispatch('close');
    };

    if (id) {
        meetups.subscribe(items => {
            values = {...items.find(item => item.id === id)};
        })();
    }

    $: values.titleValidity = !isEmpty(values.title);
    $: values.subtitleValidity = !isEmpty(values.subtitle);
    $: values.addressValidity = !isEmpty(values.address);
    $: values.emailValidity = !isEmpty(values.email) && isValidEmail(values.email);
    $: values.imageValidity = !isEmpty(values.image);
    $: values.descriptionValidity = !isEmpty(values.description);
    // prettier-ignore
    $: isFormValid = (
        values.titleValidity
        && values.subtitleValidity
        && values.addressValidity
        && values.emailValidity
        && values.imageValidity
        && values.descriptionValidity
    );
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
            isValid={values.titleValidity}
            message="Please enter a valid title."
            on:input={event => {
                values.title = event.target.value;
            }} />
        <Input
            id="subtitle"
            label="Subtitle"
            value={values.subtitle}
            isValid={values.subtitleValidity}
            message="Please enter a valid subtitle."
            on:input={event => {
                values.subtitle = event.target.value;
            }} />
        <Input
            id="address"
            label="Address"
            value={values.address}
            isValid={values.addressValidity}
            message="Please enter a valid address."
            on:input={event => {
                values.address = event.target.value;
            }} />
        <Input
            id="image"
            label="Image"
            value={values.image}
            isValid={values.imageValidity}
            message="Please enter a valid image."
            on:input={event => {
                values.image = event.target.value;
            }} />
        <Input
            id="email"
            label="E-mail"
            value={values.email}
            isValid={values.emailValidity}
            message="Please enter a valid e-mail."
            type="email"
            on:input={event => {
                values.email = event.target.value;
            }} />
        <Input
            id="description"
            label="Description"
            value={values.description}
            isValid={values.descriptionValidity}
            message="Please enter a valid description."
            controlType="textarea"
            on:input={event => {
                values.description = event.target.value;
            }} />
    </form>
    <div slot="footer">
        <Button type="button" mode="outline" on:click={handleCancel}>Cancel</Button>
        <Button type="button" on:click={handleSubmit} disabled={!isFormValid}>Save</Button>
        {#if id}
            <Button type="button" on:click={handleRemove}>Delete</Button>
        {/if}
    </div>
</Modal>
