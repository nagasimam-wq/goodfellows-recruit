import { Navigation } from '@/components/Navigation'
import { FloatingCTA } from '@/components/FloatingCTA'
import { HeroSection } from '@/components/sections/HeroSection'
import { MessageSection } from '@/components/sections/MessageSection'
import { CEOMessageSection } from '@/components/sections/CEOMessageSection'
import { PitchDeckSection } from '@/components/sections/PitchDeckSection'
import { JobCategoriesSection } from '@/components/sections/JobCategoriesSection'
import { VisionSection } from '@/components/sections/VisionSection'
import { ImageCarouselSection } from '@/components/sections/ImageCarouselSection'
import { BusinessSection } from '@/components/sections/BusinessSection'
import { NumbersSection } from '@/components/sections/NumbersSection'
import { CultureSection } from '@/components/sections/CultureSection'
import { GrowthSection } from '@/components/sections/GrowthSection'
import { PeopleSection } from '@/components/sections/PeopleSection'
import { RequirementsSection } from '@/components/sections/RequirementsSection'
import { RecruitSection } from '@/components/sections/RecruitSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MessageSection />
      <CEOMessageSection />
      <PitchDeckSection />
      <JobCategoriesSection />
      <VisionSection />
      <BusinessSection />
      <ImageCarouselSection />
      <NumbersSection />
      <CultureSection />
      <GrowthSection />
      <PeopleSection />
      <RequirementsSection />
      <JobCategoriesSection />
      <RecruitSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
