<script lang="ts">
    import { navigate } from "../router/history";

    export let blogID
</script>

<h2>
    Blog ID: {blogID}
</h2>

<button on:click={() => navigate("/post")}>
    Go to Post page
</button>