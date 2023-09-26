<script lang="ts">
    const creatPageZero = () => {
        let mensagem: string;

        mensagem = `
        Olá Matheus, vim através da Ezpage e gostaria de um site feito do zero, personalizado para atender às minhas necessidades!`;

        window.open(`
        https://api.whatsapp.com/send/?phone=5517997123536&text=${mensagem}
      `);
    };
</script>

<section class="pt-8 border-t border-brand-section-dashboard">
    <div class="container px-4 mx-auto">
        <div
            class="relative py-14 px-8 md:px-16 mb-6 bg-ezpage-dark overflow-hidden rounded-xl"
        >
            <img
                class="absolute top-0 left-0 w-full h-full"
                src="/header-blue-bg.svg"
            />
            <img
                class="absolute bottom-0 right-0 hidden lg:block lg:w-6/12 xl:w-auto"
                src="/header-templates.png"
            />
            <div class="relative z-10">
                <h1
                    class="mb-1 font-bold text-3xl md:text-4xl leading-tight text-white"
                >
                    Modelos da EZPage por apenas R$ 29,7/mês
                </h1>
                <p class="mb-6 text-white/80 leading-tight text-light">
                    Use nossos modelos prontos, e crie seu site em minutos por
                    menos de R$ 1 real por dia
                </p>
                <div class="sm:flex items-center">
                    <button
                        on:click={() => creatPageZero()}
                        class="flex-1 flex justify-center items-center py-3 px-4 sm:max-w-max bg-white hover:bg-gray-100 text-sm text-brand-text text-center font-medium leading-tight rounded transition duration-100"
                    >
                        <i class="fa-brands fa-whatsapp mr-2" />
                        Ou crie o seu do zero
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="pt-12 bg-ezpage-light">
    <div class="container px-4 mx-auto">
        <div class="sm:flex items-center justify-between mb-10">
            <h3 class="flex items-center text-2xl font-semibold">
                Escolha um entre os nossos incríveis modelos:
            </h3>
        </div>
        <div class="flex flex-wrap justify-center md:justify-start">
            <div
                class="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 px-6 mb-12"
            >
                <div
                    class="group relative block mb-4 bg-brand-section-dashboard overflow-hidden rounded-xl"
                >
                    <div
                        class="absolute z-50 flex flex-col justify-center bg-[#1F2937] opacity-0 hover:opacity-100 bg-opacity-40 items-center w-full h-full transition duration-100"
                    >
                        <div>
                            <a
                                href="/templates/ux-template"
                                class="flex-1 flex justify-center items-center py-3 px-6 bg-white hover:bg-gray-100 text-sm text-brand-tex text-center font-medium leading-tight rounded transition duration-100"
                            >
                                <svg
                                    class="inline mr-2"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.666499 4.93334L6.6665 8.4C6.79983 8.46667 6.8665 8.46667 6.99983 8.46667C7.13317 8.46667 7.19983 8.46667 7.33317 8.4L13.3332 4.93334C13.4665 4.86667 13.5332 4.8 13.5998 4.66667C13.7332 4.33334 13.6665 3.93334 13.3332 3.73334L7.33317 0.266672C7.13317 0.133338 6.8665 0.133338 6.6665 0.266672L0.666499 3.73334C0.533166 3.8 0.466499 3.86667 0.399832 4C0.266499 4.33334 0.333166 4.73334 0.666499 4.93334ZM13.3332 6.4L13.1998 6.33334L7.33317 9.73334C7.13317 9.86667 6.8665 9.86667 6.6665 9.73334L0.799832 6.33334L0.666499 6.4C0.333166 6.60001 0.266499 7 0.399832 7.33334C0.466499 7.46667 0.533166 7.53334 0.666499 7.6L6.6665 11.0667C6.8665 11.2 7.13317 11.2 7.33317 11.0667L13.3332 7.6C13.6665 7.4 13.7332 7 13.5998 6.66667C13.5332 6.53334 13.4665 6.46667 13.3332 6.4ZM13.3332 9.06667L13.1998 9L7.33317 12.4C7.13317 12.5333 6.8665 12.5333 6.6665 12.4L0.799832 9L0.666499 9.06667C0.333166 9.26667 0.266499 9.66667 0.399832 10C0.466499 10.1333 0.533166 10.2 0.666499 10.2667L6.6665 13.7333C6.8665 13.8667 7.13317 13.8667 7.33317 13.7333L13.3332 10.2667C13.6665 10.0667 13.7332 9.66667 13.5998 9.33334C13.5332 9.2 13.4665 9.13334 13.3332 9.06667Z"
                                        fill="#969CA7"
                                    />
                                </svg>
                                Ver modelo
                            </a>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="relative h-64 w-full overflow-hidden">
                            <img
                                class="absolute bottom-0 right-0 z-10 px-6"
                                style="margin-right: -1rem;"
                                src="/uxtemplate.png"
                                alt="Modelo de site Justice Reliance para escritório de advocacia"
                            />
                            <div
                                class="absolute top-0 left-0 z-10 mt-6 pl-4 pr-6"
                            >
                                <div class="rounded overflow-hidden">
                                    <img
                                        class=""
                                        src="/uxtemplate.png"
                                        alt="Modelo de site Justice Reliance para escritório de advocacia"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-full max-w-full">
                        <h3 class="text-lg font-semibold leading-tighter">
                            UX moderno
                        </h3>
                        <span
                            class="block mb-3 text-sm text-blueGray-500 font-medium"
                            >Modelo pronto para qualquer empresa</span
                        >
                    </div>
                </div>
            </div>
            <div
                class="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 px-6 mb-12"
            >
                <div
                    class="group relative block mb-4 bg-brand-section-dashboard overflow-hidden rounded-xl"
                >
                    <div
                        class="absolute z-50 flex flex-col justify-center bg-[#1F2937] opacity-0 hover:opacity-100 bg-opacity-40 items-center w-full h-full transition duration-100"
                    >
                        <div>
                            <a
                                href="/templates/justice-reliance-website-template-for-law-firm"
                                class="flex-1 flex justify-center items-center py-3 px-6 bg-white hover:bg-gray-100 text-sm text-brand-tex text-center font-medium leading-tight rounded transition duration-100"
                            >
                                <svg
                                    class="inline mr-2"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.666499 4.93334L6.6665 8.4C6.79983 8.46667 6.8665 8.46667 6.99983 8.46667C7.13317 8.46667 7.19983 8.46667 7.33317 8.4L13.3332 4.93334C13.4665 4.86667 13.5332 4.8 13.5998 4.66667C13.7332 4.33334 13.6665 3.93334 13.3332 3.73334L7.33317 0.266672C7.13317 0.133338 6.8665 0.133338 6.6665 0.266672L0.666499 3.73334C0.533166 3.8 0.466499 3.86667 0.399832 4C0.266499 4.33334 0.333166 4.73334 0.666499 4.93334ZM13.3332 6.4L13.1998 6.33334L7.33317 9.73334C7.13317 9.86667 6.8665 9.86667 6.6665 9.73334L0.799832 6.33334L0.666499 6.4C0.333166 6.60001 0.266499 7 0.399832 7.33334C0.466499 7.46667 0.533166 7.53334 0.666499 7.6L6.6665 11.0667C6.8665 11.2 7.13317 11.2 7.33317 11.0667L13.3332 7.6C13.6665 7.4 13.7332 7 13.5998 6.66667C13.5332 6.53334 13.4665 6.46667 13.3332 6.4ZM13.3332 9.06667L13.1998 9L7.33317 12.4C7.13317 12.5333 6.8665 12.5333 6.6665 12.4L0.799832 9L0.666499 9.06667C0.333166 9.26667 0.266499 9.66667 0.399832 10C0.466499 10.1333 0.533166 10.2 0.666499 10.2667L6.6665 13.7333C6.8665 13.8667 7.13317 13.8667 7.33317 13.7333L13.3332 10.2667C13.6665 10.0667 13.7332 9.66667 13.5998 9.33334C13.5332 9.2 13.4665 9.13334 13.3332 9.06667Z"
                                        fill="#969CA7"
                                    />
                                </svg>
                                Ver modelo
                            </a>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="relative h-64 w-full overflow-hidden">
                            <img
                                class="absolute bottom-0 right-0 z-10 px-6"
                                style="margin-right: -1rem;"
                                src="https://static.shuffle.dev/files/1651230722/justice-reliance2.png"
                                alt="Modelo de site Justice Reliance para escritório de advocacia"
                            />
                            <div
                                class="absolute top-0 left-0 z-10 mt-6 pl-4 pr-6"
                            >
                                <div class="rounded overflow-hidden">
                                    <img
                                        class=""
                                        src="https://static.shuffle.dev/files/1651230722/justice-reliance1.png"
                                        alt="Modelo de site Justice Reliance para escritório de advocacia"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-full max-w-full">
                        <h3 class="text-lg font-semibold leading-tighter">
                            Modelo de site Justice Reliance para escritório de
                            advocacia
                        </h3>
                        <span
                            class="block mb-3 text-sm text-blueGray-500 font-medium"
                            >Site para escritório de advocacia</span
                        >
                    </div>
                </div>
            </div>
            <div
                class="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 px-6 mb-12"
            >
                <div
                    class="group relative block mb-4 bg-brand-section-dashboard overflow-hidden rounded-xl"
                >
                    <div
                        class="absolute z-50 flex flex-col justify-center bg-[#1F2937] opacity-0 hover:opacity-100 bg-opacity-40 items-center w-full h-full transition duration-100"
                    >
                        <div>
                            <a
                                href="/templates/vision-marketing-agency-website-template"
                                class="flex-1 flex justify-center items-center py-3 px-6 bg-white hover:bg-gray-100 text-sm text-brand-tex text-center font-medium leading-tight rounded transition duration-100"
                            >
                                <svg
                                    class="inline mr-2"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.666499 4.93334L6.6665 8.4C6.79983 8.46667 6.8665 8.46667 6.99983 8.46667C7.13317 8.46667 7.19983 8.46667 7.33317 8.4L13.3332 4.93334C13.4665 4.86667 13.5332 4.8 13.5998 4.66667C13.7332 4.33334 13.6665 3.93334 13.3332 3.73334L7.33317 0.266672C7.13317 0.133338 6.8665 0.133338 6.6665 0.266672L0.666499 3.73334C0.533166 3.8 0.466499 3.86667 0.399832 4C0.266499 4.33334 0.333166 4.73334 0.666499 4.93334ZM13.3332 6.4L13.1998 6.33334L7.33317 9.73334C7.13317 9.86667 6.8665 9.86667 6.6665 9.73334L0.799832 6.33334L0.666499 6.4C0.333166 6.60001 0.266499 7 0.399832 7.33334C0.466499 7.46667 0.533166 7.53334 0.666499 7.6L6.6665 11.0667C6.8665 11.2 7.13317 11.2 7.33317 11.0667L13.3332 7.6C13.6665 7.4 13.7332 7 13.5998 6.66667C13.5332 6.53334 13.4665 6.46667 13.3332 6.4ZM13.3332 9.06667L13.1998 9L7.33317 12.4C7.13317 12.5333 6.8665 12.5333 6.6665 12.4L0.799832 9L0.666499 9.06667C0.333166 9.26667 0.266499 9.66667 0.399832 10C0.466499 10.1333 0.533166 10.2 0.666499 10.2667L6.6665 13.7333C6.8665 13.8667 7.13317 13.8667 7.33317 13.7333L13.3332 10.2667C13.6665 10.0667 13.7332 9.66667 13.5998 9.33334C13.5332 9.2 13.4665 9.13334 13.3332 9.06667Z"
                                        fill="#969CA7"
                                    />
                                </svg>
                                Ver modelo
                            </a>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="relative h-64 w-full overflow-hidden">
                            <img
                                class="absolute bottom-0 right-0 z-10 px-6"
                                style="margin-right: -1rem;"
                                src="https://static.shuffle.dev/files/1651230775/vision-marketing2.png"
                                alt="Modelo de site para agência de marketing Vision"
                            />
                            <div
                                class="absolute top-0 left-0 z-10 mt-6 pl-4 pr-6"
                            >
                                <div class="rounded overflow-hidden">
                                    <img
                                        class=""
                                        src="https://static.shuffle.dev/files/1651230774/vision-marketing1.png"
                                        alt="Modelo de site para agência de marketing Vision"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-full max-w-full">
                        <h3 class="text-lg font-semibold leading-tighter">
                            Modelo de site para agência de marketing Vision
                        </h3>
                        <span
                            class="block mb-3 text-sm text-blueGray-500 font-medium"
                            >Site para agência de marketing</span
                        >
                    </div>
                </div>
            </div>
            <div
                class="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 px-6 mb-12"
            >
                <div
                    class="group relative block mb-4 bg-brand-section-dashboard overflow-hidden rounded-xl"
                >
                    <div
                        class="absolute z-50 flex flex-col justify-center bg-[#1F2937] opacity-0 hover:opacity-100 bg-opacity-40 items-center w-full h-full transition duration-100"
                    >
                        <div>
                            <a
                                href="/templates/reliable-advisors-marketing-agency-website-template"
                                class="flex-1 flex justify-center items-center py-3 px-6 bg-white hover:bg-gray-100 text-sm text-brand-tex text-center font-medium leading-tight rounded transition duration-100"
                            >
                                <svg
                                    class="inline mr-2"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.666499 4.93334L6.6665 8.4C6.79983 8.46667 6.8665 8.46667 6.99983 8.46667C7.13317 8.46667 7.19983 8.46667 7.33317 8.4L13.3332 4.93334C13.4665 4.86667 13.5332 4.8 13.5998 4.66667C13.7332 4.33334 13.6665 3.93334 13.3332 3.73334L7.33317 0.266672C7.13317 0.133338 6.8665 0.133338 6.6665 0.266672L0.666499 3.73334C0.533166 3.8 0.466499 3.86667 0.399832 4C0.266499 4.33334 0.333166 4.73334 0.666499 4.93334ZM13.3332 6.4L13.1998 6.33334L7.33317 9.73334C7.13317 9.86667 6.8665 9.86667 6.6665 9.73334L0.799832 6.33334L0.666499 6.4C0.333166 6.60001 0.266499 7 0.399832 7.33334C0.466499 7.46667 0.533166 7.53334 0.666499 7.6L6.6665 11.0667C6.8665 11.2 7.13317 11.2 7.33317 11.0667L13.3332 7.6C13.6665 7.4 13.7332 7 13.5998 6.66667C13.5332 6.53334 13.4665 6.46667 13.3332 6.4ZM13.3332 9.06667L13.1998 9L7.33317 12.4C7.13317 12.5333 6.8665 12.5333 6.6665 12.4L0.799832 9L0.666499 9.06667C0.333166 9.26667 0.266499 9.66667 0.399832 10C0.466499 10.1333 0.533166 10.2 0.666499 10.2667L6.6665 13.7333C6.8665 13.8667 7.13317 13.8667 7.33317 13.7333L13.3332 10.2667C13.6665 10.0667 13.7332 9.66667 13.5998 9.33334C13.5332 9.2 13.4665 9.13334 13.3332 9.06667Z"
                                        fill="#969CA7"
                                    />
                                </svg>
                                Ver modelo
                            </a>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="relative h-64 w-full overflow-hidden">
                            <img
                                class="absolute bottom-0 right-0 z-10 px-6"
                                style="margin-right: -1rem;"
                                src="https://static.shuffle.dev/files/1651230759/reliable-advisors2.png"
                                alt="Modelo de site de agência de marketing de consultores confiáveis"
                            />
                            <div
                                class="absolute top-0 left-0 z-10 mt-6 pl-4 pr-6"
                            >
                                <div class="rounded overflow-hidden">
                                    <img
                                        class=""
                                        src="https://static.shuffle.dev/files/1651230759/reliable-advisors1.png"
                                        alt="Modelo de site de agência de marketing de consultores confiáveis"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-full max-w-full">
                        <h3 class="text-lg font-semibold leading-tighter">
                            Modelo de site de agência de marketing de
                            consultores confiáveis
                        </h3>
                        <span
                            class="block mb-3 text-sm text-blueGray-500 font-medium"
                            >Site para agência de marketing</span
                        >
                    </div>
                </div>
            </div>

            <div
                class="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 px-6 mb-12"
            >
                <div
                    class="group relative block mb-4 bg-brand-section-dashboard overflow-hidden rounded-xl"
                >
                    <div
                        class="absolute z-50 flex flex-col justify-center bg-[#1F2937] opacity-0 hover:opacity-100 bg-opacity-40 items-center w-full h-full transition duration-100"
                    >
                        <div>
                            <a
                                href="/templates/real-estate-building-template"
                                class="flex-1 flex justify-center items-center py-3 px-6 bg-white hover:bg-gray-100 text-sm text-brand-tex text-center font-medium leading-tight rounded transition duration-100"
                            >
                                <svg
                                    class="inline mr-2"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.666499 4.93334L6.6665 8.4C6.79983 8.46667 6.8665 8.46667 6.99983 8.46667C7.13317 8.46667 7.19983 8.46667 7.33317 8.4L13.3332 4.93334C13.4665 4.86667 13.5332 4.8 13.5998 4.66667C13.7332 4.33334 13.6665 3.93334 13.3332 3.73334L7.33317 0.266672C7.13317 0.133338 6.8665 0.133338 6.6665 0.266672L0.666499 3.73334C0.533166 3.8 0.466499 3.86667 0.399832 4C0.266499 4.33334 0.333166 4.73334 0.666499 4.93334ZM13.3332 6.4L13.1998 6.33334L7.33317 9.73334C7.13317 9.86667 6.8665 9.86667 6.6665 9.73334L0.799832 6.33334L0.666499 6.4C0.333166 6.60001 0.266499 7 0.399832 7.33334C0.466499 7.46667 0.533166 7.53334 0.666499 7.6L6.6665 11.0667C6.8665 11.2 7.13317 11.2 7.33317 11.0667L13.3332 7.6C13.6665 7.4 13.7332 7 13.5998 6.66667C13.5332 6.53334 13.4665 6.46667 13.3332 6.4ZM13.3332 9.06667L13.1998 9L7.33317 12.4C7.13317 12.5333 6.8665 12.5333 6.6665 12.4L0.799832 9L0.666499 9.06667C0.333166 9.26667 0.266499 9.66667 0.399832 10C0.466499 10.1333 0.533166 10.2 0.666499 10.2667L6.6665 13.7333C6.8665 13.8667 7.13317 13.8667 7.33317 13.7333L13.3332 10.2667C13.6665 10.0667 13.7332 9.66667 13.5998 9.33334C13.5332 9.2 13.4665 9.13334 13.3332 9.06667Z"
                                        fill="#969CA7"
                                    />
                                </svg>
                                Ver modelo
                            </a>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="relative h-64 w-full overflow-hidden">
                            <img
                                class="absolute bottom-0 right-0 z-10 px-6"
                                style="margin-right: -1rem;"
                                src="https://static.shuffle.dev/files/1651230796/cooloffice2.png"
                                alt="Modelo de site para imobiliária"
                            />
                            <div
                                class="absolute top-0 left-0 z-10 mt-6 pl-4 pr-6"
                            >
                                <div class="rounded overflow-hidden">
                                    <img
                                        class=""
                                        src="https://static.shuffle.dev/files/1651230796/cooloffice1.png"
                                        alt="Modelo de site para imobiliária"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-full max-w-full">
                        <h3 class="text-lg font-semibold leading-tighter">
                            Modelo de site para imobiliária
                        </h3>
                        <span
                            class="block mb-3 text-sm text-blueGray-500 font-medium"
                            >Site para imobiliária</span
                        >
                    </div>
                </div>
            </div>
            <div
                class="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 px-6 mb-12"
            >
                <div
                    class="group relative block mb-4 bg-brand-section-dashboard overflow-hidden rounded-xl"
                >
                    <div
                        class="absolute z-50 flex flex-col justify-center bg-[#1F2937] opacity-0 hover:opacity-100 bg-opacity-40 items-center w-full h-full transition duration-100"
                    >
                        <div>
                            <a
                                href="/templates/software-startup-website-template"
                                class="flex-1 flex justify-center items-center py-3 px-6 bg-white hover:bg-gray-100 text-sm text-brand-tex text-center font-medium leading-tight rounded transition duration-100"
                            >
                                <svg
                                    class="inline mr-2"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.666499 4.93334L6.6665 8.4C6.79983 8.46667 6.8665 8.46667 6.99983 8.46667C7.13317 8.46667 7.19983 8.46667 7.33317 8.4L13.3332 4.93334C13.4665 4.86667 13.5332 4.8 13.5998 4.66667C13.7332 4.33334 13.6665 3.93334 13.3332 3.73334L7.33317 0.266672C7.13317 0.133338 6.8665 0.133338 6.6665 0.266672L0.666499 3.73334C0.533166 3.8 0.466499 3.86667 0.399832 4C0.266499 4.33334 0.333166 4.73334 0.666499 4.93334ZM13.3332 6.4L13.1998 6.33334L7.33317 9.73334C7.13317 9.86667 6.8665 9.86667 6.6665 9.73334L0.799832 6.33334L0.666499 6.4C0.333166 6.60001 0.266499 7 0.399832 7.33334C0.466499 7.46667 0.533166 7.53334 0.666499 7.6L6.6665 11.0667C6.8665 11.2 7.13317 11.2 7.33317 11.0667L13.3332 7.6C13.6665 7.4 13.7332 7 13.5998 6.66667C13.5332 6.53334 13.4665 6.46667 13.3332 6.4ZM13.3332 9.06667L13.1998 9L7.33317 12.4C7.13317 12.5333 6.8665 12.5333 6.6665 12.4L0.799832 9L0.666499 9.06667C0.333166 9.26667 0.266499 9.66667 0.399832 10C0.466499 10.1333 0.533166 10.2 0.666499 10.2667L6.6665 13.7333C6.8665 13.8667 7.13317 13.8667 7.33317 13.7333L13.3332 10.2667C13.6665 10.0667 13.7332 9.66667 13.5998 9.33334C13.5332 9.2 13.4665 9.13334 13.3332 9.06667Z"
                                        fill="#969CA7"
                                    />
                                </svg>
                                Ver modelo
                            </a>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="relative h-64 w-full overflow-hidden">
                            <img
                                class="absolute bottom-0 right-0 z-10 px-6"
                                style="margin-right: -1rem;"
                                src="https://static.shuffle.dev/files/1651230697/mondersoft2.png"
                                alt="Modelo de site para startup"
                            />
                            <div
                                class="absolute top-0 left-0 z-10 mt-6 pl-4 pr-6"
                            >
                                <div class="rounded overflow-hidden">
                                    <img
                                        class=""
                                        src="https://static.shuffle.dev/files/1651230696/mondersoft1.png"
                                        alt="Modelo de site para startup"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-full max-w-full">
                        <h3 class="text-lg font-semibold leading-tighter">
                            Modelo de site para startup de software
                        </h3>
                        <span
                            class="block mb-3 text-sm text-blueGray-500 font-medium"
                            >Site para startup</span
                        >
                    </div>
                </div>
            </div>
            <div
                class="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 px-6 mb-12"
            >
                <div
                    class="group relative block mb-4 bg-brand-section-dashboard overflow-hidden rounded-xl"
                >
                    <div
                        class="absolute z-50 flex flex-col justify-center bg-[#1F2937] opacity-0 hover:opacity-100 bg-opacity-40 items-center w-full h-full transition duration-100"
                    >
                        <div>
                            <a
                                href="/templates/application-startup-website-template"
                                class="flex-1 flex justify-center items-center py-3 px-6 bg-white hover:bg-gray-100 text-sm text-brand-tex text-center font-medium leading-tight rounded transition duration-100"
                            >
                                <svg
                                    class="inline mr-2"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.666499 4.93334L6.6665 8.4C6.79983 8.46667 6.8665 8.46667 6.99983 8.46667C7.13317 8.46667 7.19983 8.46667 7.33317 8.4L13.3332 4.93334C13.4665 4.86667 13.5332 4.8 13.5998 4.66667C13.7332 4.33334 13.6665 3.93334 13.3332 3.73334L7.33317 0.266672C7.13317 0.133338 6.8665 0.133338 6.6665 0.266672L0.666499 3.73334C0.533166 3.8 0.466499 3.86667 0.399832 4C0.266499 4.33334 0.333166 4.73334 0.666499 4.93334ZM13.3332 6.4L13.1998 6.33334L7.33317 9.73334C7.13317 9.86667 6.8665 9.86667 6.6665 9.73334L0.799832 6.33334L0.666499 6.4C0.333166 6.60001 0.266499 7 0.399832 7.33334C0.466499 7.46667 0.533166 7.53334 0.666499 7.6L6.6665 11.0667C6.8665 11.2 7.13317 11.2 7.33317 11.0667L13.3332 7.6C13.6665 7.4 13.7332 7 13.5998 6.66667C13.5332 6.53334 13.4665 6.46667 13.3332 6.4ZM13.3332 9.06667L13.1998 9L7.33317 12.4C7.13317 12.5333 6.8665 12.5333 6.6665 12.4L0.799832 9L0.666499 9.06667C0.333166 9.26667 0.266499 9.66667 0.399832 10C0.466499 10.1333 0.533166 10.2 0.666499 10.2667L6.6665 13.7333C6.8665 13.8667 7.13317 13.8667 7.33317 13.7333L13.3332 10.2667C13.6665 10.0667 13.7332 9.66667 13.5998 9.33334C13.5332 9.2 13.4665 9.13334 13.3332 9.06667Z"
                                        fill="#969CA7"
                                    />
                                </svg>
                                Ver modelo
                            </a>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="relative h-64 w-full overflow-hidden">
                            <img
                                class="absolute bottom-0 right-0 z-10 px-6"
                                style="margin-right: -1rem;"
                                src="https://static.shuffle.dev/files/1651230673/azureorange2.png"
                                alt="Modelo de site para startup de aplicações"
                            />
                            <div
                                class="absolute top-0 left-0 z-10 mt-6 pl-4 pr-6"
                            >
                                <div class="rounded overflow-hidden">
                                    <img
                                        class=""
                                        src="https://static.shuffle.dev/files/1651230673/azureorange1.png"
                                        alt="Modelo de site para startup de aplicações"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-full max-w-full">
                        <h3 class="text-lg font-semibold leading-tighter">
                            Modelo de site para startup de aplicações
                        </h3>
                        <span
                            class="block mb-3 text-sm text-blueGray-500 font-medium"
                            >Site para startup</span
                        >
                    </div>
                </div>
            </div>
            <div
                class="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 px-6 mb-12"
            >
                <div
                    class="group relative block mb-4 bg-brand-section-dashboard overflow-hidden rounded-xl"
                >
                    <div
                        class="absolute z-50 flex flex-col justify-center bg-[#1F2937] opacity-0 hover:opacity-100 bg-opacity-40 items-center w-full h-full transition duration-100"
                    >
                        <div>
                            <a
                                href="/templates/typical-clinic-medical-website-template"
                                class="flex-1 flex justify-center items-center py-3 px-6 bg-white hover:bg-gray-100 text-sm text-brand-tex text-center font-medium leading-tight rounded transition duration-100"
                            >
                                <svg
                                    class="inline mr-2"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.666499 4.93334L6.6665 8.4C6.79983 8.46667 6.8665 8.46667 6.99983 8.46667C7.13317 8.46667 7.19983 8.46667 7.33317 8.4L13.3332 4.93334C13.4665 4.86667 13.5332 4.8 13.5998 4.66667C13.7332 4.33334 13.6665 3.93334 13.3332 3.73334L7.33317 0.266672C7.13317 0.133338 6.8665 0.133338 6.6665 0.266672L0.666499 3.73334C0.533166 3.8 0.466499 3.86667 0.399832 4C0.266499 4.33334 0.333166 4.73334 0.666499 4.93334ZM13.3332 6.4L13.1998 6.33334L7.33317 9.73334C7.13317 9.86667 6.8665 9.86667 6.6665 9.73334L0.799832 6.33334L0.666499 6.4C0.333166 6.60001 0.266499 7 0.399832 7.33334C0.466499 7.46667 0.533166 7.53334 0.666499 7.6L6.6665 11.0667C6.8665 11.2 7.13317 11.2 7.33317 11.0667L13.3332 7.6C13.6665 7.4 13.7332 7 13.5998 6.66667C13.5332 6.53334 13.4665 6.46667 13.3332 6.4ZM13.3332 9.06667L13.1998 9L7.33317 12.4C7.13317 12.5333 6.8665 12.5333 6.6665 12.4L0.799832 9L0.666499 9.06667C0.333166 9.26667 0.266499 9.66667 0.399832 10C0.466499 10.1333 0.533166 10.2 0.666499 10.2667L6.6665 13.7333C6.8665 13.8667 7.13317 13.8667 7.33317 13.7333L13.3332 10.2667C13.6665 10.0667 13.7332 9.66667 13.5998 9.33334C13.5332 9.2 13.4665 9.13334 13.3332 9.06667Z"
                                        fill="#969CA7"
                                    />
                                </svg>
                                Ver modelo
                            </a>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="relative h-64 w-full overflow-hidden">
                            <img
                                class="absolute bottom-0 right-0 z-10 px-6"
                                style="margin-right: -1rem;"
                                src="https://static.shuffle.dev/files/1651230650/typical-clinic2.png"
                                alt="Clínica típica - modelo de site médico"
                            />
                            <div
                                class="absolute top-0 left-0 z-10 mt-6 pl-4 pr-6"
                            >
                                <div class="rounded overflow-hidden">
                                    <img
                                        class=""
                                        src="https://static.shuffle.dev/files/1651230650/typical-clinic1.png"
                                        alt="Clínica típica - modelo de site médico"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-full max-w-full">
                        <h3 class="text-lg font-semibold leading-tighter">
                            Clínica típica - modelo de site médico
                        </h3>
                        <span
                            class="block mb-3 text-sm text-blueGray-500 font-medium"
                            >Site médico</span
                        >
                    </div>
                </div>
            </div>
            <div
                class="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 px-6 mb-12"
            >
                <div
                    class="group relative block mb-4 bg-brand-section-dashboard overflow-hidden rounded-xl"
                >
                    <div
                        class="absolute z-50 flex flex-col justify-center bg-[#1F2937] opacity-0 hover:opacity-100 bg-opacity-40 items-center w-full h-full transition duration-100"
                    >
                        <div>
                            <a
                                href="/templates/colorful-and-full-of-lines-saas-website"
                                class="flex-1 flex justify-center items-center py-3 px-6 bg-white hover:bg-gray-100 text-sm text-brand-tex text-center font-medium leading-tight rounded transition duration-100"
                            >
                                <svg
                                    class="inline mr-2"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.666499 4.93334L6.6665 8.4C6.79983 8.46667 6.8665 8.46667 6.99983 8.46667C7.13317 8.46667 7.19983 8.46667 7.33317 8.4L13.3332 4.93334C13.4665 4.86667 13.5332 4.8 13.5998 4.66667C13.7332 4.33334 13.6665 3.93334 13.3332 3.73334L7.33317 0.266672C7.13317 0.133338 6.8665 0.133338 6.6665 0.266672L0.666499 3.73334C0.533166 3.8 0.466499 3.86667 0.399832 4C0.266499 4.33334 0.333166 4.73334 0.666499 4.93334ZM13.3332 6.4L13.1998 6.33334L7.33317 9.73334C7.13317 9.86667 6.8665 9.86667 6.6665 9.73334L0.799832 6.33334L0.666499 6.4C0.333166 6.60001 0.266499 7 0.399832 7.33334C0.466499 7.46667 0.533166 7.53334 0.666499 7.6L6.6665 11.0667C6.8665 11.2 7.13317 11.2 7.33317 11.0667L13.3332 7.6C13.6665 7.4 13.7332 7 13.5998 6.66667C13.5332 6.53334 13.4665 6.46667 13.3332 6.4ZM13.3332 9.06667L13.1998 9L7.33317 12.4C7.13317 12.5333 6.8665 12.5333 6.6665 12.4L0.799832 9L0.666499 9.06667C0.333166 9.26667 0.266499 9.66667 0.399832 10C0.466499 10.1333 0.533166 10.2 0.666499 10.2667L6.6665 13.7333C6.8665 13.8667 7.13317 13.8667 7.33317 13.7333L13.3332 10.2667C13.6665 10.0667 13.7332 9.66667 13.5998 9.33334C13.5332 9.2 13.4665 9.13334 13.3332 9.06667Z"
                                        fill="#969CA7"
                                    />
                                </svg>
                                Ver modelo
                            </a>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="relative h-64 w-full overflow-hidden">
                            <img
                                class="absolute bottom-0 right-0 z-10 px-6"
                                style="margin-right: -1rem;"
                                src="https://static.shuffle.dev/files/1651230635/nigodo2.png"
                                alt="Site SaaS colorido e cheio de linhas"
                            />
                            <div
                                class="absolute top-0 left-0 z-10 mt-6 pl-4 pr-6"
                            >
                                <div class="rounded overflow-hidden">
                                    <img
                                        class=""
                                        src="https://static.shuffle.dev/files/1651230634/nigodo1.png"
                                        alt="Site SaaS colorido e cheio de linhas"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-full max-w-full">
                        <h3 class="text-lg font-semibold leading-tighter">
                            Site SaaS colorido e cheio de linhas
                        </h3>
                        <span
                            class="block mb-3 text-sm text-blueGray-500 font-medium"
                            >Site SaaS</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .bg-brand-text {
        --tw-bg-opacity: 1;
        background-color: rgb(13 23 42 / var(--tw-bg-opacity));
    }
</style>
