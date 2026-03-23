<script lang="ts">
  import PhoneSvg from '$lib/components/atoms/PhoneSvg.svelte';
  import type { ContactProps } from './ContactLink.type';

  let { href, numero, contactName, nameClass}: ContactProps = $props();
  let baseClass = "flex items-center gap-2 hover:text-brand transition-colors"
  let finalClass = $derived(`${nameClass} ${baseClass}`)
</script>

<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Link de contato"
  class={finalClass}
>
  <PhoneSvg />
  {contactName}: {numero}
</a>
