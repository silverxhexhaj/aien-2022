<template>
  <div class="relative tracking-wide">
    <!-- HEADER -->
    <div
      class="bg-blue-800 fixed top-0 left-0 right-0 px-6 md:px-8 z-50 shadow-lg"
    >
      <div class="max-w-screen-xl mx-auto flex h-24 items-center">
        <div class="flex-1">
          <router-link
            to="/"
            class="text-white"
            @click.native="showMenu = false"
          >
            <img src="./assets/img/aien-logo-mobile.png" alt="" class="" />
          </router-link>
        </div>
        <div
          class="hidden md:flex justify-center flex-1 space-x-8 tracking-wider"
        >
          <router-link
            class="
              text-gray-200
              border-b border-transparent
              hover:border-white hover:text-white
              transition
              duration-300
              py-2
            "
            to="/"
          >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9404 6.90425L7.30894 1.27691C7.26839 1.23628 7.22023 1.20405 7.16721 1.18205C7.11419 1.16006 7.05735 1.14874 6.99995 1.14874C6.94255 1.14874 6.88572 1.16006 6.8327 1.18205C6.77968 1.20405 6.73151 1.23628 6.69097 1.27691L1.05952 6.90425C0.895459 7.06831 0.80249 7.29116 0.80249 7.52359C0.80249 8.0062 1.19487 8.39859 1.67749 8.39859H2.27085V12.414C2.27085 12.656 2.46636 12.8515 2.70835 12.8515H6.12495V9.78902H7.6562V12.8515H11.2916C11.5335 12.8515 11.7291 12.656 11.7291 12.414V8.39859H12.3224C12.5548 8.39859 12.7777 8.30698 12.9417 8.14155C13.2822 7.79976 13.2822 7.24605 12.9404 6.90425V6.90425Z"
                  fill="white"
                />
              </svg>
            </span>
          </router-link>
          <Menu as="div" class="relative inline-block text-left">
            <MenuButton
              class="
                inline-flex
                justify-center
                items-center
                w-full
                px-4
                py-2
                font-medium
                text-white
                bg-transparent
                rounded-md
                hover:bg-black hover:bg-opacity-30
                focus:outline-none
                transition
                duration-250
              "
            >
              <span>
                Akademia
              </span>
              <ChevronDownIcon
                class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </MenuButton>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="
                  absolute
                  right-0
                  w-56
                  mt-2
                  origin-top-right
                  bg-white
                  divide-y divide-gray-100
                  rounded-md
                  shadow-lg
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                      ]"
                    >
                      Edit
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                      ]"
                    >
                      Duplicate
                    </button>
                  </MenuItem>
                </div>
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                      ]"
                    >
                      Archive
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <router-link to="/akademia">
            <Menu as="div" class="relative inline-block text-left">
              <MenuButton
                class="
                  inline-flex
                  justify-center
                  items-center
                  w-full
                  px-4
                  py-2
                  font-medium
                  text-white
                  bg-transparent
                  rounded-md
                  hover:bg-black hover:bg-opacity-30
                  focus:outline-none
                  transition
                  duration-250
                "
              >
                <span>
                  Akademia
                </span>
              </MenuButton>
            </Menu>
          </router-link>
          <router-link
            class="
              text-white
              font-semibold
              border-b border-transparent
              hover:border-white
              transition
              duration-300
              py-2
            "
            to="/akademia"
          >
            <span>Akademia</span>
          </router-link>
          <router-link
            class="
              text-white
              font-semibold
              border-b border-transparent
              hover:border-white
              transition
              duration-300
              py-2
            "
            to="/projekte"
          >
            <span>Projekte</span>
          </router-link>
          <router-link
            class="
              text-white
              font-semibold
              border-b border-transparent
              hover:border-white
              transition
              duration-300
              py-2
            "
            to="/aktivitete"
          >
            <span>Aktivitete</span>
          </router-link>
          <router-link
            class="
              text-white
              font-semibold
              border-b border-transparent
              hover:border-white
              transition
              duration-300
              py-2
            "
            to="/publikime"
          >
            <span>Publikime</span>
          </router-link>
          <router-link
            class="
              text-white
              font-semibold
              border-b border-transparent
              hover:border-white
              transition
              duration-300
              py-2
            "
            to="/blog"
          >
            <span>Blog</span>
          </router-link>
        </div>
        <div class="hidden md:flex justify-end flex-1 text-white py-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.72727 7.09091H17.2727M10 18C14.4182 18 18 14.4182 18 10C18 5.58182 14.4182 2 10 2C5.58182 2 2 5.58182 2 10C2 14.4182 5.58182 18 10 18ZM10 18C12.1818 18 12.9091 14.3636 12.9091 10C12.9091 5.63636 12.1818 2 10 2C7.81818 2 7.09091 5.63636 7.09091 10C7.09091 14.3636 7.81818 18 10 18ZM2.72727 12.9091H17.2727H2.72727Z"
              stroke="white"
            />
          </svg>
        </div>

        <div class="flex items-center justify-center md:hidden">
          <img
            @click="showMenu = true"
            v-if="!showMenu"
            width="32"
            src="./assets/img/menu-icon-2.svg"
            alt=""
          />
          <img
            @click="showMenu = false"
            v-if="showMenu"
            width="24"
            src="./assets/img/close-icon.svg"
            alt=""
          />
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="showMenu"
      class="fixed mt-24 top-0 right-0 left-0 bottom-0 bg-blue-800 z-50 p-6"
    >
      <div class="flex flex-col space-y-2 tracking-wider">
        <router-link
          class="
            text-white text-xl
            border-b border-transparent
            hover:border-white hover:text-white
            transition
            duration-300
            py-4
          "
          @click.native="showMenu = false"
          to="/"
        >
          <span>Home</span>
        </router-link>
        <router-link
          class="
            text-white text-xl
            border-b border-transparent
            hover:border-white hover:text-white
            transition
            duration-300
            py-4
          "
          @click.native="showMenu = false"
          to="/akademia"
        >
          <span> Akademia </span>
        </router-link>
        <router-link
          class="
            text-white text-xl
            border-b border-transparent
            hover:border-white hover:text-white
            transition
            duration-300
            py-4
          "
          @click.native="showMenu = false"
          to="/projekte"
        >
          <span> Projekte </span>
        </router-link>
        <router-link
          class="
            text-white text-xl
            border-b border-transparent
            hover:border-white hover:text-white
            transition
            duration-300
            py-4
          "
          @click.native="showMenu = false"
          to="/aktivitete"
        >
          <span> Aktivitete </span>
        </router-link>
        <router-link
          class="
            text-white text-xl
            border-b border-transparent
            hover:border-white hover:text-white
            transition
            duration-300
            py-4
          "
          @click.native="showMenu = false"
          to="/publikime"
        >
          <span> Publikime </span>
        </router-link>
        <router-link
          class="
            text-white text-xl
            border-b border-transparent
            hover:border-white hover:text-white
            transition
            duration-300
            py-4
          "
          @click.native="showMenu = false"
          to="/blog"
        >
          <span> Blog </span>
        </router-link>
      </div>
    </div>

    <router-view />

    <!-- FOOTER -->
    <div class="px-4 md:px-8 bg-blue-800 py-8 text-white">
      <div class="max-w-screen-xl mx-auto h-full flex flex-col space-y-4">
        <div class="pb-8 flex justify-center md:justify-start">
          <router-link to="/">
            <img src="./assets/img/aien-logo.png" alt="" class="w-64" />
          </router-link>
        </div>
        <div
          class="
            flex flex-col
            md:flex-row
            items-center
            h-full
            space-y-4
            md:space-y-0
          "
        >
          <div class="flex-1 flex space-x-4">
            <div
              class="
                cursor-pointer
                border-b border-transparent
                hover:border-white
                transition
                duration-300
              "
            >
              Kontakt
            </div>
            <div
              class="
                cursor-pointer
                border-b border-transparent
                hover:border-white
                transition
                duration-300
              "
            >
              Impressum
            </div>
          </div>
          <div class="flex-1 flex space-x-4 justify-end">
            <img src="./assets/img/github-icon.svg" alt="" class="w-8" />
            <img src="./assets/img/linkedin-icon.svg" alt="" class="w-8" />
            <img src="./assets/img/fb-icon.svg" alt="" class="w-8" />
            <img src="./assets/img/instagram-icon.svg" alt="" class="w-8" />
          </div>
        </div>
        <div class="text-center text-sm">
          Copyright ©2022 Akademia e Integrimit Europian dhe Negociatave
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
  name: "App",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
