import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Download, ExternalLink, Calculator, BookOpen, Video, CheckCircle, Send } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const downloadableResources = [
    {
      title: "Express Entry Checklist",
      description: "Complete document checklist for Express Entry applications",
      type: "PDF Guide",
      size: "2.3 MB",
      downloads: "1,247",
      icon: FileText,
    },
    {
      title: "CRS Score Improvement Worksheet",
      description: "Step-by-step worksheet to identify ways to boost your CRS score",
      type: "PDF Worksheet",
      size: "1.8 MB",
      downloads: "892",
      icon: Calculator,
    },
    {
      title: "PNP Program Comparison Chart",
      description: "Side-by-side comparison of all Provincial Nominee Programs",
      type: "PDF Chart",
      size: "3.1 MB",
      downloads: "1,456",
      icon: FileText,
    },
    {
      title: "Immigration Timeline Planner",
      description: "Plan your immigration journey with realistic timelines",
      type: "PDF Planner",
      size: "2.7 MB",
      downloads: "734",
      icon: FileText,
    },
  ]

  const tools = [
    {
      title: "CRS Score Calculator",
      description: "Calculate your Comprehensive Ranking System score instantly",
      link: "/assessment/crs-calculator",
      icon: Calculator,
      type: "Interactive Tool",
    },
    {
      title: "PNP Assessment Tool",
      description: "Find out which Provincial Nominee Programs you may qualify for",
      link: "/assessment/pnp-assessment",
      icon: FileText,
      type: "Assessment Tool",
    },
    {
      title: "Document Checklist Generator",
      description: "Get a personalized document checklist for your application",
      link: "/tools/document-checklist",
      icon: CheckCircle,
      type: "Planning Tool",
    },
  ]

  const externalResources = [
    {
      title: "Government of Canada - Immigration",
      description: "Official immigration information and application portals",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      type: "Official Website",
    },
    {
      title: "Express Entry Pool",
      description: "Check Express Entry draw history and statistics",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html",
      type: "Government Portal",
    },
    {
      title: "Educational Credential Assessment",
      description: "Find designated organizations for credential assessment",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessed.html",
      type: "Reference Guide",
    },
    {
      title: "Language Testing Information",
      description: "Approved language tests for immigration purposes",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-requirements.html",
      type: "Testing Info",
    },
  ]

  const videoResources = [
    {
      title: "Express Entry Explained: Complete Guide 2024",
      description: "Comprehensive overview of the Express Entry system",
      duration: "15:32",
      views: "12.4K",
      thumbnail: "/immigration-consultant-explaining-express-entry.png",
    },
    {
      title: "How to Improve Your CRS Score",
      description: "Practical strategies to boost your ranking",
      duration: "12:18",
      views: "8.7K",
      thumbnail: "/placeholder-6tbcj.png",
    },
    {
      title: "Provincial Nominee Program Overview",
      description: "Understanding PNP pathways across Canada",
      duration: "18:45",
      views: "15.2K",
      thumbnail: "/map-of-canada-with-provinces.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")' }}>
        <div className="absolute inset-0 bg-[#6aad81]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Immigration Resources</h1>
            <p className="text-xl text-gray-200 mb-8">
              Access comprehensive tools, guides, and educational materials to support your immigration journey
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Assessment Tools</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Use our free assessment tools to evaluate your immigration options
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <Card key={index} className="hover:bg-[#e8eaed] transition-colors duration-300 text-center">
                  <CardHeader>
                    <tool.icon className="w-12 h-12 text-[#6aad81] mx-auto mb-4" />
                    <CardTitle className="text-xl text-[#144d5e]">{tool.title}</CardTitle>
                    <Badge variant="outline" className="border-[#6aad81] text-[#6aad81] w-fit mx-auto">
                      {tool.type}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">{tool.description}</p>
                    <Link href={tool.link}>
                      <Button className="bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">Use Tool</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-[#e8eaed]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Free Downloads</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Download our comprehensive guides and checklists to help with your immigration planning
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {downloadableResources.map((resource, index) => (
                <Card key={index} className="hover:bg-white transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#6aad81] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <resource.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#144d5e] mb-2">{resource.title}</h3>
                        <p className="text-gray-700 text-sm mb-3">{resource.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                          <span>{resource.type}</span>
                          <span>{resource.size}</span>
                          <span>{resource.downloads} downloads</span>
                        </div>
                        <Button size="sm" className="bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Educational Videos</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Watch our expert videos for in-depth immigration guidance and insights
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {videoResources.map((video, index) => (
                <Card key={index} className="hover:bg-[#e8eaed] transition-colors duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <Video className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-[#144d5e] mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{video.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{video.views} views</span>
                      <Button size="sm" variant="ghost" className="text-[#6aad81] hover:text-[#6aad81]/80 p-0">
                        Watch Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button className="bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">
                <Video className="w-4 h-4 mr-2" />
                Visit YouTube Channel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 bg-[#e8eaed]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Official Resources</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Important government and official resources for your immigration journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {externalResources.map((resource, index) => (
                <Card key={index} className="hover:bg-white transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#144d5e] mb-2">{resource.title}</h3>
                        <p className="text-gray-700 text-sm mb-3">{resource.description}</p>
                        <Badge variant="outline" className="border-[#6aad81] text-[#6aad81] text-xs">
                          {resource.type}
                        </Badge>
                      </div>
                      <Button size="sm" variant="ghost" className="text-[#6aad81] hover:text-[#6aad81]/80">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Need Help with Our Resources?</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Have questions about our tools, guides, or resources? Send us a message and we'll help you get the most out of them.
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
                    <Label htmlFor="resource">Resource of Interest</Label>
                    <Input id="resource" placeholder="CRS Calculator, PNP Assessment, Guides, etc." />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Your Question *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your question or how we can help you better..." 
                      rows={4}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Question
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
