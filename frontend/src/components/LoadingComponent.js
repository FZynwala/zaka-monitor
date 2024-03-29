import React from "react";
import Loader from "react-loader-spinner";

export const LoadingComponent = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30%",
            }}
        >
            <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        </div>
    );
};
