import { Component } from 'solid-js';
import { css } from '~/utils/css';

interface FooterProps {
  class?: string;
}

export const Footer: Component<FooterProps> = (props) => {
  return (
    <footer
      class={css('flex justify-between text-neutral-500 text-sm p-2', props.class)}
    >
      <p>© {new Date().getFullYear()} Jack Stoller</p>
      <p>Published 2026-02-13</p>
    </footer>
  );
};
