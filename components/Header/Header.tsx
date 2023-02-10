import header from "./Header.module.scss";

const Header = () => {
    return (
        <header className={header.header}>
            <div className={header.header__logo}>NTCH</div>
            <a
                className={header.header__button}
                href="/Assets/uploads/resume.pdf"
                target="_blank"
                rel="noreferrer"
            >
                Resume{" "}
                <svg
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                        >
                            <g id="External-Link">
                                <rect
                                    id="Rectangle"
                                    fillRule="nonzero"
                                    x="0"
                                    y="0"
                                    width="24"
                                    height="24"
                                ></rect>
                                <path
                                    d="M20,12 L20,18 C20,19.1046 19.1046,20 18,20 L6,20 C4.89543,20 4,19.1046 4,18 L4,6 C4,4.89543 4.89543,4 6,4 L12,4"
                                    id="Path"
                                    stroke="#0C0310"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                ></path>
                                <path
                                    d="M16,4 L19,4 C19.5523,4 20,4.44772 20,5 L20,8"
                                    id="Path"
                                    stroke="#0C0310"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                ></path>
                                <line
                                    x1="11"
                                    y1="13"
                                    x2="19"
                                    y2="5"
                                    id="Path"
                                    stroke="#0C0310"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                ></line>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
        </header>
    );
};

export default Header;
