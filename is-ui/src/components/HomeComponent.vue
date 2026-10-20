<script lang="ts" setup>
  import { ref } from 'vue'
  const content = ref({
    title: 'Sužaidybinta pirmosios pagalbos mokymo sistema, paremta vartotojo klaidų istorija',
    goal: 'Projekto tikslas',
    goalDescription: 'Sukurti ir realizuoti pirmosios pagalbos suteikimo mokymo sistema, parinkti jai sprendimo priėmimo algoritmą, kuris remdamasis ankstesnėmis besimokančiojo klaidomis parenka sekančius mokymosi etapus',
    description: 'Projekto aprašymas',
    descriptionText: 'Ši sistema skirta vartotojus apmokyti reaguoti ir suteikti efektyviai pirmąją pagalbą kritinių/karo atveju. Darbo metu bus lyginami įvairus skirtingi sprendimo priėmimo algoritmai efektyvesniam mokinio mokymuisi ir rezultato pasiekimo tobulinimui',
    functions: [
        'Sistema pateikia scenarijų',
        'Scenarijus baigiasi vartotojui išgelbėjus visas aukas',
        'Scenarijus yra apribojamas laiko limitu',
        'Scenarijus gali būti nutraukiamas pasiekus laiko limitą',
        'Po scenarijaus vartotojui pateikiami rezultatai',
        'Scenarijų grupėje sekantis scenarijus visada parenkamas pagal praeito scenarijaus klaidas',
        'Scenarijus gali apimti keletą aukų',
        'Scenarijus pateikia keletą galimų gydymo sprendimų',
        'Vartotojas gali įvertinti aukos gyvybinius rodiklius',
        'Vartotojas gali įvertinti aukos išorinius sužeidimus',

    ],
    nonFunctionalRequirements: [
      'Sistema veikia žiniatinklyje asmeniniame kompiuteryje. Operacinė sistema nesvarbi',
      'Progresas yra išsaugojamas uždarius programėlę',
      'Sistema lengva pradėti mokymosi scnearijų',
      'Vartotojui yra paaiškinama, kaip elgtis su sistema',
      'Sistema saugo ir vartotojui leidžia peržiūrėti jo pamokų/scenarijų istoriją ir rezultatus'
    ],
    annotation: 'Decision algorithms, First aid, Education, Web Application, Tutoring'
  })
</script>
<template >
  <v-container class="py-8" height="auto" >
    <v-row justify="center" class="mb-6">
      <v-col cols="12">
        <h1 class="text-h4 text-center mb-8 font-weight-bold">{{ content.title }}</h1>
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