import { useRouter } from 'next/router';

export default function ProductPage() {

    const router = useRouter();
    const { id } = router.query;

    return (
        <main>
            <h1>{id}</h1>
        </main>
    )
}