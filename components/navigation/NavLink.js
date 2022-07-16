import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({
  href,
  prefixOnly = false,
  className = "",
  activeClassName = "",
  ...props
}) => {
  const router = useRouter();
  const classes = (
    prefixOnly
      ? router?.asPath?.startsWith(href)
      : router?.asPath === `/${href}` || router?.asPath === `${href}`
  )
    ? `${className} ${activeClassName}`
    : className;

  return (
    <Link href={href}>
      <a {...props} className={classes} />
    </Link>
  );
};

export default NavLink;
