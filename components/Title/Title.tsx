import titleStyles from "./Title.module.scss";

interface Props {
    title: string;
    company?: string;
    url?: string | null;
}

const Title: React.FC<Props> = ({ title, url, company }) => {
    return (
        <>
            {(() => {
                if (url && company) {
                    return (
                        <a
                            className={titleStyles.link}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {title} - {company}{" "}
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
                                        fill-rule="evenodd"
                                    >
                                        <g id="External-Link">
                                            <rect
                                                id="Rectangle"
                                                fill-rule="nonzero"
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
                    );
                } else if (url) {
                    return (
                        <a
                            className={titleStyles.link}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {title} <svg
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
                                        fill-rule="evenodd"
                                    >
                                        <g id="External-Link">
                                            <rect
                                                id="Rectangle"
                                                fill-rule="nonzero"
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
                    );
                } else if (company) {
                    return (
                        <h2 className={titleStyles.title}>
                            {title} - {company}
                        </h2>
                    );
                } else {
                    return <h2 className={titleStyles.title}>{title}</h2>;
                }
            })()}
        </>
    );
};

export default Title;
