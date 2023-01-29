import axios from "axios";
import { useEffect } from "react";

const Sitemapss = () => {
    useEffect(() => {
        // axios.get("https://softliee.com/softlee/public/api/brands").then((res) => {
        //     console.log(res.data.brands);
        //     res.data.brands.map((item, index) => {
        //         console.log("<url> <loc>https://www.softliee.com/new-mobile/" + item.slug + "</loc> </url>");
        //     })

        // })
        // axios.get("https://softliee.com/softlee/public/api/get_products").then((res) => {
        //     console.log(res.data.$products);
        //     res.data.$products.map((item, index) => {
        //         console.log("<url> <loc>https://www.softliee.com/" + item.slug + "</loc> </url>");
        //     })

        // })
        axios.get("https://softliee.com/softlee/public/api/get_blogs").then((res) => {
            console.log(res.data.blogs);
            res.data.blogs.map((item, index) => {
                console.log("<url> <loc>https://www.softliee.com/details/" + item.slug + "</loc> </url>");
            })

        })

    }, [])
    return (
        <>
            <h1>Hey</h1>
        </>
    )
}
export default Sitemapss