import CardNav from './CardNav'
import logo from '../assets/reactfolio.png';

const Nav = () => {
  const items = [
    {
      label: "Skills",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "FrontEnd" , href:"#skills" },
        { label: "BackEnd" ,href:"#skills2" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Redesigns", href:'#Projects' },
        { label: "Full Stack",  href:'#Projects' }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Chat with Us", ariaLabel: "chat us" ,href:'#chat'},
        { label: "X", ariaLabel: "Twitter" , href:'https://x.com/aantriksh_' },
        { label: "LinkedIn", ariaLabel: "LinkedIn" , href:'https://www.linkedin.com/in/aantriksh-sharma-6807b22a5/' }
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