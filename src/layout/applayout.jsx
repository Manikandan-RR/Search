import { AppHeader } from "./header/appheader";
import { Outlet } from "react-router-dom";
import { useState } from "react";


export const AppLayOut = () => {

    const [search, setSearch] = useState('')


    return (
        <>
            <AppHeader search={search} setSearch={setSearch} />
            <Outlet context={{ search }} />

        </>

    )

}

