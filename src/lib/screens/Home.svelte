<script lang="ts">
    import { navigate } from "../router/history";
</script>

<h2>
    Home
</h2>
<button on:click={() => navigate("/about")}>
    Go to About page
</button>
