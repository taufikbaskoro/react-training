import React, { useState, useEffect } from 'react'
import Categories from '../components/Categories';

const Home = () => {
    const [time, setTime] = useState(new Date().toLocaleString());

    const timeset = () => {
        const date = new Date();
        return date.toLocaleString();
    }

    useEffect(() => {
        const timer = setInterval(() => setTime(timeset()), 1000)
        return function clearTimer() {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <div className="App-header">
                <h1>Selamat Datang</h1>
                <h2>{time}</h2>
            </div>
            <Categories />
        </div>
    )
}

export default Home;