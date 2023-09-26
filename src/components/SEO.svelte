<script>
 
 let siteData = {
  title: "Impulsione suas vendas e tenha seu negócio online",
  desc: "Conectando seu negócio ao mundo, com uma landing page ou site de alta performace",
  card: "/Ezepage.svg",
}

  export let title = ""
  export let desc = siteData.desc
  export let img = siteData.card

  $: formattedTitle = title ? `${title} — ${siteData.title}` : `${siteData.title}`
</script>

<svelte:head>
  <meta name="robots" content="index,follow">
  <title>{formattedTitle}</title>
  <meta name="description" content={desc} />
  <meta property="og:url" content="https://ezpage.app">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={formattedTitle} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={img} />
  <meta name="twitter:image:alt" content={formattedTitle} />
  <meta property="og:title" content={formattedTitle} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={img} />
  <meta property="og:image:alt" content="Logo EZPage">
  <meta property="og:image:width" content="400">
  <meta property="og:image:height" content="400">
  <meta property="og:site_name" content="EZPage">
  
</svelte:head>