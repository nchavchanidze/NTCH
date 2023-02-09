import card from "./Card.module.scss";
import Title from "../Title/Title";
import Text from "../Text/Text";
import Stack from "../Stack/Stack";


interface Props {
    key: number;
    position: string;
    company?: string;
    date: string;
    description: string | null;
    url: string | null;
    stack: string | null;
}


const Card: React.FC<Props> = (props) => {
    return (
        <div className={card.card}>
            <p className={card.card__date}>{props.date}</p>
            <div className={card.card__info}>
                <Title title={props.position} url={props.url} company={props.company} />
                {/* <Text text={props.company} /> */}
                <Text text={props.description} />
                <Stack stack={props.stack} />
            </div>
        </div>
    );
};

export default Card;
