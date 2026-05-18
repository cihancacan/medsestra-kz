export const imageFiles = {
  home: { desktop: '/images/Home.jpg', mobile: '/images/home.mobile.jpg' },
  atHome: { desktop: '/images/athome.jpg', mobile: '/images/athome.mobile.jpg' },
  family: { desktop: '/images/family.jpg', mobile: '/images/family.mobile.jpg' },
  corporate: { desktop: '/images/Corporate.jpg', mobile: '/images/Corporate.mobile.jpg' },
  beauty: { desktop: '/images/Beauty.jpg', mobile: '/images/beauty.mobile.jpg' }
};

export const pillars = [
  {
    key: 'at-home',
    title: 'Soins à domicile',
    ru: 'Медсестра на дом',
    translit: 'Medsestra na dom',
    text: 'Injections avec ordonnance, pansements, retrait de points, passages infirmiers et soins classiques à domicile.',
    image: imageFiles.atHome,
    href: '/services/#soins-domicile'
  },
  {
    key: 'family',
    title: 'Family Care',
    ru: 'Забота о родителях',
    translit: 'Zabota o roditelyakh',
    text: 'Abonnements famille pour accompagner les parents âgés avec visites régulières et suivi clair.',
    image: imageFiles.family,
    href: '/services/#family-care'
  },
  {
    key: 'corporate',
    title: 'Corporate Care',
    ru: 'Медсестра в офис',
    translit: 'Medsestra v ofis',
    text: 'Service premium pour bureaux, dirigeants, wellness days et programmes récurrents entreprise.',
    image: imageFiles.corporate,
    href: '/services/#corporate-care'
  },
  {
    key: 'beauty',
    title: 'Beauty & Wellness IV',
    ru: 'Капельницы красоты и wellness',
    translit: 'Kapelnitsy krasoty i wellness',
    text: 'Perfusions bien-être, énergie, récupération et protocoles beauté dans un cadre sécurisé et premium.',
    image: imageFiles.beauty,
    href: '/services/#beauty-wellness'
  }
];

export const prices = [
  { service: 'Injection à domicile', ru: 'Уколы на дому', price: 'à partir de 8 000 ₸' },
  { service: 'Pansement', ru: 'Перевязка на дому', price: 'à partir de 12 000 ₸' },
  { service: 'Perfusion encadrée', ru: 'Капельница на дому', price: 'à partir de 18 000 ₸' },
  { service: 'Beauty & Wellness IV', ru: 'Капельницы красоты', price: 'à partir de 30 000 ₸' },
  { service: 'Family Care', ru: 'Забота о родителях', price: 'à partir de 149 000 ₸ / mois' },
  { service: 'Corporate Care', ru: 'Корпоративная медсестра', price: 'sur devis' }
];
