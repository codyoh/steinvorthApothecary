
import Nav from '../../components/Nav';
import ProductList from '../../components/ProductList';

export default function Products() {
    return (
        <div>
            <Nav />
            <main>
                <ProductList />
            </main>

        </div>
    )
}

export async function getStaticProps() {
    const data = {
        title: "Steinvorth Apothecary | Products"
    }
}