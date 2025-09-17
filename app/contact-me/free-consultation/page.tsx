"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, CheckCircle } from "lucide-react"

export default function FreeConsultationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentStatus: "",
    immigrationGoal: "",
    consultationMethod: "",
    preferredDate: "",
    preferredTime: "",
    briefDescription: "",
    hearAboutUs: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
  }

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-2 border-[#2e8f7c]">
            <CardContent className="p-8">
              <CheckCircle className="w-16 h-16 text-[#2e8f7c] mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-[#17203d] mb-4">Consultation Request Submitted!</h1>
              <p className="text-gray-700 mb-6">
                Thank you for your interest in our immigration services. We'll review your information and get back to
                you within 24 hours to confirm your free consultation appointment.
              </p>
              <div className="bg-[#d2d4d8] p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Next Steps:</strong>
                  <br />
                  1. We'll review your case for eligibility
                  <br />
                  2. Confirm your appointment via email/phone
                  <br />
                  3. Send you a preparation checklist
                </p>
              </div>
              <Button className="bg-[#2e8f7c] hover:bg-[#2e8f7c]/90 text-white">Return to Homepage</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("/images/herobanners/12.png")' }}>
        <div className="absolute inset-0 bg-[#17203d]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Book Free Consultation</h1>
            <p className="text-xl text-gray-200 mb-8">
              Get expert immigration guidance at no cost - only for cases we can win
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
              <div>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#17203d]">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="currentStatus">Current Immigration Status</Label>
                      <Select
                        value={formData.currentStatus}
                        onValueChange={(value) => setFormData({ ...formData, currentStatus: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your current status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="visitor">Visitor</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="worker">Worker</SelectItem>
                          <SelectItem value="pr">Permanent Resident</SelectItem>
                          <SelectItem value="citizen">Canadian Citizen</SelectItem>
                          <SelectItem value="outside">Outside Canada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="immigrationGoal">Immigration Goal *</Label>
                      <Select
                        value={formData.immigrationGoal}
                        onValueChange={(value) => setFormData({ ...formData, immigrationGoal: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="What's your immigration goal?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="permanent-residency">Permanent Residency</SelectItem>
                          <SelectItem value="work-permit">Work Permit</SelectItem>
                          <SelectItem value="study-permit">Study Permit</SelectItem>
                          <SelectItem value="family-sponsorship">Family Sponsorship</SelectItem>
                          <SelectItem value="lmia">LMIA Application</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#17203d]">Consultation Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="consultationMethod">Consultation Method *</Label>
                      <Select
                        value={formData.consultationMethod}
                        onValueChange={(value) => setFormData({ ...formData, consultationMethod: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="How would you like to meet?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Video Call (Zoom/Teams)</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="in-person">In-Person (Mississauga Office)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="briefDescription">Brief Description of Your Situation</Label>
                      <Textarea
                        id="briefDescription"
                        placeholder="Please provide a brief overview of your immigration situation and any specific questions you have..."
                        rows={4}
                        value={formData.briefDescription}
                        onChange={(e) => setFormData({ ...formData, briefDescription: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                      <Select
                        value={formData.hearAboutUs}
                        onValueChange={(value) => setFormData({ ...formData, hearAboutUs: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="youtube">YouTube Channel</SelectItem>
                          <SelectItem value="referral">Friend/Family Referral</SelectItem>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-[#d2d4d8] p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-[#17203d] mb-2">Important Note</h3>
                  <p className="text-sm text-gray-700">
                    Free consultations are offered only for cases where we believe we can successfully help you achieve
                    your immigration goals. We'll review your information and confirm if you qualify for a free
                    consultation within 24 hours.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-[#2e8f7c] hover:bg-[#2e8f7c]/90 text-white text-lg py-6">
                  Submit Consultation Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
