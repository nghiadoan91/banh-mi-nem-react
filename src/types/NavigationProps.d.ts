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
  aboutUs: {
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
}
