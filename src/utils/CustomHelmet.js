import React, { useEffect, useState } from "react";
import { UseAppContext } from "../context/AppContext";
import { Helmet } from "react-helmet";
const meta = require("./metatags.json");

const CustomHelmet = () => {
    const { activemenu } = UseAppContext();
    const [title, setTitle] = useState(meta.title);

    useEffect(() => {
        switch (activemenu) {
            case "/":
                setTitle(meta.title);
                break;
            case "/aboutme":
                setTitle(`About Jk`);
                break;
            case "/contact":
                setTitle(`Contact Jk`);
                break;
            default: {
            }
        }
    }, [activemenu]);

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={meta.description} />

            {/* Open Graph / Facebook  */}
            <meta property="og:type" content={meta.type} />
            <meta property="og:url" content={meta.site_url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.img_url} />

            {/* Twitter */}
            <meta property="twitter:card" content={meta.twitter_card} />
            <meta property="twitter:url" content={meta.site_url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={meta.description} />
            <meta property="twitter:image" content={meta.img_url} />
        </Helmet>
    );
};

export default CustomHelmet;
