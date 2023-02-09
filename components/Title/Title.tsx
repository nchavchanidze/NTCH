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
                            {title} - {company} &#129141;
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
                            {title} &#129141;
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
