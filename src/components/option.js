export default function Option(props){
    const handleSelect = props.handleSelect;
    const text = props.text;
    const value = props.value;
    const isSelected = props.isSelected;

    return <div style={
        {
            background: isSelected ? "green": null, 
            color: isSelected ? "white": "black"
        }
    }onClick={() => handleSelect(value)}>{text}</div>
}