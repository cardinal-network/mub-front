import React, { useState, useEffect } from "react";
import Image from 'next/image';
import styled from 'styled-components';

const IconArea = styled.div`
    margin-top: 10px;
`

const CityText = styled.div`
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    color: #000;
    margin: 18px 5px 0 5px;
`

const TempText = styled.div`
    font-family: 'Poppins',sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-top: 17px;
`

export default function SubCategoryList({ prodCatData }) {
    const [subcategory, setSubcategories] = useState({});
    useEffect(() => {
            const fetchSubCategories = async (latitude, longitude) => {
                try{
                    const subCategoryReq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c2889b22ccab490c952124259211405&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`);
                    const subCategoryData = await subCategoryReq.json();
                    setSubcategories({});
                }
                catch{
                    console.log("xSbCErr");
                }
            };
            fetchSubCategories();
    }, []);
    return (
        <>  
            <IconArea>{subcategory.icon}</IconArea>
            <CityText>{subcategory.city}</CityText>
            <TempText>{subcategory.temperature}</TempText>
        </>
    )
}