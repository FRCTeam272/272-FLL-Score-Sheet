import Option from "./option"
import {useScoreContext} from "../dataProvider"
export default function Mission(props){
    const [scores, updateValue] = useScoreContext();
    const {
        index,
        mainText,
        helperText,
        photo,
        options
    } = props
    
    function handleSelect(value){
        updateValue(index, value)
    }

    return <div>
        <h1>{mainText}</h1>
        <h2>{helperText}</h2>
        {photo != '' && <img src={photo} />}
        {options && options.length > 1 && options.map((i) => {
            return <Option handleSelect={handleSelect} text={i.text} value={value}></Option>
        })}
    </div>
}