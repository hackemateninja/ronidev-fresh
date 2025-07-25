import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ronin dev | Elixir developer</title>
        <meta
          name="description"
          content="Ronin Dev Personal portfolio | Herman Orlando Morales López Senior Elixir developer"
        />
        <link rel="icon" href="images/favicon.png" />

        <meta
          name="keywords"
          content="symfony, developer, Elixir, vue, defold, wasp, liveview senior, guatemala, prodigal, son, sulu, sylius, contao, sonata, adminbundle, UX-UI, full-stack, stimulus, turbo, hotwire, liveComponents, twig, Herman, Orlando, Morales, López, php freelancer"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ronindev.ninja" />
        <meta name="author" content="Ronindev" />

        <meta property="og:title" content="Ronin dev | Elixir developer" />
        <meta
          property="og:description"
          content="Ronin Dev Personal portfolio | Herman Orlando Morales López Senior Elixir developer"
        />
        <meta property="og:url" content="https://www.ronindev.ninja" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="images/meta.jpg"
        />
        <meta
          property="og:site_name"
          content="Ronin dev | Elixir developer"
        />
        <meta property="og:locale" content="en_EN" />

        <meta
          name="twitter:card"
          content="images/x.jpg"
        />
        <meta name="twitter:site" content="@Hackemateninja" />
        <meta name="twitter:creator" content="@Hackemateninja" />
        <meta
          name="twitter:title"
          content="Ronin dev | Elixir developer"
        />
        <meta
          name="twitter:description"
          content="Ronin Dev Personal portfolio | Herman Orlando Morales López Senior Elixir developer"
        />
        <meta
          name="twitter:image"
          content="images/x.jpg"
        />
        <meta name="twitter:url" content="https://www.ronindev.ninja" />
        <link rel="stylesheet" href="/styles.css" />
        <script src="/app.js" type="module" defer />
      </head>

      <body class="font-inter antialiased bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100 tracking-tight">
        <div class="overflow-hidden supports-[overflow:clip]:overflow-clip">
          <div class="max-w-[728px] mx-auto">
            <div class="w-full bg-white dark:bg-gray-900 border-x border-gray-100 dark:border-gray-800 box-content">
              <div class="px-3 md:px-16">
                <div class="flex flex-col min-h-screen">
                  <header class="text-center pt-6">
                    <div class="flex justify-end mb-2">
                      <div class="inline-flex items-center justify-center ml-auto">
                        <input
                          type="checkbox"
                          name="light-switch"
                          id="light-switch"
                          class="light-switch sr-only"
                        />
                        <label
                          class="relative cursor-pointer p-2"
                          for="light-switch"
                        >
                          <svg
                            class="dark:hidden"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              class="fill-gray-300"
                              d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                            />
                            <path
                              class="fill-gray-400"
                              d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                            />
                          </svg>
                          <svg
                            class="hidden dark:block"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              class="fill-gray-500"
                              d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                            />
                            <path
                              class="fill-gray-400"
                              d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                            />
                          </svg>
                          <span class="sr-only">
                            Switch to light / dark version
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="mb-10">
                      <img
                        class="inline-flex rounded-full shadow-lg mb-4"
                        src="images/me.png"
                        width="48"
                        height="48"
                        alt="Jordan Walker"
                      />
                      <div class="mb-5">
                        <h1 class="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-2xl mb-1">
                          Herman Orlando Morales López | Ronin Dev
                        </h1>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          Senior Full Stack developer, UX-UI, Elixir, Deno, Vue
                          and Symfony PHP specialist <br />{" "}
                          from Guatemala. Martial arts lover 🥋🥊
                        </p>
                      </div>
                      <a
                        class="btn-sm text-gray-200 dark:text-gray-800 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-300 dark:to-gray-100 dark:hover:bg-gray-100 shadow relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
                        href="https://www.linkedin.com/in/hackemate/"
                        target="_blank"
                      >
                        Available for work!!
                      </a>
                    </div>
                    <div class="group flex justify-center gap-4">
                      <img
                        class="rounded-xl object-cover even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
                        src="images/header-image-01.jpg"
                        width="245"
                        height="160"
                        alt="/images/header-image-01.jpg"
                      />
                      <img
                        class="rounded-xl object-cover even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
                        src="images/header-image-02.jpg"
                        width="245"
                        height="160"
                        alt="images/header-image-02.jpg"
                      />
                      <img
                        class="rounded-xl object-cover even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
                        src="images/header-image-03.jpg"
                        width="245"
                        height="160"
                        alt="images/header-image-03.jpg"
                      />
                    </div>
                  </header>

                  <main class="grow py-12 space-y-12">
                    <section>
                      <h2 class="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
                        Experience
                      </h2>
                      <div class="space-y-1">
                        <article class="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]">
                          <div class="sm:flex gap-5">
                            <div class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5 p-2">
                              <img
                                src="images/bushidolabs.jpg"
                                alt="Full stack Developer at Bushidolabs"
                                class="rounded-full"
                              />
                            </div>
                            <div>
                              <div class="space-y-1.5 mb-3">
                                <div class="text-[13px] italic text-gray-500/70">
                                  Oct 2022 - Present
                                </div>
                                <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                                  <a
                                    class="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                                    href="https://bushidolabs.dev"
                                    target="_blank"
                                  >
                                    Full Stack Developer at Bushidolabs
                                  </a>
                                </h3>
                                <div class="text-[13px] font-medium text-gray-600dark:text-gray-400">
                                  Guatemala · Remote
                                </div>
                              </div>
                              <p class="text-sm text-gray-600 dark:text-gray-400">
                                <p>
                                  Senior full-stack developer specializing in
                                  high-performance digital solutions for
                                  wellness, fitness, and mental health
                                  industries. Enterprise-grade Symfony, Elixir,
                                  Phoenix, Vue, Deno applications with focus on
                                  scalability and UX.
                                </p>
                                <ul>
                                  <li>
                                    <strong>Symfony Expert</strong>: Doctrine
                                    ORM, EasyAdmin
                                  </li>
                                  <li>
                                    <strong>CMS/E-Commerce</strong>: Sulu CMS,
                                    Medusa, Vendure
                                  </li>
                                  <li>
                                    <strong>Mobile Development</strong>: React
                                    Native, Lynx
                                  </li>
                                  <li>
                                    <strong>Modern Frontend</strong>: Stimulus,
                                    Turbo, Vue.js, Preact, Fresh
                                  </li>
                                </ul>
                              </p>
                            </div>
                          </div>
                        </article>

                        <article class="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]">
                          <div class="sm:flex gap-5">
                            <div class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5 p-2">
                              <img
                                src="images/agrotoken.jpg"
                                alt="UI-React Developer at Agrotoken"
                                class="rounded-full"
                              />
                            </div>
                            <div>
                              <div class="space-y-1.5 mb-3">
                                <div class="text-[13px] italic text-gray-500/70">
                                  Apr 2022 - Oct 2022
                                </div>
                                <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                                  <a
                                    class="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                                    href="https://agrotoken.com/es/"
                                    target="_blank"
                                  >
                                    UI-React Developer at Agrotoken
                                  </a>
                                </h3>
                                <div class="text-[13px] font-medium text-gray-600dark:text-gray-400">
                                  Montevideo, Uruguay · Hybrid
                                </div>
                              </div>
                              <p class="text-sm text-gray-600 dark:text-gray-400">
                                <p>
                                  Established optimized React development
                                  environment for large team while building
                                  Gatsby marketing pages for agricultural
                                  crypto-token startup.
                                </p>
                                <ul>
                                  <li>Standardized coding practices</li>
                                  <li>CI/CD pipeline implementation</li>
                                  <li>Blockchain integration (Solidity)</li>
                                  <li>Cross-functional collaboration</li>
                                </ul>
                              </p>
                            </div>
                          </div>
                        </article>

                        <article class="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]">
                          <div class="sm:flex gap-5">
                            <div class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5 p-2">
                              <img
                                src="images/autoweb.jpg"
                                alt="UX-UI React Developer at Autoweb"
                                class="rounded-full"
                              />
                            </div>
                            <div>
                              <div class="space-y-1.5 mb-3">
                                <div class="text-[13px] italic text-gray-500/70">
                                  Mar 2021 - Apr 2022
                                </div>
                                <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                                  <a
                                    class="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                                    href="https://www.autoweb.com/"
                                    target="_blank"
                                  >
                                    UX-UI React Developer at Autoweb
                                  </a>
                                </h3>
                                <div class="text-[13px] font-medium text-gray-600dark:text-gray-400">
                                  Guatemala · Remote
                                </div>
                              </div>
                              <p class="text-sm text-gray-600 dark:text-gray-400">
                                <p>
                                  Developed Next.js car sales platform with
                                  styled-components. Implemented Azure Pipelines
                                  CI/CD and Docker containerization.
                                </p>
                                <ul>
                                  <li>SSR/dynamic routing</li>
                                  <li>Design system implementation</li>
                                  <li>Automated testing suites</li>
                                </ul>
                              </p>
                            </div>
                          </div>
                        </article>

                        <article class="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]">
                          <div class="sm:flex gap-5">
                            <div class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5 p-2">
                              <img
                                src="/images/puzzle.jpg"
                                alt="React Native Advisor"
                                class="rounded-full"
                              />
                            </div>
                            <div>
                              <div class="space-y-1.5 mb-3">
                                <div class="text-[13px] italic text-gray-500/70">
                                  Mar 2021 - Oct 2021
                                </div>
                                <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                                  <a
                                    class="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                                    href="https://www.thepuzzle.digital/"
                                    target="_blank"
                                  >
                                    React Native Advisor
                                  </a>
                                </h3>
                                <div class="text-[13px] font-medium text-gray-600dark:text-gray-400">
                                  Argentina · Remote
                                </div>
                              </div>
                              <p class="text-sm text-gray-600 dark:text-gray-400">
                                <p>
                                  Provided React Native mentorship with focus on
                                  GraphQL integration and device features
                                  (camera/sensors). Conducted workshops and
                                  trained junior developers.
                                </p>
                              </p>
                            </div>
                          </div>
                        </article>

                        <article class="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]">
                          <div class="sm:flex gap-5">
                            <div class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5 p-2">
                              <img
                                src="images/habits.jpg"
                                alt="React Native Developer"
                                class="rounded-full"
                              />
                            </div>
                            <div>
                              <div class="space-y-1.5 mb-3">
                                <div class="text-[13px] italic text-gray-500/70">
                                  May 2020 - Oct 2020
                                </div>
                                <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                                  <a
                                    class="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                                    href="https://habithackers.io/"
                                    target="_blank"
                                  >
                                    React Native Developer
                                  </a>
                                </h3>
                                <div class="text-[13px] font-medium text-gray-600dark:text-gray-400">
                                  Mexico · Remote
                                </div>
                              </div>
                              <p class="text-sm text-gray-600 dark:text-gray-400">
                                <p>
                                  Built React Native app with AI service
                                  integration (NLP/image recognition). Delivered
                                  MVP within tight deadlines through
                                  cross-functional collaboration.
                                </p>
                              </p>
                            </div>
                          </div>
                        </article>

                        <article class="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]">
                          <div class="sm:flex gap-5">
                            <div class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5 p-2">
                              <img
                                src="images/noimage.jpg"
                                alt="Frontend Web Developer"
                                class="rounded-full"
                              />
                            </div>
                            <div>
                              <div class="space-y-1.5 mb-3">
                                <div class="text-[13px] italic text-gray-500/70">
                                  Nov 2018 - Dec 2019
                                </div>
                                <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                                  <a
                                    class="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                                    href="#"
                                    target="_blank"
                                  >
                                    Frontend Web Developer
                                  </a>
                                </h3>
                                <div class="text-[13px] font-medium text-gray-600dark:text-gray-400">
                                  Arizona, USA · Remote
                                </div>
                              </div>
                              <p class="text-sm text-gray-600 dark:text-gray-400">
                                <p>
                                  Developed cryptocurrency trading platform UI
                                  using Angular/Ruby on Rails. Implemented
                                  responsive designs and interactive features.
                                </p>
                              </p>
                            </div>
                          </div>
                        </article>

                        <article class="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]">
                          <div class="sm:flex gap-5">
                            <div class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5 p-2">
                              <img
                                src="images/noimage.jpg"
                                alt="Laravel Developer"
                                class="rounded-full"
                              />
                            </div>
                            <div>
                              <div class="space-y-1.5 mb-3">
                                <div class="text-[13px] italic text-gray-500/70">
                                  Feb 2017 - Jun 2018
                                </div>
                                <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                                  <a
                                    class="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                                    href="#"
                                    target="_blank"
                                  >
                                    Laravel Developer
                                  </a>
                                </h3>
                                <div class="text-[13px] font-medium text-gray-600dark:text-gray-400">
                                  Mexico · Remote
                                </div>
                              </div>
                              <p class="text-sm text-gray-600 dark:text-gray-400">
                                <p>
                                  Built social media applications helping
                                  influencers grow engagement. Laravel/PHP
                                  development with custom CMS features.
                                </p>
                              </p>
                            </div>
                          </div>
                        </article>

                        <article class="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]">
                          <div class="sm:flex gap-5">
                            <div class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5 p-2">
                              <img
                                src="images/noimage.jpg"
                                alt="PHP Developer"
                                class="rounded-full"
                              />
                            </div>
                            <div>
                              <div class="space-y-1.5 mb-3">
                                <div class="text-[13px] italic text-gray-500/70">
                                  Jan 2011 - Jan 2016
                                </div>
                                <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                                  <a
                                    class="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                                    href="https://nitroplantillas.jimdofree.com/"
                                    target="_blank"
                                  >
                                    PHP Developer
                                  </a>
                                </h3>
                                <div class="text-[13px] font-medium text-gray-600dark:text-gray-400">
                                  Guatemala · Remote
                                </div>
                              </div>
                              <p class="text-sm text-gray-600 dark:text-gray-400">
                                <p>
                                  Freelance developer creating custom
                                  WordPress/Jimdo templates. Focus on responsive
                                  design and client-specific solutions.
                                </p>
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </section>

                    <section>
                      <h2 class="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
                        Certifications
                      </h2>
                      <div class="space-y-1">
                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              SymfonyCasts
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://symfonycasts.com/certificates/18313F03C151"
                                target="_blank"
                              >
                                Go Pro with Doctrine Queries
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            Advanced Doctrine query techniques certification
                          </p>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              SymfonyCasts
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://symfonycasts.com/certificates/1E8FF59BC155s"
                                target="_blank"
                              >
                                Cosmic coding with Symfony 7
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            Modern Symfony 7 development practices
                          </p>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              SymfonyCasts
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://symfonycasts.com/certificates/DF57E727C160"
                                target="_blank"
                              >
                                Dependency Injection Attributes
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            Mastery of dependency injection using attributes
                          </p>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              SymfonyCasts
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://symfonycasts.com/certificates/2AC5E6BDC161"
                                target="_blank"
                              >
                                Doctrine, Symfony 7 &amp; the Database
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            Database integration with Symfony 7 and Doctrine
                          </p>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              SymfonyCasts
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://symfonycasts.com/certificates/D0549320C158"
                                target="_blank"
                              >
                                Symfony 7 Fundamentals: Services, Config &amp;
                                Environments
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            Core Symfony 7 service container and configuration
                          </p>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              SymfonyCasts
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://symfonycasts.com/certificates/DD3B612AC156"
                                target="_blank"
                              >
                                Upgrading &amp; What&#039;s in Symfony 7
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            Symfony version upgrades and new features
                          </p>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              ScyllaDB
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://university.scylladb.com/your-certificate/1276F56DD-1276F2EA3-127403159/"
                                target="_blank"
                              >
                                Data Modeling Course Completion Certificate
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            ScyllaDB data modeling and application development
                          </p>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              ScyllaDB
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://university.scylladb.com/your-certificate/1276F573D-12740579C-127403159/"
                                target="_blank"
                              >
                                ScyllaDB Essentials Course Completion
                                Certificate
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            Fundamentals of ScyllaDB NoSQL database
                          </p>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              HackerRank
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://www.hackerrank.com/certificates/78263bbc4475"
                                target="_blank"
                              >
                                Frontend Developer (React) Certificate
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            React.js development skills certification
                          </p>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              HackerRank
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://www.hackerrank.com/certificates/9e08f9500bd3"
                                target="_blank"
                              >
                                Software Engineer Certificate
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            General software engineering skills assessment
                          </p>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="space-y-1.5 mb-2">
                            <div class="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                              Codecademy
                            </div>
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://www.codecademy.com/profiles/hackemateninja/certificates/042a4e5884e3eb6ea1f2a12be6abb851"
                                target="_blank"
                              >
                                Learn SQL Course
                              </a>
                            </h3>
                          </div>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            Fundamental SQL database skills
                          </p>
                        </article>
                      </div>
                    </section>

                    <section>
                      <h2 class="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
                        Side hustles
                      </h2>
                      <div class="grid min-[580px]:grid-cols-2 gap-4 ">
                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm mb-4 p-2">
                            <img
                              src="images/bushidolabs.jpg"
                              alt="bushidolabs"
                              class="rounded-full"
                            />
                          </div>
                          <div class="space-y-1">
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://bushidolabs.dev"
                                target="_blank"
                              >
                                bushidolabs
                              </a>
                            </h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                              Software development company for wellness
                            </p>
                          </div>
                        </article>

                        <article class="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group">
                          <div
                            class="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
                            aria-hidden="true"
                          >
                            <svg
                              class="fill-current opacity-80 dark:opacity-100"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                            >
                              <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
                            </svg>
                          </div>
                          <div class="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm mb-4 p-2">
                            <img
                              src="images/papishampu.jpg"
                              alt="Papi shampu"
                              class="rounded-full"
                            />
                          </div>
                          <div class="space-y-1">
                            <h3 class="font-semibold text-gray-800 dark:text-gray-100">
                              <a
                                class="before:absolute before:inset-0"
                                href="https://papishampu.shop"
                                target="_blank"
                              >
                                Papi shampu
                              </a>
                            </h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                              Ecommerce for hair natural hair products
                            </p>
                          </div>
                        </article>
                      </div>
                    </section>
                  </main>

                  <footer class="space-y-12 text-center pb-16">
                    <a href="/" class="flex items-center justify-center">
                      <img
                        src="images/imagologo.png"
                        alt="Logo ronindev"
                        width="100"
                        height="100"
                      />
                    </a>
                    <div class="space-y-6">
                      <ul class="inline-flex gap-4">
                        <li>
                          <a
                            class="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                            href="https://x.com/hackemateninja"
                            target="_blank"
                            aria-label="X"
                          >
                            <svg
                              class="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="14"
                            >
                              <path d="M16 14h-4.938L7.197 9.108 2.771 14H.316l5.736-6.342L0 0h5.063l3.496 4.476L12.601 0h2.454L9.697 5.932 16 14Zm-4.26-1.422h1.36L4.323 1.347H2.865l8.875 11.231Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            class="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                            href="https://github.com/hackemateninja"
                            target="_blank"
                            aria-label="GitHub"
                          >
                            <svg
                              class="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                            >
                              <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.994-2.683-.994-.398-.894-.895-1.192-.895-1.192-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.894 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.976 0-.894.298-1.59.795-2.087-.1-.198-.397-.993.1-2.086 0 0 .695-.2 2.186.795a6.408 6.408 0 0 1 1.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.796 2.186-.796.398 1.094.199 1.889.1 2.087.496.597.795 1.292.795 2.087 0 3.081-1.889 3.677-3.677 3.876.298.398.596.895.596 1.59v2.187c0 .198.1.496.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            class="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                            href="https://www.facebook.com/ronindevninja"
                            target="_blank"
                            aria-label="Facebook"
                          >
                            <svg
                              class="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="15"
                            >
                              <path d="m2.834 15-.022-6.563H0V5.626h2.813V3.75C2.813 1.22 4.38 0 6.636 0c1.081 0 2.01.08 2.281.116v2.645H7.353c-1.228 0-1.466.584-1.466 1.44v1.424h3.488l-.938 2.813h-2.55V15H2.834Z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <p class="text-sm text-gray-400 dark:text-gray-600">
                        &copy; Herman Morales. All rights reserved
                      </p>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
