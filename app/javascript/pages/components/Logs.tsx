"use client"
  
import { GradientHeading } from "./gradient-heading"
import { LogoCarousel } from "./logo-carousel"

 
export function LogoCarouselDemo() {
  return (
    <div className="space-y-8  py-12">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading variant="secondary">
            The best are already here
          </GradientHeading>
          <a href="https://www.newcult.co" target="_blank">
            <GradientHeading size="xxl">Join Ruby on Rails</GradientHeading>
          </a>
        </div>
 
        <LogoCarousel columnCount={3} />
      </div>
    </div>
  )
}