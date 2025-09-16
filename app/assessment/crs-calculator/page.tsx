"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, CheckCircle, AlertCircle } from "lucide-react"

export default function CRSCalculatorPage() {
  const [formData, setFormData] = useState({
    age: "",
    education: "",
    englishSpeaking: "",
    englishListening: "",
    englishReading: "",
    englishWriting: "",
    frenchSpeaking: "",
    frenchListening: "",
    frenchReading: "",
    frenchWriting: "",
    workExperience: "",
    canadianWorkExperience: "",
    certificateOfQualification: "",
    validJobOffer: "",
    pnpNomination: "",
    canadianEducation: "",
    spouseEducation: "",
    spouseLanguage: "",
    spouseWorkExperience: "",
  })

  const [crsScore, setCrsScore] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)

  const calculateCRS = () => {
    let score = 0

    // Age points (max 110)
    const age = Number.parseInt(formData.age)
    if (age >= 18 && age <= 35) score += 110
    else if (age === 36) score += 105
    else if (age === 37) score += 100
    else if (age === 38) score += 90
    else if (age === 39) score += 80
    else if (age === 40) score += 70
    else if (age === 41) score += 60
    else if (age === 42) score += 50
    else if (age === 43) score += 40
    else if (age === 44) score += 30
    else if (age === 45) score += 15

    // Education points (max 150)
    switch (formData.education) {
      case "phd":
        score += 150
        break
      case "masters":
        score += 135
        break
      case "bachelors":
        score += 120
        break
      case "diploma":
        score += 98
        break
      case "highschool":
        score += 30
        break
    }

    // Language points (max 136 for first language)
    const englishScores = [
      Number.parseInt(formData.englishSpeaking) || 0,
      Number.parseInt(formData.englishListening) || 0,
      Number.parseInt(formData.englishReading) || 0,
      Number.parseInt(formData.englishWriting) || 0,
    ]

    englishScores.forEach((langScore) => {
      if (langScore >= 9) score += 34
      else if (langScore >= 8) score += 31
      else if (langScore >= 7) score += 16
      else if (langScore >= 6) score += 9
      else if (langScore >= 5) score += 6
      else if (langScore >= 4) score += 6
    })

    // Work experience points (max 80)
    switch (formData.workExperience) {
      case "6+":
        score += 80
        break
      case "4-5":
        score += 70
        break
      case "2-3":
        score += 53
        break
      case "1":
        score += 40
        break
    }

    // Canadian work experience (max 70)
    switch (formData.canadianWorkExperience) {
      case "5+":
        score += 70
        break
      case "3-4":
        score += 53
        break
      case "1-2":
        score += 40
        break
    }

    // Additional points
    if (formData.pnpNomination === "yes") score += 600
    if (formData.validJobOffer === "yes") score += 50
    if (formData.certificateOfQualification === "yes") score += 50

    setCrsScore(score)
    setShowResults(true)
  }

  const getScoreStatus = (score: number) => {
    if (score >= 470)
      return { status: "excellent", message: "Excellent chance of receiving an invitation", color: "text-green-600" }
    if (score >= 450)
      return { status: "good", message: "Good chance of receiving an invitation", color: "text-green-600" }
    if (score >= 400)
      return {
        status: "moderate",
        message: "Moderate chance - consider improving your profile",
        color: "text-yellow-600",
      }
    return { status: "low", message: "Low chance - significant improvements needed", color: "text-red-600" }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
        <div className="absolute inset-0 bg-[#6aad81]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">CRS Score Calculator</h1>
            <p className="text-xl text-gray-200 mb-8">
              Calculate your Comprehensive Ranking System score and understand your Express Entry eligibility
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#144d5e]">Personal Information</CardTitle>
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
                      <Label htmlFor="workExperience">Foreign Work Experience</Label>
                      <Select
                        value={formData.workExperience}
                        onValueChange={(value) => setFormData({ ...formData, workExperience: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select work experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6+">6+ years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="1">1 year</SelectItem>
                          <SelectItem value="0">Less than 1 year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="canadianWorkExperience">Canadian Work Experience</Label>
                      <Select
                        value={formData.canadianWorkExperience}
                        onValueChange={(value) => setFormData({ ...formData, canadianWorkExperience: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Canadian work experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5+">5+ years</SelectItem>
                          <SelectItem value="3-4">3-4 years</SelectItem>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="0">No Canadian experience</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#144d5e]">
                      English Language Skills (IELTS/CELPIP)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="englishSpeaking">Speaking</Label>
                        <Input
                          id="englishSpeaking"
                          type="number"
                          placeholder="0-9"
                          max="9"
                          min="0"
                          value={formData.englishSpeaking}
                          onChange={(e) => setFormData({ ...formData, englishSpeaking: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="englishListening">Listening</Label>
                        <Input
                          id="englishListening"
                          type="number"
                          placeholder="0-9"
                          max="9"
                          min="0"
                          value={formData.englishListening}
                          onChange={(e) => setFormData({ ...formData, englishListening: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="englishReading">Reading</Label>
                        <Input
                          id="englishReading"
                          type="number"
                          placeholder="0-9"
                          max="9"
                          min="0"
                          value={formData.englishReading}
                          onChange={(e) => setFormData({ ...formData, englishReading: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="englishWriting">Writing</Label>
                        <Input
                          id="englishWriting"
                          type="number"
                          placeholder="0-9"
                          max="9"
                          min="0"
                          value={formData.englishWriting}
                          onChange={(e) => setFormData({ ...formData, englishWriting: e.target.value })}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#144d5e]">Additional Factors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="pnpNomination">Provincial Nominee Program (PNP) Nomination</Label>
                      <Select
                        value={formData.pnpNomination}
                        onValueChange={(value) => setFormData({ ...formData, pnpNomination: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Do you have a PNP nomination?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes (+600 points)</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="validJobOffer">Valid Job Offer</Label>
                      <Select
                        value={formData.validJobOffer}
                        onValueChange={(value) => setFormData({ ...formData, validJobOffer: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Do you have a valid job offer?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes (+50 points)</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="certificateOfQualification">Certificate of Qualification</Label>
                      <Select
                        value={formData.certificateOfQualification}
                        onValueChange={(value) => setFormData({ ...formData, certificateOfQualification: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Do you have a certificate of qualification?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes (+50 points)</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  onClick={calculateCRS}
                  className="w-full bg-[#6aad81] hover:bg-[#6aad81]/90 text-white text-lg py-6"
                >
                  Calculate My CRS Score
                </Button>

                {showResults && crsScore !== null && (
                  <Card className="mt-8 border-2 border-[#6aad81]">
                    <CardHeader className="text-center">
                      <div className="text-6xl font-bold text-[#6aad81] mb-4">{crsScore}</div>
                      <CardTitle className="text-2xl text-[#144d5e]">Your CRS Score</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className={`text-lg font-semibold mb-4 ${getScoreStatus(crsScore).color}`}>
                        {getScoreStatus(crsScore).message}
                      </div>

                      {crsScore >= 400 ? (
                        <div className="space-y-4">
                          <div className="flex items-center justify-center gap-2 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                            <span>You may qualify for Express Entry!</span>
                          </div>
                          <Button className="bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">
                            Book Free Consultation
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex items-center justify-center gap-2 text-yellow-600">
                            <AlertCircle className="w-5 h-5" />
                            <span>Consider improving your profile</span>
                          </div>
                          <Button className="bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">
                            Get Improvement Strategy
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
