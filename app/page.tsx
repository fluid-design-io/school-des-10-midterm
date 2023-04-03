import { ProfileCards } from "./ProfileCards";

export default function Home() {
  return (
    <main className='min-h-screen pb-24'>
      <section className='w-full'>
        <div className='container py-[15vh]'>
          <h1 className='text-5xl sm:text-7xl md:text-8xl mb-12 md:mb-20 lg:mb-24'>
            Minimalistic Design
          </h1>
          <p className='font-inter max-w-2xl pe-4'>
            Minimalistic design, often referred to as minimalist design, is an
            aesthetic approach that focuses on simplicity, clean lines, and a
            reduction of unnecessary elements. Between 1967 and 1978, minimalism
            emerged as a significant design movement, influencing various
            disciplines such as architecture, interior design, graphic design,
            and product design.
          </p>
        </div>
      </section>
      <section className='w-full border-y border-y-zinc-300'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Group members</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 w-full'>
            <ProfileCards />
          </div>
        </div>
      </section>
    </main>
  );
}
