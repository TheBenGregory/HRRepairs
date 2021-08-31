// import React, { useEffect, useState } from "react"
import { Customers } from "./customers/CustomerList.js"
import { Employees } from "./employees/EmployeeList.js"

export const Repairs = () => {
    return (
        <>
            {console.log("JSX rendered")}
            <h1>Honey Rae's Repair Shop</h1>
            <Customers />
            <Employees />
        </>
    )
}
