import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';

function Inputs(props) {
    return (
        <div className="inputs">
            <FirstInput bill={props.bill} setBill={props.setBill} />
            <SecondInput tip={props.tip} setTip={props.setTip} />
            <ThirdInput people={props.people} setPeople={props.setPeople} />
        </div>
    )
}


function FirstInput(props) {
    return (
        <div className="first_input">
            <p className='input_p'>Bill</p>
            <div className='input_div'>
                <FontAwesomeIcon icon={faDollarSign} />
                <input type="number" placeholder='0' value={props.bill}
                    onChange={(e) => {
                        props.setBill(e.target.value)
                    }} />
            </div>
        </div>
    )
}

let array = [5, 10, 15, 25, 50];

function SecondInput(props) {
    return (
        <div className="second_input">
            <p className='input_p'>Select Tip %</p>
            <div className="tip_group">
                {array.map((element) => (
                    <div
                        className='arr_div'
                        key={element}
                        style={
                            element == props.tip
                                ? { backgroundColor: '#26C2AE', color: '#00474B' }
                                : {}
                        }
                        onClick={() => {
                            props.setTip(element);
                        }}
                    >
                        {element}%
                    </div>
                ))}
                <div className='tip_input_div'>
                    <input className='tip_input' type="number" placeholder='Custom' value={props.tip}
                        onChange={(e) => {
                            props.setTip(e.target.value)
                        }} />
                </div>
            </div>
        </div >
    )
}

function ThirdInput(props) {
    return (
        <div className="third_input">
            <p className='input_p'>Number of People</p>
            {props.people == "0" ? <p className='warning'>Can't be zero</p> : null}
            <div className='input_div' style={props.people == "0" ? {borderColor: '#E17457'} : {}}>
                <FontAwesomeIcon icon={faUser} />
                <input type="number" placeholder='0' value={props.people}
                    onChange={(e) => {
                        props.setPeople(e.target.value)
                    }} />
            </div>
        </div>
    )
}

export default Inputs;