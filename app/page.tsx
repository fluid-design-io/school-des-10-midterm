import Image from "next/image";
import { ProfileCards } from "./ProfileCards";
import imageMatrix from "@/public/images/matrix.jpg";
import moodboard from "@/public/images/moodboard.jpg";
import logo from "@/public/images/logo.png";
import sketch from "@/public/images/sketch.png";
import storyboard from "@/public/images/storyboard.png";
import poster from "@/public/images/poster.png";
import checklist from "@/public/images/checklist.png";

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
      <section className='w-full border-y border-y-zinc-300 dark:border-y-zinc-700'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Group members</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 w-full'>
            <ProfileCards />
          </div>
        </div>
      </section>
      <section className='w-full max-w-3xl mx-auto'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Team Collaborative Plan</h2>
          <table className='w-full divide-y divide-zinc-300 dark:divide-zinc-700'>
            <tr className='divide-x divide-zinc-300 dark:divide-zinc-700'>
              <th className='p-4'>Goals</th>
              <td className='p-4'>
                <ul className='list-disc list-inside'>
                  <li>Having a smooth teamwork experience.</li>
                  <li>Being responsive and communicative.</li>
                  <li>Try to learn from one another.</li>
                </ul>
              </td>
            </tr>
            <tr className='divide-x divide-zinc-300 dark:divide-zinc-700'>
              <th className='p-4'>Roles</th>
              <td className='p-4'>
                <ul className='list-disc list-inside'>
                  <li>Oliver: take notes during meetings.</li>
                  <li>
                    Janice: reaching out and communicating - setting up
                    meetings.
                  </li>
                  <li>
                    Hannah and Allison: picking up things that others
                    aren&apos;t working on.
                  </li>
                </ul>
              </td>
            </tr>
            <tr className='divide-x divide-zinc-300 dark:divide-zinc-700'>
              <th className='p-4'>Procedures</th>
              <td className='p-4'>
                <ul className='list-disc list-inside'>
                  <li>
                    Communication through emails and messages, meeting via Zoom.
                  </li>
                  <li>Work together during meetings and also individually.</li>
                  <li>Send out w2m and have a shared work platform.</li>
                </ul>
              </td>
            </tr>
            <tr className='divide-x divide-zinc-300 dark:divide-zinc-700'>
              <th className='p-4'>Relationships</th>
              <td className='p-4'>
                <ul className='list-disc list-inside'>
                  <li>Team name: team 3</li>
                  <li>Respect each other.</li>
                  <li>Learn from our diverse backgrounds.</li>
                  <li>Understand each other&apos;s different work habits</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </section>
      <section className='w-full border-y border-y-zinc-300 dark:border-y-zinc-700'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Final Creative Matrix</h2>
          <Image
            src={imageMatrix}
            alt='Final Creative Matrix'
            placeholder='blur'
            className='rounded mx-auto max-w-3xl'
          />
        </div>
      </section>
      <section className='w-full border-y border-y-zinc-300 dark:border-y-zinc-700'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Moodboard</h2>
          <Image
            src={moodboard}
            alt='Moodboard'
            placeholder='blur'
            className='rounded mx-auto max-w-3xl'
          />
        </div>
      </section>
      <section className='w-full border-y border-y-zinc-300 dark:border-y-zinc-700'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Logo</h2>
          <Image
            src={logo}
            alt='Logo'
            placeholder='blur'
            className='rounded-full mx-auto max-w-xs'
          />
        </div>
      </section>
      <section className='w-full border-y border-y-zinc-300 dark:border-y-zinc-700'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Sketch</h2>
          <Image
            src={sketch}
            alt='Sketch'
            placeholder='blur'
            className='rounded mx-auto max-w-3xl'
          />
        </div>
      </section>
      <section className='w-full border-y border-y-zinc-300 dark:border-y-zinc-700'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Storyboard</h2>
          <Image
            src={storyboard}
            alt='Storyboard'
            placeholder='blur'
            className='rounded mx-auto max-w-3xl'
          />
        </div>
      </section>
      <section className='w-full border-y border-y-zinc-300 dark:border-y-zinc-700'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Poster</h2>
          <Image
            src={poster}
            alt='Poster'
            placeholder='blur'
            className='rounded mx-auto max-w-3xl'
          />
        </div>
      </section>
      <section className='w-full border-y border-y-zinc-300 dark:border-y-zinc-700'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Focus Checklist</h2>
          <Image
            src={checklist}
            alt='Checklist'
            placeholder='blur'
            className='rounded mx-auto max-w-3xl'
          />
        </div>
      </section>
      <section className='w-full border-y border-y-zinc-300 dark:border-y-zinc-700'>
        <div className='container py-16 md:py-24'>
          <h2 className='mb-8 md:mb-12 text-center'>Presentation</h2>
          <div className='rounded h-[calc(100vh-6rem)] flex justify-center items-center overflow-hidden mx-auto max-w-5xl'>
            <iframe
              src='https://docs.google.com/presentation/d/14WU88xdoKiEh-MKrq4SZgJ_9OTR5joU4eSyuYIDCk8s/edit?usp=sharing&embed?start=false&loop=false&delayms=3000'
              className='w-full h-full'
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
