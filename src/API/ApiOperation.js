import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApiOperation() {
    const [data, setData] = useState([])

    const url = 'https://641168dbe96e5254e2d49f0f.mockapi.io/test/api/userApi'

    const fetchData = ()=>{
        axios.get(url).then((res)=>{
            setData(res.data)
        })
    }

    const deleteData = ()=>{
        axios.delete('https://641168dbe96e5254e2d49f0f.mockapi.io/test/api/userApi/7')
        fetchData()
    }

    const update = ()=>{
        axios.put('https://641168dbe96e5254e2d49f0f.mockapi.io/test/api/userApi/4', { name : 'Rohit'})
    }

    const value = {
        name: 'Komal', Email: 'abc@gmail.com', zipcode: '06700-0244', id: '1'}

    const postData = ()=>{
        axios.post('https://641168dbe96e5254e2d49f0f.mockapi.io/test/api/userApi', value)
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(data)

  return (
    <div>
      Api testing
        <button onClick={update} >Update</button>
        <button onClick={postData} >PostData</button>
      <button onClick={deleteData}> delete data</button>
    </div>
  )
}

export default ApiOperation
