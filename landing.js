/* Adima AI - integrated landing page
 * Source: user-supplied adimaai 23.html
 * Existing Firebase/auth/dashboard remain in app.js/auth.js.
 */
window.AdimaLanding = (() => {
  function render() {
    return `<!-- Overflow Wrapper to prevent horizontal scroll issues on mobile -->
    <div id="landingView" class="overflow-x-hidden w-full relative min-h-screen">
        
        <!-- Gradient Blobs -->
        <div class="gradient-blob-1"></div>
        <div class="gradient-blob-2"></div>
        <div class="gradient-blob-3"></div>

        <!-- Navigation -->
        <nav class="py-4 px-4 sm:px-6">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="text-xl md:text-2xl font-bold text-blue">✨ Adima AI</div>
                <div class="space-x-8 hidden md:flex text-gray-600">
                    <a href="#workflow" class="hover:text-blue transition font-medium">Features</a>
                    <a href="#trust-section-v2" class="hover:text-blue transition font-medium">Trust</a>
                <a href="#pricing" class="hover:text-blue transition font-medium">Pricing</a>
                    <a href="#faq" class="hover:text-blue transition font-medium">About</a>
                    <a href="#" class="hover:text-blue transition font-medium">Contact</a>
                </div>
                <button class="btn-primary text-sm md:text-base px-4 py-2 md:px-8 md:py-3">Get Started</button>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="pt-28 pb-20 sm:pt-32 sm:pb-24 px-4 sm:px-6 min-h-screen flex flex-col justify-start relative overflow-hidden">

            <!-- NEW PREMIUM INTRO PANEL: based on the supplied reference screenshot -->
            <div class="w-full max-w-6xl mx-auto mb-14 sm:mb-20 relative z-30">
                <div class="hero-intro-panel card text-center px-6 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16">
                    <div class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/80 shadow-sm text-xs sm:text-sm font-semibold text-blue-700 mb-5">
                        <span class="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.65)]"></span>
                        ✨ Adima AI
                    </div>
                    <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
                        Create smarter with AI
                    </h2>
                    <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Simplify your creative process effortlessly.
                    </p>
                    <button class="btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4">
                        Get Started →
                    </button>
                </div>
            </div>

            <!-- Two Column Layout for Text and Floating Cards -->
            <div class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
                
                <!-- Left Text Content -->
                <div class="text-left mb-8 md:mb-0 z-10 animate-slide-down">
                    <div class="inline-block mb-6">
                        <span class="text-blue font-semibold text-xs sm:text-sm bg-blue-50/50 px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-blue-100 flex items-center gap-2 shadow-sm">
                            <span class="relative flex h-3 w-3">
                              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </span>
                            ✨ AI for Creators
                        </span>
                    </div>
                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Create smarter<br>
                        <span class="text-gradient">with AI</span>
                    </h1>
                    
                    <p class="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Turn one idea into a complete video-production workflow. From research, script, visuals, voiceover and final video — all in one place.
                    </p>

                    <div class="flex gap-4 mb-8 justify-start flex-wrap">
                        <button class="btn-primary text-base sm:text-lg w-full sm:w-auto">
                            Create with Adima →
                        </button>
                        <button class="btn-secondary text-base sm:text-lg flex items-center gap-2 w-full sm:w-auto">
                            ▶️ Watch Demo
                        </button>
                    </div>

                    <div class="space-y-2 text-xs sm:text-sm text-gray-600 font-medium">
                        <div class="flex gap-2 sm:gap-4 items-center flex-wrap">
                            <span class="flex items-center gap-1"><i class="ph-duotone ph-lightning text-yellow-500 text-lg"></i> Simple</span> 
                            <span class="text-gray-300 hidden sm:inline">•</span> 
                            <span class="flex items-center gap-1"><i class="ph-duotone ph-star text-blue-500 text-lg"></i> Powerful</span> 
                            <span class="text-gray-300 hidden sm:inline">•</span> 
                            <span class="flex items-center gap-1"><i class="ph-duotone ph-heart text-purple-500 text-lg"></i> Built for Creators</span>
                        </div>
                    </div>
                </div>

                <!-- Right Animated UI Content (Gamma Video Style) -->
                <div class="hero-visual-mobile relative h-[300px] sm:h-[400px] md:h-[550px] w-full block z-20">
                    
                    <!-- Floating Card 1: New Idea -->
                    <div class="absolute top-4 sm:top-10 right-0 sm:right-10 glass-panel-ui rounded-2xl p-4 w-56 sm:w-64 animate-float-1 z-20 border-t border-l border-white/80">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 text-xl shadow-inner">
                                <i class="ph-duotone ph-lightbulb"></i>
                            </div>
                            <div>
                                <div class="text-sm font-bold text-gray-800">नया विचार</div>
                                <div class="text-xs text-blue-500 font-medium">Processing...</div>
                            </div>
                        </div>
                        <div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-blue-400 to-blue-600 w-3/4 rounded-full relative">
                                <div class="absolute inset-0 bg-white/30 animate-[pulse_1.5s_infinite]"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Floating Card 2: Generating Script -->
                    <div class="absolute top-1/3 left-0 glass-panel-ui rounded-2xl p-4 sm:p-5 w-[240px] sm:w-[280px] animate-float-2 z-30 border-t border-l border-white/80">
                        <div class="flex items-center gap-2 mb-4 bg-purple-50 inline-flex px-3 py-1 rounded-full border border-purple-100">
                            <div class="w-2 h-2 rounded-full bg-purple-500 animate-ping"></div>
                            <div class="text-xs text-purple-600 font-bold tracking-wide flex items-center gap-1">
                                <i class="ph-duotone ph-pen-nib"></i> स्क्रिप्ट जनरेट हो रही है
                            </div>
                        </div>
                        <div class="space-y-3">
                            <div class="h-2 w-full bg-gray-200 rounded-full animate-pulse"></div>
                            <div class="h-2 w-5/6 bg-gray-200 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                            <div class="h-2 w-4/6 bg-gray-200 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                        </div>
                    </div>

                    <!-- Floating Card 3: Video Render Mockup -->
                    <div class="absolute bottom-2 sm:bottom-6 right-4 sm:right-16 glass-panel-ui rounded-2xl p-2 w-[260px] sm:w-80 animate-float-3 z-10 border-t border-l border-white/80">
                        <div class="w-full h-32 sm:h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl relative overflow-hidden flex items-center justify-center group cursor-pointer shadow-inner">
                            <!-- Play Button -->
                            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <i class="ph-fill ph-play text-xl sm:text-2xl text-white ml-1"></i>
                            </div>
                        </div>
                        <div class="mt-3 px-2 pb-2">
                            <div class="text-sm font-bold text-gray-800">Final_Video_Render.mp4</div>
                            <div class="text-xs text-blue-500 font-medium">Ready to export ✨</div>
                        </div>
                    </div>
                </div> <!-- End Right Animated Content -->
            </div> <!-- End Grid layout for Hero -->

            <!-- Hero Preview Card (Responsive Layout Fix) -->
            <div class="w-full max-w-4xl mx-auto mt-12 sm:mt-16 z-20 relative animate-slide-down" style="animation-delay: 0.3s;">
                <div class="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4">
                    <div class="card p-6 text-center group w-full md:w-1/3">
                        <div class="premium-icon-box large-icon-box group-hover:scale-110"><i class="ph-duotone ph-lightbulb"></i></div>
                        <div class="text-sm font-bold text-gray-700">IDEA</div>
                    </div>
                    
                    <!-- Arrow rotates 90deg on mobile -->
                    <div class="flex items-center justify-center text-2xl text-blue-300 transform rotate-90 md:rotate-0 my-2 md:my-0">→</div>
                    
                    <div class="card p-6 text-center group w-full md:w-1/3">
                        <div class="premium-icon-box large-icon-box group-hover:scale-110"><i class="ph-duotone ph-pen-nib"></i></div>
                        <div class="text-sm font-bold text-gray-700">SCRIPT</div>
                    </div>
                    
                    <!-- Arrow rotates 90deg on mobile -->
                    <div class="flex items-center justify-center text-2xl text-blue-300 transform rotate-90 md:rotate-0 my-2 md:my-0">→</div>
                    
                    <div class="card p-6 text-center group w-full md:w-1/3">
                        <div class="premium-icon-box large-icon-box group-hover:scale-110 text-purple-500 border-purple-200 bg-purple-50"><i class="ph-duotone ph-package"></i></div>
                        <div class="text-sm font-bold text-gray-700">COMPLETE KIT</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- One-Click Production Section -->
        <section class="py-20 px-4 sm:px-6 section-light">
            <div class="max-w-7xl mx-auto">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            One-Click AI<br>
                            Video Production
                        </h2>
                        <p class="text-gray-600 text-base sm:text-lg mb-8">
                            Give Adima AI a simple idea and get a complete, cinematic video — just one click.
                        </p>
                        <button class="btn-primary w-full sm:w-auto">Try Now →</button>
                    </div>
                    <!-- Flowchart Responsive Fix -->
                    <div class="card p-4 sm:p-8 pulse-light overflow-hidden">
                        <div class="grid grid-cols-5 gap-2 sm:gap-4 items-center justify-items-center">
                            <div class="text-center group w-full">
                                <div class="premium-icon-box large-icon-box transition-transform group-hover:scale-110"><i class="ph-duotone ph-lightbulb"></i></div>
                                <div class="text-[10px] sm:text-xs font-bold text-gray-700">IDEA</div>
                            </div>
                            <div class="text-xl sm:text-3xl text-blue text-center">→</div>
                            <div class="text-center group w-full">
                                <div class="premium-icon-box large-icon-box transition-transform group-hover:scale-110"><i class="ph-duotone ph-pen-nib"></i></div>
                                <div class="text-[10px] sm:text-xs font-bold text-gray-700">SCRIPT</div>
                            </div>
                            <div class="text-xl sm:text-3xl text-blue text-center">→</div>
                            <div class="text-center group w-full">
                                <div class="premium-icon-box large-icon-box transition-transform group-hover:scale-110"><i class="ph-duotone ph-image"></i></div>
                                <div class="text-[10px] sm:text-xs font-bold text-gray-700">VISUALS</div>
                            </div>
                            <div class="text-center mt-2 sm:mt-4 col-span-5">
                                <div class="text-xl sm:text-3xl text-blue animate-bounce">↓</div>
                            </div>
                            <div class="text-center col-span-2 group w-full">
                                <div class="premium-icon-box large-icon-box transition-transform group-hover:scale-110"><i class="ph-duotone ph-film-strip"></i></div>
                                <div class="text-[10px] sm:text-xs font-bold text-gray-700">ANIMATION</div>
                            </div>
                            <div class="text-xl sm:text-3xl text-blue text-center">→</div>
                            <div class="text-center col-span-2 group w-full">
                                <div class="premium-icon-box large-icon-box transition-transform group-hover:scale-110 text-purple-500 border-purple-200 bg-purple-50"><i class="ph-duotone ph-export"></i></div>
                                <div class="text-[10px] sm:text-xs font-bold text-gray-700">FINAL VIDEO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- AI Agent Section -->
        <section class="py-20 px-4 sm:px-6 section-white">
            <div class="max-w-7xl mx-auto">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="card p-6 sm:p-12 pulse-light relative">
                        <div class="absolute top-4 sm:top-8 right-4 sm:right-8 text-green-500 text-xs sm:text-sm font-semibold flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100 shadow-sm">
                            <span class="w-2 h-2 bg-green-500 rounded-full animate-ping"></span> Online
                        </div>
                        <div class="text-center relative z-10">
                            <!-- Premium Lottie Animation Bot -->
                            <div class="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-2 relative group cursor-pointer">
                                <div class="absolute inset-0 bg-blue-400 rounded-full filter blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <lottie-player 
                                    src="https://lottie.host/80a0de24-b1eb-47bc-877f-1d89e5fc8b26/u9WJEqwEBS.json" 
                                    background="transparent" 
                                    speed="1" 
                                    style="width: 100%; height: 100%; transform: scale(1.1);" 
                                    loop 
                                    autoplay>
                                </lottie-player>
                            </div>
                            <div class="font-bold text-lg sm:text-xl mb-4 text-gray-800">Adima AI Agent</div>
                            <p class="text-gray-600 mb-8 text-sm sm:text-base">Tell me your idea and I'll create a complete video for you.</p>
                            
                            <div class="space-y-3 mb-8 bg-blue-50/50 p-4 rounded-xl">
                                <div class="flex justify-between items-center text-sm">
                                    <span class="text-gray-600 font-medium">Processing request...</span>
                                    <span class="text-blue font-bold">95%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full relative overflow-hidden" style="width: 95%">
                                        <div class="absolute inset-0 bg-white/40 animate-[pulse_1.5s_infinite]"></div>
                                    </div>
                                </div>
                            </div>

                            <button class="btn-primary w-full shadow-lg">Chat with Adima →</button>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Meet Your AI<br>
                            Video Production Agent
                        </h2>
                        <p class="text-gray-600 text-base sm:text-lg mb-8">
                            Adima AI understands your idea and handles the entire video creation process for you.
                        </p>

                        <div class="space-y-4">
                            <div class="flex gap-4 items-start p-3 hover:bg-white rounded-xl transition cursor-default">
                                <i class="ph-duotone ph-brain text-blue-500 text-3xl shrink-0"></i>
                                <div>
                                    <div class="font-bold text-gray-800">Understands your goal</div>
                                    <div class="text-sm text-gray-500 mt-1">Analyzes your idea deeply using NLP</div>
                                </div>
                            </div>
                            <div class="flex gap-4 items-start p-3 hover:bg-white rounded-xl transition cursor-default">
                                <i class="ph-duotone ph-git-branch text-purple-500 text-3xl shrink-0"></i>
                                <div>
                                    <div class="font-bold text-gray-800">Plans the workflow</div>
                                    <div class="text-sm text-gray-500 mt-1">Creates a complete end-to-end strategy</div>
                                </div>
                            </div>
                            <div class="flex gap-4 items-start p-3 hover:bg-white rounded-xl transition cursor-default">
                                <i class="ph-duotone ph-magnifying-glass-plus text-pink-500 text-3xl shrink-0"></i>
                                <div>
                                    <div class="font-bold text-gray-800">Researches information</div>
                                    <div class="text-sm text-gray-500 mt-1">Finds relevant data automatically</div>
                                </div>
                            </div>
                            <div class="flex gap-4 items-start p-3 hover:bg-white rounded-xl transition cursor-default">
                                <i class="ph-duotone ph-pen-nib text-green-500 text-3xl shrink-0"></i>
                                <div>
                                    <div class="font-bold text-gray-800">Writes & reviews scripts</div>
                                    <div class="text-sm text-gray-500 mt-1">Creates engaging content</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- Step 4: 8-Second Scene Workflow -->
        <section id="scene-workflow-v2" class="scene-workflow-v2 py-16 sm:py-20 px-4 sm:px-6 section-light relative overflow-hidden">
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-10 sm:mb-14">
                    <div class="text-blue font-semibold text-sm mb-2">SCENE ENGINE</div>
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">From 60 Seconds → 8 Production Scenes</h2>
                    <p class="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Turn one script into eight clear 8-second scenes, each with its own production direction.
                    </p>
                </div>

                <div class="scene-master-card rounded-3xl p-5 sm:p-8 mb-8">
                    <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                        <span class="scene-pill bg-blue-50 text-blue-700">60-SECOND SCRIPT</span>
                        <span class="text-blue-500 text-2xl">↓</span>
                        <span class="scene-pill bg-purple-50 text-purple-700">8 SCENES</span>
                        <span class="text-blue-500 text-2xl hidden sm:inline">→</span>
                        <span class="scene-pill bg-cyan-50 text-cyan-700">READY FOR PRODUCTION</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div class="scene-card rounded-2xl p-5">
                        <div class="flex items-center justify-between gap-2">
                            <div class="scene-pill bg-blue-50 text-blue-700">SCENE 01</div>
                            <span class="text-xs sm:text-sm font-bold text-gray-500">0:00–0:08</span>
                        </div>
                        <div class="scene-flow-line my-4"></div>
                        <div class="font-bold text-gray-800">Hook / Opening</div>
                        <div class="scene-detail space-y-2">
                            <div class="scene-detail-row"><strong>Script</strong><span>Strong opening line</span></div>
                            <div class="scene-detail-row"><strong>Image</strong><span>Hero visual prompt</span></div>
                            <div class="scene-detail-row"><strong>Motion</strong><span>Slow cinematic push-in</span></div>
                            <div class="scene-detail-row"><strong>Audio</strong><span>Voice + impact SFX</span></div>
                        </div>
                    </div>
                    <div class="scene-card rounded-2xl p-5">
                        <div class="flex items-center justify-between gap-2">
                            <div class="scene-pill bg-purple-50 text-purple-700">SCENE 02</div>
                            <span class="text-xs sm:text-sm font-bold text-gray-500">0:08–0:16</span>
                        </div>
                        <div class="scene-flow-line my-4"></div>
                        <div class="font-bold text-gray-800">Context</div>
                        <div class="scene-detail space-y-2">
                            <div class="scene-detail-row"><strong>Script</strong><span>Problem setup</span></div>
                            <div class="scene-detail-row"><strong>Image</strong><span>Environment prompt</span></div>
                            <div class="scene-detail-row"><strong>Motion</strong><span>Natural camera move</span></div>
                            <div class="scene-detail-row"><strong>Audio</strong><span>Voice + subtle ambience</span></div>
                        </div>
                    </div>
                    <div class="scene-card rounded-2xl p-5">
                        <div class="flex items-center justify-between gap-2">
                            <div class="scene-pill bg-pink-50 text-pink-700">SCENE 03</div>
                            <span class="text-xs sm:text-sm font-bold text-gray-500">0:16–0:24</span>
                        </div>
                        <div class="scene-flow-line my-4"></div>
                        <div class="font-bold text-gray-800">Key Point</div>
                        <div class="scene-detail space-y-2">
                            <div class="scene-detail-row"><strong>Script</strong><span>Main insight</span></div>
                            <div class="scene-detail-row"><strong>Image</strong><span>Concept visual prompt</span></div>
                            <div class="scene-detail-row"><strong>Motion</strong><span>Transition emphasis</span></div>
                            <div class="scene-detail-row"><strong>Audio</strong><span>Voice + whoosh SFX</span></div>
                        </div>
                    </div>
                    <div class="scene-card rounded-2xl p-5">
                        <div class="flex items-center justify-between gap-2">
                            <div class="scene-pill bg-cyan-50 text-cyan-700">SCENE 04</div>
                            <span class="text-xs sm:text-sm font-bold text-gray-500">0:24–0:32</span>
                        </div>
                        <div class="scene-flow-line my-4"></div>
                        <div class="font-bold text-gray-800">Example</div>
                        <div class="scene-detail space-y-2">
                            <div class="scene-detail-row"><strong>Script</strong><span>Real example / proof</span></div>
                            <div class="scene-detail-row"><strong>Image</strong><span>Detailed scene prompt</span></div>
                            <div class="scene-detail-row"><strong>Motion</strong><span>Parallax movement</span></div>
                            <div class="scene-detail-row"><strong>Audio</strong><span>Voice + room tone</span></div>
                        </div>
                    </div>
                    <div class="scene-card rounded-2xl p-5">
                        <div class="flex items-center justify-between gap-2">
                            <div class="scene-pill bg-indigo-50 text-indigo-700">SCENE 05</div>
                            <span class="text-xs sm:text-sm font-bold text-gray-500">0:32–0:40</span>
                        </div>
                        <div class="scene-flow-line my-4"></div>
                        <div class="font-bold text-gray-800">Shift</div>
                        <div class="scene-detail space-y-2">
                            <div class="scene-detail-row"><strong>Script</strong><span>Pattern interrupt</span></div>
                            <div class="scene-detail-row"><strong>Image</strong><span>Contrast visual prompt</span></div>
                            <div class="scene-detail-row"><strong>Motion</strong><span>Quick transition</span></div>
                            <div class="scene-detail-row"><strong>Audio</strong><span>Beat / hit SFX</span></div>
                        </div>
                    </div>
                    <div class="scene-card rounded-2xl p-5">
                        <div class="flex items-center justify-between gap-2">
                            <div class="scene-pill bg-green-50 text-green-700">SCENE 06</div>
                            <span class="text-xs sm:text-sm font-bold text-gray-500">0:40–0:48</span>
                        </div>
                        <div class="scene-flow-line my-4"></div>
                        <div class="font-bold text-gray-800">Takeaway</div>
                        <div class="scene-detail space-y-2">
                            <div class="scene-detail-row"><strong>Script</strong><span>Actionable takeaway</span></div>
                            <div class="scene-detail-row"><strong>Image</strong><span>Supporting visual</span></div>
                            <div class="scene-detail-row"><strong>Motion</strong><span>Gentle zoom-out</span></div>
                            <div class="scene-detail-row"><strong>Audio</strong><span>Voice + music bed</span></div>
                        </div>
                    </div>
                    <div class="scene-card rounded-2xl p-5">
                        <div class="flex items-center justify-between gap-2">
                            <div class="scene-pill bg-orange-50 text-orange-700">SCENE 07</div>
                            <span class="text-xs sm:text-sm font-bold text-gray-500">0:48–0:56</span>
                        </div>
                        <div class="scene-flow-line my-4"></div>
                        <div class="font-bold text-gray-800">Build to CTA</div>
                        <div class="scene-detail space-y-2">
                            <div class="scene-detail-row"><strong>Script</strong><span>Final buildup</span></div>
                            <div class="scene-detail-row"><strong>Image</strong><span>High-impact prompt</span></div>
                            <div class="scene-detail-row"><strong>Motion</strong><span>Forward energy</span></div>
                            <div class="scene-detail-row"><strong>Audio</strong><span>Riser + voice</span></div>
                        </div>
                    </div>
                    <div class="scene-card rounded-2xl p-5">
                        <div class="flex items-center justify-between gap-2">
                            <div class="scene-pill bg-rose-50 text-rose-700">SCENE 08</div>
                            <span class="text-xs sm:text-sm font-bold text-gray-500">0:56–1:00</span>
                        </div>
                        <div class="scene-flow-line my-4"></div>
                        <div class="font-bold text-gray-800">Final CTA</div>
                        <div class="scene-detail space-y-2">
                            <div class="scene-detail-row"><strong>Script</strong><span>Clear closing message</span></div>
                            <div class="scene-detail-row"><strong>Image</strong><span>Brand / end-frame prompt</span></div>
                            <div class="scene-detail-row"><strong>Motion</strong><span>Clean end transition</span></div>
                            <div class="scene-detail-row"><strong>Audio</strong><span>CTA + final SFX</span></div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-8">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/80 shadow-sm text-xs sm:text-sm font-semibold text-gray-700">
                        <span class="text-blue-600">✦</span>
                        Each scene can be refined independently before production.
                    </div>
                </div>
            </div>
        </section>


        <!-- Step 5: Prompt Refinement -->
        <section id="prompt-refinement-v2" class="prompt-refinement-v2 py-16 sm:py-20 px-4 sm:px-6 section-white relative overflow-hidden">
            <div class="max-w-6xl mx-auto relative z-10">
                <div class="text-center mb-10 sm:mb-14">
                    <div class="text-blue font-semibold text-sm mb-2">PROMPT ENGINE</div>
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Turn Simple Ideas Into Production-Ready Prompts</h2>
                    <p class="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Transform a basic prompt into a structured creative direction for image and video generation.
                    </p>
                </div>

                <div class="grid md:grid-cols-[1fr_auto_1.15fr] gap-5 md:gap-7 items-stretch">
                    <!-- Input -->
                    <div class="pr-card rounded-3xl p-6 sm:p-8">
                        <div class="pr-label text-gray-400 mb-4">Your Prompt</div>
                        <div class="pr-example min-h-[150px] flex items-start">
                            <span class="text-lg sm:text-xl font-bold text-gray-800">"man walking in city"</span>
                        </div>

                        <div class="mt-5 flex flex-wrap gap-2">
                            <span class="pr-chip">Simple</span>
                            <span class="pr-chip">Basic</span>
                            <span class="pr-chip">Needs Detail</span>
                        </div>
                    </div>

                    <!-- Transformation -->
                    <div class="pr-arrow">
                        <i class="ph-duotone ph-arrow-right"></i>
                    </div>

                    <!-- Output -->
                    <div class="pr-card rounded-3xl p-6 sm:p-8 border-blue-100">
                        <div class="flex items-center justify-between gap-3 mb-4">
                            <div class="pr-label text-blue-600">AI Refined Prompt</div>
                            <span class="text-xs font-bold text-green-600">Production Ready</span>
                        </div>

                        <div class="pr-example bg-white/75">
                            <div class="font-semibold text-gray-800 mb-3">
                                Cinematic man walking through a modern city street, natural evening light, realistic environment, shallow depth of field, medium tracking shot, subtle camera motion, premium cinematic color grade, detailed composition, realistic textures.
                            </div>
                            <div class="text-xs text-gray-500">
                                Optimized for consistency, composition, camera direction and visual detail.
                            </div>
                        </div>

                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
                            <span class="pr-tag text-blue-700">Character</span>
                            <span class="pr-tag text-purple-700">Environment</span>
                            <span class="pr-tag text-pink-700">Camera</span>
                            <span class="pr-tag text-cyan-700">Lighting</span>
                            <span class="pr-tag text-indigo-700">Composition</span>
                            <span class="pr-tag text-green-700">Motion</span>
                            <span class="pr-tag text-orange-700">Style</span>
                            <span class="pr-tag text-rose-700">Negative</span>
                        </div>

                        <button class="btn-primary mt-6 w-full">
                            <i class="ph-duotone ph-sparkle mr-2"></i>
                            Refine My Prompt →
                        </button>
                    </div>
                </div>

                <div class="mt-8 grid sm:grid-cols-3 gap-4">
                    <div class="card p-4 text-center">
                        <div class="font-bold text-gray-800">Better Detail</div>
                        <div class="text-xs text-gray-500 mt-1">Adds missing production context.</div>
                    </div>
                    <div class="card p-4 text-center">
                        <div class="font-bold text-gray-800">Better Consistency</div>
                        <div class="text-xs text-gray-500 mt-1">Keeps visual direction structured.</div>
                    </div>
                    <div class="card p-4 text-center">
                        <div class="font-bold text-gray-800">Better Control</div>
                        <div class="text-xs text-gray-500 mt-1">Defines camera, motion and style.</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- One Idea → Complete Production -->
        <section class="py-20 px-4 sm:px-6 section-light">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
                    One Idea → Complete Production
                </h2>
                <p class="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-lg">
                    From a simple idea to a full cinematic video package — just one click.
                </p>

                <div class="production-comparison">
                    <!-- Before -->
                    <div class="card p-6 sm:p-8 text-center relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div class="relative z-10">
                            <div class="text-xs sm:text-sm font-bold text-gray-400 mb-4 tracking-wider uppercase">Before</div>
                            <div class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 leading-snug italic">
                                "I want a 60-second video about AI."
                            </div>
                        </div>
                    </div>

                    <!-- Arrow -->
                    <div class="production-arrow text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)] animate-pulse my-4 md:my-0" aria-hidden="true">
                        <i class="ph-duotone ph-lightning"></i>
                    </div>

                    <!-- After -->
                    <div class="card p-6 sm:p-8 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-[80px] opacity-10"></div>
                        <div class="relative z-10">
                            <div class="text-xs sm:text-sm font-bold text-blue-600 mb-6 flex items-center gap-2 tracking-wider uppercase">
                                <i class="ph-duotone ph-sparkle animate-pulse"></i> After (Generated by Adima)
                            </div>
                            <!-- Responsive internal grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div class="bg-white/80 backdrop-blur border border-blue-50 p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                                    <div class="font-bold flex items-center gap-2 text-gray-800 group-hover:text-blue-600 transition-colors"><i class="ph-duotone ph-scroll text-xl sm:text-2xl text-blue-500"></i> Script</div>
                                    <div class="text-[10px] sm:text-xs font-medium text-gray-500 mt-1 ml-7 sm:ml-8">8 sections</div>
                                </div>
                                <div class="bg-white/80 backdrop-blur border border-blue-50 p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                                    <div class="font-bold flex items-center gap-2 text-gray-800 group-hover:text-blue-600 transition-colors"><i class="ph-duotone ph-film-strip text-xl sm:text-2xl text-blue-500"></i> Scenes</div>
                                    <div class="text-[10px] sm:text-xs font-medium text-gray-500 mt-1 ml-7 sm:ml-8">8 scenes</div>
                                </div>
                                <div class="bg-white/80 backdrop-blur border border-blue-50 p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                                    <div class="font-bold flex items-center gap-2 text-gray-800 group-hover:text-blue-600 transition-colors"><i class="ph-duotone ph-image text-xl sm:text-2xl text-blue-500"></i> Images</div>
                                    <div class="text-[10px] sm:text-xs font-medium text-gray-500 mt-1 ml-7 sm:ml-8">8 prompts</div>
                                </div>
                                <div class="bg-white/80 backdrop-blur border border-blue-50 p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                                    <div class="font-bold flex items-center gap-2 text-gray-800 group-hover:text-blue-600 transition-colors"><i class="ph-duotone ph-video-camera text-xl sm:text-2xl text-blue-500"></i> Video</div>
                                    <div class="text-[10px] sm:text-xs font-medium text-gray-500 mt-1 ml-7 sm:ml-8">8 prompts</div>
                                </div>
                                <div class="bg-white/80 backdrop-blur border border-blue-50 p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                                    <div class="font-bold flex items-center gap-2 text-gray-800 group-hover:text-blue-600 transition-colors"><i class="ph-duotone ph-microphone-stage text-xl sm:text-2xl text-blue-500"></i> Voiceover</div>
                                    <div class="text-[10px] sm:text-xs font-medium text-gray-500 mt-1 ml-7 sm:ml-8">Script sync</div>
                                </div>
                                <div class="bg-white/80 backdrop-blur border border-blue-50 p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                                    <div class="font-bold flex items-center gap-2 text-gray-800 group-hover:text-blue-600 transition-colors"><i class="ph-duotone ph-image-square text-xl sm:text-2xl text-blue-500"></i> Thumbnail</div>
                                    <div class="text-[10px] sm:text-xs font-medium text-gray-500 mt-1 ml-7 sm:ml-8">Design kit</div>
                                </div>
                                <div class="col-span-1 sm:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-3 sm:p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                                    <div class="font-extrabold flex items-center gap-2 text-blue-700 text-base sm:text-lg"><i class="ph-duotone ph-play-circle text-2xl sm:text-3xl text-blue-600 group-hover:scale-110 transition-transform"></i> Final Video</div>
                                    <div class="text-xs sm:text-sm font-semibold text-blue-600/80 mt-1 ml-8 sm:ml-10">Ready to publish!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works -->
        <section id="workflow" class="py-16 sm:py-24 px-4 sm:px-6 section-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto relative z-10">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">How It Works</h2>
                <p class="text-center text-gray-600 mb-12 sm:mb-20 text-base sm:text-lg">A simple process. Extraordinary results.</p>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative">
                    <!-- Connecting Background Line (Desktop Only) -->
                    <div class="hidden md:block absolute top-12 left-[12%] right-[12%] h-[3px] bg-gradient-to-r from-blue-100 via-indigo-200 to-pink-100 z-0 rounded-full"></div>

                    <!-- Step 1 -->
                    <div class="text-center relative z-10 group cursor-pointer">
                        <div class="flex justify-center mb-6">
                            <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-3xl shadow-xl border border-blue-50 flex items-center justify-center text-4xl sm:text-5xl text-blue-500 group-hover:-translate-y-3 transition-all duration-300 relative overflow-hidden group-hover:shadow-blue-500/20">
                                <div class="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div class="absolute top-2 left-2 w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-full flex items-center justify-center text-xs sm:text-sm font-extrabold text-blue-700 shadow-sm">1</div>
                                <i class="ph-duotone ph-lightbulb relative z-10 group-hover:scale-110 transition-transform"></i>
                            </div>
                        </div>
                        <h3 class="font-extrabold text-lg sm:text-xl mb-2 text-gray-800">Give Your Idea</h3>
                        <p class="text-gray-500 text-sm font-medium">Share a simple topic.</p>
                    </div>

                    <!-- Step 2 -->
                    <div class="text-center relative z-10 group cursor-pointer">
                        <div class="flex justify-center mb-6">
                            <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-3xl shadow-xl border border-indigo-50 flex items-center justify-center text-4xl sm:text-5xl text-indigo-500 group-hover:-translate-y-3 transition-all duration-300 relative overflow-hidden group-hover:shadow-indigo-500/20">
                                <div class="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div class="absolute top-2 left-2 w-6 h-6 sm:w-7 sm:h-7 bg-indigo-100 rounded-full flex items-center justify-center text-xs sm:text-sm font-extrabold text-indigo-700 shadow-sm">2</div>
                                <i class="ph-duotone ph-magic-wand relative z-10 group-hover:scale-110 transition-transform"></i>
                            </div>
                        </div>
                        <h3 class="font-extrabold text-lg sm:text-xl mb-2 text-gray-800">AI Does the Work</h3>
                        <p class="text-gray-500 text-sm font-medium">Research, create, refine.</p>
                    </div>

                    <!-- Step 3 -->
                    <div class="text-center relative z-10 group cursor-pointer">
                        <div class="flex justify-center mb-6">
                            <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-3xl shadow-xl border border-purple-50 flex items-center justify-center text-4xl sm:text-5xl text-purple-500 group-hover:-translate-y-3 transition-all duration-300 relative overflow-hidden group-hover:shadow-purple-500/20">
                                <div class="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div class="absolute top-2 left-2 w-6 h-6 sm:w-7 sm:h-7 bg-purple-100 rounded-full flex items-center justify-center text-xs sm:text-sm font-extrabold text-purple-700 shadow-sm">3</div>
                                <i class="ph-duotone ph-package relative z-10 group-hover:scale-110 transition-transform"></i>
                            </div>
                        </div>
                        <h3 class="font-extrabold text-lg sm:text-xl mb-2 text-gray-800">Get Your Package</h3>
                        <p class="text-gray-500 text-sm font-medium">Receive complete assets.</p>
                    </div>

                    <!-- Step 4 -->
                    <div class="text-center relative z-10 group cursor-pointer">
                        <div class="flex justify-center mb-6">
                            <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-3xl shadow-xl border border-pink-50 flex items-center justify-center text-4xl sm:text-5xl text-pink-500 group-hover:-translate-y-3 transition-all duration-300 relative overflow-hidden group-hover:shadow-pink-500/20">
                                <div class="absolute inset-0 bg-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div class="absolute top-2 left-2 w-6 h-6 sm:w-7 sm:h-7 bg-pink-100 rounded-full flex items-center justify-center text-xs sm:text-sm font-extrabold text-pink-700 shadow-sm">4</div>
                                <i class="ph-duotone ph-rocket-launch relative z-10 group-hover:scale-110 transition-transform"></i>
                            </div>
                        </div>
                        <h3 class="font-extrabold text-lg sm:text-xl mb-2 text-gray-800">Create & Publish</h3>
                        <p class="text-gray-500 text-sm font-medium">Share with the world.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Core Features -->
        <section id="features" class="py-16 sm:py-20 px-4 sm:px-6 section-light">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">Core Features</h2>
                <p class="text-center text-gray-600 mb-12 sm:mb-16 text-base sm:text-lg">Everything you need for professional AI video creation.</p>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div class="feature-card">
                        <div class="premium-icon-box"><i class="ph-duotone ph-file-code"></i></div>
                        <h3 class="font-bold text-lg mb-2 text-gray-800">AI Script Generation</h3>
                        <p class="text-gray-600 text-sm">Turn ideas into engaging scripts.</p>
                    </div>

                    <div class="feature-card">
                        <div class="premium-icon-box"><i class="ph-duotone ph-image-square"></i></div>
                        <h3 class="font-bold text-lg mb-2 text-gray-800">Image & Video Prompts</h3>
                        <p class="text-gray-600 text-sm">Get high-quality visual instantly.</p>
                    </div>

                    <div class="feature-card">
                        <div class="premium-icon-box"><i class="ph-duotone ph-microphone-stage"></i></div>
                        <h3 class="font-bold text-lg mb-2 text-gray-800">AI Voiceover</h3>
                        <p class="text-gray-600 text-sm">Natural and realistic voiceovers.</p>
                    </div>

                    <div class="feature-card">
                        <div class="premium-icon-box"><i class="ph-duotone ph-clapperboard"></i></div>
                        <h3 class="font-bold text-lg mb-2 text-gray-800">Scene Generator</h3>
                        <p class="text-gray-600 text-sm">Breaks script into logical scenes.</p>
                    </div>

                    <div class="feature-card">
                        <div class="premium-icon-box text-pink-500 border-pink-200 bg-pink-50"><i class="ph-duotone ph-magic-wand"></i></div>
                        <h3 class="font-bold text-lg mb-2 text-gray-800">Prompt Refiner</h3>
                        <p class="text-gray-600 text-sm">Turn weak prompts into professional ones.</p>
                    </div>

                    <div class="feature-card">
                        <div class="premium-icon-box"><i class="ph-duotone ph-camera-plus"></i></div>
                        <h3 class="font-bold text-lg mb-2 text-gray-800">Thumbnail Kit</h3>
                        <p class="text-gray-600 text-sm">Create eye-catching thumbnails.</p>
                    </div>

                    <div class="feature-card">
                        <div class="premium-icon-box"><i class="ph-duotone ph-chart-line-up"></i></div>
                        <h3 class="font-bold text-lg mb-2 text-gray-800">Complete Production</h3>
                        <p class="text-gray-600 text-sm">Everything in one place.</p>
                    </div>

                    <div class="feature-card">
                        <div class="premium-icon-box"><i class="ph-duotone ph-magnifying-glass-plus"></i></div>
                        <h3 class="font-bold text-lg mb-2 text-gray-800">Smart Research</h3>
                        <p class="text-gray-600 text-sm">Relevant information auto-collected.</p>
                    </div>

                    <div class="feature-card">
                        <div class="premium-icon-box"><i class="ph-duotone ph-target"></i></div>
                        <h3 class="font-bold text-lg mb-2 text-gray-800">SEO Optimization</h3>
                        <p class="text-gray-600 text-sm">YouTube titles, tags, descriptions.</p>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <a href="#" class="text-blue font-semibold hover:underline">View All Features →</a>
                </div>
            </div>
        </section>


        <!-- Phase 2 — Step 7: Trust & Security -->
        <section id="trust-section-v2" class="trust-section-v2 py-16 sm:py-20 px-4 sm:px-6 section-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-10 sm:mb-14">
                    <div class="text-blue font-semibold text-sm mb-2">TRUST & SECURITY</div>
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Built for Creators</h2>
                    <p class="text-gray-600 mt-3 max-w-2xl mx-auto">
                        A professional workflow designed to keep your creative process organized, clear and ready to scale.
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div class="trust-card rounded-3xl p-6">
                        <div class="flex items-start gap-4">
                            <div class="trust-icon bg-blue-50 text-blue-600 border border-blue-100">
                                <i class="ph-duotone ph-lock-key"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg text-gray-800">Secure API Handling</h3>
                                <p class="text-sm text-gray-500 mt-1">Keep credentials and integrations separated from the public interface.</p>
                            </div>
                        </div>
                    </div>

                    <div class="trust-card rounded-3xl p-6">
                        <div class="flex items-start gap-4">
                            <div class="trust-icon bg-cyan-50 text-cyan-600 border border-cyan-100">
                                <i class="ph-duotone ph-shield-check"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg text-gray-800">Privacy Focused</h3>
                                <p class="text-sm text-gray-500 mt-1">Designed with privacy in mind across your projects and creative workflow.</p>
                            </div>
                        </div>
                    </div>

                    <div class="trust-card rounded-3xl p-6">
                        <div class="flex items-start gap-4">
                            <div class="trust-icon bg-purple-50 text-purple-600 border border-purple-100">
                                <i class="ph-duotone ph-lightning"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg text-gray-800">Fast Workflow</h3>
                                <p class="text-sm text-gray-500 mt-1">Move from idea to structured production faster with one connected workflow.</p>
                            </div>
                        </div>
                    </div>

                    <div class="trust-card rounded-3xl p-6">
                        <div class="flex items-start gap-4">
                            <div class="trust-icon bg-pink-50 text-pink-600 border border-pink-100">
                                <i class="ph-duotone ph-package"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg text-gray-800">Production Ready</h3>
                                <p class="text-sm text-gray-500 mt-1">Organized outputs make it easier to review, refine and continue production.</p>
                            </div>
                        </div>
                    </div>

                    <div class="trust-card rounded-3xl p-6">
                        <div class="flex items-start gap-4">
                            <div class="trust-icon bg-green-50 text-green-600 border border-green-100">
                                <i class="ph-duotone ph-robot"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg text-gray-800">AI-Powered Workflow</h3>
                                <p class="text-sm text-gray-500 mt-1">Research, scripting, scenes and prompt work are organized in one system.</p>
                            </div>
                        </div>
                    </div>

                    <div class="trust-card rounded-3xl p-6">
                        <div class="flex items-start gap-4">
                            <div class="trust-icon bg-orange-50 text-orange-600 border border-orange-100">
                                <i class="ph-duotone ph-headset"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg text-gray-800">Support</h3>
                                <p class="text-sm text-gray-500 mt-1">Clear support and contact options for questions, feedback and assistance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="trust-note mt-8 text-center">
                    <div class="text-xs sm:text-sm text-gray-500">
                        <span class="font-bold text-gray-700">Note:</span>
                        Security, privacy and performance claims should match the features actually implemented in the live product.
                    </div>
                </div>
            </div>
        </section>

        <!-- Phase 2 — Step 8: Pricing Upgrade -->
        <section id="pricing" class="pricing-v2 py-16 sm:py-20 px-4 sm:px-6 section-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-10 sm:mb-14">
                    <div class="text-blue font-semibold text-sm mb-2">PRICING</div>
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Choose the Workflow That Fits You</h2>
                    <p class="text-gray-600 mt-3 max-w-2xl mx-auto text-base sm:text-lg">Start simple, create more, and move toward a professional AI-powered production workflow.</p>
                </div>

                <div class="pricing-shell">
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

                        <!-- Free -->
                        <div class="plan-card">
                            <div class="plan-icon bg-slate-100 text-slate-700 border border-slate-200"><i class="ph-duotone ph-sparkle"></i></div>
                            <div class="text-xs font-extrabold tracking-widest text-slate-500 uppercase">Free</div>
                            <h3 class="text-2xl font-bold text-gray-900 mt-2">Starter</h3>
                            <p class="text-sm text-gray-500 mt-2 min-h-[42px]">Explore the core workflow before you scale up.</p>
                            <div class="mt-5 mb-6"><div class="price text-4xl font-extrabold text-gray-900">$0</div><div class="text-xs text-gray-500 mt-1">No monthly cost</div></div>
                            <div class="space-y-3 mb-8">
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Limited video generations</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Core creator tools</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Basic workflow access</span></div>
                            </div>
                            <button class="plan-button bg-white border border-slate-300 text-slate-800 hover:bg-slate-50">Get Started</button>
                        </div>

                        <!-- Creator -->
                        <div class="plan-card">
                            <div class="plan-icon bg-cyan-50 text-cyan-600 border border-cyan-100"><i class="ph-duotone ph-video-camera"></i></div>
                            <div class="text-xs font-extrabold tracking-widest text-cyan-600 uppercase">Creator</div>
                            <h3 class="text-2xl font-bold text-gray-900 mt-2">Creator</h3>
                            <p class="text-sm text-gray-500 mt-2 min-h-[42px]">For creators who want a more complete production flow.</p>
                            <div class="mt-5 mb-6"><div class="price text-4xl font-extrabold text-gray-900">$9</div><div class="text-xs text-gray-500 mt-1">per month</div></div>
                            <div class="space-y-3 mb-8">
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Higher monthly usage</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Full workflow structure</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Prompt refinement tools</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Creator-focused workspace</span></div>
                            </div>
                            <button class="plan-button bg-slate-900 text-white hover:shadow-lg">Choose Creator</button>
                        </div>

                        <!-- Pro -->
                        <div class="plan-card featured">
                            <div class="plan-badge"><i class="ph-fill ph-star"></i> Most Popular</div>
                            <div class="plan-icon bg-blue-100 text-blue-600 border border-blue-200"><i class="ph-duotone ph-rocket-launch"></i></div>
                            <div class="text-xs font-extrabold tracking-widest text-blue-600 uppercase">Pro</div>
                            <h3 class="text-2xl font-bold text-gray-900 mt-2">Pro</h3>
                            <p class="text-sm text-gray-500 mt-2 min-h-[42px]">Built for serious creators who want the full AI workflow.</p>
                            <div class="mt-5 mb-6"><div class="price text-4xl font-extrabold text-blue-600">$29</div><div class="text-xs text-gray-500 mt-1">per month</div></div>
                            <div class="space-y-3 mb-8">
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Higher usage limits</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Advanced production workflow</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>AI Agent workflow tools</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Advanced prompt controls</span></div>
                            </div>
                            <button class="plan-button bg-blue text-white hover:shadow-xl">Choose Pro</button>
                        </div>

                        <!-- Business -->
                        <div class="plan-card">
                            <div class="plan-icon bg-orange-50 text-orange-600 border border-orange-100"><i class="ph-duotone ph-buildings"></i></div>
                            <div class="text-xs font-extrabold tracking-widest text-orange-600 uppercase">Business</div>
                            <h3 class="text-2xl font-bold text-gray-900 mt-2">Business</h3>
                            <p class="text-sm text-gray-500 mt-2 min-h-[42px]">For teams that need a larger, structured creative workflow.</p>
                            <div class="mt-5 mb-6"><div class="price text-4xl font-extrabold text-gray-900">$99</div><div class="text-xs text-gray-500 mt-1">per month</div></div>
                            <div class="space-y-3 mb-8">
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>High usage capacity</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Professional workflow access</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Team-oriented setup</span></div>
                                <div class="feature-row"><i class="ph-bold ph-check-circle"></i><span>Support for larger workflows</span></div>
                            </div>
                            <button class="plan-button bg-white border border-orange-200 text-orange-700 hover:bg-orange-50">Talk to Us</button>
                        </div>
                    </div>

                    <div class="pricing-footnote mt-6 text-center">
                        <div class="text-xs sm:text-sm text-gray-500"><span class="font-semibold text-gray-700">Note:</span> Pricing and usage limits shown here are landing-page placeholders until billing and usage metering are connected to the live product.</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section — Phase 2 Step 9 -->
        <section id="faq" class="faq-v2 py-16 sm:py-20 px-4 sm:px-6 section-light">
            <div class="max-w-6xl mx-auto">
                <div class="faq-header text-center">
                    <div class="faq-kicker"><i class="ph-duotone ph-question"></i> Everything you need to know</div>
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5">Frequently Asked Questions</h2>
                    <p class="faq-subtitle max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
                        Clear answers about Adima AI, the production workflow, editing, and the current landing-page plans.
                    </p>
                </div>

                <div class="faq-layout mt-10 sm:mt-14">
                    <div class="faq-list">
                        <details class="faq-item" open>
                            <summary>
                                <span class="faq-question"><span class="faq-number">01</span>What can Adima AI create?</span>
                                <span class="faq-plus"><i class="ph-bold ph-plus"></i></span>
                            </summary>
                            <div class="faq-answer">
                                Adima is designed around an end-to-end AI video production workflow. Starting from one idea, the workflow can structure research, a script, scenes, image prompts, animation prompts, voice/SFX direction, and SEO assets.
                            </div>
                        </details>

                        <details class="faq-item">
                            <summary>
                                <span class="faq-question"><span class="faq-number">02</span>How does the one-idea workflow work?</span>
                                <span class="faq-plus"><i class="ph-bold ph-plus"></i></span>
                            </summary>
                            <div class="faq-answer">
                                You start with a single content idea. The workflow then breaks it into production stages—research, script, scenes, visual prompts, animation direction, voice/SFX guidance, and SEO—so the project is organized before you move into generation and editing.
                            </div>
                        </details>

                        <details class="faq-item">
                            <summary>
                                <span class="faq-question"><span class="faq-number">03</span>What happens after I enter my idea?</span>
                                <span class="faq-plus"><i class="ph-bold ph-plus"></i></span>
                            </summary>
                            <div class="faq-answer">
                                The idea becomes a structured production plan. Instead of starting with a blank editor, you get a clearer content direction with the key assets needed to build the video.
                            </div>
                        </details>

                        <details class="faq-item">
                            <summary>
                                <span class="faq-question"><span class="faq-number">04</span>Can I edit or refine the generated prompts?</span>
                                <span class="faq-plus"><i class="ph-bold ph-plus"></i></span>
                            </summary>
                            <div class="faq-answer">
                                Yes. Prompt Refinement is built into the workflow concept. You can review the generated direction and customize elements such as character, environment, camera, lighting, composition, motion, style, and negative constraints.
                            </div>
                        </details>

                        <details class="faq-item">
                            <summary>
                                <span class="faq-question"><span class="faq-number">05</span>Do I need advanced technical skills?</span>
                                <span class="faq-plus"><i class="ph-bold ph-plus"></i></span>
                            </summary>
                            <div class="faq-answer">
                                No advanced technical knowledge is required to understand the workflow. The goal is to turn a creator's idea into organized production instructions, while keeping the individual outputs editable and customizable.
                            </div>
                        </details>

                        <details class="faq-item">
                            <summary>
                                <span class="faq-question"><span class="faq-number">06</span>Is there a free plan?</span>
                                <span class="faq-plus"><i class="ph-bold ph-plus"></i></span>
                            </summary>
                            <div class="faq-answer">
                                The landing page currently presents a Free / Starter plan at $0. Its exact generation limits and billing behavior are placeholders until the live product, billing, and usage metering are connected.
                            </div>
                        </details>

                        <details class="faq-item">
                            <summary>
                                <span class="faq-question"><span class="faq-number">07</span>Are the pricing limits live right now?</span>
                                <span class="faq-plus"><i class="ph-bold ph-plus"></i></span>
                            </summary>
                            <div class="faq-answer">
                                Not yet. The pricing cards are currently presentation placeholders. Actual plan limits, billing, and usage metering should be connected to the live product before these numbers are treated as final.
                            </div>
                        </details>

                        <details class="faq-item">
                            <summary>
                                <span class="faq-question"><span class="faq-number">08</span>Can Adima AI be used for larger creator or team workflows?</span>
                                <span class="faq-plus"><i class="ph-bold ph-plus"></i></span>
                            </summary>
                            <div class="faq-answer">
                                The landing page includes a Business plan concept for larger workflows. Team features, permissions, collaboration, and support should be treated as product requirements until they are implemented in the live SaaS.
                            </div>
                        </details>
                    </div>

                    <aside class="faq-side-card">
                        <div class="faq-side-icon"><i class="ph-duotone ph-sparkle"></i></div>
                        <div class="faq-side-label">ADIMA AI</div>
                        <h3>Built to make video production feel simpler.</h3>
                        <p>One idea in. A structured production workflow out. Keep your creative control while reducing the planning work.</p>
                        <div class="faq-side-points">
                            <div><i class="ph-fill ph-check-circle"></i><span>Idea → Production workflow</span></div>
                            <div><i class="ph-fill ph-check-circle"></i><span>Scene & prompt refinement</span></div>
                            <div><i class="ph-fill ph-check-circle"></i><span>Creator-focused structure</span></div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <!-- Trust Section -->
        <section class="py-16 sm:py-20 px-4 sm:px-6 section-white">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="text-4xl sm:text-5xl text-blue-500 mb-4 flex justify-center"><i class="ph-duotone ph-shield-check"></i></div>
                        <h3 class="font-semibold text-lg mb-2">Secure & Private</h3>
                        <p class="text-gray-600 text-sm">Enterprise-grade encryption, GDPR compliant</p>
                    </div>
                    <div>
                        <div class="text-4xl sm:text-5xl text-blue-500 mb-4 flex justify-center"><i class="ph-duotone ph-lightning"></i></div>
                        <h3 class="font-semibold text-lg mb-2">Lightning Fast</h3>
                        <p class="text-gray-600 text-sm">8-minute workflows, powered by latest AI</p>
                    </div>
                    <div>
                        <div class="text-4xl sm:text-5xl text-blue-500 mb-4 flex justify-center"><i class="ph-duotone ph-target"></i></div>
                        <h3 class="font-semibold text-lg mb-2">Made for Creators</h3>
                        <p class="text-gray-600 text-sm">Built by creators, for creators</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Phase 2 — Step 10: Final CTA -->
        <section id="final-cta" class="final-cta-v2 py-20 sm:py-24 px-4 sm:px-6 section-light">
            <div class="cta-shell text-center">
                <div class="cta-glow cta-glow-left"></div>
                <div class="cta-glow cta-glow-right"></div>

                <div class="flex justify-center">
                    <div class="cta-badge"><i class="ph-fill ph-sparkle"></i> READY TO CREATE</div>
                </div>

                <h2 class="cta-title font-extrabold text-gray-900 mt-6">
                    One Idea.<br>
                    <span class="text-gradient">One Complete Workflow.</span>
                </h2>

                <p class="cta-subtitle text-base sm:text-lg mt-5">
                    Turn your next video idea into a structured production workflow — from research and scripting to scenes, prompts and SEO.
                </p>

                <div class="cta-actions mt-8">
                    <a href="#" class="cta-primary text-base sm:text-lg">
                        <i class="ph-bold ph-sparkle"></i> Start Creating
                    </a>
                    <a href="#workflow" class="cta-secondary text-base sm:text-lg">
                        Explore the Workflow <i class="ph-bold ph-arrow-down-right"></i>
                    </a>
                </div>

                <div class="cta-mini-grid">
                    <div class="cta-mini-card"><i class="ph-duotone ph-lightning"></i><span>Faster idea-to-production flow</span></div>
                    <div class="cta-mini-card"><i class="ph-duotone ph-magic-wand"></i><span>Refine prompts and scenes</span></div>
                    <div class="cta-mini-card"><i class="ph-duotone ph-layout"></i><span>Keep everything organized</span></div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-10 sm:py-12 px-4 sm:px-6 border-t border-gray-200">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
                    <div>
                        <div class="text-blue font-bold text-lg mb-4 flex items-center justify-center sm:justify-start gap-2"><i class="ph-fill ph-sparkle"></i> Adima AI</div>
                        <div class="text-sm text-gray-600">Complete video production in 8 minutes</div>
                    </div>
                    <div>
                        <div class="font-semibold mb-4 text-gray-900">Product</div>
                        <div class="text-sm text-gray-600 space-y-2">
                            <div><a href="#features" class="hover:text-blue transition">Features</a></div>
                            <div><a href="#pricing" class="hover:text-blue transition">Pricing</a></div>
                            <div><a href="#faq" class="hover:text-blue transition">FAQ</a></div>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold mb-4 text-gray-900">Legal</div>
                        <div class="text-sm text-gray-600 space-y-2">
                            <div><a href="#" class="hover:text-blue transition">Privacy</a></div>
                            <div><a href="#" class="hover:text-blue transition">Terms</a></div>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold mb-4 text-gray-900">Support</div>
                        <div class="text-sm text-gray-600 space-y-2">
                            <div><a href="#" class="hover:text-blue transition">Contact</a></div>
                            <div><a href="#" class="hover:text-blue transition">Discord Community</a></div>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                    © 2026 Adima AI. All rights reserved | Made with <i class="ph-fill ph-heart text-purple-500"></i> for creators
                </div>
            </div>
        </footer>
        
    </div> <!-- End Overflow Wrapper -->
`;
  }

  function init() {
    const landing = document.getElementById('landingView');
    if (!landing) return;

    // All primary creation/login CTAs use the existing Firebase auth modal.
    const authLabels = /get started|create with adima|try now|chat with adima|start creating/i;
    landing.querySelectorAll('button, a').forEach((el) => {
      const text = (el.textContent || '').trim();
      const href = el.getAttribute('href') || '';
      if (authLabels.test(text) && href === '#') {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          if (typeof window.openAuthModal === 'function') window.openAuthModal();
        });
      }
    });

    // Keep the new page's internal anchor navigation smooth.
    landing.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  return { render, init };
})();
