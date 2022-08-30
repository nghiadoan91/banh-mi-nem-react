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
    children: {
      services: MenuItemProps;
      apps: MenuItemProps;
      web: MenuItemProps;
    };
  };
  service: {
    title: string;
    href: string;
    id: string;
    children: {
      career: MenuItemProps;
      helpCenter: MenuItemProps;
      company: MenuItemProps;
      contact: MenuItemProps;
      blog: MenuItemProps;
      portfolio: MenuItemProps;
    };
  };
  catalog: {
    title: string;
    href: string;
    id: string;
  };
  guide: {
    title: string;
    href: string;
    id: string;
    children: {
      howToOrder: { href: string; title: string };
      howToCalculate: { href: string; title: string };
    };
  };
  contact: {
    title: string;
    href: string;
    id: string;
  };
}
