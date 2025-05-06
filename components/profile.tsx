import { UserProfile } from "@clerk/nextjs";

export default function Profile() {

    return (
        <UserProfile appearance={{
            layout: {
                logoImageUrl: '/images/AnimoAprendoGreenTransparent.png',
                logoPlacement: 'inside',
                unsafe_disableDevelopmentModeWarnings: true,
            }
        }} />
    )
}