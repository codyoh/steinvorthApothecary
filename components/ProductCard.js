

export default function ProductCard({ data }) {

    const { id, productName, imageSource } = data;
    return (
        <div>
            <img src={imageSource} />
            <div>
                <h3>
                    {productName}
                </h3>
            </div>
        </div>
    )
}

