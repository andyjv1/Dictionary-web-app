import { useEffect, useState } from 'react'
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Arrow } from "../images/icon-arrow-down.svg";
import { ReactComponent as Moon } from "../images/icon-moon.svg";
import { useOutsideClick } from './utils/useOutsideClick';

const NavBar = ({ black, setBlack, font, setFont }) => {
      const [menuDown, setMenuDown] = useState(false)
      const [fontName, setFontName] = useState('Sans Serif')

      useEffect(() => {
            if (black) {
                  document.body.style.background = "#050505";

            } else {
                  document.body.style.background = "#FFFFFF";
            }
      }, [black]);

      useEffect(() => {
            if (font === "inter") {
                  document.body.style.fontFamily = "inter";
                  setFontName("Sans Serif")
            } else if (font === "lora") {
                  document.body.style.fontFamily = "lora";
                  setFontName("Serif")
            } else {
                  document.body.style.fontFamily = "inconsolata";
                  setFontName("Mono")
            }
      }, [font]);

      const onSansSerifClicked = () => {
            setFont("inter")
            setMenuDown(false)
      }

      const onSerifClicked = () => {
            setFont("lora")
            setMenuDown(false)

      }

      const onMonoClicked = () => {
            setFont("inconsolata")
            setMenuDown(false)

      }

      const onClickOutside = () => {
            setMenuDown(false)
      };

      const onChangeColor = e => setBlack(!black)
      const onMenuClicked = e => setMenuDown(!menuDown)


      const ref = useOutsideClick(onClickOutside);

      return (
            <nav>
                  <Logo className="logo" />
                  <div className="settings">
                        <div className="settings__select"
                              onClick={onMenuClicked}
                              ref={ref}
                        >
                              <p
                                    style={{ color: black ? "#FFFFFF" : "#2D2D2D" }}
                              >{fontName}</p>
                              <Arrow className="settings__arrow" />
                        </div>
                        <div className="settings__line"></div>
                        <input
                              id="switch"
                              name="color"
                              type="checkbox"
                              checked={black}
                              onChange={onChangeColor}
                        />
                        <label htmlFor="switch">Toggle</label>
                        <Moon
                              className={` settings__moon ${black ? "settings__moon--dark" : null}`}
                        />
                  </div>
                  <div className="dropdown-menu"
                        style={{ display: menuDown ? "flex" : "none" }}
                  >
                        <p
                              className="dropdown-menu__sans"
                              onClick={onSansSerifClicked}
                        >Sans Serif</p>
                        <p
                              className="dropdown-menu__serif"
                              onClick={onSerifClicked}
                        >Serif</p>
                        <p
                              className="dropdown-menu__mono"
                              onClick={onMonoClicked}
                        >Mono</p>
                  </div>
            </nav>
      )
}

export default NavBar