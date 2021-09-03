import React from "react"
import { Route } from "react-router-dom"
import { Customers } from "./customers/CustomerList.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { TicketList } from "./TicketList.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <Customers />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/serviceTickets?_expand=employee&_expand=customer">
                <TicketList />
            </Route>
           
        </>
    )
}
