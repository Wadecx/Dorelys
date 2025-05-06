interface FooterDataInternalWebLink {
    title: string;
    links: Link[];
  }
  
  interface Link {
    label: string;
    href?: string;
    isExternal?: boolean;
  }
  
  interface FooterDataSocialMediaLink {
    title: string;
    links: {
      href: string;
      image: {
        src: string;
        alt: string;
      };
    }[];
  }
  
  export type { FooterDataInternalWebLink, FooterDataSocialMediaLink };
  
  