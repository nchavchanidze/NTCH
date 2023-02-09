import container from "./Container.module.scss";

const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className={container.container}>{children}</div>
};

export default Container;
