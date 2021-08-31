// import React, { useEffect, useState } from "react"
import { Customers } from "./customers/CustomerList.js"
import { EmployeeList } from "./employees/EmployeeList.js"
import { TicketList } from "./TicketList.js"

export const Repairs = () => {
    return (
        <>
            {console.log("JSX rendered")}
            <h1>Honey Rae's Repair Shop</h1>
            <Customers />
            <EmployeeList />
            <TicketList />
        </>
    )
}
