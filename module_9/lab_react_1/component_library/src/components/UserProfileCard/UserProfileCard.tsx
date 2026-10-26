import type { User, UserProfileCardProps } from "../../types";

export function UserProfileCard(props: UserProfileCardProps){
    return(
        <div>
            {props.user.id}
            {props.user.name}
            {props.user.email}
            {props.user.role}
            {props.user.avatarUrl}

        </div>
    )
}