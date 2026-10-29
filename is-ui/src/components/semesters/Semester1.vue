<script lang="ts" setup>

interface Source {
  id: number
  name: string
  url: string
}

import mainMock from '@/assets/photos/main-mock.png'

const sources: Source[] = [
  { id: 1, name: 'Bayesian knowledge tracing, logistic models, and beyond: an overview of learner modeling techniques', url: 'https://link.springer.com/article/10.1007/s11257-017-9193-2' },
  { id: 2, name: 'Fuzzy Bayesian Knowledge Tracing', url: 'https://ieeexplore.ieee.org/document/9439896' },
  { id: 3, name: 'Building Intelligent Tutoring Systems for Teams : What Matters', url: 'https://ebookcentral.proquest.com/lib/ktu-ebooks/reader.action?docID=5511103&c=RVBVQg' },
  { id: 4, name: 'Effectiveness of Intelligent Tutoring Systems: A Meta-Analytic Review', url: 'https://www.jstor.org/stable/24752869?sid=primo&seq=3' },
  { id: 5, name: 'Deep learning based knowledge tracing in intelligent tutoring systems', url: 'https://openurl.ebsco.com/linksvc/linking.aspx?sid=Primo&volume=15&date=20250701&spage=21395&issn=2045-2322&issue=1&genre=article&title=Scientific+reports.&epage=15&doi=10.1038%2Fs41598-025-07422-7' },
  { id: 6, name: 'Decision Trees for Decision Making', url: 'https://www.academia.edu/29034045/DECISION_MAKING_Decision_Trees_for_Decision_Making' },
  { id: 7, name: 'Deep learning based knowledge tracing in intelligent tutoring systems: Deep learning based knowledge tracing in intelligent tutoring systems', url: 'https://virtualibiblioteka.ktu.edu/permalink/370LABT_KTU/1jt7cka/cdi_crossref_primary_10_1038_s41598_025_07422_7' },
  { id: 8, name: 'AEKT: A Multi-dimensional Knowledge Tracing Model Integrating Student Cognitive Ability and Knowledge Acquisition', url: 'https://virtualibiblioteka.ktu.edu/permalink/370LABT_KTU/1jt7cka/cdi_springer_books_10_1007_978_981_95_3459_3_8' },
  { id: 9, name: 'Predicting students\` knowledge after playing a serious game based on learning analytics data: A case study', url: 'https://doi.org/10.1111/jcal.12405'},
  { id: 10, name: 'Lessons learned from the casualties of war: battlefield medicine and its implication for global trauma care', url: 'https://doi.org/10.1177/0141076815570923'},
  { id: 11, name: 'Two Decades of Saving Lives on the Battlefield: Tactical Combat Casualty Care Turns 20', url: 'https://virtualibiblioteka.ktu.edu/permalink/370LABT_KTU/1jt7cka/cdi_pubmed_primary_28290925'},

];
</script>
<template>
  <v-container>
    <!-- <h2 class="text-h5 font-weight-bold mb-4">1 Semestras</h2> -->
    <h2 class="text-h5 font-weight-bold mb-4">Literatūros sąrašas</h2>
    <v-list lines="one" bg-color="primary">
      <v-list-item v-for="src in sources" :key="src.id" :title="src.id + '. ' + src.name" :subtitle="src.url"
        variant="plain" :href="src.url"></v-list-item>
    </v-list>
    <br>

    <h2 class="text-h5 font-weight-bold mb-4 justify-center">Maketas</h2>

        <v-img justify="center" 
        :src=mainMock
        max-width="100vh"
        class="mx-auto"
        />

  </v-container>
</template>