// Auto-embedded static site content. Edit these strings to update the site.
export const SITE_STYLE = `
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
            height: 300px;
        }
        @media (min-width: 768px) {
            .carousel-image {
                height: 600px;
            }
        }
       .team-image, .speaker-image, .testimonial-image {
    object-fit: cover;
    object-position: center;
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
                        <a href="#alumni" class="text-slate-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Previous Participants</a>
                        <a href="#track-record" class="text-slate-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Our Record</a>
                        <a href="#team" class="text-slate-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Team</a>
                    </div>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#about-disrupt" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">About Disrupt</a>
                <a href="#offer" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">The Offer</a>
                <a href="#eligibility" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Eligibility</a>
                <a href="#alumni" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Previous Participants</a>
                <a href="#track-record" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Our Record</a>
                <a href="#team" class="mobile-menu-link text-slate-600 hover:bg-slate-50 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Team</a>
            </div>
        </div>
    </header>

    <main>
        <!-- Section 2: Hero Section -->
        <section class="relative py-20 md:py-32 bg-white">
            <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                    Showcase Your Startup to the World.
                </h1>
                <h2 class="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-accent">
                    Join the Silkroad Pavilion at TechCrunch Disrupt 2026.
                </h2>
                <p class="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
                    An exclusive opportunity for top Central Eurasian startups to gain global visibility at TechCrunch Disrupt 2026 this October 13-15.
                </p>
                <div class="mt-10">
                    <a href="https://forms.gle/wnHzborgYZmCZQBT6" target="_blank" class="cta-button inline-block bg-accent text-white font-bold py-4 px-10 rounded-lg text-lg">
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
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">What is TechCrunch Disrupt?</h2>
                    <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">TechCrunch Disrupt is the #1 annual technology conference in the world. It brings together the most innovative startups, influential investors, and tech enthusiasts for three days of networking, learning, and pitching on the global stage.</p>
                     <div class="mt-6">
                         <a href="https://techcrunch.com/events/tc-disrupt-2025/" target="_blank" class="text-accent font-semibold hover:underline">Learn More →</a>
                    </div>
                </div>
                <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="aspect-w-16 aspect-h-9"><img class="rounded-lg shadow-xl disrupt-gallery-image" src="https://techcrunch.com/wp-content/uploads/2024/06/stage_1200x600.png?w=680" alt="TechCrunch Disrupt Stage"></div>
                    <div class="aspect-w-16 aspect-h-9"><img class="rounded-lg shadow-xl disrupt-gallery-image" src="https://utfs.io/f/5lAbzPMR2hDETv8V80D0khqMSHFVgYoZ4pRfjULiCsW7Tz9E" alt="TechCrunch Disrupt Audience"></div>
                    <div class="aspect-w-16 aspect-h-9"><img class="rounded-lg shadow-xl disrupt-gallery-image" src="https://techcrunch.com/wp-content/uploads/2025/08/54119360246_edcb95285c_o.jpg?w=563" alt="TechCrunch Disrupt Startup Alley"></div>
                </div>
            </div>
        </section>

        <!-- Section 4: The Value: Why You Should Apply -->
        <section id="value" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Gain Your Unfair Advantage</h2>
                        <p class="mt-4 text-xl text-gray-600">Attending the #1 tech event in the world is a massive opportunity. We provide the platform and support to help you make the most of it.</p>
                        <div class="mt-8 space-y-6">
                            <div><h3 class="text-xl font-bold">Amplify Your Presence</h3><p class="mt-2 text-gray-500">Stand out from thousands of startups. Being part of a professionally organized pavilion makes you easier to find and signals quality to investors and media.</p></div>
                            <div><h3 class="text-xl font-bold">Gain Media Exposure</h3><p class="mt-2 text-gray-500">Our previous cohorts were featured in 42 publications, reaching an audience of over 8.6 million. We help you get noticed.</p></div>
                            <div><h3 class="text-xl font-bold">Benefit from Our Support</h3><p class="mt-2 text-gray-500">We handle the heavy lifting of logistics and event coordination, allowing you to focus 100% on your startup's goals for the conference.</p></div>
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
        </section>

        <!-- Section 5: The Offer: What's Included -->
        <section id="offer" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                    <p class="text-base text-accent font-semibold tracking-wide uppercase">The Offer</p>
                    <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Your All-In-One Pass to Global Exposure</h2>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">For a single investment of <span class="font-bold text-slate-800">$7,000</span>, you get a comprehensive package designed for maximum impact.</p>
                </div>
                <div class="mt-12">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div class="flex"><div class="flex-shrink-0"><div class="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white"><span class="text-2xl">★</span></div></div><div class="ml-4"><h3 class="text-lg leading-6 font-medium text-gray-900">Dedicated Stand in Pavilion</h3><p class="mt-2 text-base text-gray-500">Your own branded space in the high-traffic Silkroad Pavilion.</p></div></div>
                        <div class="flex"><div class="flex-shrink-0"><div class="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white"><span class="text-2xl">🎟️</span></div></div><div class="ml-4"><h3 class="text-lg leading-6 font-medium text-gray-900">2 Founder Passes</h3><p class="mt-2 text-base text-gray-500">Full access for two team members to all of Disrupt's stages and events.</p></div></div>
                        <div class="flex"><div class="flex-shrink-0"><div class="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white"><span class="text-2xl">🚀</span></div></div><div class="ml-4"><h3 class="text-lg leading-6 font-medium text-gray-900">Startup Alley & Pitch Session</h3><p class="mt-2 text-base text-gray-500">Exhibit in the main Startup Alley and pitch on our stage to over 400+ viewers.</p></div></div>
                        <div class="flex"><div class="flex-shrink-0"><div class="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white"><span class="text-2xl">🛠️</span></div></div><div class="ml-4"><h3 class="text-lg leading-6 font-medium text-gray-900">On-site Logistical Support</h3><p class="mt-2 text-base text-gray-500">Our team will be on the ground to help with setup and scheduling.</p></div></div>
                    </div>
                </div>
                <div class="mt-12 text-center">
                    <a href="https://forms.gle/wnHzborgYZmCZQBT6" target="_blank" class="cta-button inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg text-lg">Secure Your Spot</a>
                </div>
            </div>
        </section>

        <!-- Section 6: Eligibility Criteria -->
        <section id="eligibility" class="py-20 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Who Should Apply?</h2>
                <p class="mt-4 text-xl text-gray-600">We are looking for ambitious, tech-driven startups with a connection to Central Eurasia who are ready to take on the global market.</p>
                <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <span class="bg-accent/10 text-accent font-medium px-4 py-2 rounded-full">Innovative Tech Startups</span>
                    <span class="bg-accent/10 text-accent font-medium px-4 py-2 rounded-full">Global Ambitions</span>
                    <span class="bg-accent/10 text-accent font-medium px-4 py-2 rounded-full">Based in or from Central Eurasia</span>
                </div>
            </div>
        </section>

        <!-- Section 7: Previous Participants -->
        <section id="alumni" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Previous Participants</h2>
                    <p class="mt-4 text-lg text-slate-600">Join a growing list of successful startups who have been part of our pavilion.</p>
                </div>
                <div class="mt-8">
                    <img src="/Images/tcdisrupt_previous final.png" alt="2024 Startup Alumni Logos" class="mx-auto">
                </div>
            </div>
        </section>

        <!-- Section 8: Our Proven Track Record -->
        <section id="track-record" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Proven Track Record at Disrupt</h2>
                    <p class="mt-4 text-lg text-slate-600">We have a history of bringing the biggest and best cohorts to the conference.</p>
                </div>
                <div class="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                    <div class="bg-slate-100 p-8 rounded-xl text-center flex flex-col justify-center"><p class="text-base font-semibold text-slate-500">2023</p><h3 class="mt-2 text-5xl font-extrabold text-accent stat-number" data-target="14">0</h3><p class="mt-2 text-base font-medium text-slate-500">Startups</p></div>
                    <div class="bg-slate-100 p-8 rounded-xl text-center flex flex-col justify-center"><p class="text-base font-semibold text-slate-500">2024</p><h3 class="mt-2 text-5xl font-extrabold text-accent stat-number" data-target="24">0</h3><p class="mt-2 text-base font-medium text-slate-500">Startups</p></div>
                    <div class="bg-slate-100 p-8 rounded-xl text-center flex flex-col justify-center"><p class="text-base font-semibold text-slate-500">2025</p><h3 class="mt-2 text-5xl font-extrabold text-accent stat-number" data-target="20">0</h3><p class="mt-2 text-base font-medium text-slate-500">Startups</p></div>
                    <div class="bg-slate-100 p-8 rounded-xl text-center flex flex-col justify-center"><h3 class="text-4xl font-extrabold text-accent leading-tight">$2B+</h3><p class="mt-2 text-base font-medium text-slate-500">Participants' Total Valuation</p></div>
                    <div class="bg-slate-100 p-8 rounded-xl text-center flex flex-col justify-center"><h3 class="text-4xl font-extrabold text-accent leading-tight">Largest Startup Pavilion</h3><p class="mt-2 text-base font-medium text-slate-500">at Disrupt</p></div>
                </div>
            </div>
        </section>
        
        <!-- Section 9: Gallery & Carousel -->
        <section id="gallery" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-extrabold text-center text-gray-900">See the Action</h2>
                <p class="mt-4 text-xl text-center text-gray-600">Experience the energy of the pavilion and the conference floor.</p>
                <div class="mt-12 relative">
                    <div id="carousel-container" class="overflow-hidden rounded-lg shadow-2xl">
                        <div id="carousel-track" class="flex will-change-transform">
                            <img src="https://utfs.io/f/5lAbzPMR2hDEUjmC5jz9LRkGWyeHz5AxTpqYvnD8iEJtwXSb" class="w-auto h-full flex-shrink-0 object-cover carousel-image">
                            <img src="https://utfs.io/f/5lAbzPMR2hDEfs9w9N7NoUEalmMtCjcDxWuG2AyKg4veH0hV" class="w-auto h-full flex-shrink-0 object-cover carousel-image">
                            <img src="/Images/AV-33.jpg" class="w-auto h-full flex-shrink-0 object-cover carousel-image">
                            <img src="https://techcrunch.com/wp-content/uploads/2024/10/54104332775_ab862e88d9_o.jpg" class="w-auto h-full flex-shrink-0 object-cover carousel-image">
                            <img src="https://utfs.io/f/5lAbzPMR2hDEWjzLd9x3ny7kJ4wRfb1vAVrTxHM5gWYNtiej" class="w-auto h-full flex-shrink-0 object-cover carousel-image">
                        </div>
                    </div>
                    <button id="prevBtn" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 focus:outline-none z-10" aria-label="Previous image"><span class="text-2xl">❮</span></button>
                    <button id="nextBtn" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 focus:outline-none z-10" aria-label="Next image"><span class="text-2xl">❯</span></button>
                </div>
            </div>
        </section>

        <!-- Section 10: Testimonials -->
        <section id="testimonials" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-extrabold text-center text-gray-900">From Founders Like You</h2>
                <div class="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
                   <div class="testimonial-card rounded-lg p-8 flex flex-col justify-between min-h-[360px]"><p class="text-gray-600">"It was a great opportunity to introduce our product to the US market and to find valuable connections for further development."</p><div class="mt-8 flex flex-col items-center text-center"><img class="h-24 w-24 rounded-full testimonial-image" src="https://utfs.io/f/5lAbzPMR2hDElSw4NoIgs2k8H4n6bZAKdexXuTECwihprfQJ" alt="Nurali Sarbakysh"><p class="mt-4 font-bold text-gray-900">Nurali Sarbakysh</p><p class="text-sm text-gray-500">TrustExam</p></div></div>
                   <div class="testimonial-card rounded-lg p-8 flex flex-col justify-between min-h-[360px]"><p class="text-gray-600">"We have achieved a lot: we are now in talks with multiple potential partners, received media coverage, discovered new global platforms where foundations can register and receive corporate donations, learned how U.S. nonprofits operate, and got valuable advice from the community."</p><div class="mt-8 flex flex-col items-center text-center"><img class="h-24 w-24 rounded-full testimonial-image" src="Images/Yevgeniya Yussupova CEO of NIET.jpg" alt="Yevgeniya Yussupova"><p class="mt-4 font-bold text-gray-900">Yevgeniya Yussupova</p><p class="text-sm text-gray-500">CEO of NIET Charitable Foundation</p></div></div>
                    <div class="testimonial-card rounded-lg p-8 flex flex-col justify-between min-h-[360px]"><p class="text-gray-600">“Delighted that the team and startups had a great time! We always enjoy having the SilkRoad Innovation Hub at Disrupt.”</p><div class="mt-8 flex flex-col items-center text-center"><img class="h-24 w-24 rounded-full testimonial-image" src="Images/Sherie Spence.jpg" alt="Sherie Spence"><p class="mt-4 font-bold text-gray-900">Sherie Spence</p><p class="text-sm text-gray-500">TechCrunch Disrupt</p></div></div>
                    <div class="testimonial-card rounded-lg p-8 flex flex-col justify-between min-h-[360px]"><p class="text-gray-600">"Participating in the Silkroad Pavilion was a fantastic experience. I enjoyed it immensely, thanks to the entire team who made it seamless. It was the perfect entry into the global tech scene."</p><div class="mt-8 flex flex-col items-center text-center"><img class="h-24 w-24 rounded-full testimonial-image" src="Images/Ardak Akhmetova.jpg" alt="Ardak Akhmetova"><p class="mt-4 font-bold text-gray-900">Ardak Akhmetova</p><p class="text-sm text-gray-500">Global Grand University</p></div></div>
                </div>
            </div>
        </section>

        <!-- Section 11: Meet the Team -->
        <section id="team" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">The Team Behind the Pavilion</h2>
                    <p class="mt-4 text-lg text-slate-600">Our experienced team is dedicated to your success at Disrupt.</p>
                </div>
                <div class="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="team-card text-center p-6 rounded-lg"><img class="w-24 h-24 rounded-full mx-auto team-image" src="https://utfs.io/f/5lAbzPMR2hDEoALjd9NITPBspnx5XJt4uSc0LvKzfg2wm71l" alt="Asset Abdualiyev"><h3 class="mt-6 text-xl font-bold text-slate-900">Asset Abdualiyev</h3><p class="mt-1 text-accent">Founder & CEO</p></div>
                    <div class="team-card text-center p-6 rounded-lg"><img class="w-24 h-24 rounded-full mx-auto team-image" src="https://utfs.io/f/5lAbzPMR2hDE1sAY8GUwvu7o15e9Sqm2laIyRshbXUBnNOr3" alt="Aikumis Seksenbayeva"><h3 class="mt-6 text-xl font-bold text-slate-900">Aikumis Seksenbayeva</h3><p class="mt-1 text-accent">Senior Program Manager</p></div>
                    <div class="team-card text-center p-6 rounded-lg"><img class="w-24 h-24 rounded-full mx-auto team-image" src="https://utfs.io/f/5lAbzPMR2hDE4WRPFbNLGxklWuSdTiD0OA84eVhJR6gqs7Qn" alt="Shokhrukh Ibragimov"><h3 class="mt-6 text-xl font-bold text-slate-900">Shokhrukh Ibragimov</h3><p class="mt-1 text-accent">Operations Project Manager</p></div>
                    <div class="team-card text-center p-6 rounded-lg"><img class="w-24 h-24 rounded-full mx-auto team-image" src="Images/Nilufar.jpeg" alt="Nilufar Majidova"><h3 class="mt-6 text-xl font-bold text-slate-900">Nilufar Majidova</h3><p class="mt-1 text-accent">Program Manager</p></div>
                </div>
            </div>
        </section>

        <!-- Section 12: Our Partners -->
        <section id="partners" class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="pb-4 text-center text-2xl font-semibold text-gray-600">Proudly Supported By</h2>
                <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    <a href="https://it-park.uz/" target="_blank" class="flex justify-center"><img src="https://utfs.io/f/5lAbzPMR2hDEJ6ou5aTNd8qgoWVa5bZuLlBwfikjUP1GAQ2O" alt="IT Park Uzbekistan Logo" class="h-12 grayscale hover:grayscale-0 transition"></a>
                    <a href="https://astanahub.com" target="_blank" class="flex justify-center"><img src="https://utfs.io/f/5lAbzPMR2hDEAEQkNi8n3KOXuIPyz5YopqHcStNnrWvB81Lm" alt="Astana Hub Logo" class="h-12 grayscale hover:grayscale-0 transition"></a>
                    <a href="https://the-tech.kz/" target="_blank" class="flex justify-center"><img src="https://utfs.io/f/5lAbzPMR2hDEqtDsuv2R35ILznmDWpEMQBPGa4Xb1c7e9gHC" alt="The Tech Logo" class="h-8 grayscale hover:grayscale-0 transition"></a>
                    <a href="https://www.slkrd.club/" target="_blank" class="flex justify-center"><img src="https://utfs.io/f/5lAbzPMR2hDEcdwjeGJKxB9ve3jY6MSVgGtDEz8ROILyfdaZ" alt="Silkroad Angels Club Logo" class="h-12 grayscale hover:grayscale-0 transition"></a>
                </div>
            </div>
        </section>

        <!-- Section 13: Featured Speakers -->
        <section id="speakers" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Speakers at Disrupt</h2>
                    <p class="mt-4 text-lg text-slate-600">Learn from the brightest minds in tech.</p>
                </div>
               <div class="mt-12 grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="speaker-card text-center p-4 rounded-lg min-h-[240px] flex flex-col items-center"><img class="w-32 h-32 rounded-full mx-auto speaker-image" src="Images/Nikhil-Chandhok-e1782400490547.webp?w=300" alt="Nikhil Chandhok"><h3 class="mt-6 font-bold text-slate-900">Nikhil Chandhok</h3><p class="mt-1 text-sm text-slate-500">Chief Product & Technology Officer, Circle</p></div>
                    <div class="speaker-card text-center p-4 rounded-lg min-h-[240px] flex flex-col items-center"><img class="w-32 h-32 rounded-full mx-auto speaker-image" src="Images/Arvind-Jain-Glean.webp?w=300" alt="Arvind Jain"><h3 class="mt-6 font-bold text-slate-900">Arvind Jain</h3><p class="mt-1 text-sm text-slate-500"> Founder and CEO, Glean</p></div>
                    <div class="speaker-card text-center p-4 rounded-lg min-h-[240px] flex flex-col items-center"><img class="w-32 h-32 rounded-full mx-auto speaker-image" src="Images/Jeff_Color-1000-e1778078607521.webp?w=300" alt="Jeff Lawson"><h3 class="mt-6 font-bold text-slate-900">Jeff Lawson</h3><p class="mt-1 text-sm text-slate-500">Co-Founder, Twilio</p></div>
                    <div class="speaker-card text-center p-4 rounded-lg min-h-[240px] flex flex-col items-center"><img class="w-32 h-32 rounded-full mx-auto speaker-image" src="Images/Ryan Meadows.webp?w=300" alt="Ryan Meadows"><h3 class="mt-6 font-bold text-slate-900">Ryan Meadows</h3><p class="mt-1 text-sm text-slate-500">Chief Revenue Officer, Loveable</p></div>
                    <div class="speaker-card text-center p-4 rounded-lg min-h-[240px] flex flex-col items-center"><img class="w-32 h-32 rounded-full mx-auto speaker-image" src="Images/Robby-headshot.webp?w=300" alt="Robby Stein"><h3 class="mt-6 font-bold text-slate-900">Robby Stein</h3><p class="mt-1 text-sm text-slate-500">Vice President of Product, Google Search, Google</p></div>
                    <div class="speaker-card text-center p-4 rounded-lg min-h-[240px] flex flex-col items-center"><img class="w-32 h-32 rounded-full mx-auto speaker-image" src="Images/headshot-arsalan-tavakoli-e1777576150816.webp?w=300" alt="Arsalan Tavakoli-Shiraji"><h3 class="mt-6 font-bold text-slate-900">Arsalan Tavakoli-Shiraji</h3><p class="mt-1 text-sm text-slate-500">Co-founder and SVP of Field Engineering, Databricks</p></div>
                </div>
                 <div class="mt-20 text-center">
                    <a href="https://techcrunch.com/events/techcrunch-disrupt/speakers/" target="_blank" class="cta-button inline-block bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-8 rounded-lg text-lg">See Full Speaker List</a>
                </div>
            </div>
        </section>

        <!-- Section 14: FAQ -->
        <section id="faq" class="py-20 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-extrabold text-center text-gray-900">Frequently Asked Questions</h2>
                <div class="mt-10 space-y-4">
                    <details class="faq-item bg-white p-6 rounded-lg shadow-sm group"><summary class="font-medium cursor-pointer list-none flex justify-between items-center">What is the exact cost?<span class="transition group-open:rotate-180">▼</span></summary><p class="text-gray-600 mt-4">The total cost is $7,000 per startup.</p></details>
                    <details class="faq-item bg-white p-6 rounded-lg shadow-sm group"><summary class="font-medium cursor-pointer list-none flex justify-between items-center">Do you help with U.S. visa applications?<span class="transition group-open:rotate-180">▼</span></summary><p class="text-gray-600 mt-4">While we cannot guarantee visa issuance, we provide official letters of invitation and guidance documents to support your B1/B2 visa application process.</p></details>
                    <details class="faq-item bg-white p-6 rounded-lg shadow-sm group"><summary class="font-medium cursor-pointer list-none flex justify-between items-center">Are flights and accommodation included?<span class="transition group-open:rotate-180">▼</span></summary><p class="text-gray-600 mt-4">No, flights and accommodation are not included in the package price. Founders are responsible for their own travel and lodging arrangements. We can provide recommendations for nearby hotels.</p></details>
                    <details class="faq-item bg-white p-6 rounded-lg shadow-sm group"><summary class="font-medium cursor-pointer list-none flex justify-between items-center">What is the application deadline?<span class="transition group-open:rotate-180">▼</span></summary><p class="text-gray-600 mt-4">The application deadline is September 15, 2026.</p></details>
                </div>
            </div>
        </section>

        <!-- Section 15: Final Call to Action & Contacts -->
        <section id="contact" class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-slate-800 rounded-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 class="text-3xl font-extrabold text-white">Ready to Take the Global Stage?</h2>
                        <p class="mt-4 text-lg text-slate-300">Don't miss this opportunity to accelerate your startup's growth. Spots are limited and applications are reviewed on a rolling basis.</p>
                        <p class="mt-4 text-2xl font-bold text-amber-400">Application Deadline: September 15, 2026</p>
                        <div class="mt-8"><a href="https://forms.gle/wnHzborgYZmCZQBT6" target="_blank" class="cta-button inline-block bg-accent text-white font-bold py-4 px-10 rounded-lg text-lg">Apply for the Pavilion</a></div>
                    </div>
                    <div class="text-slate-200">
                        <h3 class="text-2xl font-bold text-white">Get in Touch</h3>
                        <div class="mt-6 space-y-4">
                            <a href="mailto:buildunicorns@silkroadinnovationhub.com" class="flex items-center text-lg text-slate-300 hover:text-white transition"><span class="text-2xl mr-3">✉️</span> Email Us</a>
                            <a href="https://t.me/pakevic" class="flex items-center text-lg text-slate-300 hover:text-white transition"><span class="text-2xl mr-3">✈️</span> Contact on Telegram</a>
                             <div class="flex items-center text-lg text-slate-300 pt-2"><span class="text-2xl mr-3">📍</span> 724 Oak Grove Ave</div>
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

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
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

    // Continuous marquee gallery
    (function setupMarquee(){
        const container = document.getElementById('carousel-container');
        const track = document.getElementById('carousel-track');
        const prev = document.getElementById('prevBtn');
        const next = document.getElementById('nextBtn');
        if (!container || !track) return;

        const originals = Array.from(track.children);
        // Duplicate slides for seamless infinite loop
        originals.forEach(img => {
            const c = img.cloneNode(true);
            c.setAttribute('aria-hidden','true');
            track.appendChild(c);
        });

        let offset = 0;              // px translation (negative direction)
        let baseWidth = 0;           // width of original set
        let paused = false;
        let targetOffset = null;     // for manual arrow snap
        let lastTs = null;
        const SPEED = 60;            // px per second

        const measure = () => {
            baseWidth = 0;
            for (let i = 0; i < originals.length; i++) {
                baseWidth += originals[i].getBoundingClientRect().width;
            }
        };

        const waitForImages = () => {
            const imgs = Array.from(track.querySelectorAll('img'));
            let remaining = imgs.filter(i => !i.complete).length;
            if (remaining === 0) { measure(); return; }
            imgs.forEach(i => {
                if (!i.complete) {
                    i.addEventListener('load', () => { if(--remaining===0) measure(); }, { once:true });
                    i.addEventListener('error', () => { if(--remaining===0) measure(); }, { once:true });
                }
            });
        };
        waitForImages();
        window.addEventListener('resize', measure);

        container.addEventListener('mouseenter', () => { paused = true; });
        container.addEventListener('mouseleave', () => { paused = false; });

        const currentIndex = () => {
            if (!baseWidth) return 0;
            let acc = 0;
            const pos = ((-offset) % baseWidth + baseWidth) % baseWidth;
            for (let i = 0; i < originals.length; i++) {
                const w = originals[i].getBoundingClientRect().width;
                if (pos < acc + w) return i;
                acc += w;
            }
            return 0;
        };
        const offsetForIndex = (idx) => {
            let acc = 0;
            for (let i = 0; i < idx; i++) acc += originals[i].getBoundingClientRect().width;
            return -acc;
        };

        const goTo = (idx) => {
            if (!baseWidth) return;
            // Normalize current offset into [-baseWidth, 0] for smooth transition
            let normalized = offset % baseWidth;
            if (normalized > 0) normalized -= baseWidth;
            offset = normalized;
            targetOffset = offsetForIndex(idx);
            // choose shortest direction: if target is greater than current, snap by -baseWidth so we always move left/right sensibly
            if (targetOffset > offset) targetOffset -= baseWidth;
        };

        if (next) next.addEventListener('click', () => goTo((currentIndex()+1) % originals.length));
        if (prev) prev.addEventListener('click', () => goTo((currentIndex()-1+originals.length) % originals.length));

        const tick = (ts) => {
            if (lastTs == null) lastTs = ts;
            const dt = (ts - lastTs) / 1000;
            lastTs = ts;

            if (baseWidth > 0) {
                if (targetOffset !== null) {
                    // Smoothly ease toward targetOffset then resume auto-scroll
                    const diff = targetOffset - offset;
                    if (Math.abs(diff) < 0.5) {
                        offset = targetOffset;
                        targetOffset = null;
                    } else {
                        offset += diff * Math.min(1, dt * 6);
                    }
                } else if (!paused) {
                    offset -= SPEED * dt;
                }
                // Wrap for infinite loop
                if (offset <= -baseWidth) offset += baseWidth;
                if (offset > 0) offset -= baseWidth;
                track.style.transform = 'translate3d(' + offset + 'px,0,0)';
            }
            requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    })();

});
`;
