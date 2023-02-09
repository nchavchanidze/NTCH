import header from "./Header.module.scss";

const Header = () => {
    return (
        <header className={header.header}>
            <div className={header.header__logo}>NTCH</div>
            <a className={header.header__button} href="/Assets/uploads/resume.pdf" target="_blank" rel="noreferrer">Resume &#129141;</a>
        </header>
    );
};

export default Header;
