import { onMount } from 'solid-js';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Nav } from './components/layout/Nav';
import { SectionObserver } from './components/layout/SectionObserver';
import { AboutMeSection } from './components/sections/AboutMeSection';
import { ContactSection } from './components/sections/ContactSection';
import { CreditsSection } from './components/sections/CreditsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { WorkSection } from './components/sections/WorkSection';

import './index.css';

export default function App() {
  let ref;

  const close = () => ref!.removeAttribute('open');
  const isOpen = () => ref!.hasAttribute('open');

  onMount(() => {
    window.addEventListener('popstate', function (event) {
      if (isOpen()) {
        close();
        event.preventDefault();
      }
    });
  });

  return (
    <SectionObserver>
      <div class='grid grid-rows-[6rem_minmax(0,1fr)] lg:grid-rows-none lg:grid-cols-[24rem_minmax(0,1fr)] max-w-[1280px] mx-auto xl:border-x border-neutral-600'>
        <span></span>
        <aside class='border-b lg:border-b-0 lg:border-r border-neutral-600 py-4 px-8 lg:p-4 flex gap-8 lg:gap-16 justify-between lg:flex-col fixed h-24 lg:h-dvh w-full lg:w-96 bg-white bg-opacity-75 backdrop-blur z-10'>
          <Header class='hidden lg:block flex-none' />
          <div class='lg:hidden flex gap-4'>
            <img
              class='flex-none self-center'
              src='/images/wave.webp'
              alt='Wave Emoji'
              width='48'
              height='48'
            />

            <h1 class='text-2xl font-black flex-none self-center'>
              Jack Stoller
            </h1>
          </div>
          <Nav class='hidden md:flex md:flex-1' />

          <details class='md:hidden flex' ref={ref}>
            <summary class='list-none marker:hidden p-4 self-center text-2xl'>
              <svg
                fill='none'
                stroke-width='2'
                xmlns='http://www.w3.org/2000/svg'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                viewBox='0 0 24 24'
                height='1em'
                width='1em'
                style='overflow: visible; color: currentcolor;'
              >
                <path d='M3 12 21 12'></path>
                <path d='M3 6 21 6'></path>
                <path d='M3 18 21 18'></path>
              </svg>
            </summary>
            <div class='fixed inset-0 top-0 w-full h-dvh bg-white bg-opacity-95 backdrop-blur z-10 flex flex-col content-center p-8'>
              <button class='absolute top-10 right-10 text-2xl' onclick={close}>
                <svg
                  fill='none'
                  stroke-width='2'
                  xmlns='http://www.w3.org/2000/svg'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  viewBox='0 0 24 24'
                  height='1em'
                  width='1em'
                  style='overflow: visible; color: currentcolor;'
                >
                  <path d='M18 6 6 18'></path>
                  <path d='M6 6 18 18'></path>
                </svg>
              </button>

              <Header class='flex-none mt-8 mb-16' />

              <Nav
                class='flex-1 justify-center content-start'
                onclick={close}
              />
            </div>
          </details>

          <Footer class='flex-none hidden lg:flex' />
        </aside>

        <main class='px-6 sm:px-12 lg:pt-[16rem]'>
          <AboutMeSection />
          <ProjectsSection />
          <WorkSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
          <CreditsSection />
        </main>

        <Footer class='lg:hidden border-t border-neutral-600 p-8' />
      </div>
    </SectionObserver>
  );
}
