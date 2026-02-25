import { clientOnly } from '@solidjs/start';

export const ImageCarouselClientComponent = clientOnly(
  () => import('./ImageCarousel')
);
