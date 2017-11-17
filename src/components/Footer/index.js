import githubSVG from '../../assets/github.svg';
import linkedinSVG from '../../assets/linkedin.svg';

const footerItems = [
  {
    label: 'LinkedIn',
    icon: linkedinSVG,
    link: 'https://www.linkedin.com/in/brocklanoza',
  },
  {
    label: 'Github',
    icon: githubSVG,
    link: 'https://github.com/brockinit',
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-inner">
        {footerItems.map(item => (
          <div className="footer-item">
            <a href={item.link}>
              <img src={item.icon} alt={item.label} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
