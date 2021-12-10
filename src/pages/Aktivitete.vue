<template>
  <div class="h-32 bg-blue-800 mt-24 px-6 md:px-8">
    <div class="relative max-w-screen-xl mx-auto flex items-center h-full">
      <h1 class="text-white text-4xl font-bold">Aktivitete</h1>
    </div>
  </div>
  <div class="p-6 md:p-8">
    <div class="min-h-screen relative max-w-screen-xl mx-auto">
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <!-- v-for="post in posts"
          :key="post.id" -->
        <li class="bg-white shadow-md rounded-md">
          <div href="#" class="">
            <img
              class="rounded-t-md h-48 object-cover w-full"
              src="../assets/img/cover-img.jpeg"
              alt=""
            />
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="text-gray-900 font-bold text-xl tracking-tight mb-2">
                Moduli III, Edicioni III: “Lëvizja e lirë e punëtorëve dhe të
                d...
              </h5>
            </a>
            <p class="font-normal text-gray-700 mb-3">
              Në kuadër të Akademisë së Integrimit Europian dhe Negociatave,
              ditë...
            </p>
            <div class="text-sm flex items-center justify-end">
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
        </li>
        <li class="bg-white shadow-md rounded-md">
          <div href="#" class="">
            <img
              class="rounded-t-md h-48 object-cover w-full"
              src="../assets/img/cover-img.jpeg"
              alt=""
            />
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="text-gray-900 font-bold text-xl tracking-tight mb-2">
                Moduli III, Edicioni III: “Lëvizja e lirë e punëtorëve dhe të
                d...
              </h5>
            </a>
            <p class="font-normal text-gray-700 mb-3">
              Në kuadër të Akademisë së Integrimit Europian dhe Negociatave,
              ditë...
            </p>
            <div class="text-sm flex items-center justify-end">
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
        </li>
        <li class="bg-white shadow-md rounded-md">
          <div href="#" class="">
            <img
              class="rounded-t-md h-48 object-cover w-full"
              src="../assets/img/cover-img.jpeg"
              alt=""
            />
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="text-gray-900 font-bold text-xl tracking-tight mb-2">
                Moduli III, Edicioni III: “Lëvizja e lirë e punëtorëve dhe të
                d...
              </h5>
            </a>
            <p class="font-normal text-gray-700 mb-3">
              Në kuadër të Akademisë së Integrimit Europian dhe Negociatave,
              ditë...
            </p>
            <div class="text-sm flex items-center justify-end">
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
        </li>
        <li class="bg-white shadow-md rounded-md">
          <div href="#" class="">
            <img
              class="rounded-t-md h-48 object-cover w-full"
              src="../assets/img/cover-img.jpeg"
              alt=""
            />
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="text-gray-900 font-bold text-xl tracking-tight mb-2">
                Moduli III, Edicioni III: “Lëvizja e lirë e punëtorëve dhe të
                d...
              </h5>
            </a>
            <p class="font-normal text-gray-700 mb-3">
              Në kuadër të Akademisë së Integrimit Europian dhe Negociatave,
              ditë...
            </p>
            <div class="text-sm flex items-center justify-end">
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aktivitete",
  // data: {
  //   posts: [
  //     {
  //       id: 1,
  //       title:
  //         'Moduli III, Edicioni III: “Lëvizja e lirë e punëtorëve dhe të d...',
  //       abstract:
  //         'Në kuadër të Akademisë së Integrimit Europian dhe Negociatave, ditë...',
  //     }
  //   ],
  // },
};
</script>
