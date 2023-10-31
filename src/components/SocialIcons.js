import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SocialSection } from "./styles/SocialSection.styled";

function SocialIcons() {
  return (
    <SocialSection>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </SocialSection>
  );
}
export default SocialIcons;
