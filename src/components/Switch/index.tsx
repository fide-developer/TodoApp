
import { Slider, SwitchMode, ToogleButton } from "./styledComponents"

type SwitchProps = {
    value: boolean,
    setValue: any,
    title: string
}

const Switch: React.FC<SwitchProps> = ({title,value, setValue}) => {
    
    return (
        <SwitchMode>
            <p>{title}</p>
            <ToogleButton>
                <Slider onClick={() => setValue(!value)} active={value}></Slider>
            </ToogleButton>
        </SwitchMode>
    )
}

export default Switch