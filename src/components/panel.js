import '../App.css'

const Panel = ({handlePower, message, power}) => {
    return (
      <div className="col-sm-4">
        <div className="row-mx-auto align-items-center">
          <div className="col-sm-auto">
              <p className="text-center message">{message}</p>
          </div>
        </div>
          <div className="row-mx-auto align-items-center">
            <div className="col-sm-auto">
            <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" onChange={handlePower} checked={power}></input>
                <label className="form-check-label" for="flexSwitchCheckDefault">Power</label>
             </div>
              </div>
            </div>
          </div>
    )
  }

export default Panel;
