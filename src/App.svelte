<script lang="ts">
  import page from "@/data/page";
  import Menu from "@/lib/components/Menu.svelte";
  import Dashboard from "@/lib/screens/Dashboard.svelte";
  import Settings from "@/lib/screens/Settings.svelte";
  import NotFound from "@/lib/screens/404.svelte";

  const pages = [
    { id: "Dashboard", component: Dashboard },
    { id: "Settings", component: Settings },
  ];

  const getComponent = function () {
    try {
        return pages.find((p) => p.id === $page).component;
    } catch (e) {
        return NotFound;
    }
  }
</script>

<main>
    <Menu />

    <svelte:component this={getComponent()} />
</main>
