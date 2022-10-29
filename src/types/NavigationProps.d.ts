interface MenuItemProps {
  groupTitle: string;
  pages: Array<{ href: string; title: string }>;
}

interface MenuGroupProps {
  item: MenuItemProps;
}

interface PagesProps {
  home: {
    title: string;
    href: string;
    id: string;
    
  };
  ourMenu: {
    title: string;
    href: string;
    id: string;
  };
  ourShop: {
    title: string;
    href: string;
    id: string;
  };
  news: {
    title: string;
    href: string;
    id: string;
  };
  contact: {
    title: string;
    href: string;
    id: string;
  };
  language: {
    title: string;
    href: string;
    id: string;
    children: {
      en: { id: string, href: string; title: string };
      th: { id: string, href: string; title: string };
      vn: { id: string, href: string; title: string };
    };

  }
}
