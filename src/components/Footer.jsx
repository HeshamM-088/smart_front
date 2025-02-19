import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "License",
    href: "#",
  },
  {
    title: "Contribute",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div>
      <footer className="w-full">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 text-center md:justify-between">
          <span className="text-3xl font-extrabold text-mainText dark:text-darkMainText hover:text-orange-500 duration-200 cursor-pointer ">
            Smart.
          </span>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LINKS.map(({ title, href }, key) => (
              <li key={key}>
                <Typography as="a" href={href} className="hover:text-primary">
                  {title}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-4 border-surface" />
        <Typography className="text-center">
          &copy; {YEAR} HISHAM KHALIL
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
