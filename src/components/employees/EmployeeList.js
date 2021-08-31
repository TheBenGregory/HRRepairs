import React, { useEffect, useState } from "react"

export const Employees = () => {
    const [employees, assignEmployees] = useState ([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    assignEmployees(employeeArray)
                }
            
                )
        },
        []
    )
    
return (
    <>
    <article className="employees">
                <h2>Employee List</h2>
                {
                    employees.map(
                        (employeeObject) => {
                            return <div key={ `employee--${employeeObject.id.id}` }> { employeeObject.name } </div>
                }
                )
            }
            </article>
            </>
)
}