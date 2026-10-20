<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

interface Contact {
    name: string
    email: string
}
const contacts: Contact[] = [
    { name: 'Kostas Liutkus', email: 'kosliu@ktu.lt' },
    { name: 'Eglė Butkevičiūtė', email: 'egle.butkeviciute@ktu.lt', }
];
const { copy } = useClipboard()
</script>

<template>
    <v-footer class="d-flex flex-column align-center ga-4 py-6" color="surface" border="t">
        <div class="d-flex flex-wrap justify-center ga-4">
            <v-card v-for="contact in contacts" :key="contact.email" variant="flat" color="surface-light" rounded="lg"
                class="d-flex align-center ga-3 pl-3 pr-2 py-2">

                <div class="text-left mr-2">
                    <div class="text-body-2 font-weight-medium">{{ contact.name }}</div>
                    <div class="text-caption text-medium-emphasis">{{ contact.email }}</div>
                </div>

                <v-btn icon="mdi-email-outline" size="small" variant="text" :href="`mailto:${contact.email}`"
                    :aria-label="`Rašyti ${contact.name}`" />
                <v-btn icon="mdi-content-copy" size="small" variant="text" :aria-label="`Kopijuoti ${contact.email}`"
                    @click="copy(contact.email)" />
            </v-card>
            
        </div>
        
        <v-divider class="my-1" thickness="2" length="50" />

        <!-- <div class="text-body-2 text-medium-emphasis text-center" style="max-width: 720px">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
            interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc.
        </div> -->
<v-btn
            variant="flat"
            color="primary"
          class="text-none"
          prepend-icon="mdi-github"
          href="https://github.com/kostasliutkus/tiriamasis-projektas.git"
        >
        Github
        </v-btn>
        <div class="text-caption text-disabled" width="50%">
            © {{ new Date().getFullYear() }}
        </div>
        
    </v-footer>
</template>
<style scoped></style>
