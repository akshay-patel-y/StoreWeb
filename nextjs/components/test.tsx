import React, {useState} from 'react'
import {Card, CardHeader} from "@material-ui/core";



export default function Test() {
    const [name, setName] = useState("")



    return (
        <Card className={"lg"}>
            <CardHeader title={"Hello World"}/>
        </Card>

    )
}