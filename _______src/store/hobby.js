import {writable} from 'svelte/store';

const hobbies = writable([]);
const hobbyStore = {
    subscribe: hobbies.subscribe,
    setHobbies: items => {
        hobbies.set(items);
    },
    addHobby: item => {
        hobbies.update(items => items.concat(item));
    },
};

export default hobbyStore;
