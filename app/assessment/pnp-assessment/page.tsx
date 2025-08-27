"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { FileCheck, MapPin, CheckCircle } from "lucide-react"

export default function PNPAssessmentPage() {
  const [formData, setFormData] = useState({
    occupation: "",
    workExperience: "",
    education: "",
    languageScore: "",
    jobOffer: "",
    connections: [] as string[],
    intendedProvince: "",
    age: "",
  })

  const [results, setResults] = useState<any[]>([])
  const [showResults, setShowResults] = useState(false)

  const provinces = [
    { code: "AB", name: "Alberta", programs: ["AINP"] },
    { code: "BC", name: "British Columbia", programs: ["BC PNP"] },
    { code: "MB", name: "Manitoba", programs: ["MPNP"] },
    { code: "NB", name: "New Brunswick", programs: ["NBPNP"] },
    { code: "NL", name: "Newfoundland and Labrador", programs: ["NLPNP"] },
    { code: "NS", name: "Nova Scotia", programs: ["NSNP"] },
    { code: "ON", name: "Ontario", programs: ["OINP"] },
    { code: "PE", name: "Prince Edward Island", programs: ["PEI PNP"] },
    { code: "SK", name: "Saskatchewan", programs: ["SINP"] },
    { code: "YT", name: "Yukon", programs: ["YNP"] },
  ]

  const connections = [
    "Family members in province",
    "Previous work experience in province",
    "Previous study in province",
    "Job offer from province",
    "Business connections",
    "None of the above",
  ]

  const assessPNP = () => {
    const eligiblePrograms = []

    // Simple assessment logic (in real implementation, this would be much more complex)
    provinces.forEach((province) => {
      let score = 0

      // Preferred province gets higher score
      if (formData.intendedProvince === province.code) score += 30

      // Connections boost score
      if (formData.connections.includes("Family members in province")) score += 20
      if (formData.connections.includes("Previous work experience in province")) score += 25
      if (formData.connections.includes("Previous study in province")) score += 15
      if (formData.connections.includes("Job offer from province")) score += 35

      // Education and experience
      if (formData.education === "masters" || formData.education === "phd") score += 15
      if (formData.workExperience === "3+" || formData.workExperience === "5+") score += 10

      // Language
      if (Number.parseInt(formData.languageScore) >= 7) score += 10

      // Age
      const age = Number.parseInt(formData.age)
      if (age >= 25 && age <= 35) score += 10

      if (score >= 30) {
        eligiblePrograms.push({
          province: province.name,
          code: province.code,
          programs: province.programs,
          score: score,
          likelihood: score >= 60 ? "High" : score >= 45 ? "Medium" : "Low",
        })
      }
    })

    setResults(eligiblePrograms.sort((a, b) => b.score - a.score))
    setShowResults(true)
  }

  const handleConnectionChange = (connection: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, connections: [...formData.connections, connection] })
    } else {
      setFormData({ ...formData, connections: formData.connections.filter((c) => c !== connection) })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80")' }}>
        <div className="absolute inset-0 bg-[#17203d]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">PNP Assessment Tool</h1>
            <p className="text-xl text-gray-200 mb-8">
              Evaluate your eligibility for Provincial Nominee Programs across Canada
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#17203d]">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="occupation">Occupation (NOC Code)</Label>
                      <Input
                        id="occupation"
                        placeholder="e.g., Software Engineer, Nurse, etc."
                        value={formData.occupation}
                        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="education">Highest Level of Education</Label>
                      <Select
                        value={formData.education}
                        onValueChange={(value) => setFormData({ ...formData, education: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phd">PhD/Doctorate</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                          <SelectItem value="highschool">High School</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="workExperience">Work Experience</Label>
                      <Select
                        value={formData.workExperience}
                        onValueChange={(value) => setFormData({ ...formData, workExperience: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select work experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5+">5+ years</SelectItem>
                          <SelectItem value="3+">3-4 years</SelectItem>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="<1">Less than 1 year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="languageScore">English/French Language Score (CLB)</Label>
                      <Input
                        id="languageScore"
                        type="number"
                        placeholder="Enter your CLB score (4-12)"
                        max="12"
                        min="4"
                        value={formData.languageScore}
                        onChange={(e) => setFormData({ ...formData, languageScore: e.target.value })}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#17203d]">Provincial Connections</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="intendedProvince">Preferred Province/Territory</Label>
                      <Select
                        value={formData.intendedProvince}
                        onValueChange={(value) => setFormData({ ...formData, intendedProvince: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred province" />
                        </SelectTrigger>
                        <SelectContent>
                          {provinces.map((province) => (
                            <SelectItem key={province.code} value={province.code}>
                              {province.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Do you have any of the following connections to Canadian provinces?</Label>
                      <div className="space-y-3 mt-2">
                        {connections.map((connection) => (
                          <div key={connection} className="flex items-center space-x-2">
                            <Checkbox
                              id={connection}
                              checked={formData.connections.includes(connection)}
                              onCheckedChange={(checked) => handleConnectionChange(connection, checked as boolean)}
                            />
                            <Label htmlFor={connection} className="text-sm">
                              {connection}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="jobOffer">Do you have a job offer from a Canadian employer?</Label>
                      <Select
                        value={formData.jobOffer}
                        onValueChange={(value) => setFormData({ ...formData, jobOffer: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select job offer status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, with LMIA</SelectItem>
                          <SelectItem value="yes-exempt">Yes, LMIA-exempt</SelectItem>
                          <SelectItem value="no">No job offer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  onClick={assessPNP}
                  className="w-full bg-[#2e8f7c] hover:bg-[#2e8f7c]/90 text-white text-lg py-6"
                >
                  Assess PNP Eligibility
                </Button>
              </div>
            </div>

            {showResults && (
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-[#17203d] mb-8 text-center">
                  Your PNP Assessment Results
                </h2>

                {results.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((result, index) => (
                      <Card key={index} className="hover:bg-[#f5f2ec] transition-colors duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-5 h-5 text-[#2e8f7c]" />
                            <CardTitle className="text-lg text-[#17203d]">{result.province}</CardTitle>
                          </div>
                          <Badge
                            variant="outline"
                            className={`w-fit ${
                              result.likelihood === "High"
                                ? "border-green-500 text-green-600"
                                : result.likelihood === "Medium"
                                  ? "border-yellow-500 text-yellow-600"
                                  : "border-red-500 text-red-600"
                            }`}
                          >
                            {result.likelihood} Likelihood
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 mb-4">
                            {result.programs.map((program: string, idx: number) => (
                              <div key={idx} className="text-sm text-gray-700">
                                • {program}
                              </div>
                            ))}
                          </div>
                          <Button size="sm" className="w-full bg-[#2e8f7c] hover:bg-[#2e8f7c]/90 text-white">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="text-center p-8">
                    <CardContent>
                      <div className="text-gray-600 mb-4">
                        Based on your current profile, you may not qualify for PNP programs at this time.
                      </div>
                      <Button className="bg-[#2e8f7c] hover:bg-[#2e8f7c]/90 text-white">
                        Book Consultation for Guidance
                      </Button>
                    </CardContent>
                  </Card>
                )}

                <div className="mt-8 text-center">
                  <Card className="bg-[#f5f2ec] border-[#2e8f7c]">
                    <CardContent className="p-6">
                      <CheckCircle className="w-12 h-12 text-[#2e8f7c] mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-[#17203d] mb-2">
                        Ready for the Next Step?
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Book a free consultation to discuss your PNP options and create a personalized immigration
                        strategy
                      </p>
                      <Button className="bg-[#2e8f7c] hover:bg-[#2e8f7c]/90 text-white">Book Free Consultation</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
