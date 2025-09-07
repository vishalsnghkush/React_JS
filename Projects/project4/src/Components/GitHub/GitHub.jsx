import React, { useEffect, useState } from 'react'

function GitHub() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('https://api.github.com/users/vishalsnghkush')
      .then(resp => resp.json())
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <>
      <div className='p-4 text-3xl'>
        GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Pitcure" srcset="" />
      </div>

    </>
  )
}

export default GitHub