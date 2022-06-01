import { useEffect } from 'react'

const data = require("../data/tags.json");

const ResumeFilter = () => {

    useEffect(()=>{
        console.log(data)
    },[])



    return <div>Filter</div>
}

export default ResumeFilter
