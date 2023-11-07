function Outputs(props) {
    return (
        <div className="outputs">
            <OutputsExactly tipAmount={props.tipAmount} total={props.total} />
            <button
            onClick={() => {
                props.setTipAmount(0);
                props.setTotal(0);
                props.setBill("");
                props.setTip("");
                props.setPeople("");
            }}>RESET</button>
        </div>
    )
}

function OutputsExactly(props) {
    return (
        <div className="output_fields">
            <div className="up">
                <p>Tip Amount <br></br> <span>/ per person</span></p>
                <div className="tip_output">{`$${props.tipAmount.toFixed(2)}`}</div>
            </div>
            <div className="down">
                <p>Total <br></br> <span>/ per person</span></p>
                <div className="total_output">{`$${props.total.toFixed(2)}`}</div>
            </div>
        </div>
    )
}

export default Outputs;