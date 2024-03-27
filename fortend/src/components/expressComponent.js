import React , {useState,useEffect} from 'react'

function ExpressComponent() {
    const [backendData , setBackendData] = useState({});
    const [responseMessage , setResponseMessage] = useState('');

    useEffect(() => {
        fetch("/api").then(
            Response => Response.json()
        ).then(
            data => {
                setBackendData(data)    

            }
        
        ).catch(error =>{
            console.error('Error Fetching data:', error);
        })
    },[]);

    const handlePostRequest =  async () => {
        try {
            const response = await fetch ('/api' ,{
                method: 'POST',
                headers: {
                    'Content-Type' : 'Application/json'
                },
                body:JSON.stringify({})
            });
            if (!response.ok){
                throw new Error('Error to make post Request');

            }
            const responseData = await response.json();
            setResponseMessage(responseData.message);
            
        } catch (error) {
            console.error('Error making post request :',error);
            
        }
    }

    return(
        <div className='ExpressComponent'>
          <h1> Message from backendData</h1>

          <p>{backendData.message}</p>

          <h1> Make a Post Request to /api</h1>
          <button onClick={handlePostRequest}>Send a Post request </button>
          <p> response from backend {responseMessage}</p>
            

        </div>
    )

}

export default ExpressComponent;