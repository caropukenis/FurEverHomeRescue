import React from "react";

function Profile() {
    return (
        <div className="dogProfileSpan">
        <div className="card" style={{ backgroundColor: "#268E6c", height: "auto"}}>
        <div className="col-5 m-3">
                        <img
                            src={process.env.PUBLIC_URL + "/images/border-collie.jpg"} className="img-circle m-4" alt="..." />
        <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "center" }}>JoJo</h5>
            <p className="card-text" style={{ textAlign: "center" }}>Jojo  was left on her own, She was spotted  getting on and off the boats as numbers increased.</p>
        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Breed</li>
                            <li className="list-group-item">Age</li>
                            <li className="list-group-item">Size</li>
                            <li className="list-group-item">Activity Level</li>
                            <li className="list-group-item">Coat Length</li>
                            <li className="list-group-item">Special Needs</li>
                            <li className="list-group-item">Good With</li>
                        </ul> 
                    </div>
                </div>
            </div>
        
    );
}

export default Profile;