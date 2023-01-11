function MainFlags(props) {

    const getRandom = (ev) => {
        ev.preventDefault()
        const random = props.dataCountry[Math.floor(Math.random() * props.dataCountry.length)]
        console.log(random)
        props.setDatos({
            id: '',
            name: '',
            languages: '',
            capital: '',
            currencies: '',
            region: '',
            lags: '',
        });

    }

    return <main className='main-countries'>
        <section className='section1'>
            <div>

                <img src={(props.random.flags.png)} alt='bandera'></img>
                <input type='text'></input>
                <button>Check it!</button>
                <button onClick={getRandom}>Get another flag</button>
            </div>
        </section>
    </main >
}

export default MainFlags;