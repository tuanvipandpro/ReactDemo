import React, {useState}  from 'react';
import { Redirect } from "react-router-dom";
import { Result, Button } from 'antd';

const NotFound = () => {
    const [redirect, setRedirect] = useState()

    // Transit To
    if (redirect) {
        return <Redirect to={redirect}/>
    }
    
    return (
        <div className="app-error-404">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => setRedirect('/')}>Back Home</Button>}
            />        
        </div>
    )
}

export default NotFound