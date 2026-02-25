import { Section } from '../display/Section';

export const EducationSection = () => {
  return (
    <Section title='Education' id='education'>
      <div class='flex flex-col sm:flex-row gap-8 sm:gap-12 align-middle'>
            <img
              src='/images/ua.svg'
              alt='University of Akron Logo'
              width='212'
              height='92'
              class='flex-none self-center opacity-75'
            />

            <div class='flex-1'>
              <h5 class='text-lg text-neutral-500 float-right'>
                2023-2026
              </h5>

              <h2 class='text-2xl font-bold text-neutral-800 mb-2'>
                University of Akron
              </h2>

              <h3 class='text-lg font-bold text-forest-500 leading-5 mb-2 max-w-80'>
                Bachelor of Science in Computer Information Systems,
                Cybersecurity
              </h3>

              <h4 class='font-bold text-neutral-500 leading-5'>
                Minor in Computer Science
              </h4>
              <h4 class='font-bold text-neutral-500 leading-5 mb-2'>
                Minor in Business Administration
              </h4>

              <p class='text-neutral-800 text-sm'>
                Expected graduation in Spring 2026.
              </p>
            </div>
          </div>
    </Section>
  );
};
