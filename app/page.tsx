"use client"

import * as React from "react"
import { useTranslation, type Language } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Home, User, Briefcase, Bell, Crown, Star, MessageCircle, LayoutDashboard, Award, Play, Lock, Globe, ChevronDown
} from "lucide-react"

// --- Demo Data ---
const personalityQuestions = [
  { key: "leadershipQ", options: ["always", "often", "sometimes", "rarely"] },
  { key: "teamworkQ", options: ["always", "often", "sometimes", "rarely"] },
  { key: "stressQ", options: ["always", "often", "sometimes", "rarely"] },
]
const expertiseQuestions = [
  { key: "problemSolvingQ", options: ["always", "often", "sometimes", "rarely"] },
  { key: "communicationQ", options: ["always", "often", "sometimes", "rarely"] },
  { key: "innovationQ", options: ["always", "often", "sometimes", "rarely"] },
]
const packages = [
  { key: "free", price: 0, features: ["Kişilik Envanteri", "AI Karne", "Mülakat Hazırlık", "Network Modülü"] },
  { key: "core", price: 299, features: ["Tüm Free özellikler", "Uzmanlık Envanteri", "30 Günlük Simülasyon", "AI CV Oluşturucu", "İş İlanları (1 ay)"] },
  { key: "pro", price: 499, features: ["Tüm Core özellikler", "100 Günlük Simülasyon", "Gelişmiş İş İlanları (3 ay)", "Sınırsız CV Güncelleme", "Öncelikli Destek"] },
  { key: "premium", price: 899, features: ["Tüm Pro özellikler", "Koçluk Seansları", "Analitik Raporlar", "Özel İçerikler"] },
]
const roles = [
  { key: "projectManager", label: "Proje Yöneticisi", demo: [
    { day: 1, task: "Takım tanışması ve onboarding", actions: ["Takımı motive et", "Birebir görüşme yap"] },
    { day: 2, task: "İlk müşteri toplantısı", actions: ["Sunum hazırla", "Müşteriyi dinle"] },
    { day: 3, task: "Kriz yönetimi", actions: ["Takımı topla", "Yöneticiye bildir"] },
  ]},
  { key: "softwareEngineer", label: "Yazılım Geliştirici", demo: [
    { day: 1, task: "Kod ortamı kurulumu", actions: ["Kendi başına kur", "Takımdan yardım iste"] },
    { day: 2, task: "İlk feature geliştirme", actions: ["Dokümantasyon oku", "Direkt kodla"] },
    { day: 3, task: "Code review", actions: ["Kendi başına çöz", "Takımdan feedback al"] },
  ]},
  { key: "salesSpecialist", label: "Satış Uzmanı", demo: [
    { day: 1, task: "Müşteri portföyü analizi", actions: ["Segmentasyon yap", "Rapor hazırla"] },
    { day: 2, task: "İlk satış görüşmesi", actions: ["Sunum yap", "Soruları yanıtla"] },
    { day: 3, task: "Satış sonrası takip", actions: ["Teşekkür maili gönder", "Ek teklif sun"] },
  ]},
]

// --- Main App ---
export default function OnboardingPage() {
  // Dil yönetimi
  const [language, setLanguage] = React.useState<Language>(() => typeof window !== "undefined" ? (localStorage.getItem("language") as Language) || "tr" : "tr")
  const { t } = useTranslation(language)
  React.useEffect(() => { localStorage.setItem("language", language) }, [language])

  // Demo butonları için tıklama
  function handleDemoClick(type: string) {
    alert(t('demoAuthAlert', { type }))
  }

  // Dil seçici
  function LanguageSwitcher() {
    return (
      <div className="absolute top-4 right-4 z-10">
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600" onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}>
          <Globe className="w-4 h-4" />
          <span className="font-medium">{language === 'tr' ? 'TR' : 'EN'}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#eaf6f3] relative px-4">
      <LanguageSwitcher />
      <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center py-10">
        <div className="mb-6">{logoSvg}</div>
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3 leading-tight">
          {t('onboardingTitle')}
        </h1>
        <p className="text-gray-600 text-center mb-8 text-base md:text-lg">
          {t('onboardingSubtitle')}
        </p>
        <div className="w-full flex flex-col gap-3 mb-4">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-base font-medium py-2" onClick={() => handleDemoClick('Google')}>
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            {t('continueWithGoogle')}
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-base font-medium py-2" onClick={() => handleDemoClick('LinkedIn')}>
            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            {t('continueWithLinkedIn')}
          </Button>
        </div>
        <div className="flex items-center w-full mb-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">{t('or')}</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <Button className="w-full text-base font-semibold py-2" onClick={() => handleDemoClick('Email')}>
          {t('signUpWithEmail')}
        </Button>
      </div>
    </div>
  )
}

const logoSvg = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 40C24 40 36 32 36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20C12 32 24 40 24 40Z" stroke="#3BA17C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 24V16" stroke="#3BA17C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="20" r="2" fill="#3BA17C"/>
  </svg>
)
