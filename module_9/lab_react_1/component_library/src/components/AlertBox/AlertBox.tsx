import type { AlertType, AlertBoxProps } from "../../types";



export function AlertTypes(props: AlertBoxProps){
    return(
        <div>
            
            {props.type = "warning"}
            {props.message}
            
            {props.children}
            
        </div>
    )
}