import { Component } from 'solid-js';
import { A } from '../input/A';
import { css } from '~/utils/css';

interface SocialsProps {
  class?: string;
}

export const Socials: Component<SocialsProps> = (props) => {
  return (
    <div class={css('flex gap-4 opacity-50', props.class)}>
      <A to='https://www.linkedin.com/in/jack-stoller/'>
        <img
          src='/images/socials/linkedin.webp'
          alt='LinkedIn Logo'
          width='32'
          height='32'
        />
      </A>

      <A to='https://github.com/jackstoller/'>
        <img
          src='/images/socials/github.svg'
          alt='Github Logo'
          width='32'
          height='32'
        />
      </A>

      <A to='https://www.instagram.com/jack.stoller.23/'>
        <img
          src='/images/socials/instagram.svg'
          alt='Instagram Logo'
          width='32'
          height='32'
        />
      </A>
    </div>
  );
};
