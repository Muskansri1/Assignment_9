import './Login.css';

export const Login = () => {
    

    return (
        
             
                <section>
                    
                    <h1>Sign In</h1>
                    <form >
                        <label >Username:</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            
                            required
                        />

                        <label >Password:</label>
                        <input
                            type="password"
                            id="password"
                            
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/put router link here/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
          
       
    )
}