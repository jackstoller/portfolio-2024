import { Component, For, onCleanup, onMount } from 'solid-js';
import type Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './ImageCarousel.css';

interface ImageCarouselProps {
  images: string[];
  options?: Flickity.Options;
  width?: number;
  height?: number;
}

const ImageCarousel: Component<ImageCarouselProps> = (props) => {
  let carouselRef: HTMLDivElement | undefined;
  let flickity: Flickity | undefined;

  onMount(() => {
    let disposed = false;

    void (async () => {
      const FlickityModule = await import('flickity');
      if (disposed || !carouselRef) return;

      flickity = new FlickityModule.default(carouselRef, {
        cellAlign: 'center',
        contain: true,
        selectedAttraction: 0.03,
        friction: 0.35,
        ...(props.options ?? {}),
      });

      const images = Array.from(carouselRef.querySelectorAll('img'));
      const resize = () => flickity?.resize();

      let pending = 0;
      for (const image of images) {
        if (!image.complete) {
          pending += 1;
          const onSettled = () => {
            pending -= 1;
            if (pending === 0) resize();
          };

          image.addEventListener('load', onSettled, { once: true });
          image.addEventListener('error', onSettled, { once: true });
        }
      }

      if (pending === 0) {
        requestAnimationFrame(resize);
      }
    })();

    onCleanup(() => {
      disposed = true;
      flickity?.destroy();
      flickity = undefined;
    });
  });

  return (
    <div
      ref={carouselRef}
      style={{
        width: '100%',
      }}
    >
      <For each={props.images}>
        {(src) => (
          <div class='mr-4'>
            <img
              src={src}
              alt=''
              width={props.width}
              height={props.height}
              class='rounded-lg'
            />
          </div>
        )}
      </For>
    </div>
  );
};

export default ImageCarousel;
