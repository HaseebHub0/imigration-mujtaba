import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Award, TrendingUp, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Image Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/Hero.png"
            alt="Immigration Consulting Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Expert Immigration Guidance with <span className="italic text-amber-300">Transparent Assessment</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Free 30-minute consultations - only for cases we can win. Mujtaba Sarwar, RCIC License #R712505
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg w-100 h-20">
                  <a href="/services/permanent-residency">Permanent Residency Consultation</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg h-20 bg-transparent"
                >
                  <a href="/services/status-services">Status Services Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Cards Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Expertise Card */}
            <Card className="bg-slate-700/50 border-slate-600 text-white hover:bg-[#f5f2ec] hover:text-slate-900 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <Award className="h-12 w-12 text-primary group-hover:text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="group-hover:text-slate-700">
                  Regulated Canadian Immigration Consultant with deep knowledge of Express Entry, PNP, and all
                  immigration pathways.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent group-hover:border-primary group-hover:text-primary"
                >
                  <a href="/services">→ SERVICES</a>
                </Button>
              </CardContent>
            </Card>

            {/* Success Card */}
            <Card className="bg-slate-700/50 border-slate-600 text-white hover:bg-[#f5f2ec] hover:text-slate-900 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <TrendingUp className="h-12 w-12 text-primary group-hover:text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Success</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="group-hover:text-slate-700">
                  80% success rate with transparent assessment process. We only take cases we can win, ensuring your
                  investment pays off.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent group-hover:border-primary group-hover:text-primary"
                >
                  <a href="/assessment">→ ASSESSMENT</a>
                </Button>
              </CardContent>
            </Card>

            {/* Trust Card */}
            <Card className="bg-slate-700/50 border-slate-600 text-white hover:bg-[#f5f2ec] hover:text-slate-900 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <Heart className="h-12 w-12 text-primary group-hover:text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Trust</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="group-hover:text-slate-700">
                  Transparent pricing, honest assessments, and dedicated support throughout your immigration journey to
                  Canada.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent group-hover:border-primary group-hover:text-primary"
                >
                  <a href="/about">→ ABOUT US</a>
                </Button>
              </CardContent>
            </Card>
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
            <div className="text-lg text-foreground">CANADIAN ASSOCIATION OF PROFESSIONAL IMMIGRATION CONSULTANTS</div>
            <div className="text-sm text-foreground">Immigration Insights YouTube Channel</div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-4">Mississauga Immigration Consultant</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 max-w-4xl mx-auto">
              Expert Guidance for Express Entry, PNP, Work Permits, and Canadian Immigration
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left side - Image */}
            <div className="relative">
              <img
                src="/tall-trees-forest-looking-up-perspective.png"
                alt="Forest trees perspective"
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
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
                <div className="flex items-center space-x-2 text-sm text-slate-300">
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
