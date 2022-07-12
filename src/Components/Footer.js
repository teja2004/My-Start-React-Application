import React from "react";

function Footer(props){
    return (
        <>
            <div className={`w-100 h-25 text-center py-2 bg-${props.mode === "dark" ? "light" : "dark"} text-${props.mode === "dark" ? "success" : "danger"}`}>
                <h4><i>Footer</i></h4>
            </div>
        </>
    );
}
export default Footer;