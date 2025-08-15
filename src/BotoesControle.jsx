function BotoesControle(props){
    return(
        <div className="caixa-botoes">
            
            <button>
                <i className='bi bi-skip-strat'></i>
            </button>

            <button>
                <i className='bi bi-arrow-counterclockwise'></i>
            </button>

            <button onClick={() => {if(props.taTocando){props.definirTaTocando(false)}else{props.definirTaTocando(true)}}}>
                <i
                    className={`bi bi-${
                        props.taTocando ? 'pause' : 'play'
                    }-circle-fill`}
                >
                </i>
            </button>

            <button>
                <i className='bi bi-arrow-clockwise'></i>
            </button>

            <button>
                <i className='bi bi-skip-end'></i>
            </button>

        </div>
    );
}
export default BotoesControle;