import React, { useEffect, useState } from "react";
import "../styles/cookie.css";

export const CookieBanner = () => {
    const [isCookieAccepted, setIsCookieAccepted] = useState("no");

    const hideCookieBanner = () => {
        localStorage.setItem("_isCookieAccepted", "yes");
        setIsCookieAccepted("yes");
    };

    useEffect(() => {
        const storedValue = localStorage.getItem("_isCookieAccepted");
        setIsCookieAccepted(storedValue || "no");
    }, []);

    return (
        <>
            {isCookieAccepted === "no" && (
                <div className="cookie-banner fixed-bottom mx-3 mb-3">
                    <div
                        id="cb-cookie-banner"
                        className="alert alert-dark text-center mb-0"
                        role="alert"
                    >
                        🍪 This website uses cookies to ensure you get the best experience on our website.
                        <a href="https://www.parliament.uk/site-information/privacy/" target="_blank" rel="noopener noreferrer">Learn more</a>
                        <button type="button" className="btn btn-success btn-sm ms-3" onClick={hideCookieBanner}>
                            I Got It
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
