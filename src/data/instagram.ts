import trocFront from '../assets/social/t-roc-front.webp';
import trocRear from '../assets/social/t-roc-rear.webp';
import bmwX5Front from '../assets/social/bmw-x5-front.webp';
import audiInterior from '../assets/social/audi-interior.webp';
import tiguanForest from '../assets/social/tiguan-forest.webp';
import bmwX5Reel from '../assets/social/bmw-x5-reel.webp';
import tiguanFlag from '../assets/social/tiguan-flag.webp';
import poloSunset from '../assets/social/polo-sunset.webp';
import audiQ3 from '../assets/social/audi-q3.webp';

export const INSTAGRAM_URL = 'https://www.instagram.com/flexrentprishtina/';
export const INSTAGRAM_HANDLE = '@flexrentprishtina';

export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  href: string;
}

const post = (path: string) => `${INSTAGRAM_URL}${path}/`;

// The 9 most recent posts and reels on the Instagram page, newest first (Sep 14 back to Aug 9, 2026).
// Images are the post covers saved locally in src/assets/social; each tile opens its own post.
// To refresh the section, replace the images and links with the newest posts from the page.
// The first entry is shown as the large featured tile.
export const instagramPosts: InstagramPost[] = [
  { id: 't-roc-front', image: trocFront, alt: 'Black Volkswagen T-Roc parked under a blue sky', href: post('p/DdQui8jMLVe') },
  { id: 't-roc-rear', image: trocRear, alt: 'Black Volkswagen T-Roc seen from behind', href: post('reel/DdEHVd4Mrb6') },
  { id: 'bmw-x5-front', image: bmwX5Front, alt: 'Black BMW X5 parked in front of young trees', href: post('p/Dc0TaVFDLm5') },
  { id: 'audi-interior', image: audiInterior, alt: 'Audi interior with steering wheel and digital cockpit', href: post('reel/DcoJczEse4u') },
  { id: 'tiguan-forest', image: tiguanForest, alt: 'Black Volkswagen Tiguan in a forest setting', href: post('p/DciZZ-bsiim') },
  { id: 'bmw-x5-reel', image: bmwX5Reel, alt: 'Black BMW X5 front view', href: post('reel/Dcdj2b9MF1z') },
  { id: 'tiguan-flag', image: tiguanFlag, alt: 'Black Volkswagen Tiguan at sunset with the Kosovo flag', href: post('p/DcSlc5XMooZ') },
  { id: 'polo-sunset', image: poloSunset, alt: 'Red Volkswagen Polo at sunset in front of a glass building', href: post('p/DcD-x4yMhcD') },
  { id: 'audi-q3', image: audiQ3, alt: 'White Audi Q3 in a parking lot with a low sun', href: post('p/Db1FNF4sLO2') },
];
