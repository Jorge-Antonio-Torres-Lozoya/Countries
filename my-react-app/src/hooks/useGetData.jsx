import { useEffect, useState } from 'react'

const useGetData = (url) => {
  const [data, setData] = useState([] || {})
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const req = await window.fetch(url)
      const res = await req.json()
      setData(res)
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, loading }
}

export default useGetData
