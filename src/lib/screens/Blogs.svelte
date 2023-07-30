<script lang="ts">
    import { navigate } from "../router/history";
</script>

<h2>
    Blogs
</h2>

<button on:click={() => navigate("/blog/1")}>
    Go to single Blog page
</button>