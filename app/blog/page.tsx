import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Calendar, User, Search, ArrowRight, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    title: "Express Entry Draw #271: 3,200 Invitations Issued with CRS Score of 524",
    excerpt:
      "The latest Express Entry draw shows continued high CRS score requirements. Here's what this means for your immigration strategy and how to improve your chances.",
    category: "Immigration Updates",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "/placeholder-osc5w.png",
    slug: "express-entry-draw-271-analysis",
  }

  const blogPosts = [
    {
      title: "How to Maximize Your CRS Score: 10 Proven Strategies",
      excerpt:
        "Discover actionable ways to boost your Comprehensive Ranking System score and increase your chances of receiving an Express Entry invitation.",
      category: "How-To Guides",
      date: "December 12, 2024",
      readTime: "8 min read",
      image: "/placeholder-6tbcj.png",
      slug: "maximize-crs-score-strategies",
    },
    {
      title: "Provincial Nominee Program Updates: What's New in 2024",
      excerpt:
        "Stay updated on the latest changes to PNP programs across Canada and how they might affect your immigration pathway.",
      category: "Immigration Updates",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "/map-of-canada-with-provinces-highlighted.png",
      slug: "pnp-updates-2024",
    },
    {
      title: "Success Story: From Student to Permanent Resident in 18 Months",
      excerpt:
        "Read how Sarah transformed her student status into permanent residency through strategic planning and expert guidance.",
      category: "Case Studies",
      date: "December 8, 2024",
      readTime: "4 min read",
      image: "/happy-graduate-with-canadian-flag.png",
      slug: "student-to-pr-success-story",
    },
    {
      title: "LMIA Process Explained: A Complete Guide for Employers",
      excerpt:
        "Everything employers need to know about the Labour Market Impact Assessment process, from application to approval.",
      category: "How-To Guides",
      date: "December 5, 2024",
      readTime: "10 min read",
      image: "/business-meeting-documents.png",
      slug: "lmia-process-complete-guide",
    },
    {
      title: "Category-Based Selection: French Language Advantage",
      excerpt:
        "How French language proficiency can significantly boost your immigration prospects through category-based draws.",
      category: "Industry Insights",
      date: "December 3, 2024",
      readTime: "7 min read",
      image: "/french-language-learning-materials.png",
      slug: "french-language-immigration-advantage",
    },
    {
      title: "Common Immigration Mistakes That Cost You Time and Money",
      excerpt: "Avoid these frequent pitfalls that can delay your immigration process or lead to application refusals.",
      category: "Industry Insights",
      date: "November 30, 2024",
      readTime: "6 min read",
      image: "/warning-signs-and-documents.png",
      slug: "common-immigration-mistakes",
    },
  ]

  const categories = ["All", "Immigration Updates", "How-To Guides", "Case Studies", "Industry Insights"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80")' }}>
        <div className="absolute inset-0 bg-[#66a380]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Immigration Insights</h1>
            <p className="text-xl text-gray-200 mb-8">
              Stay informed with the latest immigration updates, policy changes, and expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Featured Article</h2>
            </div>

            <Card className="hover:bg-[#f5f2ec] transition-colors duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-[#66a380] text-white">{featuredPost.category}</Badge>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#144d5e] mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="bg-[#66a380] hover:bg-[#66a380]/90 text-white">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-[#f5f2ec]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={
                    category === "All"
                      ? "bg-[#66a380] hover:bg-[#66a380]/90 text-white"
                      : "border-[#66a380] text-[#66a380] hover:bg-[#66a380] hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:bg-[#f5f2ec] transition-colors duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-[#66a380] text-[#66a380] text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg text-[#144d5e] line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button size="sm" variant="ghost" className="text-[#66a380] hover:text-[#66a380]/80 p-0">
                          Read More <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button className="bg-[#66a380] hover:bg-[#66a380]/90 text-white">Load More Articles</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#f5f2ec]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Stay Updated</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest immigration updates, policy changes, and expert insights
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email address" className="flex-1" />
              <Button className="bg-[#66a380] hover:bg-[#66a380]/90 text-white">Subscribe</Button>
            </div>
            <p className="text-xs text-gray-600 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Have Questions About Our Articles?</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Need clarification on any of our blog posts or have specific immigration questions? Send us a message and we'll get back to you.
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="topic">Topic of Interest</Label>
                    <Input id="topic" placeholder="Express Entry, PNP, Work Permits, etc." />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Your Question *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your question or what you'd like to learn more about..." 
                      rows={4}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#66a380] hover:bg-[#66a380]/90 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Question
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#66a380] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Immigration Guidance?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            While our blog provides valuable insights, every immigration case is unique. Get personalized advice for
            your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f5a101] hover:bg-[#f5a101]/90 text-white">
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-[#144d5e] bg-transparent"
            >
              Take Assessment Quiz
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
