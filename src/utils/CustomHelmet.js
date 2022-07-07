import React, { useEffect, useState } from "react";
import { UseAppContext } from "../context/AppContext";
import { Helmet } from "react-helmet";

const CustomHelmet = () => {
    const { activemenu } = UseAppContext();
    const [title, setTitle] = useState("Jk Alombro");

    useEffect(() => {
        switch (activemenu) {
            case "/":
                setTitle("Jk Alombro");
                break;
            case "/aboutme":
                setTitle("About Jk");
                break;
            case "/contact":
                setTitle("Contact Jk");
                break;
            default: {
            }
        }
    }, [activemenu]);

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="title" content={title} />
        </Helmet>
    );
};

export default CustomHelmet;
