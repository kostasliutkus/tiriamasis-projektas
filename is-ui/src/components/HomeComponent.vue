<script lang="ts" setup>
  import { ref } from 'vue'
  import About from './AboutComponent.vue';
  import { useClipboard } from '@vueuse/core'
  const content = ref({
    title: 'Bagiamasis projektas',
  })
  const creator_email  = ref('kosliu@ktu.lt')
  const guide_email = ref('sarunas.packevicius@ktu.lt')
  const { copy } = useClipboard()
</script>

<template>
  <div>
    <v-hover v-slot="{ props }">
      <v-card
        class="mx-auto text-center"
        color="primary"
        elevation="0"
        v-bind="props"
        rounded="0"
        width="100%"
      >
      <template v-slot:append>
        <v-btn
        icon="mdi-github"
        variant="text"
        href="https://github.com/kostasliutkus/tiriamasis-projektas"
        target="_blank">
        </v-btn>
      </template>
      <template v-slot:title>
        <h1 width="80%" class="text-h4 font-weight-bold">
            {{ content.title }}
        </h1>
      </template>
        <v-parallax
          cover
          height="2000"
          src="@/assets/photos/main-cover.jpg"
        >
          <v-container
            width="100%"
            class="py-8 justify-center"
          >
            <v-row
              justify="center"
              class="mb-8"
            >
            <v-col cols="8"> 
                <About/>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="4">
                <h1>Kūrėjas</h1>
                <v-card
                  class="pa-4 text-left"
                  elevation="10"
                  outlined
                  color="primary"
                >
                  <v-list bg-color="primary">
                    <v-list-item
                      prepend-icon="mdi-account-circle"
                      title="Kostas Liutkus"
                    />
                    <v-list-item
                      link
                      prepend-icon="mdi-email"
                      title="kosliu@ktu.lt"
                      @click="copy(creator_email)"
                    />
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="4">
                <h1>Vadovas</h1>
                <v-card
                  class="pa-4 text-left"
                  elevation="10"
                  outlined
                  color="primary"
                >
                  <v-list bg-color="primary">
                    <v-list-item
                      prepend-icon="mdi-account-circle"
                      title="Šarūnas Packevičius"
                    />
                    <v-list-item
                      link
                      prepend-icon="mdi-email"
                      title="sarunas.packevicius@ktu.lt"
                      @click="copy(guide_email)"
                    />
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </v-card>
    </v-hover>
  </div>
</template>
<style scoped>
</style>
