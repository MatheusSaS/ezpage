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

<section class="pt-20 bg-ezpage-light overflow-hidden" id="etapas">
	<div class="container px-4 mx-auto">
		<div class="load-animation reveal mb-12 md:mb-20 xl:mb-40 text-center">
			<h2
				class="max-w-xl mx-auto mb-4 text-5xl md:text-6xl font-bold font-heading leading-tight"
			>
				Como <span
					class="inline-block px-2 py-1 relative text-white bg-ezpage"
					style="border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%"
					>criar</span
				> seu site pelos modelos da EZPage
			</h2>
			<p
				class="max-w-2xl mx-auto md:text-lg text-center opacity-80 leading-loose"
			>
				Ou crie um site completamente com a sua cara, cliquando
				<button
					on:click={() => creatPageZero()}
					class="btn btn-ezpage ml-1">Aqui</button
				>
			</p>
		</div>
		<div
			class="load-animation reveal flex flex-wrap items-center mb-16 md:mb-24 xl:mb-64 max-w-3xl xl:max-w-none mx-auto xl:-mx-4"
		>
			<div
				class="w-full xl:w-1/2 px-4 flex items-center mb-16 md:mb-24 xl:mb-0"
			>
				<div class="xl:pr-24">
					<span class="text-sm font-semibold">Etapa 1 de 3</span>
					<h2
						class="text-3xl md:text-5xl leading-tight font-bold font-heading mt-2 mb-4"
					>
						Selecione o modelo que mais se identifica com sua
						empresa
					</h2>
					<p class="mb-6 md:text-lg opacity-80 leading-loose">
						Todos os modelos estão preparados para receber suas
						informações. Selecione aquele que mais se alinha com sua
						empresa e com as informações que você deseja inserir.
					</p>
				</div>
			</div>
			<div class="relative flex items-center w-full xl:w-1/2 px-4">
				<div
					class="hidden xl:block absolute -right-1/10 top-0 bottom-0 -mt-20 -mb-20 w-3/5 bg-blue-50 rounded-2xl"
				/>
				<div
					class="md:hidden xl:block absolute left-0 top-0 -mt-6 md:-mt-12 xl:-mt-20 ml-3 md:ml-4 xl:-ml-12 h-16 w-12 md:h-24 md:w-24 xl:h-48 xl:w-40 bg-ezpage rounded-tl-3xl rounded-bl-lg rounded-tr-lg"
				/>
				<img
					class="md:hidden xl:block absolute right-0 xl:left-0 bottom-0 mr-2 md:mr-4 xl:-ml-12 -mb-4 md:-mb-8 xl:-mb-20 w-12 h-12 md:w-24 md:h-24 xl:w-56 xl:h-56"
					src="/dots-full-red.svg"
					alt=""
				/>

				<div
					class="hidden md:block xl:hidden absolute right-0 top-0 -mt-4 md:-mt-12 xl:-mt-20 md:mr-6 xl:-mr-12 h-12 w-12 md:h-32 md:w-24 xl:h-48 xl:w-40 bg-brand-green rounded-tr-5xl rounded-br-lg rounded-tl-lg"
				/>
				<img
					class="hidden md:block xl:hidden transform rotate-90 absolute left-0 xl:left-auto xl:right-0 bottom-0 ml-2 md:ml-4 xl:-mr-12 -mb-4 md:-mb-8 xl:-mb-20 w-12 h-12 md:w-24 md:h-24 xl:w-56 xl:h-56"
					src="/dots-full-red.svg"
					alt=""
				/>

				<div
					class="relative px-4 md:px-12 xl:px-0"
					data-poster="/templates_img.png"
				>
					<img
						src="/templates_img.png"
						alt=""
						class="cursor-play rounded-xl shadow-video"
					/>
					<div
						class="group absolute inset-0 flex items-center justify-center"
					>
						<div
							class="hidden xl:block absolute inset-0 group-hover:bg-blueGray-900 group-hover:opacity-5"
						/>
					</div>
				</div>
			</div>
		</div>
		<div
			class="load-animation reveal flex flex-wrap items-center mb-16 md:mb-24 xl:mb-64 max-w-3xl xl:max-w-none mx-auto xl:-mx-4"
		>
			<div
				class="w-full xl:w-1/2 px-4 flex items-center mb-16 md:mb-24 xl:mb-0 xl:order-1"
			>
				<div class="xl:pl-24">
					<span class="text-sm font-semibold">Etapa 2 de 3</span>
					<h2
						class="text-3xl md:text-5xl leading-tight font-bold font-heading mt-2 mb-4"
					>
						Como modelo selecionado, clique em 'Eu quero este
						template'
					</h2>
					<p class="mb-6 md:text-lg opacity-80 leading-loose">
						Logo após selecionar o modelo desejado, uma nova aba
						será aberta, exibindo o preview do modelo, onde é
						possível navegar por suas páginas. Ao clicar, você será
						redirecionado para o WhatsApp com uma mensagem
						pré-definida; basta clicar em enviar!
					</p>
				</div>
			</div>
			<div
				class="relative flex items-center w-full xl:w-1/2 px-4 xl:order-0"
			>
				<div
					class="hidden xl:block absolute -left-1/10 top-0 bottom-0 -mt-20 -mb-20 w-3/5 bg-blue-50 rounded-2xl"
				/>
				<div
					class="absolute right-0 top-0 -mt-6 md:-mt-12 xl:-mt-20 mr-3 md:mr-6 xl:-mr-12 h-16 w-12 md:h-32 md:w-24 xl:h-48 xl:w-40 bg-blue-400 rounded-tr-3xl rounded-br-lg rounded-tl-lg"
				/>
				<img
					class="absolute left-0 xl:left-auto xl:right-0 bottom-0 ml-2 md:ml-4 xl:-mr-12 -mb-4 md:-mb-8 xl:-mb-20 w-12 h-12 md:w-24 md:h-24 xl:w-56 xl:h-56"
					src="/dots-full-orange.svg"
					alt=""
				/>

				<div
					class="relative px-4 md:px-12 xl:px-0"
					data-poster="/select_template.png"
				>
					<img
						src="/select_template.png"
						alt=""
						class="cursor-play rounded-xl shadow-video"
					/>
					<div
						class="group absolute inset-0 flex items-center justify-center"
					>
						<div
							class="hidden xl:block absolute inset-0 group-hover:bg-blueGray-900 group-hover:opacity-5"
						/>
					</div>
				</div>
			</div>
		</div>
		<div
			class="load-animation reveal flex flex-wrap items-center mb-16 md:mb-24 xl:mb-64 max-w-3xl xl:max-w-none mx-auto xl:-mx-4"
		>
			<div
				class="w-full xl:w-1/2 px-4 flex items-center mb-16 md:mb-24 xl:mb-0"
			>
				<div class="xl:pr-24">
					<span class="text-sm font-semibold">Etapa 3 de 3</span>
					<h2
						class="text-3xl md:text-5xl leading-tight font-bold font-heading mt-2 mb-4"
					>
						No WhatsApp basta informar o que for necessario para a
						criação do seu site
					</h2>
					<p class="mb-6 md:text-lg opacity-80 leading-loose">
						Na última etapa, basta você fornecer alguns tópicos
						necessários para a criação do seu site. Não se preocupe,
						todas as informações são editáveis, e estaremos sempre
						prontos para ajudá-los!
					</p>
				</div>
			</div>
			<div
				class="relative flex items-center w-full xl:w-1/2 px-4 xl:order-0"
			>
				<div
					class="hidden xl:block absolute -right-1/10 top-0 bottom-0 -mt-20 -mb-20 w-3/5 bg-blue-50 rounded-2xl"
				/>
				<div
					class="md:hidden xl:block absolute left-0 top-0 -mt-6 md:-mt-12 xl:-mt-20 ml-3 md:ml-4 xl:-ml-12 h-16 w-12 md:h-24 md:w-24 xl:h-48 xl:w-40 bg-red-400 rounded-tl-3xl rounded-bl-lg rounded-tr-lg"
				/>
				<img
					class="md:hidden xl:block absolute right-0 xl:left-0 bottom-0 mr-2 md:mr-4 xl:-ml-12 -mb-4 md:-mb-8 xl:-mb-20 w-12 h-12 md:w-24 md:h-24 xl:w-56 xl:h-56"
					src="/dots-full-green.svg"
					alt=""
				/>

				<div
					class="hidden md:block xl:hidden absolute right-0 top-0 -mt-4 md:-mt-12 xl:-mt-20 md:mr-6 xl:-mr-12 h-12 w-12 md:h-32 md:w-24 xl:h-48 xl:w-40 bg-brand-red rounded-tr-5xl rounded-br-lg rounded-tl-lg"
				/>
				<img
					class="hidden md:block xl:hidden transform rotate-90 absolute left-0 xl:left-auto xl:right-0 bottom-0 ml-2 md:ml-4 xl:-mr-12 -mb-4 md:-mb-8 xl:-mb-20 w-12 h-12 md:w-24 md:h-24 xl:w-56 xl:h-56"
					src="/dots-full-green.svg"
					alt=""
				/>

				<div
					class="relative px-4 md:px-12 xl:px-0"
					data-poster="/whatsapp_contact.png"
				>
					<img
						src="/whatsapp_contact.png"
						alt=""
						class="cursor-play rounded-xl shadow-video"
					/>
					<div
						class="group absolute inset-0 flex items-center justify-center"
					>
						<div
							class="hidden xl:block absolute inset-0 group-hover:bg-blueGray-900 group-hover:opacity-5"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
