<script lang="ts">
  import PhoneSvg from '$lib/components/atoms/PhoneSvg.svelte';
  import type { ContactProps } from './ContactLink.type';

  let { href, numero, contactName }: ContactProps = $props();

</script>

<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Link de contato"
  class="flex items-center gap-2 hover:text-gold-light transition-colors"
>
  <PhoneSvg />
  {contactName}: {numero}
</a>
