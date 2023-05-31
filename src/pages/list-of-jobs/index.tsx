import MyCard from "../../components/MyCard"
import { useState, useEffect } from "react"
import axios from "axios"



const ListOfJobs = () => {
    const [listOfJobs, setListOfJobs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/list-of-jobs")
                setListOfJobs(response.data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])
    console.log(listOfJobs)
    return (
        <div>
            <MyCard listOfJobs = {listOfJobs}/>
        </div>
    )
}

export default ListOfJobs
