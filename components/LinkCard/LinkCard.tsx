import linkCard from "./LinkCard.module.scss";
import Title from "../Title/Title";
import Text from "../Text/Text";
import Stack from "../Stack/Stack";


interface Props {
    key: number;
    platform: string;
    name: string;
    url: string;
}


const Card: React.FC<Props> = (props) => {
    return (
        <div className={linkCard.card}>
            <p className={linkCard.card__platform}>{props.platform}</p>
            <div className={linkCard.card__info}>
                <Title title={props.name} url={props.url} />
            </div>
        </div>
    );
};

export default Card;
