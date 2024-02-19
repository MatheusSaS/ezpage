<script lang="ts">
    import { page } from "$app/stores";

    interface templatesOBJ {
        typename: string;
        description: string;
        subdescription: string;
        templatename: string;
        iframe: string;
    }
    const modelsTemplates: templatesOBJ[] = [
        {
            typename: "Site para qualquer empresa",
            description: "Modelo pronto para qualquer empresa",
            subdescription:
                "Construa uma marca bem apresentada que todos irão adorar. Tenha o cuidado de desenvolver recursos continuamente e integrá-los a projetos anteriores.",
            templatename: "ux-template",
            iframe: "https://shuffle.dev/preview/4898a7852faee4e45d2542fbc9f0f309394826b3?page=index.html&iframe=1&extension=template",
        },
        {
            typename: "Site para escritório de advocacia",
            description:
                "Modelo de site Justice Reliance para escritório de advocacia",
            subdescription:
                "A confiança na justiça o ajudará a construir uma imagem de empresa profissional e confiável. O modelo de site de escritório de advocacia permite que você mostre a experiência que sua empresa acumulou e exponha como isso se traduzirá em sucesso para futuros clientes.",
            templatename: "justice-reliance-website-template-for-law-firm",
            iframe: "https://shuffle.dev/preview/aafb76d95e4388616f9ec2de201a1316b0fe0788?page=index.html&iframe=1&extension=template",
        },
        {
            typename: "Site para agência de marketing",
            description: "Modelo de site para agência de marketing Vision",
            subdescription:
                "Mostre a abrangência dos seus serviços e ao mesmo tempo fale sobre suas competências. Obtenha clientes em qualquer dispositivo com o modelo de site de agência de marketing responsivo. Apresente seu portfólio de uma forma que o incentive a se tornar seu próximo cliente de sucesso.",
            templatename: "vision-marketing-agency-website-template",
            iframe: "https://shuffle.dev/preview/5132ee41fb2975fbac51281c9bc7daf7a585a4e5?page=index.html&iframe=1&extension=template",
        },
        {
            typename: "Site para agência de marketing",
            description:
                "Modelo de site de agência de marketing de consultores confiáveis",
            subdescription:
                "Num mundo de confiança limitada, destaque-se com uma mensagem sobre a fiabilidade dos seus serviços. Mostre um estudo de caso detalhado com estatísticas e demonstre claramente por que você é o melhor para atender clientes em potencial. Aumente a experiência do seu blog e continue adicionando mais páginas perfeitamente com um conjunto cuidadoso de componentes para um modelo de site de agência de marketing.",
            templatename: "reliable-advisors-marketing-agency-website-template",
            iframe: "https://shuffle.dev/preview/29c064dd35e932ebb7e723d5d262c0497c6e7918?page=index.html&iframe=1&extension=template",
        },
        {
            typename: "Site para imobiliária",
            description: "Modelo de site para imobiliária",
            subdescription:
                "O imóvel que você procurava Mostre o lado bom do imóvel que você tem à venda. O modelo de site imobiliário cuidadosamente projetado dá lugar principal às fotos dos imóveis, porque os clientes compram com os olhos. Ao mesmo tempo, apresenta habilmente detalhes e informações importantes, no lugar de perguntas naturais para estimular o contato. Desta forma, o modelo de site imobiliário irá efetivamente conquistar clientes para você",
            templatename: "real-estate-building-template",
            iframe: "https://shuffle.dev/preview/d7763ebfba14fd2d1b866eb1db3f4fe0e1a157c9?page=index.html&iframe=1&extension=template",
        },
        {
            typename: "Site para startup",
            description: "Modelo de site para startup",
            subdescription:
                "Destaque-se no mercado competitivo com modelo de site de startup. Crie um lindo site focado no seu produto e em sua visão. Dose as informações mostrando imagens e recursos visuais onde você as possui e adicione habilmente fatos e estatísticas. Encante investidores e primeiros clientes e conecte-se habilmente com eles por meio de formulários e frases de chamariz.",
            templatename: "software-startup-website-template",
            iframe: "https://shuffle.dev/preview/6a0f6e2b5a57c84a5144ff0d46a57c65304fda17?page=index.html&iframe=1&extension=template",
        },
        {
            typename: "Site para startup",
            description: "Modelo de site para startup",
            subdescription:
                "Apresente os benefícios da sua startup de forma ousada e diferenciada. Incentive as pessoas a instalar seu aplicativo ou se inscrever no seu boletim informativo. Reúna sua mensagem com cuidado e convença os usuários a instalar. Use nosso editor visual para estender o modelo de site de inicialização do aplicativo com mais páginas no mesmo estilo.",
            templatename: "application-startup-website-template",
            iframe: "https://shuffle.dev/preview/f8795fb602f4a998fd5ee47d3abc072db96969df?page=index.html&iframe=1&extension=template",
        },
        {
            typename: "Site médico",
            description: "Clínica típica - modelo de site médico",
            subdescription:
                "Mostre o lado humano da medicina e incentive as pessoas a visitarem sua clínica. As cores brilhantes do modelo de site médico ajudam a tranquilizar as pessoas que precisam de ajuda, e uma página de contato simples tornará mais fácil para elas encontrarem ajuda. Forneça todas as informações de que precisam para obter seus serviços de forma acessível. O design responsivo e rápido do modelo de site da clínica garantirá que o site seja fácil de ler em qualquer dispositivo.",
            templatename: "typical-clinic-medical-website-template",
            iframe: "https://shuffle.dev/preview/d8ed2c049579f9e8c93c7a7d085009aaa5d5b3b2?page=index.html&iframe=1&extension=template",
        },
        {
            typename: "Site SaaS",
            description: "Site SaaS colorido e cheio de linhas",
            subdescription:
                "Baseado na biblioteca de UI exclusiva do Shuffle Nigodo, este modelo de site SaaS fornece tudo que você precisa para criar um site bonito e de conversão. O design é baseado na utilização de uma cor principal, mas você pode alterá-la para qualquer uma das 6 variações pré-fabricadas.",
            templatename: "colorful-and-full-of-lines-saas-website",
            iframe: "https://shuffle.dev/preview/dee5186d71aa9c6c17b531353b1f632c3a8e2e1f?page=index.html&iframe=1&extension=template",
        },
        {
            typename: "Site escritório de advocacia",
            description: "Modelo de site para escritório de advocacia",
            subdescription:
                "Destaque-se no mundo digital com nosso serviço especializado em criação de sites para escritórios de advocacia. Oferecemos soluções personalizadas e profissionais, projetadas especificamente para atender às necessidades únicas da sua prática jurídica. Com design moderno, funcionalidades avançadas e foco na usabilidade, garantimos uma presença online poderosa que amplifica sua credibilidade e atrai novos clientes. Junte-se a nós e leve sua advocacia para o próximo nível digital.",
            templatename: "template-advocacia",
            iframe: "https://lawyer-website-template.vercel.app/",
        },
    ];

    const creatByTemplate = (name:string) => {
        let mensagem: string;

        mensagem = `
        Olá Matheus, vim através da Ezpage e gostaria do meu site baseado no template: ${name}`;

        window.open(`
        https://api.whatsapp.com/send/?phone=5517997123536&text=${mensagem}
      `);
    };

    const nameTemplate = $page.params.slug ? $page.params.slug : null;
    let template: templatesOBJ;

    for (const objeto of modelsTemplates) {
        if (objeto.templatename === nameTemplate) {
            template = objeto;
            break;
        }
    }
</script>

{#if template}
    <section class="pt-8 pb-20 border-t border-brand-section-dashboard">
        <div class="flex justify-start mb-2 px-4">
            <a href="/templates" class="btn btn-ezpage rounded-full"
                ><i class="fa-solid fa-chevron-left" /></a
            >
        </div>
        <div class="container px-4 mx-auto">
            <div class="flex flex-wrap -mx-3">
                <div class="order-1 w-full px-3 lg:order-0 lg:w-3/4">
                    <div class="bg-ezpage-dark rounded-xl">
                        <div
                            class="relative max-w-full px-6 pt-6 pb-6 mx-auto overflow-hidden preview-iframe-wrapper"
                            style="width: 1366px;"
                        >
                            <iframe
                                src={template.iframe}
                                style="height: 900px;"
                                class="w-full"
                            />
                        </div>
                    </div>
                </div>
                <div
                    class="w-full px-3 mt-8 mb-10 order-0 lg:order-1 lg:w-1/4 lg:mt-0 lg:mb-0"
                >
                    <a
                        href="/templates/lawyer"
                        class="inline-block mb-1 text-sm font-medium text-ezpage"
                        >{template.typename}</a
                    >
                    <h2 class="mb-2 text-2xl font-semibold">
                        {template.description}
                    </h2>
                    <p class="mb-4 text-sm text-opacity-90">
                        {template.subdescription}
                    </p>
                    <div
                        class="flex-wrap items-center justify-between py-3 border-t border-brand-section-dashboard hidden"
                    >
                        <span class="text-sm font-medium">Preview</span>
                        <div
                            class="inline-flex flex-wrap items-center justify-center w-auto bg-white border rounded p-3px border-dashboard-input shadow-randomizer-menu"
                        >
                            <button
                                data-change-preview-mode="desktop"
                                class="flex items-center justify-center w-8 h-8 rounded focus:outline-none hover:bg-brand-section-dashboard bg-brand-section-dashboard text-brand-blue"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.6667 2H3.33334C2.20001 2 1.33334 2.86667 1.33334 4V9.33333C1.33334 10.4667 2.20001 11.3333 3.33334 11.3333H7.33334V12.6667H4.66668C4.26668 12.6667 4.00001 12.9333 4.00001 13.3333C4.00001 13.7333 4.26668 14 4.66668 14H11.3333C11.7333 14 12 13.7333 12 13.3333C12 12.9333 11.7333 12.6667 11.3333 12.6667H8.66668V11.3333H12.6667C13.8 11.3333 14.6667 10.4667 14.6667 9.33333V4C14.6667 2.86667 13.8 2 12.6667 2Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                            <button
                                data-change-preview-mode="tablet"
                                class="flex items-center justify-center w-8 h-8 rounded ml-3px focus:outline-none hover:bg-brand-section-dashboard text-randomizer-gray-icon"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.33334 4.66683L1.33334 11.3335C1.33334 12.4668 2.20001 13.3335 3.33334 13.3335L12.6667 13.3335C13.8 13.3335 14.6667 12.4668 14.6667 11.3335L14.6667 4.66683C14.6667 3.5335 13.8 2.66683 12.6667 2.66683L3.33334 2.66683C2.20001 2.66683 1.33334 3.5335 1.33334 4.66683ZM12 8.00016C12 8.40016 11.7333 8.66683 11.3333 8.66683C10.9333 8.66683 10.6667 8.40016 10.6667 8.00016C10.6667 7.60016 10.9333 7.3335 11.3333 7.3335C11.7333 7.3335 12 7.60016 12 8.00016Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                            <button
                                data-change-preview-mode="mobile"
                                class="flex items-center justify-center w-8 h-8 rounded ml-3px focus:outline-none hover:bg-brand-section-dashboard text-randomizer-gray-icon"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.6666 1.3335H5.33331C4.19998 1.3335 3.33331 2.20016 3.33331 3.3335V12.6668C3.33331 13.8002 4.19998 14.6668 5.33331 14.6668H10.6666C11.8 14.6668 12.6666 13.8002 12.6666 12.6668V3.3335C12.6666 2.20016 11.8 1.3335 10.6666 1.3335ZM7.99998 12.0002C7.59998 12.0002 7.33331 11.7335 7.33331 11.3335C7.33331 10.9335 7.59998 10.6668 7.99998 10.6668C8.39998 10.6668 8.66665 10.9335 8.66665 11.3335C8.66665 11.7335 8.39998 12.0002 7.99998 12.0002Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <button
                        on:click={() => creatByTemplate(template.templatename)}
                        class="w-full btn btn-ezpage"
                    >
                        Eu quero este template por apenas R$ 599
                    </button>
                </div>
            </div>
        </div>
    </section>
{:else}
    Nenhum template encontrado
{/if}

<style>
    .border-0 {
        border-width: 0;
    }
</style>
