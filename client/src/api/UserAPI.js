import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isDonee, setIsDonee] = useState(false)
    const [isDonor, setIsDonor] = useState(false)
    const [cart, setCart] = useState([])
    const [dashboard, setDashboard] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

                    setCart(res.data.cart)

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])

    const addCart = async (campaign) => {
        if(!isLogged) return alert("Please login to continue donating")

        const check = cart.every(item =>{
            return item._id !== campaign._id
        })

        if(check){
            setCart([...cart, {...campaign, quantity: 1}])

            await axios.patch('/user/addcart', {cart: [...cart, {...campaign, quantity: 1}]}, {
                headers: {Authorization: token}
            })

        }else{
            alert("This campaign has been added to cart.")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        isDonee: [isDonee, setIsDonee],
        isDonor: [isDonor, setIsDonor],
        cart: [cart, setCart],
        addCart: addCart,
        dashboard: [dashboard, setDashboard]
    }
}

export default UserAPI
 