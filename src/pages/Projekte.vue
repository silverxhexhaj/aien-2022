<template>
  <div class="h-32 bg-blue-800 mt-24 px-4 md:px-8">
    <div class="relative max-w-screen-xl mx-auto flex items-center h-full">
      <h1 class="text-white text-4xl font-bold">Projekte</h1>
    </div>
  </div>
  <div class="p-4 md:p-8 min-h-screen">
    <div class="relative max-w-screen-xl mx-auto">
      <div class="shadow-md rounded-md overflow-hidden">
        <TabGroup :defaultIndex="3">
          <TabList class="flex flex-row-reverse p-4 bg-blue-50 rounded-t-md">
            <Tab
              v-for="category in Object.keys(categories)"
              as="template"
              :key="category"
              v-slot="{ selected }"
            >
              <button
                :class="[
                  'text-base w-full py-4 font-bold text-blue-900 rounded-md',
                  'focus:outline-none',
                  selected ? 'bg-white' : '',
                ]"
              >
                {{ category }}
              </button>
            </Tab>
          </TabList>

          <TabPanels class="px-4 pb-4 bg-blue-50">
            <TabPanel
              v-for="(posts, idx) in Object.values(categories)"
              :key="idx"
              :class="['', 'focus:outline-none']"
            >
              <ul
                class="
                  flex flex-col-reverse
                  space-y-reverse space-y-6
                  text-gray-900
                  p-6
                  rounded-md
                  overflow-hidden
                  bg-white
                "
              >
                <li v-for="post in posts" key="post.id" class="relative">
                  <div class="flex items-start justify-between mb-4 relative">
                    <h3 class="font-bold text-lg w-5/6">
                      {{ post.title }}
                    </h3>
                    <span class="text-sm font-medium text-gray-400 absolute top-0 right-0">
                      {{ post.date }}
                    </span>
                  </div>

                  <div>{{ post.paragraph }}</div>
                </li>
              </ul>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup() {
    let categories = ref({
      2016: [
        {
          id: 1,
          title: "Debat Politikash me botën akademike”",
          date: "2016 – 2018",
          paragraph:
            "Jean Monnet “Debat Politikash me botën akademike” (2016 – 2018), mbështetur nga Agjencia Ekzekutive e Arsimit, Audiovizualitetit dhe Kulturës, Komisioni Europian. Ky projekt, në kuadër të Programit Erasmus +, synon nxitjen e dialogut midis botës akademike dhe hartuesve të politikave, veçanërisht nxitjen e qeverisjes drejt politikave të Bashkimit Europian dhe përgatitjen e Procesit të Negociatave Shqipëri-BE. Një seri workshop-esh cilësore dhe të mirëstrukturuara mbi BE-në, që kombinojnë njohuri teorike, praktike dhe shkëmbime njohurish, do të trajtojnë çështjet më të rëndësishme që lidhen me BE-në në Shqipëri dhe rajon, fokusuar në kapitujt e aderimit dhe prioritetet, si reforma në drejtësi dhe e administratës publike, lufta kundër krimit të organizuar dhe korrupsionit, mbrojtja e të drejtave të njeriut dhe politikat e anti-diskriminimit, reforma për sigurinë e ushqimeve, sfidat mjedisore etj. Më shumë informacion për AIEN gjeni dhe në faqen zyrtare dedikuar: www.aien.al",
        },
      ],
      2018: [
        {
          id: 1,
          title:
            "Nga Varshava në Tiranë: Kapërcimi i së kaluarës së bashku",
          date: "2018 - 2019",
          paragraph:
            "Ky projekt u implementua nga Akademia e Integrimit Europian dhe Negociatave, në bashkëpunim me Institutin EUROPEUM për Politika Europiane në Pragë, Shoqatën e Politikave të Jashtme Sllovake, Lëvizjen Evropiane Shqipëri, Wise Europa dhe partnerë të tjerë rajonalë, dhe mbështetur nga Fondi Visegrad. Një panel diskutimi u organizua për të prezantuar punimin: 'Nga Varshava në Tiranë: Kapërcimi i së kaluarës së bashku. Praktika dhe mësime të nxjerra nga Visegrad 4 dhe Ballkan Perëndimor' me qëllim promovimin dhe inkurajimin e një qasje rajonale për të përmirësuar procesin të pajtimit të qëndrueshëm në Ballkanin Perëndimor, si dhe për të mbështetur një pjesëmarrje më të gjerë të palëve të interesuara për një consensus të gjerë shoqëror Një tjetër workshop i mbyllur me ekspertë të fushës nga disa organizata lokale dhe rajonale, diskutuar mbi proceset e pajtimit në vendet e Vishegradit: Kapërcimi i Ndasive dhe Mësimet e Nxjerra, dhe ka për qëllim të demonstrojë se promovimi i pajtimit në Ballkanin Perëndimor është i arritshëm përmes një konsensusi më të gjerë shoqëror dhe kuptim më të thellë dhe përfshirje e palëve të ndryshme të interesit. Pajtimi përbën një gur themelor për demokratizimin e vendeve të Ballkanit Perëndimor përveç rëndësisë së tij në përmirësimin e marrëdhënieve socio-ekonomike midis shoqërive lokale.",
        },
        {
          id: 2,
          title:
            "Ndërgjegjësimi i të rinjve për çështjet e ndryshimeve klimatike dhe qëndrueshmërisë në kuadër të proçesit të anëtarësimit në BE.",
          date: "2018 - 2019",
          paragraph:
            "Akademia e Integrimeve Evropiane dhe Negociatave në bashkëpunim me organizatën jo-fitimprurëse malazeze, Martin Schneider-Jacoby Association (MSJA), Instituti për Politika Zhvillimore - INDEP me seli në Kosovë dhe me mbështetjen financiare të Western Balkan Founds (WBF) implementuan projektin “Ndërgjegjësimi i të rinjve për çështjet e ndryshimeve klimatike dhe qëndrueshmërisë në kuader të proçesit të anëtarësimit në BE”. Ky projekt synon të ndërgjegjësojë të rinjve në rajonin e Ballkanit Perëndimor për rreziqet e ndryshimeve klimaterike dhe problemet mjedisore të cilat mund të ndikojnë në jetën e përditshme. Gjatë projektit, si pjesë e programit ishte një debat stimulues i cili synonte të nxisë mendimin kritik të të rinjve për ndryshimin klimaterike dhe sfidat e ardhshme mjedisore. 30 të rinj nga vendet partnere (Shqipëria, Kosova, Mali i Zi) patën mundësinë të shkëmbejnë informacione mbi sfidat dhe performancën e institucioneve shtetërore dhe strukturave rajonale, për sa i përket standardeve të BE-së në fushën e mjedisit. Projekti synon të identifikonte se si të rinjtë i perceptojnë ndryshimet klimaterike dhe ndikimin e që kanë në vendbanimin, shtetin dhe rajonin e tyre. Kjo u arrit me anë të një petësori dhe një broshurë informuese (“Percepimi i të rinjve nga Shqipëria, Kosova dhe Mali i Zi për ndryshimet klimaterike”) u publikua duke u bazuar në perceptimet e tyre. Pjesëmarrësit morrën pjesë ne një workshop dhe konkurs me tematikë të njëjtë me temën e diskutuar gjatë projektit.",
        },
      ],
      2019: [
        {
          id: 1,
          title:
            "Përmirësim i Bashkëpunim midis Administratës Publike dhe Aktorëve jo-qeveritarë të Përfshirë nga Procesin e Pranimit në BE.",
          date: "2019",
          paragraph:
            "Ky projekt u financua nga Instituti Suedez dhe u implementua në Prill 2019-Tetor 2019 në Partneritet me European Policy Center, Serbia; Ministry of Foreign Affairs and European Integration, Montengro; European University, North Macedonia.Qëllimi kryesor i projektit ishte informimi dhe ngritja e kapaciteteve të përfaqësuesve të administratës publike dhe shoqërisë civile (OJQ, Biznes, media) në lidhje me gjendjen e integrimit në BE në Ballkanin Perëndimor; strukturat e krijuara të bisedimeve dhe rastet e suksesit nga rajoni që i referohen pjesëmarrjes dhe bashkëpunimit të aktorëve jo-qeveritarë në proces.Një qëllim tjetër i rëndësishëm ishte dokumentimi dhe prezantimi i shembujve pozitivë në rritjen e angazhimit të aktorëve jo-qeveritarë dhe pjesëmarrjes në proceset e pranimit në BE. Dhe për të shkëmbyer përvojën suedeze në krijimin e bashkëpunimeve më të mira midis aktorëve të ndryshëm në shoqëri përmes nismave të përbashkëta.Gjatë projektit, u publikua një studim mbi strukturat e vendosura të negociatave dhe rastet më të mira nga rajoni rreth pjesëmarrjes dhe bashkëpunimit të aktorëve jo-qeveritarë në proces. (4 studiues nga Ballkani Perëndimor). U organizua edhe një Forum Rajonal në Tiranë me ekspertë suedezë dhe rreth 50 pjesëmarrës nga Ballkani Perëndimor, duke paraqitur raste suksesi në rritjen e angazhimit të aktorëve jo-qeveritarë dhe pjesëmarrjes në proceset e pranimit në BE.",
        },
        {
          id: 2,
          title:
            "AIEN - Akademia e Integrimit Europian dhe Negociatave",
          date: "2019 - 2021",
          paragraph:
            "AIEN synon të ofrojë një platformë që shërben si një forum efektiv dhe një seri workshopesh në ushqyerjen e bashkëpunimit dhe ndërveprimit ndërmjet një rrjeti të gjërë pjesëmarrësish, dhe po ashtu zhvillimin/përditësimin e njohurive dhe prespektivave të bashkëpunimit në çështjet europiane ndërmjet target-grupeve të ndryshme në Shqipëri.Akademia do të shërbejë si urë komunikimi ndërmjet grupeve të ndryshme të interesit në shoqërinë shqiptare, duke thelluar njohuritë dhe aftësitë nga një prespektivë e përbashkët, dhe sidomos në përballimin e sfidave së bashku. Një vlerë e shtuar e Akademisë është përfshirja e ekspertëve, lektorëve dhe folësve nga BE dhe Europa Juglindore, për të ndarë mësimet e nxjerra, praktikat më të mira dhe për të ofruar një qasje krahasimore. Ky grup heterogjen, i cili do të finalizohet me krijimin e një Rrjeti Profesionistësh mbi BE, pasuron frymën e Workshopeve dhe është një aset i rëndësishëm në dhënien e një prespektive të re në debatet dhe diskutimet e fushës. Rrjeti dhe baza e të dhënave online ofrojnë një mundësi për të zgjeruar kontaktet dhe vendosjen e bashkëpunimit të ardhshëm. Target grupet kryesore janë përfaqësues nga OShC-të, akademikë, administrata publike, media, sektori privat dhe aktivistë.Ky projekt zbatohet nga Akademia e Integrimit Europian dhe Negociatave, në bashkëpunim me Partnerët në Shqipëri për Ndryshim dhe Zhvillim dhe mbështetet nga Drejtoria e Përgjithshme e Financimeve dhe Kontraktimeve për Fondet e BE-së, Bankës Botërore dhe Donatorëve të tjerë, Ministria e Financave dhe Ekonomisë, Shqipëri. Ky projekt implementohet gjatë periudhës tetor 2019- prill 2021.",
        },
      ],
      2020: [
        {
          id: 1,
          title: "Akademia e Integrimit Europian dhe Negociatave",
          date: "2020-2022",
          paragraph:
            "Jean Monnet “Policy Debate with academic world”, supported by Education, Audiovisual and Culture Executive Agency, European Commission. This project, in framework of Erasmus + Programme, aims at fostering the dialogue between the academic world and policy-makers, in particular with the aim of enhancing governance of EU policies and preparation of Albania EU Negotiation Process. Series of 12 Workshops, tackling specific Albania-EU Accession Chapters, each lasting 2 days, divided in 6 sessions and will focus on the main EU related issues in Albania and the region. The participants will get acquainted with and informed on topics and EU Chapters considered as priorities for our country such as: The Four Freedoms of the European Union: Free Movement of good and services; Access to labour market and free movement of workers; Enforcement of human rights in Albania and Europe; Targeting energy efficiency challenge in sustainable development of the country; Education, training and youth initiatives; Environmental concerns in Albania and in reaching EU standards.",
        },
        {
          id: 2,
          title: "SMART ADRIA BLUE GROWTH (SABG)",
          date: "2020-2022",
          paragraph:
            "AIEN is part of the Albanian consortium lead by Union of Chambers of Commerce & Industry of Albania, implementing the Project “Establishing a Blue Growth S3 Platform and Blue Cluster Covering Adriatic-Ionian Region” in framework of Interreg IPA CBC Italy-Albania-Montenegro Programme 2014/2020",
        },
      ],
    });

    return { categories };
  },
};
</script>
