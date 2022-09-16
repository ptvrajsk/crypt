import { ReactComponent as DarkAuthLogoSVG } from '../../../logos/Auth_Dark_Logo.svg'

interface DarkAuthLogoProps {
  className?: string;
}

export default function DarkAuthLogo(props: DarkAuthLogoProps): JSX.Element {
  return (
    <DarkAuthLogoSVG className={props.className} />
  )
}