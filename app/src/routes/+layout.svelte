<script lang="ts">
 import Header from '$lib/components/organisms/Header.svelte';
 import './layout.css';

</script>

<main class="min-h-screen bg-white font-sans text-brand-charcoal">
    <Header />
    <!-- Seu conteúdo principal aqui -->
    <slot />
</main>
