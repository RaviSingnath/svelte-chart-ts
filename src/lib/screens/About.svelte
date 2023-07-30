<script lang="ts">
    import { navigate } from "../router/history";
</script>

<h2>
    About
</h2>
<button on:click={() => navigate("/blogs")}>
    Go to Blogs page
</button>