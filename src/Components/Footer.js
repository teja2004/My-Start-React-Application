import React from "react";

function Footer(props){
    return (
      <>
        <div
          className={`w-100 text-center pt-2 bg-${
            props.mainMode === "dark" ? "success" : "danger"
          } text-${
            props.mainMode === "dark" ? "dark" : "light"
          }`} style={{position : 'absolute',marginTop :'100%'}}
        >
          <p>
            Copyright &copy; &nbsp; - &nbsp;
            <i>Nagateja</i> Made with Help of{" "}
            <i>
              <q>CodeWithHarry</q>
            </i>
          </p>
        </div>
      </>
    );
}
export default Footer;