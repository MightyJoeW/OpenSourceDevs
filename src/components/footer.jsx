const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <footer>© Copyright {year} | Open Source Allstars</footer>;
};

export default Footer;
