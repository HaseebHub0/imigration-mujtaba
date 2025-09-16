"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CreditCard, CheckCircle, Clock } from "lucide-react"

export default function PaidConsultationPage() {
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
    detailedDescription: "",
    hearAboutUs: "",
    urgency: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission and payment processing
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
              <h1 className="text-3xl font-bold text-[#17203d] mb-4">Payment Successful!</h1>
              <p className="text-gray-700 mb-6">
                Your paid consultation has been booked successfully. You'll receive a confirmation email with meeting
                details and preparation instructions within the next few minutes.
              </p>
              <div className="bg-[#d2d4d8] p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700">
                  <strong>What's Next:</strong>
                  <br />
                  1. Check your email for confirmation and meeting link
                  <br />
                  2. Review the preparation checklist we've sent
                  <br />
                  3. Gather relevant documents before your consultation
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
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")' }}>
        <div className="absolute inset-0 bg-[#17203d]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Book Paid Consultation</h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive immigration consultation with detailed guidance and ongoing support
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <Card>
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

                      <div className="grid grid-cols-2 gap-4">
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
                          <Label htmlFor="urgency">Urgency Level</Label>
                          <Select
                            value={formData.urgency}
                            onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="How urgent is your case?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Not urgent</SelectItem>
                              <SelectItem value="medium">Somewhat urgent</SelectItem>
                              <SelectItem value="high">Very urgent</SelectItem>
                              <SelectItem value="critical">Critical/Emergency</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-[#17203d]">Consultation Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
                            <SelectItem value="multiple">Multiple Options</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="detailedDescription">Detailed Description of Your Situation *</Label>
                        <Textarea
                          id="detailedDescription"
                          placeholder="Please provide a comprehensive overview of your immigration situation, including any previous applications, current challenges, and specific questions you have..."
                          rows={6}
                          required
                          value={formData.detailedDescription}
                          onChange={(e) => setFormData({ ...formData, detailedDescription: e.target.value })}
                        />
                      </div>

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

                      <div className="grid grid-cols-2 gap-4">
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

                  <Button type="submit" className="w-full bg-[#2e8f7c] hover:bg-[#2e8f7c]/90 text-white text-lg py-6">
                    Proceed to Payment ($50 CAD)
                  </Button>
                </form>
              </div>

              <div>
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#17203d] flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Consultation Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#2e8f7c] mb-2">$50 CAD</div>
                      <div className="text-gray-600">60-minute consultation</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2e8f7c]" />
                        <span className="text-sm text-gray-700">Comprehensive case review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2e8f7c]" />
                        <span className="text-sm text-gray-700">Detailed strategy discussion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2e8f7c]" />
                        <span className="text-sm text-gray-700">Document checklist provided</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2e8f7c]" />
                        <span className="text-sm text-gray-700">Timeline and cost breakdown</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2e8f7c]" />
                        <span className="text-sm text-gray-700">Follow-up email summary</span>
                      </div>
                    </div>

                    <div className="bg-[#d2d4d8] p-4 rounded-lg">
                      <p className="text-xs text-gray-700">
                        <strong>Satisfaction Guarantee:</strong> If you're not completely satisfied with your
                        consultation, we'll provide a full refund.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
