"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Award, TrendingUp, Heart } from "lucide-react"
import { gsap } from "gsap"
// import { motion } from "framer-motion"

export default function HomePage() {
  // Carousel functionality with GSAP animations and dynamic text
  React.useEffect(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const totalSlides = slides.length;

    // Dynamic content for each slide
    const slideContent = [
      {
        badge: "RCIC License #R712505",
        titleLine1: "Expert Immigration",
        titleLine2: "Guidance with Transparent Assessment",
        description: "Free 30-minute consultations - only for cases we can win. Get expert guidance from a licensed immigration consultant.",
        trust1: "Licensed RCIC",
        trust2: "Free Assessment",
        trust3: "80% Success Rate"
      },
      {
        badge: "Express Entry Specialist",
        titleLine1: "Express Entry",
        titleLine2: "CRS Score Optimization & PNP",
        description: "Maximize your CRS score and explore Provincial Nominee Programs for faster Canadian immigration.",
        trust1: "CRS Optimization",
        trust2: "PNP Programs",
        trust3: "Fast Track"
      },
      {
        badge: "Work Permit Expert",
        titleLine1: "Work Permits",
        titleLine2: "LMIA & LMIA-Exempt Solutions",
        description: "Navigate work permit applications with expert guidance on LMIA requirements and exemptions.",
        trust1: "LMIA Expertise",
        trust2: "Work Permits",
        trust3: "Job Market Access"
      },
      {
        badge: "Family Sponsorship",
        titleLine1: "Family Reunification",
        titleLine2: "Bring Your Loved Ones to Canada",
        description: "Reunite with family members through sponsorship programs and family class immigration.",
        trust1: "Family Unity",
        trust2: "Sponsorship",
        trust3: "Reunification"
      }
    ];

    // GSAP animation for text changes
    const animateTextChange = (newContent: any) => {
      const tl = gsap.timeline();

      // Fade out current text
      tl.to('.hero-badge, .hero-title-line-1, .hero-title-line-2, .hero-description, .hero-trust', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Update text content
      tl.call(() => {
        const badge = document.querySelector('.hero-badge');
        const titleLine1 = document.querySelector('.hero-title-line-1');
        const titleLine2 = document.querySelector('.hero-title-line-2');
        const description = document.querySelector('.hero-description');
        const trustElements = document.querySelectorAll('.hero-trust span');

        if (badge) badge.textContent = newContent.badge;
        if (titleLine1) titleLine1.textContent = newContent.titleLine1;
        if (titleLine2) titleLine2.innerHTML = newContent.titleLine2;
        if (description) description.textContent = newContent.description;
        if (trustElements[0]) trustElements[0].textContent = newContent.trust1;
        if (trustElements[1]) trustElements[1].textContent = newContent.trust2;
        if (trustElements[2]) trustElements[2].textContent = newContent.trust3;
      });

      // Fade in new text with stagger
      tl.to('.hero-badge, .hero-title-line-1, .hero-title-line-2, .hero-description, .hero-trust', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
    };

    // Update carousel display with animations
    const updateCarousel = () => {
      // Update slides
      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'fade-in', 'fade-out');
        if (index === currentSlide) {
          slide.classList.add('active', 'fade-in');
        }
      });

      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
          dot.classList.add('active');
        }
      });

      // Animate text change
      animateTextChange(slideContent[currentSlide]);
    };

    // Auto-advance carousel
    const autoAdvance = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    };

    // Navigation functions
    const goToSlide = (slideIndex: number) => {
      currentSlide = slideIndex;
      updateCarousel();
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    };

    // Event listeners
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');

    if (prevButton) prevButton.addEventListener('click', prevSlide);
    if (nextButton) nextButton.addEventListener('click', nextSlide);

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });

    // Initialize first slide content
    updateCarousel();

    // Auto-advance every 6 seconds (longer for text reading)
    const interval = setInterval(autoAdvance, 6000);

    // Cleanup
    return () => {
      clearInterval(interval);
      if (prevButton) prevButton.removeEventListener('click', prevSlide);
      if (nextButton) nextButton.removeEventListener('click', nextSlide);
      dots.forEach((dot, index) => {
        dot.removeEventListener('click', () => goToSlide(index));
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Enhanced with Animations */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image Carousel */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Carousel Container */}
          <div className="relative w-full h-full">
            {/* Image 1 - Professional Office */}
            <div className="absolute inset-0 w-full h-full carousel-slide active">
              <img
                src="/images/hero/window.jpg"
                alt="Professional Immigration Consulting Office"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Image 2 - Modern Business District */}
            <div className="absolute inset-0 w-full h-full carousel-slide">
              <img
                src="/images/hero/treeshill.jpg"
                alt="Modern Business District"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Image 3 - Professional Meeting */}
            <div className="absolute inset-0 w-full h-full carousel-slide">
              <img
                src="/images/hero/canadatower.jpg"
                alt="Professional Immigration Consultation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Image 4 - Canadian Landscape */}
            <div className="absolute inset-0 w-full h-full carousel-slide">
              <img
                src="/images/hero/canadian.jpg"
                alt="Canadian Immigration Dreams"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>


          </div>

          {/* Enhanced overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>

          {/* Carousel Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            <button
              className="carousel-dot active w-3 h-3 rounded-full bg-white/60 hover:bg-white transition-all duration-300"
              data-slide="0"
              aria-label="Go to slide 1"
            ></button>
            <button
              className="carousel-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white transition-all duration-300"
              data-slide="1"
              aria-label="Go to slide 2"
            ></button>
            <button
              className="carousel-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white transition-all duration-300"
              data-slide="2"
              aria-label="Go to slide 3"
            ></button>
            <button
              className="carousel-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white transition-all duration-300"
              data-slide="3"
              aria-label="Go to slide 4"
            ></button>

          </div>

          {/* Carousel Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
            id="prev-slide"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
            id="next-slide"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Centered Glassmorphism Card */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="flex justify-center items-center min-h-[60vh]">
            {/* Glassmorphism Card */}
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Main Glassmorphism Container */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden glassmorphism-card">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 animate-pulse"></div>

                {/* Card Content */}
                <div className="relative p-8 sm:p-12 lg:p-16">


                  {/* Dynamic Main Heading */}
                  <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
                      <span className="block hero-title-line-1 mb-2">
                        Expert Immigration
                      </span>
                      <span className="block hero-title-line-2">
                        Guidance with{" "}
                        <span className="italic text-[#f5a101] bg-gradient-to-r from-[#f5a101] to-[#e09401] bg-clip-text text-transparent drop-shadow-lg">
                          Transparent Assessment
                        </span>
                      </span>
                    </h1>
                  </div>

                  {/* Dynamic Description */}
                  <div className="text-center mb-10">
                    <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto hero-description">
                      Free 30-minute consultations - only for cases we can win. Get expert guidance from a licensed immigration consultant.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10 hero-buttons">
                    <div className="group">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg w-full sm:w-auto h-16 sm:h-20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <a href="/services/permanent-residency" className="flex items-center justify-center">
                          <span>Permanent Residency</span>
                          <div className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </div>
                        </a>
                      </Button>
                    </div>

                    <div className="group">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/50 text-white hover:bg-white/20 hover:border-white px-8 py-6 text-lg h-16 sm:h-20 bg-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                      >
                        <a href="/services/status-services" className="flex items-center justify-center">
                          <span>Status Services</span>
                          <div className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </div>
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Dynamic Trust Indicators */}
                  <div className="hidden md:flex flex-wrap justify-center items-center gap-6 text-sm text-slate-200 hero-trust">
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300">Licensed RCIC</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300">Free Assessment</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300">80% Success Rate</span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Cards Section - Enhanced with Scroll Animations */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Expertise Card */}
            <div>
              <Card className="bg-slate-700/50 border-slate-600 text-white hover:bg-[#f5f2ec] hover:text-slate-900 transition-all duration-300 group shadow-lg hover:shadow-2xl">
                <CardHeader className="text-center pb-4">
                  <div>
                    <Award className="h-12 w-12 text-primary group-hover:text-primary mx-auto mb-4" />
                  </div>
                  <CardTitle className="text-2xl">Expertise</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="group-hover:text-slate-700">
                    Regulated Canadian Immigration Consultant with deep knowledge of Express Entry, PNP, and all
                    immigration pathways.
                  </p>
                  <div>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent group-hover:border-primary group-hover:text-primary"
                    >
                      <a href="/services">→ SERVICES</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Success Card */}
            <div>
              <Card className="bg-slate-700/50 border-slate-600 text-white hover:bg-[#f5f2ec] hover:text-slate-900 transition-all duration-300 group shadow-lg hover:shadow-2xl">
                <CardHeader className="text-center pb-4">
                  <div>
                    <TrendingUp className="h-12 w-12 text-primary group-hover:text-primary mx-auto mb-4" />
                  </div>
                  <CardTitle className="text-2xl">Success</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="group-hover:text-slate-700">
                    80% success rate with transparent assessment process. We only take cases we can win, ensuring your
                    investment pays off.
                  </p>
                  <div>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent group-hover:border-primary group-hover:text-primary"
                    >
                      <a href="/assessment">→ ASSESSMENT</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Card */}
            <div>
              <Card className="bg-slate-700/50 border-slate-600 text-white hover:bg-[#f5f2ec] hover:text-slate-900 transition-all duration-300 group shadow-lg hover:shadow-2xl">
                <CardHeader className="text-center pb-4">
                  <div>
                    <Heart className="h-12 w-12 text-primary group-hover:text-primary mx-auto mb-4" />
                  </div>
                  <CardTitle className="text-2xl">Trust</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="group-hover:text-slate-700">
                    Transparent pricing, honest assessments, and dedicated support throughout your immigration journey to
                    Canada.
                  </p>
                  <div>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent group-hover:border-primary group-hover:text-primary"
                    >
                      <a href="/about">→ ABOUT US</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-8 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-white text-lg font-medium mb-2">
              Serving Immigration Clients Across Canada and Internationally. Based in:
            </h3>
            <div className="flex justify-center items-center space-x-8 text-primary">
              <span>Mississauga, ON</span>
              <span>|</span>
              <span>Toronto, ON</span>
              <span>|</span>
              <span>Virtual Consultations Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Associations */}
      <section className="py-12 bg-alt">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-foreground">ICCRC</div>
            <div className="text-xl font-bold text-foreground">★ RCIC</div>
            <div className="text-xl font-bold text-foreground border-2 border-foreground px-3 py-1">CAPIC</div>


          </div>
        </div>
      </section>

      {/* Main Content Section - Enhanced with Scroll Animations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-4">
              Mississauga Immigration Consultant
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 max-w-4xl mx-auto">
              Expert Guidance for Express Entry, PNP, Work Permits, and Canadian Immigration
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left side - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center&q=80"
                alt="Professional immigration consulting - helping dreams come true"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  A consultant dedicated to helping you achieve your Canadian immigration dreams.
                </h3>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Navigating Canadian immigration can be complex and overwhelming. With constantly changing policies and
                detailed requirements, having expert guidance makes all the difference.
              </p>
              <p className="text-foreground leading-relaxed">
                As a Regulated Canadian Immigration Consultant (RCIC), I provide transparent assessments and honest
                guidance for your <strong>Canadian immigration</strong> journey. Whether you're exploring Express Entry,
                Provincial Nominee Programs, or need assistance with work permits and family sponsorship, I'm here to
                help you understand your options and achieve your goals.
              </p>
              <p className="text-foreground leading-relaxed">
                With my commitment to only taking cases I can win and providing free 30-minute consultations for
                qualified applicants, you can trust that your investment will be worthwhile.{" "}
                <strong>Contact me today</strong> to schedule your consultation and take the first step toward your
                Canadian future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5a101] to-[#e09401]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Dedicated to advocating for immigrant communities and individuals since 2016.
              </h2>
            </div>
            <div className="space-y-6 text-white">
              <p className="text-lg leading-relaxed">
                Our team has years of experience working with people from around the world to ensure that they can
                build new lives in Canada. With our understanding of the procedures followed when applying
                for permanent residency, work permits, and study permits, we can ensure that applications are prepared correctly, and we can also help
                gather and submit all required supporting documentation.
              </p>
              <p className="leading-relaxed">
                We can also help determine the best options for resolving issues that may affect a person's immigration
                status, including options for relief through humanitarian and compassionate grounds, or{" "}
                <strong>extreme hardship</strong> applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MS</span>
                </div>
                <span className="text-lg font-bold text-white">Mujtaba Sarwar</span>
              </div>
              <p className="text-slate-300">
                Regulated Canadian Immigration Consultant providing expert guidance for your immigration journey.
              </p>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="border-primary text-primary">
                  RCIC #R712505
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Services</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>Express Entry</p>
                <p>Provincial Nominee Program</p>
                <p>Work Permits</p>
                <p>Study Permits</p>
                <p>Family Sponsorship</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Resources</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>Immigration Updates</p>
                <p>How-To Guides</p>
                <p>Case Studies</p>
                <p>FAQ</p>
                <p>YouTube Channel</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <MapPin className="h-4 w-4" />
                  <span>Mississauga, Ontario, Canada</span>
                </div>
                <div className="flex items-center space-x-2 text-lg text-slate-300">
                  <Phone className="h-4 w-4" />
                  <span>514-506-0671</span>
                </div>
                <div className="flex items-center space-x-2 text-lg text-slate-300">
                  <Mail className="h-4 w-4" />
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 Mujtaba Sarwar Canadian Immigration Consulting. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                ICCRC Compliance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
