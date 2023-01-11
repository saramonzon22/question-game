import '../styles/App.css'
import { Link } from 'react-router-dom';

function HeaderFlag() {
    return <header className="header">
        <section className='section1'>

            <ul className='nav'>
                <Link to='/'><li className='btn btn-secondary'>Back</li ></Link>
                <Link to='/currency'><li className='btn btn-secondary'>Currency</li></Link>
                <Link to='/capital'><li className='btn btn-secondary'>Capital</li></Link>
                <Link to='/complete'><li className='btn btn-secondary'>Complete</li></Link>
            </ul>
        </section>
    </header>

}

export default HeaderFlag;