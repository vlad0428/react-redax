import {useState} from "react";

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}



export function OnOff(props: PropsType){



    const onStyle = {
        width: "40px",
        padding: "5px 0px",
        border: "1px solid black",
        display: "inline-block",
        background: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "40px",
        padding: "5px 0px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "4px",
        background: props.on ? "white" : "red"



    }
    const IndicatorStyle = {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        background: props.on ? "green" : "red"

    }

    return(
        <div>
            <div style={onStyle} onClick={ () => { props.onChange(true)} }>On</div>
            <div style={offStyle} onClick={ () => {props.onChange(false)} }>Off</div>
            <div style={IndicatorStyle} ></div>
        </div>
    )
}