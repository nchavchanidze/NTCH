import stackStyles from "./Stack.module.scss";

interface Props {
    stack: string | null;
}

const Stack: React.FC<Props> = ({stack}) => {
    return (
        <p>
            <span className={stackStyles.stack}>{stack}</span>
        </p>
    );
};

export default Stack;
