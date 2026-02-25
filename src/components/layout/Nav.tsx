import { Component, createSignal, onMount } from 'solid-js';
import { NavItem } from '../display/NavItem';
import { useSectionObservation } from './SectionObserver';
import { useUrlFragment } from '~/utils/useFragment';
import { css } from '~/utils/css';

interface NavProps {
  class?: string;
  onclick?: (e: MouseEvent) => void;
}

export const Nav: Component<NavProps> = (props) => {
  const { visibleIds: activeIds } = useSectionObservation();
  const fragment = useUrlFragment();

  // The section is active if:
  // 1. There is a fragment and the fragment is visible
  // 2. There is no fragment and the section is the first visible section
  const activeSection = () => {
    if (activeIds().includes(fragment())) return fragment();

    const orderedSections = [
      'about-me',
      'projects',
      'work',
      'skills',
      'education',
      'contact',
    ];
    return orderedSections.find((id) => activeIds().includes(id));
  };

  const sectionActive = (id: string) => activeSection() === id;

  return (
    <nav class={css('flex content-center lg:content-start flex-wrap', props.class)}>
      <ul class='flex gap-3 flex-col md:flex-row lg:flex-col h-min flex-1'>
        <NavItem to='#about-me' active={sectionActive('about-me')} onclick={props.onclick}>
          About Me
        </NavItem>
        <NavItem to='#projects' active={sectionActive('projects')} onclick={props.onclick}>
          Projects
        </NavItem>
        <NavItem to='#work' active={sectionActive('work')} onclick={props.onclick}>
          Work
        </NavItem>
        <NavItem to='#skills' active={sectionActive('skills')} onclick={props.onclick}>
          Skills
        </NavItem>
        <NavItem to='#education' active={sectionActive('education')} onclick={props.onclick}>
          Education
        </NavItem>
        <NavItem to='#contact' active={sectionActive('contact')} onclick={props.onclick}>
          Contact
        </NavItem>
      </ul>
    </nav>
  );
};
