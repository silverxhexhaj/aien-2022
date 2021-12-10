<template>
  <div class="mt-24 min-h-screen">
    <div class="bg-blue-800 relative px-6 md:px-8 py-12">
      <!-- <div class="carousel-container">
        <transition-group class="carousel" tag="div">
          <div v-for="slide in slides" class="slide" :key="slide.id">
            <h4>{{ slide.title }}</h4>
          </div>
        </transition-group>
        <div class="carousel-controls">
          <button class="carousel-controls__button" @click="previous">
            &#60;
          </button>
          <button class="carousel-controls__button" @click="next">&#62;</button>
        </div>
      </div> -->

      <div class="max-w-screen-xl mx-auto bg-blue-800 relative">
        <!-- Carousel Body -->
        <div
          class="
            relative
            rounded-lg
            block
            md:flex
            items-center
            shadow-2xl
            bg-blue-800
          "
        >
          <div
            class="
              relative
              w-full
              md:w-2/5
              h-full
              overflow-hidden
              rounded-t-lg
              md:rounded-t-none md:rounded-l-lg
              text-2xl
              h-64 md:h-96
            "
          >
            <img
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="../assets/img/cover-img.jpeg"
              alt=""
            />
          </div>
          <div class="w-full md:w-3/5 h-full flex items-center rounded-lg">
            <div class="p-12 md:pr-24 md:pl-16 md:py-12">
              <h2 class="text-white font-bold text-2xl mb-4">
                Konferenca Përmbyllëse AIEN Edicioni II “Përgatitja për
                Negociata: Nevoja për Kapacitete”
              </h2>
              <p class="text-white">
                Akademia e Integrimit Europian dhe Negociatave ka mbajtur
                Konferencën “Përgatitja për Negociata: Nevoja për Kapacitete”,
                më datë 8 korrik 2021 në ambientet e Hotel Rogner.
              </p>
              <a
                class="
                  flex
                  items-baseline
                  mt-3
                  text-white
                  hover:text-gray-200
                  focus:text-gray-200
                "
                href=""
              >
                <span>Me Shume</span>
                <span class="text-xs ml-1">&#x279c;</span>
              </a>
            </div>
            <svg
              class="
                hidden
                md:block
                absolute
                inset-y-0
                h-full
                w-24
                fill-current
                text-blue-800
                -ml-12
              "
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
          <div class=" absolute left-0 right-0 hidden md:flex justify-between">
            <button
              class="
                bg-blue-800
                rounded-full
                shadow-lg
                h-10
                w-10
                text-2xl text-white
                hover:text-white
                focus:text-white
                -ml-6
                focus:outline-none focus:shadow-outline
              "
            >
              <span class="block" style="transform: scale(-1)">&#x279c;</span>
            </button>
            <button
              class="
                bg-blue-800
                rounded-full
                shadow-lg
                h-10
                w-10
                text-2xl text-white
                hover:text-white
                focus:text-white
                -mr-6
                focus:outline-none focus:shadow-outline
              "
            >
              <span class="block" style="transform: scale(1)">&#x279c;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col space-y-16 my-16 z-30 relative">
      <!-- About Us -->
      <div class="px-6 md:px-8">
        <div class="max-w-screen-xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div class="flex-1 text-gray-800">
              <div
                class="
                  uppercase
                  underline underline-offset-2
                  font-bold
                  text-xs
                  mb-2
                "
              >
                Who we are
              </div>
              <div class="text-4xl font-bold mb-4">
                Thinking ahead for Europe
              </div>
              <div class="mb-4">
                Akademia e Integrimit Europian dhe Negociatave synon të
                kontribuojë në përgatitjen e një Shqipërie Europiane, të bazuar
                në parimet e respektimit të shtetit të së drejtës, të drejtave
                të njeriut, lirisë, ...
              </div>
              <div class="text-sm flex items-center">
                <span
                  class="
                    cursor-pointer
                    font-medium
                    text-blue-700
                    hover:text-blue-500
                  "
                  >View more</span
                >
                <span class="text-blue-700 text-xs ml-1">&#x279c;</span>
              </div>
            </div>
            <div class="flex-1 col-span-2">
              <div
                class="
                  flex flex-col
                  space-y-4
                  bg-white
                  shadow-lg
                  rounded-md
                  p-4
                  md:p-8
                  text-gray-900
                "
              >
                <div class="text-2xl font-bold">Topics</div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 font-semibold">
                  <div
                    class="
                      px-6
                      py-4
                      rounded
                      flex
                      items-center
                      bg-red-100
                      text-red-700
                    "
                  >
                    Zgjerimi i BE-së
                  </div>
                  <div
                    class="
                      px-6
                      py-4
                      rounded
                      flex
                      items-center
                      bg-orange-100
                      text-orange-700
                    "
                  >
                    Shteti i së Drejtës dhe Qeverisja e Mirë
                  </div>
                  <div
                    class="
                      px-6
                      py-4
                      rounded
                      flex
                      items-center
                      bg-yellow-100
                      text-yellow-700
                    "
                  >
                    Migracioni
                  </div>
                  <div
                    class="
                      px-6
                      py-4
                      rounded
                      flex
                      items-center
                      bg-green-100
                      text-green-700
                    "
                  >
                    Zhvillimi Ekonomik dhe Konkurrenca
                  </div>
                  <div
                    class="
                      px-6
                      py-4
                      rounded
                      flex
                      items-center
                      bg-sky-100
                      text-sky-700
                    "
                  >
                    Edukimi, Shkenca dhe Inovacioni
                  </div>
                  <div
                    class="
                      px-6
                      py-4
                      rounded
                      flex
                      items-center
                      bg-purple-100
                      text-purple-700
                    "
                  >
                    Bashkëpunimi Rajonal
                  </div>
                  <div
                    class="
                      px-6
                      py-4
                      rounded
                      flex
                      items-center
                      bg-pink-100
                      text-pink-700
                    "
                  >
                    Mjedisi, Energjia dhe Klima
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Latest Publications -->
      <div class="px-6 md:px-8">
        <div class="max-w-screen-xl mx-auto border-t pt-10">
          <div class="grid grid-cols-1 lg:grid-cols-7 md:gap-10 space-y-6 md:space-y-0 text-gray-900">
            <div class="col-span-2">
              <div class="text-xl font-bold mb-2 tracking-tight">
                Latest Publications
              </div>
              <div class="text-sm mb-4">
                AIEN produces research papers and reports on current and
                upcoming policy challenges. Browse through the latest
                publications on the right or click to view all our publications.
              </div>
              <div class="text-sm flex items-center">
                <span
                  class="
                    cursor-pointer
                    font-medium
                    text-blue-700
                    hover:text-blue-500
                  "
                  >View all publication</span
                >
                <span class="text-xs ml-1">&#x279c;</span>
              </div>
            </div>
            <div class="col-span-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              <div class="flex flex-col space-y-3">
                <div class="shadow-lg rounded-md overflow-hidden h-full">
                  <img
                    class="rounded-t-md h-full object-cover"
                    src="../assets/img/pub-1.png"
                    alt=""
                  />
                </div>
                <div class="text-xs font-bold">
                  RAPORT PËRMBLEDHËS " Procesi i integrimit të shoqërisë civil
                </div>
              </div>
              <div class="flex flex-col space-y-3">
                <div class="shadow-lg rounded-md overflow-hidden h-full">
                  <img
                    class="rounded-t-md h-full object-cover"
                    src="../assets/img/pub-2.png"
                    alt=""
                  />
                </div>
                <div class="text-xs font-bold">
                  Study "CIVIL SOCIETY AND ALBANIA'S EU INTEGRATION PROCESS
                </div>
              </div>
              <div class="flex flex-col space-y-3">
                <div class="shadow-lg rounded-md overflow-hidden h-full">
                  <img
                    class="rounded-t-md h-full object-cover"
                    src="../assets/img/pub-3.png"
                    alt=""
                  />
                </div>
                <div class="text-xs font-bold">
                  Nga Varshava në Tiranë: Kapërcimi i së kaluarës së bashku
                </div>
              </div>
              <div class="flex flex-col space-y-3">
                <div class="shadow-lg rounded-md overflow-hidden h-full">
                  <img
                    class="rounded-t-md h-full object-cover"
                    src="../assets/img/pub-4.png"
                    alt=""
                  />
                </div>
                <div class="text-xs font-bold">
                  Pajtimi në Ballkanin Perëndimor: Kapërcimi i së kaluarës së
                </div>
              </div>
              <div class="flex flex-col space-y-3">
                <div class="shadow-lg rounded-md overflow-hidden h-full">
                  <img
                    class="rounded-t-md h-full object-cover"
                    src="../assets/img/pub-5.png"
                    alt=""
                  />
                </div>
                <div class="text-xs font-bold">
                  Perceptimi i të rinjve nga Shqipëria, Kosova dhe Mali i Zi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Latest News -->
      <div class="px-6 md:px-8">
        <div class="max-w-screen-xl mx-auto border-t pt-10">
          <div class="grid grid-cols-1 lg:grid-cols-7 md:gap-10 space-y-6 md:space-y-0 text-gray-900">
            <div class="col-span-2">
              <div class="text-xl font-bold mb-2 tracking-tight">
                Latest News
              </div>
              <div class="text-sm mb-4">
                In this section we offer timely and succinct analysis of current
                events and opinion on the latest developments in Europe.
              </div>
              <div class="text-sm flex items-center">
                <span
                  class="
                    cursor-pointer
                    font-medium
                    text-blue-700
                    hover:text-blue-500
                  "
                  >View all news</span
                >
                <span class="text-xs ml-1">&#x279c;</span>
              </div>
            </div>
            <div class="col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div class="bg-white shadow-md rounded-md">
                <div href="#" class="">
                  <img
                    class="rounded-t-md h-48 object-cover w-full"
                    src="https://www.ceps.eu/wp-content/uploads/2021/12/AUKUS-and-the-Strategic-Compass-1200x800.jpg"
                    alt=""
                  />
                </div>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="
                        text-gray-900
                        font-bold
                        text-lg
                        tracking-tight
                        mb-2
                        leading-tight
                      "
                    >
                      AUKUS and the Strategic Compass
                    </h5>
                  </a>
                  <p class="text-sm font-normal text-gray-700 mb-3">
                    Despite incoming US National Security Adviser Jake Sullivan
                    expressing disappointment about EU Member States’ decision
                    to move forward with the…
                  </p>
                  <div
                    class="
                      text-sm
                      flex
                      items-center
                      text-blue-700
                      hover:text-blue-500
                    "
                  >
                    <span class="cursor-pointer font-medium">Read More</span>
                    <span class="text-xs ml-1">&#x279c;</span>
                  </div>
                </div>
              </div>
              <div class="bg-white shadow-md rounded-md">
                <div href="#" class="">
                  <img
                    class="rounded-t-md h-48 object-cover w-full"
                    src="https://www.ceps.eu/wp-content/uploads/2021/11/banknotes-money-on-chart-1200x800.jpg"
                    alt=""
                  />
                </div>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="
                        text-gray-900
                        font-bold
                        text-lg
                        tracking-tight
                        mb-2
                        leading-tight
                      "
                    >
                      How robust is the EU recovery?
                    </h5>
                  </a>
                  <p class="text-sm font-normal text-gray-700 mb-3">
                    Earlier in 2021 most economists, including those within
                    international organisations, predicted that recovery from
                    the outbreak of the Covid-19 pandemic…
                  </p>
                  <div
                    class="
                      text-sm
                      flex
                      items-center
                      text-blue-700
                      hover:text-blue-500
                    "
                  >
                    <span class="cursor-pointer font-medium">Read More</span>
                    <span class="text-xs ml-1">&#x279c;</span>
                  </div>
                </div>
              </div>
              <div class="bg-white shadow-md rounded-md">
                <div href="#" class="">
                  <img
                    class="rounded-t-md h-48 object-cover w-full"
                    src="https://www.ceps.eu/wp-content/uploads/2021/10/pexels-markus-spiske-2990650s-1200x800.jpg"
                    alt=""
                  />
                </div>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="
                        text-gray-900
                        font-bold
                        text-lg
                        tracking-tight
                        mb-2
                        leading-tight
                      "
                    >
                      COP26 in Glasgow
                    </h5>
                  </a>
                  <p class="text-sm font-normal text-gray-700 mb-3">
                    The COP26 climate summit is the most anticipated COP in
                    years, especially as it’s the first COP since 2019 thanks…
                  </p>
                  <div
                    class="
                      text-sm
                      flex
                      items-center
                      text-blue-700
                      hover:text-blue-500
                    "
                  >
                    <span class="cursor-pointer font-medium">Read More</span>
                    <span class="text-xs ml-1">&#x279c;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isSuccess: null,
      responseData: null,
      slides: [
        {
          title:
            "Moduli III, Edicioni III: “Lëvizja e lirë e punëtorëve dhe të drejtat e punëtorëve”",
          id: 1,
        },
        {
          title:
            "Moduli II, Edicioni III: “Lëvizja e Lirë e Mallrave & E Drejta e Vendosjes dhe Liria për të ofruar Shërbime”",
          id: 2,
        },
        {
          title:
            "Moduli I, Edicioni III: “Zgjerimi i Bashkimit Europian dhe Integrimi i Shqipërisë drejt BE”",
          id: 3,
        },
      ],
    };
  },
  methods: {
    testAxios() {
      axios
        .get("/api/lorem")
        .then((response) => {
          this.responseData = response.data;
          this.isSuccess = true;
        })
        .catch((error) => {
          this.responseData = error.data;
          this.isSuccess = false;
        });
    },
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    },
  },
};
</script>
