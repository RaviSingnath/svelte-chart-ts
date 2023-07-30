<script lang="ts">
  import Route from 'route-parser'
  import routes from './router';
  import Error404 from '../screens/Error404.svelte';
  import { history } from './history';

  const routeList = Object.keys(routes).map(x => ({
    route: new Route(x),
    component: routes[x]
  }))

  export const getComponent = route => {
    for (let r of routeList) {
        const m = r.route.match(route.toLowerCase())
        if(m) {
          return {
            component: r.component,
            props: m
          }
        }
      }
      return {
        component: null,
        props: {}
      }
  }

  $: routeData = getComponent($history.pathname)
</script>

<svelte:component this={routeData.component || Error404} {...routeData.props} />
