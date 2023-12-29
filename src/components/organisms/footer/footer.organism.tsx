import style from "./footer.module.css";
import { Container } from "../../molecules/container/container.molecules";

export const Footer = () => {
  return (
    <Container>
      <div className={style.box}>
        <div className={style.footer1}>
          <div className={style.logo_content}>
            <div className={style.logobox}>
              <img src="./logo.png" alt="logo" />
            </div>
            <div className={style.content}>
              <span>
                Savor the artistry where every dish is a culinary masterpiece
              </span>
            </div>
          </div>
          <div className={style.links_box}>
            <div className={style.heading}>
              <span>Useful links</span>
            </div>
            <div className={style.links}>
              <div className={style.link}>
                <span>About us</span>
              </div>
              <div className={style.link}>
                <span>Events</span>
              </div>
              <div className={style.link}>
                <span>Blogs</span>
              </div>
              <div className={style.link}>
                <span>FAQ</span>
              </div>
            </div>
          </div>
          <div className={style.links_box}>
            <div className={style.heading}>
              <span>Main Menu</span>
            </div>
            <div className={style.links}>
              <div className={style.link}>
                <span>Home</span>
              </div>
              <div className={style.link}>
                <span>Offers</span>
              </div>
              <div className={style.link}>
                <span>Menus</span>
              </div>
              <div className={style.link}>
                <span>Reservation</span>
              </div>
            </div>
          </div>
          <div className={style.links_box}>
            <div className={style.heading}>
              <span>Contact Us</span>
            </div>
            <div className={style.links}>
              <div className={style.link}>
                <span>example@email.com</span>
              </div>
              <div className={style.link}>
                <span>+64 958 248 966</span>
              </div>
              <div className={style.link}>
                <span>Social media</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer2}>
          <div className={style.iconbox}>
            <div className={`${style.icon} ${style.facebook}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="29"
                viewBox="0 0 18 29"
                fill="none"
              >
                <path
                  d="M16 2H12.1818C10.4941 2 8.8754 2.67045 7.68209 3.86387C6.48863 5.05728 5.81818 6.6759 5.81818 8.36364V12.1818H2V17.2727H5.81818V27.4545H10.9091V17.2727H14.7273L16 12.1818H10.9091V8.36364C10.9091 8.02608 11.0432 7.70237 11.2819 7.46368C11.5205 7.225 11.8443 7.09091 12.1818 7.09091H16V2Z"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={style.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M13 17.8891C15.7 17.8891 17.8889 15.7002 17.8889 13.0002C17.8889 10.3002 15.7 8.11133 13 8.11133C10.3 8.11133 8.11115 10.3002 8.11115 13.0002C8.11115 15.7002 10.3 17.8891 13 17.8891Z"
                  stroke="#484848"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 17.8889V8.11111C2 4.73604 4.73604 2 8.11111 2H17.8889C21.2639 2 24 4.73604 24 8.11111V17.8889C24 21.2639 21.2639 24 17.8889 24H8.11111C4.73604 24 2 21.2639 2 17.8889Z"
                  stroke="#484848"
                  stroke-width="2.5"
                />
                <path
                  d="M19.7222 6.29069L19.7351 6.27637"
                  stroke="#484848"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={style.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="25"
                viewBox="0 0 30 25"
                fill="none"
              >
                <path
                  d="M28 2.01189C28 2.01189 25.6152 3.42075 24.2891 3.82007C23.5773 3.00167 22.6314 2.42161 21.5792 2.15834C20.527 1.89508 19.4194 1.96129 18.4061 2.34806C17.3928 2.73482 16.5227 3.42345 15.9135 4.32082C15.3043 5.2182 14.9855 6.28101 15 7.36552V8.54734C12.9231 8.60119 10.8651 8.14057 9.00937 7.2065C7.1536 6.27243 5.55765 4.89391 4.36364 3.19371C4.36364 3.19371 -0.363636 13.8301 10.2727 18.5574C7.83881 20.2095 4.93937 21.0379 2 20.921C12.6364 26.8301 25.6364 20.921 25.6364 7.33007C25.6353 7.00087 25.6036 6.67249 25.5418 6.34916C26.748 5.15965 28 2.01189 28 2.01189Z"
                  stroke="#484848"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={style.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="23"
                viewBox="0 0 31 23"
                fill="none"
              >
                <path
                  d="M18.2 11.5855L13.475 14.2855V8.8855L18.2 11.5855Z"
                  fill="#484848"
                  stroke="#484848"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12.5403V10.6299C2 6.72115 2 4.76681 3.22241 3.50933C4.44484 2.25184 6.36936 2.19741 10.2184 2.08855C12.0423 2.03696 13.9054 2 15.5 2C17.0946 2 18.9578 2.03696 20.7816 2.08855C24.6306 2.19741 26.5551 2.25184 27.7776 3.50933C29 4.76681 29 6.72115 29 10.6299V12.5403C29 16.4489 29 18.4033 27.7776 19.6607C26.5551 20.9182 24.6307 20.9726 20.7817 21.0816C18.9578 21.1331 17.0946 21.1701 15.5 21.1701C13.9054 21.1701 12.0422 21.1331 10.2183 21.0816C6.36929 20.9726 4.44481 20.9182 3.2224 19.6607C2 18.4033 2 16.4489 2 12.5403Z"
                  stroke="#484848"
                  stroke-width="2.5"
                />
              </svg>
            </div>
          </div>
          <div className={style.copyright}>
            <span>Copyright &copy; 2023 Dscode | All rights reserved</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
