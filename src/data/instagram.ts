import bmwX5Front from '../assets/social/bmw-x5-front.webp';
import servicesPost from '../assets/social/services-post.webp';
import poloSunset from '../assets/social/polo-sunset.webp';
import tiguanFront from '../assets/social/tiguan-front.webp';
import bmwX5Interior from '../assets/social/bmw-x5-interior.webp';
import audiQ3Night from '../assets/social/audi-q3-night.webp';
import poloGoldenHour from '../assets/social/polo-golden-hour.webp';
import tiguanGarden from '../assets/social/tiguan-garden.webp';
import tiguanSunroof from '../assets/social/tiguan-sunroof.webp';

export const INSTAGRAM_URL = 'https://www.instagram.com/flexrentprishtina/';
export const INSTAGRAM_HANDLE = '@flexrentprishtina';

export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  href: string;
}

// Each tile opens its `href` on Instagram. To send a tile to one specific post or reel,
// replace INSTAGRAM_URL with that post's link, e.g. 'https://www.instagram.com/p/XXXXXXXXXXX/'.
// The first entry is shown as the large featured tile.
export const instagramPosts: InstagramPost[] = [
  { id: 'bmw-x5-front', image: bmwX5Front, alt: 'Black BMW X5', href: INSTAGRAM_URL },
  { id: 'services-post', image: servicesPost, alt: 'Flex Rent Prishtina services overview', href: INSTAGRAM_URL },
  { id: 'polo-sunset', image: poloSunset, alt: 'Red Volkswagen Polo at sunset', href: INSTAGRAM_URL },
  { id: 'tiguan-front', image: tiguanFront, alt: 'Black Volkswagen Tiguan', href: INSTAGRAM_URL },
  { id: 'bmw-x5-interior', image: bmwX5Interior, alt: 'BMW X5 interior with tan leather seats', href: INSTAGRAM_URL },
  { id: 'audi-q3-night', image: audiQ3Night, alt: 'White Audi Q3 under the Flex Rent sign', href: INSTAGRAM_URL },
  { id: 'polo-golden-hour', image: poloGoldenHour, alt: 'Volkswagen Polo at golden hour', href: INSTAGRAM_URL },
  { id: 'tiguan-garden', image: tiguanGarden, alt: 'Black Volkswagen Tiguan on a paved driveway', href: INSTAGRAM_URL },
  { id: 'tiguan-sunroof', image: tiguanSunroof, alt: 'Volkswagen Tiguan interior with panoramic roof', href: INSTAGRAM_URL },
];
