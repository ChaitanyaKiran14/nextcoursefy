const Products = async ({params} : {params : {id: string}}) => {
    const {id} = await params
    return (       
        <div>
            <h1>Hey id :  {id} </h1>
        </div>
    )
}
export default Products