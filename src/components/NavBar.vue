<template>
    <div class="d-flex  flex-column min-vh-100 flex-shrink-0 bg-light" style="width: 4.5rem;">
        <LogoNav />
        <ListNav />
        <BottomSponsor />
    </div>
</template>

<script>
import BottomSponsor from './BottomSponsor';
import ListNav from './ListNav';
import LogoNav from './LogoNav';

export default {
    name : 'NavBar',
    components : {
        BottomSponsor,
        ListNav,
        LogoNav
    }
}
</script>

<style scoped>

</style>