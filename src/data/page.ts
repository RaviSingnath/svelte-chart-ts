import { writable } from "svelte/store";

const page = writable<string>('Dashboard');

export default page;
