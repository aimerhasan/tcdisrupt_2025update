// Auto-embedded static site content. Edit these strings to update the site.
export const SITE_STYLE = `
        html,
        body {
            overflow-x: hidden;
            width: 100%;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* slate-50 */
            color: #1e293b; /* slate-800 */
        }
        .cta-button {
            transition: all 0.3s ease;
        }
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            filter: brightness(0.9);
        }
        .sticky-header {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }
        .mobile-menu-panel {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: max-height .35s ease, opacity .25s ease;
        }
        .mobile-menu-panel.mobile-menu-open {
            max-height: 28rem;
            opacity: 1;
        }
        .testimonial-card, .team-card, .speaker-card {
            background-color: white;
            border: 1px solid #e2e8f0; /* slate-200 */
        }
        .faq-item[open] summary ~ * {
            animation: sweep .5s ease-in-out;
        }
        @keyframes sweep {
            0%    {opacity: 0; transform: translateY(-10px)}
            100%  {opacity: 1; transform: translateY(0)}
        }
        .carousel-image {
            position: relative;
            height: 300px;
        }
        @media (min-width: 768px) {
            .carousel-image {
                height: 600px;
            }
        }
        .carousel-slide {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 0;
            transition: opacity .8s ease-in-out;
        }
        .carousel-slide.active {
            opacity: 1;
            z-index: 1;
        }
     .team-image,
.speaker-image,
.testimonial-image {
    object-fit: cover;
    object-position: center;
}

.logo-hotspot{
    position:absolute;
    display:block;
    border-radius:12px;
    transition:all .2s ease;
    cursor:pointer;
}

.logo-hotspot:hover{
    background:none;
    box-shadow:none;
    transform:none;
}



.speaker-card{
    transition:all .25s ease;
}

.speaker-card:hover{
    transform:translateY(-4px);
    box-shadow:0 12px 30px rgba(0,0,0,.08);
}
.disrupt-gallery-image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
}
        .advantage-carousel-image {
             height: 200px;
        }
         @media (min-width: 768px) {
            .advantage-carousel-image {
                height: 400px;
            }
        }
    `;

export const SITE_BODY = `<!-- Section 1: Header & Navigation -->
    <header id="header" class="sticky top-0 z-50 bg-white/80 sticky-header shadow-sm">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0 flex items-center space-x-4">
                    <a href="/">
                        <img class="h-10" src="https://2event.com/media/events/2024/02/1708054777-logo2-1.png-2.png" alt="Silkroad Innovation Hub Logo">
                    </a>
                    <span class="text-gray-300 font-light text-2xl">X</span>
                    <a href="https://techcrunch.com/events/tc-disrupt-2025/" target="_blank" class="pl-1">
                        <img class="h-8" src="https://utfs.io/f/5lAbzPMR2hDEHsw8BLJcgeSFOLA9umqpbok2nQalCWc3Y6iX" alt="TechCrunch Logo">
                    </a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#about-disrupt" class="text-slate-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">About Disrupt</a>
                        <a href="#offer" class="text-slate-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">The Offer</a>
                        <a href="#eligibility" class="text-slate-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Eligibility</a>
                        <a href="#value" class="text-slate-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Previous Participants</a>
                        <a href="#track-record" class="text-slate-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Our Record</a>
                        <a href="#team" class="text-slate-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Team</a>
                    </div>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" aria-expanded="false" aria-controls="mobile-menu" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                        <span class="sr-only">Open main menu</span>
                        <svg id="menu-icon-open" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg id="menu-icon-close" class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        <!-- Mobile menu, animated open/close based on menu state. -->
        <div class="md:hidden mobile-menu-panel border-t border-slate-100" id="mobile-menu">
            <div class="px-3 pt-3 pb-4 space-y-1.5">
                <a href="#about-disrupt" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-4 py-3.5 rounded-md text-base font-medium">About Disrupt</a>
                <a href="#offer" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-4 py-3.5 rounded-md text-base font-medium">The Offer</a>
                <a href="#eligibility" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-4 py-3.5 rounded-md text-base font-medium">Eligibility</a>
                <a href="#value" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-4 py-3.5 rounded-md text-base font-medium">Previous Participants</a>
                <a href="#track-record" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-4 py-3.5 rounded-md text-base font-medium">Our Record</a>
                <a href="#team" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-4 py-3.5 rounded-md text-base font-medium">Team</a>
            </div>
        </div>
    </header>

    <main>
        <!-- Section 2: Hero Section -->
       <section class="relative min-h-screen flex items-center justify-center overflow-hidden">

    <div class="absolute inset-0">
        <img
            src="/Images/AV-58.webp"
            alt="TechCrunch Disrupt"
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="hidden md:block text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                    Showcase Your Startup to the World.
                </h1>
                <h2 class="mt-0 md:mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white md:text-accent">
                    Join the Silkroad Pavilion at TechCrunch Disrupt 2026.
                </h2>
                <p class="mt-6 max-w-3xl mx-auto text-lg text-white">
                    An exclusive opportunity for top Central Eurasian startups to gain global visibility at <strong>TechCrunch Disrupt 2026</strong> this <strong><span class="text-accent">October 13–15</span></strong>.
                <div class="mt-10">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeB3Edcdt6u2oTfZfswffR0SAkRgTiVrGD_VwZF5QhnhasFrg/viewform" target="_blank" class="cta-button inline-block bg-accent text-white font-bold py-4 px-10 rounded-lg text-lg">
                        Apply Now
                    </a>
                    <p class="mt-4 text-lg font-bold bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent">
                        Application Deadline: September 15, 2026
                    </p>
                </div>
            </div>
        </section>

        

        <!-- Section 3: What is TechCrunch Disrupt? -->
        <section id="about-disrupt" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">What is TechCrunch Disrupt?</h2>
                    <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">TechCrunch Disrupt is the #1 annual technology conference in the world. It brings together the most innovative startups, influential investors, and tech enthusiasts for three days of networking, learning, and pitching on the global stage.</p>
                     <div class="mt-6">
                         <a href="https://techcrunch.com/events/tc-disrupt-2025/" target="_blank" class="text-accent font-semibold hover:underline">Learn More →</a>
                    </div>
                </div>
                <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="aspect-w-16 aspect-h-9"><img class="rounded-lg shadow-xl disrupt-gallery-image" src="https://techcrunch.com/wp-content/uploads/2024/06/stage_1200x600.png?w=680" alt="TechCrunch Disrupt Stage"></div>
                    <div class="aspect-w-16 aspect-h-9"><img class="rounded-lg shadow-xl disrupt-gallery-image" src="https://utfs.io/f/5lAbzPMR2hDETv8V80D0khqMSHFVgYoZ4pRfjULiCsW7Tz9E" alt="TechCrunch Disrupt Audience"></div>
                    <div class="aspect-w-16 aspect-h-9"><img class="rounded-lg shadow-xl disrupt-gallery-image" src="/Images/AV-27.webp" alt="TechCrunch Disrupt Startup Alley"></div>
                </div>
            </div>
        </section>

       <!-- Section 4: The Value: Why You Should Apply -->
<section id="value" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div>
                <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Who Can Apply?
                </h2>

                <p class="mt-4 text-xl text-gray-600">
                    Top startups from Central Eurasia that are building innovative technology products and are ready to showcase themselves on the global stage at TechCrunch Disrupt.
                </p>

                <div class="mt-8 space-y-6">


  

                    <div>
                        <h3 class="text-xl font-bold">
                            Stand Out on a Global Stage
                        </h3>
                        <p class="mt-2 text-gray-500">
                            Exhibit alongside ambitious startups from Central Eurasia in the Silkroad Pavilion, increasing your visibility with investors, customers, partners, and international media.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-xl font-bold">
                            visa support
                        </h3>
                        <p class="mt-2 text-gray-500">
                            Accepted startups receive an official invitation letter to support their participation in TechCrunch Disrupt.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-xl font-bold">
                            Risk-Free Participation
                        </h3>
                        <p class="mt-2 text-gray-500">
                            If your U.S. visa application is denied, we refund your participation fee. You can apply with confidence knowing your investment is protected.
                        </p>
                    </div>

                </div>
            </div>

            <div class="hidden md:block relative overflow-hidden rounded-lg shadow-xl">
                <div id="advantage-carousel-track" class="flex transition-transform duration-700 ease-in-out">
                    <img src="https://techcrunch.com/wp-content/uploads/2024/10/Networking_disrupt.png?w=680" class="w-full flex-shrink-0 object-cover advantage-carousel-image">
                    <img src="https://www.cnet.com/a/img/resize/388f93a1c65028d2df9fd645e986666c86e6d94f/hub/2012/09/10/fdf4b7cf-f0e5-11e2-8c7c-d4ae52e62bcc/disrupt2012-9518.jpg?auto=webp&width=1200" class="w-full flex-shrink-0 object-cover advantage-carousel-image">
                </div>
            </div>

        </div>
    </div>
    <div class="mt-16 border-t border-gray-200 pt-10">
    <h3 class="text-2xl font-bold text-center text-gray-900">
        Previous Participants
    </h3>

    <p class="mt-3 text-center text-gray-600">
    
    </p>

   <div class="mt-8 relative mx-auto max-w-5xl">

    <img
        src="/Images/Previous Participants Combined Balanced v2.png"
        alt="Previous Participants"
        class="w-full">

    <!-- TOP ROW -->

    <a href="https://smartup24.com/main/en"
       target="_blank"
       class="logo-hotspot"
       style="left:0.00%; top:2.21%; width:15.67%; height:5.90%;"
       title="Smartup"></a>

    <a href="https://iomete.com"
       target="_blank"
       class="logo-hotspot"
       style="left:16.14%; top:1.07%; width:16.67%; height:7.51%;"
       title="IOMETE"></a>

    <a href="https://arlanbiotech.com"
       target="_blank"
       class="logo-hotspot"
       style="left:33.96%; top:0.66%; width:14.79%; height:8.22%;"
       title="Arlan Biotech"></a>

    <a href="https://www.datagaze.uz/"
       target="_blank"
       class="logo-hotspot"
       style="left:54.75%; top:0.00%; width:7.68%; height:11.32%;"
       title="Company"></a>

    <a href="https://www.tryalma.com/"
       target="_blank"
       class="logo-hotspot"
       style="left:67.29%; top:0.83%; width:15.99%; height:7.75%;"
       title="Alma"></a>

    <a href="https://billz.io/"
       target="_blank"
       class="logo-hotspot"
       style="left:83.91%; top:1.43%; width:16.09%; height:6.79%;"
       title="Billz"></a>

       <!-- SECOND ROW -->

<a href="https://adviad.com/"
   target="_blank"
   class="logo-hotspot"
   style="left:0.00%; top:13.29%; width:15.78%; height:7.57%;"
   title="Adviad"></a>

<a href="INSERT_GRAND_LINK"
   target="_blank"
   class="logo-hotspot"
   style="left:19.28%; top:11.32%; width:10.29%; height:11.50%;"
   title="Grand"></a>

<a href="https://blog.bult.ai/"
   target="_blank"
   class="logo-hotspot"
   style="left:34.22%; top:12.69%; width:14.26%; height:8.58%;"
   title="Built"></a>

<a href="https://dosty.co/"
   target="_blank"
   class="logo-hotspot"
   style="left:50.31%; top:13.35%; width:16.30%; height:7.63%;"
   title="Dosty"></a>

<a href="https://chatfuel.com/"
   target="_blank"
   class="logo-hotspot"
   style="left:70.17%; top:11.32%; width:10.34%; height:11.56%;"
   title="Chatfuel"></a>

<a href="https://geomotive.io/?lang=en"
   target="_blank"
   class="logo-hotspot"
   style="left:83.96%; top:13.35%; width:16.04%; height:7.57%;"
   title="Geomotive"></a>

   <!-- THIRD ROW -->

<a href="https://uzumbank.uz/"
   target="_blank"
   class="logo-hotspot"
   style="left:0.00%; top:25.39%; width:15.78%; height:7.27%;"
   title="Uzum"></a>

<a href="https://www.linkedin.com/company/forest-hero/?originalSubdomain=kz"
   target="_blank"
   class="logo-hotspot"
   style="left:16.98%; top:25.33%; width:15.36%; height:8.05%;"
   title="Forest Hero"></a>

<a href="https://parqour.ai"
   target="_blank"
   class="logo-hotspot"
   style="left:32.71%; top:26.10%; width:17.22%; height:6.79%;"
   title="Parqour"></a>

<a href="https://receptapp.com/"
   target="_blank"
   class="logo-hotspot"
   style="left:50.03%; top:26.04%; width:16.77%; height:6.02%;"
   title="Recepta"></a>

<a href="https://uzinfocom.uz/"
   target="_blank"
   class="logo-hotspot"
   style="left:66.90%; top:26.46%; width:17.11%; height:5.90%;"
   title="Uzinfocom"></a>

<a href="https://pointai.co/"
   target="_blank"
   class="logo-hotspot"
   style="left:84.22%; top:26.22%; width:15.78%; height:6.20%;"
   title="PointAI"></a>

   <!-- FOURTH ROW -->

<a href="https://call24.com/"
   target="_blank"
   class="logo-hotspot"
   style="left:0.21%; top:36.95%; width:14.52%; height:8.40%;"
   title="Call24"></a>

<a href="https://trustexam.ai/"
   target="_blank"
   class="logo-hotspot"
   style="left:15.67%; top:38.38%; width:17.37%; height:5.96%;"
   title="TrustExam"></a>

<a href="https://astanahub.com/en/article/kazakhstanskii-pwron-ai-stal-tekhnologicheskim-partnerom-bi-group-i-vyshel-na-rynok-ssha"
   target="_blank"
   class="logo-hotspot"
   style="left:33.15%; top:38.62%; width:17.11%; height:6.26%;"
   title="pwron.ai"></a>

<a href="https://tilmoch.ai/en/"
   target="_blank"
   class="logo-hotspot"
   style="left:50.84%; top:38.32%; width:18.91%; height:6.85%;"
   title="Tilmoch"></a>

<a href="https://polygraf.ai/"
   target="_blank"
   class="logo-hotspot"
   style="left:70.38%; top:35.16%; width:9.87%; height:12.22%;"
   title="Polygraf"></a>

<a href="https://call2action.ai/"
   target="_blank"
   class="logo-hotspot"
   style="left:82.60%; top:38.02%; width:17.40%; height:7.03%;"
   title="Call2Action"></a>

   <!-- FIFTH ROW -->

<a href="https://workly.io/en"
   target="_blank"
   class="logo-hotspot"
   style="left:0.00%; top:50.36%; width:15.07%; height:7.03%;"
   title="Workly"></a>

<a href="https://rhinotales.com/"
   target="_blank"
   class="logo-hotspot"
   style="left:15.18%; top:50.95%; width:18.10%; height:5.96%;"
   title="RhinoTales"></a>

<a href="https://kscooters.com/"
   target="_blank"
   class="logo-hotspot"
   style="left:33.33%; top:50.77%; width:16.25%; height:6.50%;"
   title="kScooter"></a>

<a href="https://iman.uz/en"
   target="_blank"
   class="logo-hotspot"
   style="left:50.31%; top:49.58%; width:14.89%; height:8.16%;"
   title="IMAN"></a>

<a href="https://mohirdev.uz/"
   target="_blank"
   class="logo-hotspot"
   style="left:69.23%; top:48.27%; width:12.12%; height:10.01%;"
   title="Mohirdev"></a>

<a href="https://www.citix.me/"
   target="_blank"
   class="logo-hotspot"
   style="left:87.25%; top:47.56%; width:10.29%; height:11.50%;"
   title="Citix"></a>

   <!-- SIXTH ROW (newly added) -->

<a href="INSERT_LINK_HERE"
   target="_blank"
   class="logo-hotspot"
   style="left:2.30%; top:60.13%; width:10.29%; height:11.56%;"
   title="Company"></a>

<a href="https://bazarmarkt.com/en/"
   target="_blank"
   class="logo-hotspot"
   style="left:17.24%; top:61.68%; width:14.26%; height:8.40%;"
   title="Bazar Market"></a>

<a href="https://businessrobots.ai/"
   target="_blank"
   class="logo-hotspot"
   style="left:35.11%; top:61.26%; width:12.54%; height:9.42%;"
   title="Business Robots AI"></a>

<a href="https://niet.kz/en"
   target="_blank"
   class="logo-hotspot"
   style="left:52.25%; top:61.14%; width:12.33%; height:9.54%;"
   title="NIET Charitable Foundation"></a>

<a href="https://paylov.uz/"
   target="_blank"
   class="logo-hotspot"
   style="left:68.70%; top:62.46%; width:13.27%; height:6.85%;"
   title="Paylov"></a>

<a href="https://hemolabs-tech.lovable.app/"
   target="_blank"
   class="logo-hotspot"
   style="left:86.05%; top:61.20%; width:12.54%; height:9.36%;"
   title="Hemo.Labs"></a>

   <!-- SEVENTH ROW (newly added) -->

<a href="https://investbanq.com"
   target="_blank"
   class="logo-hotspot"
   style="left:0.52%; top:75.75%; width:13.80%; height:4.65%;"
   title="investbanq"></a>

<a href="https://www.algebras.ai/"
   target="_blank"
   class="logo-hotspot"
   style="left:19.33%; top:72.23%; width:10.19%; height:11.74%;"
   title="Company"></a>

<a href="https://qtwin.kazscanservice.com"
   target="_blank"
   class="logo-hotspot"
   style="left:36.05%; top:72.53%; width:10.76%; height:11.03%;"
   title="Q-Twin"></a>

<a href="https://rette.ai"
   target="_blank"
   class="logo-hotspot"
   style="left:51.20%; top:74.43%; width:14.42%; height:7.27%;"
   title="Company"></a>

<a href="https://www.surfaice.pro"
   target="_blank"
   class="logo-hotspot"
   style="left:66.35%; top:75.03%; width:17.97%; height:6.08%;"
   title="Company"></a>

<a href="https://topcoachuni.com"
   target="_blank"
   class="logo-hotspot"
   style="left:88.24%; top:71.51%; width:8.20%; height:13.05%;"
   title="Top Coach"></a>

   <!-- EIGHTH ROW (newly added) -->

<a href="https://brightfuture.kz/"
   target="_blank"
   class="logo-hotspot"
   style="left:19.23%; top:84.62%; width:10.40%; height:11.44%;"
   title="Bright Future"></a>

<a href="https://dtvsoft.com"
   target="_blank"
   class="logo-hotspot"
   style="left:32.29%; top:86.71%; width:18.23%; height:7.09%;"
   title="DTV Soft"></a>

<a href="https://play.google.com/store/apps/details?id=uz.globalmove.littlechess"
   target="_blank"
   class="logo-hotspot"
   style="left:52.66%; top:85.10%; width:11.34%; height:10.43%;"
   title="Little Chess"></a>

<a href="https://play.google.com/store/apps/details?id=com.umaylab.aika&hl=en_US"
   target="_blank"
   class="logo-hotspot"
   style="left:70.95%; top:84.21%; width:9.82%; height:12.22%;"
   title="Aika"></a>

</div>
</div>
</section>

<!-- Section 5: The Offer -->
<section id="offer" class="py-16 sm:py-20 bg-slate-50">

    <div class="max-w-7xl mx-auto px-6">

        <!-- Heading -->
        <div class="text-center max-w-3xl mx-auto">

            <p class="uppercase tracking-[0.25em] text-accent font-semibold text-sm">
                THE OFFER
            </p>

            <h2 class="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Everything You Need to Exhibit at TechCrunch Disrupt
            </h2>

            <p class="mt-6 text-lg text-slate-600">
                For a single investment of US$7,000, Silkroad Innovation Hub takes care of the logistics so your team can focus on pitching, networking, meeting investors, and growing internationally.
            </p>

        </div>

        <!-- Cards -->
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                <div class="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center text-2xl text-white">
                    ★
                </div>

                <h3 class="mt-4 text-xl font-bold text-slate-900">
                    Pavilion Booth
                </h3>

                <p class="mt-2 text-slate-600 leading-6">
                    Receive a professionally managed exhibition space inside the Silkroad Pavilion and stand out to thousands of attendees.
                </p>

            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                <div class="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center text-2xl text-white">
                    🤝
                </div>

                <h3 class="mt-4 text-xl font-bold text-slate-900">
                    Investor & Media Access
                </h3>

                <p class="mt-2 text-slate-600 leading-6">
                   Meet investors, media, customers and strategic partners throughout TechCrunch Disrupt.
                </p>

            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                <div class="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center text-2xl text-white">
                    🛂
                </div>

                <h3 class="mt-4 text-xl font-bold text-slate-900">
                    Visa Support
                </h3>

                <p class="mt-2 text-slate-600 leading-6">
                   Accepted startups receive an official invitation letter to support participation in TechCrunch Disrupt.
                </p>

            </div>

           <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

    <div class="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center text-2xl text-white">
        ✓
    </div>

    <h3 class="mt-4 text-xl font-bold text-slate-900">
        Visa Denial Refund
    </h3>

    <p class="mt-2 text-slate-600 leading-6">
        If your U.S. visa application is denied, your participation fee is fully refunded so you can apply with confidence.
    </p>

</div>

</div> <!-- End of cards grid -->

<!-- Pricing -->
<div class="mt-12 text-center">

    <p class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
        $7,000
    </p>

</div>

<!-- CTA -->
<div class="mt-8 flex justify-center">

    <a
        href="https://forms.gle/wnHzborgYZmCZQBT6"
        target="_blank"
        class="inline-flex items-center justify-center rounded-xl bg-green-500 hover:bg-green-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1">
        Secure Your Spot
    </a>

</div>

</div> <!-- End of max-w-7xl -->

</section>

      
        <!-- Section 8: Our Proven Track Record -->
        <section id="track-record" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Proven Track Record at Disrupt</h2>
                    <p class="mt-4 text-lg text-slate-600">We have a history of bringing the biggest and best cohorts to the conference.</p>
                </div>
                <div class="mt-8 sm:mt-12 grid gap-3 sm:gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-5">
                    <div class="bg-slate-100 p-4 sm:p-6 lg:p-8 rounded-xl text-center flex flex-col justify-center"><p class="text-sm sm:text-base font-semibold text-slate-500">2023</p><h3 class="mt-1 sm:mt-2 text-4xl sm:text-5xl font-extrabold text-accent stat-number" data-target="14">0</h3><p class="mt-1 sm:mt-2 text-sm sm:text-base font-medium text-slate-500">Startups</p></div>
                    <div class="bg-slate-100 p-4 sm:p-6 lg:p-8 rounded-xl text-center flex flex-col justify-center"><p class="text-sm sm:text-base font-semibold text-slate-500">2024</p><h3 class="mt-1 sm:mt-2 text-4xl sm:text-5xl font-extrabold text-accent stat-number" data-target="24">0</h3><p class="mt-1 sm:mt-2 text-sm sm:text-base font-medium text-slate-500">Startups</p></div>
                    <div class="bg-slate-100 p-4 sm:p-6 lg:p-8 rounded-xl text-center flex flex-col justify-center"><p class="text-sm sm:text-base font-semibold text-slate-500">2025</p><h3 class="mt-1 sm:mt-2 text-4xl sm:text-5xl font-extrabold text-accent stat-number" data-target="20">0</h3><p class="mt-1 sm:mt-2 text-sm sm:text-base font-medium text-slate-500">Startups</p></div>
                    <div class="bg-slate-100 p-4 sm:p-6 lg:p-8 rounded-xl text-center flex flex-col justify-center"><h3 class="text-3xl sm:text-4xl font-extrabold text-accent leading-tight">$2B+</h3><p class="mt-1 sm:mt-2 text-sm sm:text-base font-medium text-slate-500">Participants' Total Valuation</p></div>
                    <div class="col-span-2 lg:col-span-1 bg-slate-100 p-4 sm:p-6 lg:p-8 rounded-xl text-center flex flex-col justify-center"><h3 class="text-3xl sm:text-4xl font-extrabold text-accent leading-tight">Largest</h3><p class="mt-1 sm:mt-2 text-sm sm:text-base font-medium text-slate-500"> startup pavilion at Disrupt</p></div>
                </div>
            </div>
        </section>
        
        <!-- Section 9: Gallery & Carousel -->
        <section id="gallery" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl sm:text-3xl font-extrabold text-center text-gray-900">See the Action</h2>
                <p class="mt-4 text-xl text-center text-gray-600">Experience the energy of the pavilion and the conference floor.</p>
                <div class="mt-12 relative">
                    <div id="carousel-container" class="overflow-hidden rounded-lg shadow-2xl carousel-image">
                        <img src="https://utfs.io/f/5lAbzPMR2hDEUjmC5jz9LRkGWyeHz5AxTpqYvnD8iEJtwXSb" class="carousel-slide active" alt="TechCrunch Disrupt pavilion photo 1">
                        <img src="https://utfs.io/f/5lAbzPMR2hDEfs9w9N7NoUEalmMtCjcDxWuG2AyKg4veH0hV" class="carousel-slide" alt="TechCrunch Disrupt pavilion photo 2">
                        <img src="/Images/AV-33.webp" class="carousel-slide" alt="TechCrunch Disrupt pavilion photo 3">
                        <img src="https://techcrunch.com/wp-content/uploads/2024/10/54104332775_ab862e88d9_o.jpg" class="carousel-slide" alt="TechCrunch Disrupt pavilion photo 4">
                        <img src="/Images/AV-23 (1).webp" class="carousel-slide" alt="TechCrunch Disrupt pavilion photo 5">
                    </div>
                    <button id="prevBtn" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 focus:outline-none z-10" aria-label="Previous image"><span class="text-2xl">❮</span></button>
                    <button id="nextBtn" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 focus:outline-none z-10" aria-label="Next image"><span class="text-2xl">❯</span></button>
                </div>
            </div>
        </section>

        <!-- Section 10: Testimonials -->
        <section id="testimonials" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl sm:text-3xl font-extrabold text-center text-gray-900">From Founders Like You</h2>
                <div class="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
                   <div class="testimonial-card rounded-lg p-6 flex flex-col justify-between min-h-[310px]"><p class="text-gray-600">"It was a great opportunity to introduce our product to the US market and to find valuable connections for further development."</p><div class="mt-6 flex flex-col items-center text-center"><img class="h-24 w-24 rounded-full testimonial-image" src="https://utfs.io/f/5lAbzPMR2hDElSw4NoIgs2k8H4n6bZAKdexXuTECwihprfQJ" alt="Nurali Sarbakysh"><p class="mt-3 font-bold text-gray-900">Nurali Sarbakysh</p><p class="text-base sm:text-sm text-gray-500">TrustExam</p></div></div>
                   <div class="testimonial-card rounded-lg p-6 flex flex-col justify-between min-h-[310px]"><p class="text-gray-600">"We have achieved a lot: we are now in talks with multiple potential partners, received media coverage, discovered new global platforms where foundations can register and receive corporate donations, learned how U.S. nonprofits operate, and got valuable advice from the community."</p><div class="mt-6 flex flex-col items-center text-center"><img class="h-24 w-24 rounded-full testimonial-image" src="/Images/Yevgeniya Yussupova CEO of NIET.webp" alt="Yevgeniya Yussupova"><p class="mt-3 font-bold text-gray-900">Yevgeniya Yussupova</p><p class="text-base sm:text-sm text-gray-500">CEO of NIET Charitable Foundation</p></div></div>
                    <div class="testimonial-card rounded-lg p-6 flex flex-col justify-between min-h-[310px]"><p class="text-gray-600">“Delighted that the team and startups had a great time! We always enjoy having the SilkRoad Innovation Hub at Disrupt.”</p><div class="mt-6 flex flex-col items-center text-center"><img class="h-24 w-24 rounded-full testimonial-image" src="/Images/Sherie Spence.webp" alt="Sherie Spence"><p class="mt-3 font-bold text-gray-900">Sherie Spence</p><p class="text-base sm:text-sm text-gray-500">TechCrunch Disrupt</p></div></div>
                    <div class="testimonial-card rounded-lg p-6 flex flex-col justify-between min-h-[310px]"><p class="text-gray-600">"Participating in the Silkroad Pavilion was a fantastic experience. I enjoyed it immensely, thanks to the entire team who made it seamless. It was the perfect entry into the global tech scene."</p><div class="mt-6 flex flex-col items-center text-center"><img class="h-24 w-24 rounded-full testimonial-image" src="/Images/Ardak Akhmetova.webp" alt="Ardak Akhmetova"><p class="mt-3 font-bold text-gray-900">Ardak Akhmetova</p><p class="text-base sm:text-sm text-gray-500">Global Grand University</p></div></div>
                    <div class="testimonial-card rounded-lg p-6 flex flex-col justify-between min-h-[310px]"><p class="text-gray-600">"Participating in the Silkroad TechCrunch Pavilion was a golden opportunity — we made over 300 high-level connections and met with numerous VCs we'd otherwise have spent months trying to reach."</p><div class="mt-6 flex flex-col items-center text-center"><img class="h-24 w-24 rounded-full testimonial-image" src="/Images/Aira mongush.png" alt="Aira Mongush"><p class="mt-3 font-bold text-gray-900">Aira Mongush</p><p class="text-base sm:text-sm text-gray-500">Algebras AI</p></div></div>
                    <div class="testimonial-card rounded-lg p-6 flex flex-col justify-between min-h-[310px]"><p class="text-gray-600">"We've agreed on two pilot projects so far (verbally), formed a few partnerships, refined our pitch based on feedback, and built some great new connections."</p><div class="mt-6 flex flex-col items-center text-center"><img class="h-24 w-24 rounded-full testimonial-image" src="/Images/Anuar Zhaksylyk.jpg" alt="Anuar Zhaksylyk"><p class="mt-3 font-bold text-gray-900">Anuar Zhaksylyk</p><p class="text-base sm:text-sm text-gray-500">QazTWIN</p></div></div>
                </div>
            </div>
        </section>

        <!-- Section 11: Featured Speakers -->
        <section id="speakers" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Speakers at Disrupt</h2>
                    <p class="mt-4 text-lg text-slate-600">Learn from the brightest minds in tech.</p>
                </div>
               <div class="mt-12 grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
 <div class="speaker-card text-center p-6 rounded-lg h-full flex flex-col items-center">

    <img
        class="w-32 h-32 rounded-full speaker-image"
        src="/Images/Nikhil-Chandhok-e1782400490547.webp"
        alt="Nikhil Chandhok">

    <div class="mt-6 flex items-center justify-center gap-2">
        <h3 class="text-xl font-bold text-slate-900">
            Nikhil Chandhok
        </h3>
        <a
            href="https://www.linkedin.com/in/chandhok/"
            target="_blank"
            aria-label="LinkedIn">
            <svg
                viewBox="0 0 24 24"
                class="w-5 h-5 text-[#0A66C2] hover:scale-110 transition">
                <path
                    fill="currentColor"
                    d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0zm8 0h4.79v2.18h.07C13.53 8.94 15.33 8 17.53 8 22.08 8 23 10.98 23 14.84V24h-5v-8.01c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V24H8z"/>
            </svg>
        </a>
    </div>

    <p class="mt-2 text-base sm:text-sm text-slate-500">
        Chief Product & Technology Officer, Circle
    </p>

    <div class="mt-4">
        <a href="https://www.circle.com/" target="_blank" class="flex items-center justify-center gap-2 hover:opacity-80 transition">
            <img
                src="/Images/circle company.webp"
                alt="Circle"
                class="h-8 object-contain">
            <span class="text-sm font-semibold text-slate-700">Circle</span>
        </a>
    </div>

</div>

<div class="speaker-card text-center p-6 rounded-lg h-full flex flex-col items-center">

    <img
        class="w-32 h-32 rounded-full speaker-image"
        src="/Images/Arvind-Jain-Glean.webp"
        alt="Arvind Jain">

    <div class="mt-6 flex items-center justify-center gap-2">
        <h3 class="text-xl font-bold text-slate-900">
            Arvind Jain
        </h3>
        <a
            href="https://www.linkedin.com/in/jain-arvind/"
            target="_blank"
            aria-label="LinkedIn">
            <svg
                viewBox="0 0 24 24"
                class="w-5 h-5 text-[#0A66C2] hover:scale-110 transition">
                <path
                    fill="currentColor"
                    d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0zm8 0h4.79v2.18h.07C13.53 8.94 15.33 8 17.53 8 22.08 8 23 10.98 23 14.84V24h-5v-8.01c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V24H8z"/>
            </svg>
        </a>
    </div>

    <p class="mt-2 text-base sm:text-sm text-slate-500">
        Founder and CEO, Glean
    </p>

    <div class="mt-4">
        <a href="https://www.glean.com/" target="_blank" class="flex items-center justify-center gap-2 hover:opacity-80 transition">
            <img
                src="/Images/glean company.webp"
                alt="Glean"
                class="h-8 object-contain">
            <span class="text-sm font-semibold text-slate-700">Glean</span>
        </a>
    </div>

</div>

<div class="speaker-card text-center p-6 rounded-lg h-full flex flex-col items-center">

    <img
        class="w-32 h-32 rounded-full speaker-image"
        src="/Images/Jeff_Color-1000-e1778078607521.webp"
        alt="Jeff Lawson">

    <div class="mt-6 flex items-center justify-center gap-2">
        <h3 class="text-xl font-bold text-slate-900">
            Jeff Lawson
        </h3>
        <a
            href="https://www.linkedin.com/in/jeffiel/"
            target="_blank"
            aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" class="w-5 h-5 text-[#0A66C2] hover:scale-110 transition">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0zm8 0h4.79v2.18h.07C13.53 8.94 15.33 8 17.53 8 22.08 8 23 10.98 23 14.84V24h-5v-8.01c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V24H8z"/>
            </svg>
        </a>
    </div>

    <p class="mt-2 text-base sm:text-sm text-slate-500">
        Co-Founder, Twilio
    </p>

    <div class="mt-4">
        <a href="https://www.twilio.com/en-us" target="_blank" class="flex items-center justify-center gap-2 hover:opacity-80 transition">
            <img
                src="/Images/Twilio Jeff.webp"
                alt="Twilio"
                class="h-8 object-contain">
            <span class="text-sm font-semibold text-slate-700">Twilio</span>
        </a>
    </div>

</div>

<div class="speaker-card text-center p-6 rounded-lg h-full flex flex-col items-center">

    <img
        class="w-32 h-32 rounded-full speaker-image"
        src="/Images/Ryan Meadows.webp"
        alt="Ryan Meadows">

    <div class="mt-6 flex items-center justify-center gap-2">
        <h3 class="text-xl font-bold text-slate-900">
            Ryan Meadows
        </h3>
        <a
            href="https://www.linkedin.com/in/rmeadows/"
            target="_blank"
            aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" class="w-5 h-5 text-[#0A66C2] hover:scale-110 transition">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0zm8 0h4.79v2.18h.07C13.53 8.94 15.33 8 17.53 8 22.08 8 23 10.98 23 14.84V24h-5v-8.01c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V24H8z"/>
            </svg>
        </a>
    </div>

    <p class="mt-2 text-base sm:text-sm text-slate-500">
        Chief Revenue Officer, Loveable
    </p>

    <div class="mt-4">
        <a href="https://lovable.dev" target="_blank" class="flex items-center justify-center gap-2 hover:opacity-80 transition">
            <img
                src="/Images/loveable Ryan meadows.webp"
                alt="Loveable"
                class="h-8 object-contain">
            <span class="text-sm font-semibold text-slate-700">Loveable</span>
        </a>
    </div>

</div>

<div class="speaker-card text-center p-6 rounded-lg h-full flex flex-col items-center">

    <img
        class="w-32 h-32 rounded-full speaker-image"
        src="/Images/Robby-headshot.webp"
        alt="Robby Stein">

    <div class="mt-6 flex items-center justify-center gap-2">
        <h3 class="text-xl font-bold text-slate-900">
            Robby Stein
        </h3>
        <a
            href="https://www.linkedin.com/in/robbystein/"
            target="_blank"
            aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" class="w-5 h-5 text-[#0A66C2] hover:scale-110 transition">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0zm8 0h4.79v2.18h.07C13.53 8.94 15.33 8 17.53 8 22.08 8 23 10.98 23 14.84V24h-5v-8.01c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V24H8z"/>
            </svg>
        </a>
    </div>

    <p class="mt-2 text-base sm:text-sm text-slate-500">
        Vice President of Product, Google Search, Google
    </p>

    <div class="mt-4">
        <a href="https://about.google/" target="_blank" class="flex items-center justify-center gap-2 hover:opacity-80 transition">
            <img
                src="/Images/google.webp"
                alt="Google"
                class="h-8 object-contain">
            <span class="text-sm font-semibold text-slate-700">Google</span>
        </a>
    </div>

</div>

<div class="speaker-card text-center p-6 rounded-lg h-full flex flex-col items-center">

    <img
        class="w-32 h-32 rounded-full speaker-image"
        src="/Images/headshot-arsalan-tavakoli-e1777576150816.webp"
        alt="Arsalan Tavakoli-Shiraji">

    <div class="mt-6 flex items-center justify-center gap-2">
        <h3 class="text-xl font-bold text-slate-900">
            Arsalan Tavakoli-Shiraji
        </h3>
        <a
            href="https://www.linkedin.com/in/arsalantavakoli/"
            target="_blank"
            aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" class="w-5 h-5 text-[#0A66C2] hover:scale-110 transition">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0zm8 0h4.79v2.18h.07C13.53 8.94 15.33 8 17.53 8 22.08 8 23 10.98 23 14.84V24h-5v-8.01c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V24H8z"/>
            </svg>
        </a>
    </div>

    <p class="mt-2 text-base sm:text-sm text-slate-500">
        Co-founder and SVP of Field Engineering, Databricks
    </p>

    <div class="mt-4">
        <a href="https://www.databricks.com" target="_blank" class="flex items-center justify-center gap-2 hover:opacity-80 transition">
            <img
                src="/Images/databricks arsalan.webp"
                alt="Databricks"
                class="h-8 object-contain">
            <span class="text-sm font-semibold text-slate-700">Databricks</span>
        </a>
    </div>

</div>

</div> <!-- closes grid -->

<div class="mt-20 text-center">
    <a href="https://techcrunch.com/events/techcrunch-disrupt/speakers/"
       target="_blank"
       class="cta-button inline-block bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-8 rounded-lg text-lg">
        See Full Speaker List
    </a>
</div>

</div> <!-- closes max-w-7xl -->
</section> <!-- closes speakers section -->

        <!-- Section 12: Our Partners -->
        <section id="partners" class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="pb-4 text-center text-2xl font-semibold text-gray-600">Proudly Supported By</h2>
                <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                 <a href="https://astanahub.com" target="_blank" class="flex justify-center"><img src="https://utfs.io/f/5lAbzPMR2hDEAEQkNi8n3KOXuIPyz5YopqHcStNnrWvB81Lm" alt="Astana Hub Logo" class="h-12 grayscale hover:grayscale-0 transition"></a>
                    <a href="https://it-park.uz/" target="_blank" class="flex justify-center"><img src="https://utfs.io/f/5lAbzPMR2hDEJ6ou5aTNd8qgoWVa5bZuLlBwfikjUP1GAQ2O" alt="IT Park Uzbekistan Logo" class="h-12 grayscale hover:grayscale-0 transition"></a>
                    <a href="https://the-tech.kz/" target="_blank" class="flex justify-center"><img src="https://utfs.io/f/5lAbzPMR2hDEqtDsuv2R35ILznmDWpEMQBPGa4Xb1c7e9gHC" alt="The Tech Logo" class="h-8 grayscale hover:grayscale-0 transition"></a>
                    <a href="https://www.slkrd.club/" target="_blank" class="flex justify-center"><img src="https://utfs.io/f/5lAbzPMR2hDEcdwjeGJKxB9ve3jY6MSVgGtDEz8ROILyfdaZ" alt="Silkroad Angels Club Logo" class="h-12 grayscale hover:grayscale-0 transition"></a>
                </div>
            </div>
        </section>

        <!-- Section 13: Meet the Team -->
        <section id="team" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl">The Team Behind the Pavilion</h2>
                    <p class="mt-4 text-lg text-slate-600">Our experienced team is dedicated to your success at Disrupt.</p>
                </div>
                <div class="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="team-card text-center p-6 rounded-lg"><img class="w-24 h-24 rounded-full mx-auto team-image" src="https://utfs.io/f/5lAbzPMR2hDEoALjd9NITPBspnx5XJt4uSc0LvKzfg2wm71l" alt="Asset Abdualiyev"><h3 class="mt-6 text-xl font-bold text-slate-900">Asset Abdualiyev</h3><p class="mt-1 text-accent">Founder & CEO</p></div>
                    <div class="team-card text-center p-6 rounded-lg"><img class="w-24 h-24 rounded-full mx-auto team-image" src="https://utfs.io/f/5lAbzPMR2hDE1sAY8GUwvu7o15e9Sqm2laIyRshbXUBnNOr3" alt="Aikumis Seksenbayeva"><h3 class="mt-6 text-xl font-bold text-slate-900">Aikumis Seksenbayeva</h3><p class="mt-1 text-accent">Senior Program Manager</p></div>
                    <div class="team-card text-center p-6 rounded-lg"><img class="w-24 h-24 rounded-full mx-auto team-image" src="/Images/Nilufar.webp" alt="Nilufar Majidova"><h3 class="mt-6 text-xl font-bold text-slate-900">Nilufar Majidova</h3><p class="mt-1 text-accent">Program Operations Manager</p></div>
                    <div class="team-card text-center p-6 rounded-lg"><img class="w-24 h-24 rounded-full mx-auto team-image" src="https://utfs.io/f/5lAbzPMR2hDE4WRPFbNLGxklWuSdTiD0OA84eVhJR6gqs7Qn" alt="Shokhrukh Ibragimov"><h3 class="mt-6 text-xl font-bold text-slate-900">Shokhrukh Ibragimov</h3><p class="mt-1 text-accent">Program Manager</p></div>

                </div>
            </div>
        </section>

  

        <!-- Section 14: FAQ -->
        <section id="faq" class="py-20 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl sm:text-3xl font-extrabold text-center text-gray-900">Frequently Asked Questions</h2>
                <div class="mt-10 space-y-4">
                    <details class="faq-item bg-white p-6 rounded-lg shadow-sm group"><summary class="font-medium cursor-pointer list-none flex justify-between items-center">What is the exact cost?<span class="transition group-open:rotate-180">▼</span></summary><p class="text-gray-600 mt-4">The total cost is $7,000 per startup.</p></details>
                    <details class="faq-item bg-white p-6 rounded-lg shadow-sm group"><summary class="font-medium cursor-pointer list-none flex justify-between items-center">Do you help with U.S. visa applications?<span class="transition group-open:rotate-180">▼</span></summary><p class="text-gray-600 mt-4">While we cannot guarantee visa issuance, we provide official letters of invitation and guidance documents to support your B1/B2 visa application process.</p></details>
                    <details class="faq-item bg-white p-6 rounded-lg shadow-sm group">
    <summary class="font-medium cursor-pointer list-none flex justify-between items-center">
        Do I need to print my own banners?
        <span class="transition group-open:rotate-180">▼</span>
    </summary>

    <p class="text-gray-600 mt-4">
        No. Silkroad Innovation Hub prints participant banners for the pavilion, so you don't need to worry about printing them yourself. This saves founders both time and money, since TechCrunch does not provide banner printing.
    </p>
</details>
                    <details class="faq-item bg-white p-6 rounded-lg shadow-sm group"><summary class="font-medium cursor-pointer list-none flex justify-between items-center">Are flights and accommodation included?<span class="transition group-open:rotate-180">▼</span></summary><p class="text-gray-600 mt-4">No, flights and accommodation are not included in the package price. Founders are responsible for their own travel and lodging arrangements. We can provide recommendations for nearby hotels.</p></details>
                    <details class="faq-item bg-white p-6 rounded-lg shadow-sm group"><summary class="font-medium cursor-pointer list-none flex justify-between items-center">What is the application deadline?<span class="transition group-open:rotate-180">▼</span></summary><p class="text-gray-600 mt-4">The application deadline is September 15, 2026.</p></details>
                </div>
            </div>
        </section>

        <!-- Section 15: Final Call to Action & Contacts -->
        <section id="contact" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-slate-800 rounded-2xl p-6 sm:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 class="text-4xl sm:text-3xl font-extrabold text-white">Ready to Take the Global Stage?</h2>
                        <p class="mt-4 text-lg text-slate-300">Don't miss this opportunity to accelerate your startup's growth. Spots are limited and applications are reviewed on a rolling basis.</p>
                        <p class="mt-4 text-2xl font-bold text-amber-400">Application Deadline: September 15, 2026</p>
                        <div class="mt-8 text-center md:text-left"><a href="https://forms.gle/wnHzborgYZmCZQBT6" target="_blank" class="cta-button inline-block bg-accent text-white font-extrabold sm:font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-lg text-lg whitespace-nowrap">Apply for the Pavilion</a></div>
                    </div>
                    <div class="text-slate-200">
                        <h3 class="text-2xl font-bold text-white">Get in Touch</h3>
                        <div class="mt-6 space-y-4">
                            <a href="mailto:buildunicorns@silkroadinnovationhub.com" class="flex items-center text-lg text-slate-300 hover:text-white transition"><span class="text-2xl mr-3">✉️</span> Email</a>
                            <a href="https://t.me/nilufar_majidova" class="flex items-center text-lg text-slate-300 hover:text-white transition"><span class="text-2xl mr-3">✈️</span> Telegram</a>
                             <div class="flex items-center text-lg text-slate-300 pt-2"><span class="text-2xl mr-3">📍</span> 724 Oak Grove Ave Menlo Park, CA 94025</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="bg-slate-800">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p class="text-center text-sm text-slate-400">&copy; 2026 Silkroad Innovation Hub. All rights reserved.</p>
        </div>
    </footer>`;

export const SITE_SCRIPT = `
document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    const setMobileMenuOpen = (open) => {
        mobileMenu.classList.toggle('mobile-menu-open', open);
        mobileMenuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (menuIconOpen && menuIconClose) {
            menuIconOpen.classList.toggle('hidden', open);
            menuIconClose.classList.toggle('hidden', !open);
        }
    };

    mobileMenuButton.addEventListener('click', () => {
        setMobileMenuOpen(!mobileMenu.classList.contains('mobile-menu-open'));
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            setMobileMenuOpen(false);
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateStat = (element) => {
        const target = +element.getAttribute('data-target');
        const prefix = element.getAttribute('data-prefix') || '';
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            let displayValue;
            if (target % 1 !== 0) { // Handle floats
                displayValue = current.toFixed(1);
            } else {
                displayValue = Math.floor(current).toLocaleString();
            }
            element.textContent = prefix + displayValue + suffix;
        }, stepTime);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStat(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));

    // Generic Carousel Logic
    function setupCarousel(containerId, trackId, prevBtnId, nextBtnId, interval) {
        const track = document.getElementById(trackId);
        if (!track) return;
        
        const slides = Array.from(track.children);
        const nextButton = document.getElementById(nextBtnId);
        const prevButton = document.getElementById(prevBtnId);
        
        if (slides.length > 0) {
            let slideWidth = slides[0].getBoundingClientRect().width;
            let currentIndex = 0;

            const moveToSlide = (targetIndex) => {
                if (!track || !slides[targetIndex]) return;
                slideWidth = slides[0].getBoundingClientRect().width;
                track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
                currentIndex = targetIndex;
            }
            
            if(nextButton && prevButton){
                nextButton.addEventListener('click', e => {
                    const nextIndex = (currentIndex + 1) % slides.length;
                    moveToSlide(nextIndex);
                });

                prevButton.addEventListener('click', e => {
                    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
                    moveToSlide(prevIndex);
                });
            }
            
            window.addEventListener('resize', () => {
                moveToSlide(currentIndex);
            });

            if (interval > 0) {
                setInterval(() => {
                    const nextIndex = (currentIndex + 1) % slides.length;
                    moveToSlide(nextIndex);
                }, interval);
            }
        }
    }

    // Setup Advantage Carousel (autoplay slideshow)
    setupCarousel(null, 'advantage-carousel-track', null, null, 3000);

    // Gallery fade slideshow (simple, low-CPU: no continuous scrolling)
    (function setupFadeSlideshow(){
        const container = document.getElementById('carousel-container');
        const prev = document.getElementById('prevBtn');
        const next = document.getElementById('nextBtn');
        if (!container) return;

        const slides = Array.from(container.querySelectorAll('.carousel-slide'));
        if (slides.length === 0) return;

        let currentIndex = Math.max(0, slides.findIndex(s => s.classList.contains('active')));
        let timer = null;
        const AUTOPLAY_INTERVAL = 4000;

        const showSlide = (index) => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (index + slides.length) % slides.length;
            slides[currentIndex].classList.add('active');
        };

        const startAutoplay = () => {
            if (timer) clearInterval(timer);
            timer = setInterval(() => showSlide(currentIndex + 1), AUTOPLAY_INTERVAL);
        };

        if (next) next.addEventListener('click', () => { showSlide(currentIndex + 1); startAutoplay(); });
        if (prev) prev.addEventListener('click', () => { showSlide(currentIndex - 1); startAutoplay(); });

        startAutoplay();
    })();

});
`;
