
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";


const AddProducts = () => {
    const [brands, setBrands] = useState([]);


    const handleProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const brand = form.brand_id.value;
        const shortDesc = form.shortDesc.value;
        const newProduct = {name, type, price, rating, image, shortDesc, brand};
        
        console.log(newProduct)
        
        fetch('https://food-bevarage-server-il07zob08-khaledas-projects.vercel.app/products',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Product added successfully !',
                    'success'
                  )
            }
        })

    }

    useEffect(() =>{
        fetch('https://food-bevarage-server-il07zob08-khaledas-projects.vercel.app/brands')
        .then(res => res.json())
        .then(data => {
            setBrands(data)
        })
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#f4f3f0] p-10 w-3/4 mx-auto m-10">
            
            <h2 className="text-3xl font-extrabold text-center mb-10">Add Product</h2>
            <form onSubmit={handleProduct} className="w-3/4 mx-auto">
                {/* row 1 */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" placeholder="Product Name" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <div className="form-control md:w-1/2 md:ml-8 mb-5">
                    <label className="label">
                            <span className="label-text">Brands</span>
                        </label>
                        <label className="input-group">
                            
                        <select className="w-full p-2" name="brand_id" id="" >
                            <option  value="">Select Brand</option>
                            
                            {
                                brands.map(brand => <option key={brand._id} 
                                    value={brand.brandName}>{brand.brandName}</option>)
                            }
                        </select>
                        </label>
                    </div>
                </div>
                {/* row 2 */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="type" placeholder="Product Type" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-8 mb-5">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row 3 */}
                <div className="md:flex ">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="rating" placeholder="Rating" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <div className="form-control md:w-1/2 md:ml-8 mb-5">
                        <label className="label">
                            <span className="label-text">Short Descriptions</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="shortDesc" placeholder="Short Descriptions" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row 4 */}
                <div className="md:flex ">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="image" placeholder="ImageURL" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* row 5 */}
                <div className="my-5 ">
                <input type="submit" value="Add Product" className="btn btn-success w-full"/>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddProducts;