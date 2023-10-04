import React, { useState, useEffect } from 'react'

const ChartContainer = () => {

    const [charts, setCharts] = useState([])

    useEffect(() => {
        getCharts();
    }, [])


    const getCharts = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then((charts) => {setCharts(charts)})
    }
}


export default ChartContainer