import textStyles from "./Text.module.scss";

interface Props {
    text: string | null;
}

const Title: React.FC<Props> = ({ text }) => {
    return <p className={textStyles.text}>{text}</p>;
};

export default Title;
