import React from "react";

export default function About(props){
    return (
      <>
        <div className={`container my-4`}>
          <div className="accordion" id="accordionExample">
            <div className={`accordion-item bg-${
              props.mainMode === "dark" ? "light" : "dark"
            } text-${props.mainMode === "dark" ? "dark" : "light"}`}>
              <h2 className="accordion-header" id="headingOne">
                {/* <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  About #1
                </button> */}
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    This TextUtils is A Very Nessesary Application Built Using
                    React , React Router for Better User Experience .
                  </strong>
                  <br />
                  <br />
                  <p>
                    By <q>V Nagateja</q> With the Help of{" "}
                    <code>CodewithHarry</code>.
                  </p>
                  <br/><br/>
                  <p>ThankYou!!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
