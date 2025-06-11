import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="/explore">Explore Now</a>
            </Button>
          </div>
          {/* Placeholder for the image collage */}
          <div className="mt-8 flex justify-center md:justify-end">
            <Image
              src="/placeholder-collage.svg" // You'll need to create this SVG or use a real image
              alt="Eventify Collage"
              width={500}
              height={500}
              priority
            />
          </div>
        </section>
      </main>
    </div>
  );
}
