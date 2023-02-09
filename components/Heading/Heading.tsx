import heading from "./Heading.module.scss";
import Image from "next/image";
// import myImage from 'Assets'

const Heading = () => {
    return (
        <div className={heading.heading}>
            <div className={heading.heading__image}>
                <Image src="/Assets/images/me.png" alt="NTCH" width={100} height={100} quality={100} />
            </div>
            <div className={heading.heading__info}>
                <h1 className={heading.heading__title}>Nikoloz Tchavtchanidze</h1>
                <p className={heading.heading__subtitle}>Front End Developer</p>
            </div>
        </div>
    );
};

export default Heading;
