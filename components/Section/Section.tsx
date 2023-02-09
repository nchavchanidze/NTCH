import section from './Section.module.scss'

interface Props {
    children: React.ReactNode;
    card?: boolean;
}

const Section: React.FC<Props> = ({children, card}) => {
  return (
    <div className={card ? section.sectionCard : section.section}>{children}</div>
  )
}

export default Section