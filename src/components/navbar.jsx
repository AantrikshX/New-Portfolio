import CardNav from './CardNav'
import logo from '../assets/reactfolio.png';

const Nav = () => {
  const items = [
    {
      label: "Skills",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "FrontEnd", ariaLabel: "About Company" },
        { label: "BackEnd", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Redesigns", ariaLabel: "Featured Projects" },
        { label: "Full Stack", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <CardNav
     logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    >
    
    </CardNav>
  );
};

export default Nav;