import { AgencyCredit } from '@/components';
import {
  FooterDataInternalWebLink,
  FooterDataSocialMediaLink,
} from '@/types/footer';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

export const FOOTER_INTERNALE_WEB_LINKS: FooterDataInternalWebLink[] = [
  {
    title: 'DORELYS',
    links: [
      {
        label: 'Réalisations',
        href: '/realisations',
      },
      {
        label: "J'ai un projet",
        href: '/mon-projet',
      },
      {
        label: 'Contactez-nous',
        href: '/contactez-nous',
      },
    ],
  },
  {
    title: "BESOIN D'AIDE",
    links: [
      {
        label: 'justine@dorelys-jmt.com',
        href: 'mailto:justine@dorelys-jmt.com',
      },
      {
        label: '06 96 88 96 48',
        href: 'tel:0696889648',
      },
      // {
      //   label: 'Mentions légales',
      //   href: '/mentions-legales',
      // },
      {
        label: 'Politique de confidentialité',
        href: '/politique-confidentialite',
      },
    ],
  },
];

export const FOOTER_SOCIAL_MEDIA_LINKS: FooterDataSocialMediaLink = {
  title: 'SUIVEZ NOS AVENTURES',
  links: [
    {
      href: 'https://www.linkedin.com/in/justine-moysan-a14736345/',
      image: {
        src: '/assets/icons/linkedin.svg',
        alt: 'linkedin icone',
      },
    },
    {
      href: 'https://www.instagram.com/ordelyne/?hl=fr',
      image: {
        src: '/assets/icons/instagram.svg',
        alt: 'instagram icone',
      },
    },
    {
      href: 'https://www.facebook.com/profile.php?id=61574555600313',
      image: {
        src: '/assets/icons/facebook.svg',
        alt: 'facebook icone',
      },
    },
  ],
};

const Footer = () => {
  return (
    <footer className="py-16 xl:p-16 bg-primary text-white">
      <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-12 justify-between  max-w-8/10 mx-auto">
        <div className="space-y-4 max-w-[18rem]">
          <Image
            src={'/assets/logo/logo_navbar.png'}
            alt="logo marketing box violet foncé"
            width={223}
            quality={100}
            height={60}
          />

          <span className="text-white block">
            © {new Date().getFullYear()} VERY BERRY AGENCY
          </span>
        </div>

        {FOOTER_INTERNALE_WEB_LINKS.map((item, i) => (
          <div key={i} className="space-y-4">
            <h4 className="font-semibold text-xl">{item.title}</h4>
            <div className="flex flex-col gap-2">
              {item.links.map((link, i) =>
                link.href ? (
                  <Link
                    key={i}
                    href={link.href}
                    className="hover:underline uppercase underline-offset-4"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span key={i} className=" font-medium">
                    {link.label}
                  </span>
                )
              )}
            </div>
          </div>
        ))}

        <div className="space-y-4">
          <h4 className="font-semibold text-xl ">
            {FOOTER_SOCIAL_MEDIA_LINKS.title}
          </h4>

          <div className="flex items-center gap-2">
            {FOOTER_SOCIAL_MEDIA_LINKS.links.map((link, i) => (
              <Link href={link.href} key={i} className="group" target="_blank">
                <Image
                  src={link.image.src}
                  alt={link.image.alt}
                  width={25}
                  height={25}
                  className="group-hover:-rotate-[10deg] transition-transform duration-300 ease-in-out"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AgencyCredit />
    </footer>
  );
};

export { Footer };
