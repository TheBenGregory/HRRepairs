import React, { useEffect, useState } from "react"
import { CustomerList } from "./customers/CustomerList"

export const Repairs = () => {
    return (
        <>
            {console.log("JSX rendered")}
            <h1>Honey Rae's  Repair Shop</h1>
            <CustomerList / >
        </>
    )
}
