import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='flex h-10 w-full items-center justify-center border-t border-border text-sm'>
      by &nbsp;
      <Link to='https://castor12m.github.io/my-app' className='text-primary'>
        castor12m
      </Link>
      &nbsp; {year}
    </footer>
  );
}
