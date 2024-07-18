import React from "react";
import FormInput from "./formInput";

const form = () => {
    const names = [
        "john",
        "peter",
        "sarah"
        ];

return 
    <div>
        {names.map((name) => (
            <FormInput key={index} user={user} />
        )
        )}
    </div>
}
