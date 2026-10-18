<script lang="ts" setup>
  import { ref } from 'vue'
  const content = ref({
    title: 'Sužaidybinta pirmosios pagalbos mokymo sistema, paremta klaidų istorija',
    goal: 'Projekto tikslas',
    goalDescription: 'Sukurti žiniatinklio įrankį, android programėlių kūrėjams, kuris padėtų atpažinti grafinės vartotojo sąsajos problemas. Kuriant įrankį siekiama palengvinti testuotojų ir programėlių kūrėjų darbo procesus. ',
    description: 'Projekto aprašymas',
    descriptionText: 'Šis įrankis naudos „droidbot“ atvirojo kodo programinę įrangą padaryti android programėlių langų ekrano kopijas. Darbo metu bus lyginami įvairus skirtingi mašininio mokymosi ir tradiciniai algoritmai grafinės vartotojo sąsajos klaidų atradimui.',
    functions: [
        'Android programėlės diegimo failo įkėlimas.',
        'Android programėlės grafinės vartotojo sąsajos ekrano kopijų sukūrimas.',
        'Grafinės sąsajos klaidų atpažinimas.'

    ],
    nonFunctionalRequirements: [
      'Sistema veikia žiniatinklyje asmeniniame kompiuteryje. Operacinė sistema nesvarbi',
    ],
    annotation: 'User Interface, Machine Learning, Android, Web Application.'
  })
</script>
<template >
  <v-container class="py-8" >
    <v-row justify="center" class="mb-6">
      <v-col cols="12">
        <h1 class="text-h4 text-center mb-8">{{ content.title }}</h1>
    </v-col>
    </v-row>

          <v-row>
      <v-col cols="12" >
        <v-card class="mb-6" elevation="10" color="primary">
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="12">
                <p class="text-h5">Raktažodžiai/Anotacija</p>
                <p class="text-body-1">{{ content.annotation }}</p>
              </v-col>
              </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="mb-6" elevation="10" color="primary">
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="6">
                <p class="text-h5">Tikslas</p>
                <p class="text-body-1">{{ content.goalDescription }}</p>
              </v-col>
              <v-col cols="6">
                <p class="text-h5">Apie projektą</p>
                <p class="text-body-1">{{ content.descriptionText }}</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>


        <v-col>
        <v-card class="mb-6" elevation="10" color="primary">
          <v-card-title class="text-h5">
            Pagrindinės funkcijos
          </v-card-title>
          <v-card-text class="pa-6">
            <v-list bg-color="primary">
              <v-list-item
                overflow="false"
                v-for="(func, index) in content.functions"
                :key="index"
                :prepend-icon="'mdi-circle'"
              >
                <v-list-item-title class="text-wrap text-break">{{ func }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        </v-col>
        <v-col>
        <v-card class="mb-6" elevation="10" color="primary">
          <v-card-title class="text-h5">
            Nefunkciniai reikalavimai
          </v-card-title>
          <v-card-text class="pa-6">
            <v-list bg-color="primary">
              <v-list-item
                v-for="(req, index) in content.nonFunctionalRequirements"
                :key="index"
                :prepend-icon="'mdi-circle'"
              >
                <v-list-item-title class="text-wrap text-break">
                  {{ req }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>