<!-- ../../molecules/ContactList/ContactList.svelte -->
<script lang="ts">
  import type { ContactProps } from '$lib/components/atoms/Contactlink/ContactLink.types';
  import ContactLink from '$lib/components/atoms/Contactlink/ContactLink.svelte';

  interface Props {
    contacts: ContactProps[];
  }

  let { contacts }: Props = $props();
</script>

<div class="flex flex-col gap-4">
  <ul class="space-y-4  w-full">
    {#each contacts as contact(contact.id)}
      <li>
        <ContactLink {...contact} />
      </li>
    {/each}
  </ul>
</div>
