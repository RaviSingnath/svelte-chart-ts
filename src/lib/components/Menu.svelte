<script lang="ts">
    import page from "@/data/page";
</script>

<nav>
    <ul>
        <li>
            <a href="/" on:click|preventDefault={() => $page = 'Dashboard'}>Dashboard</a>
        </li>
        <li>
            <a href="/" on:click|preventDefault={() => $page = 'Settings'}>Settings</a>
        </li>
        <li>
            <a href="/" on:click|preventDefault={() => $page = 'Foo'}>Foo</a>
        </li>
    </ul>
</nav>

<style>
    ul { margin:0; padding: 1rem; background-color: cornsilk; }
    li { display: inline; padding: 1rem; }
</style>