import '../styles/App.css'
import { Link, Route, Routes } from 'react-router-dom';

function Main() {
    return <main className='main-countries main-image'>
        <section className='section1'>

            <ul className='nav'>
                <Link to='/flags'><li className='btn btn-secondary'>Flag</li ></Link>
                <Link to='/currency'><li className='btn btn-secondary'>Currency</li></Link>
                <Link to='/capital'><li className='btn btn-secondary'>Capital</li></Link>
                <Link to='/complete'><li className='btn btn-secondary'>Complete</li></Link>
            </ul>
        </section>
    </main >
}

export default Main;