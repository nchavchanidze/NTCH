import { useRouter } from 'next/router'


export default function About() {
    const router = useRouter()
    const path = router.query.slug
    console.log(router)


    return (
        <div>About</div>
    )
}
