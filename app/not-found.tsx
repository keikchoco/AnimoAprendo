import { permanentRedirect } from 'next/navigation'

export default function NotFound() {
    return permanentRedirect('/')
}