import './DashBoard.css'
const DashBoard=()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    const {user_data}=user
    console.log(user_data)
    return (
        <div className="main-container">
            <h1 className='head'>User Name: {user_data[0].user_firstname} {user_data[0].user_lastname}</h1>
            <div className='info-container'>
                <h3>All Data of: {user_data[0].user_firstname} {user_data[0].user_lastname}</h3>
                <ul className='list-container'>
                    {user_data.map(e=>(
                        <li key={e.user_id}>
                            <p>name:  {e.user_firstname} {e.user_lastname}</p>
                            <p>number: {e.user_phone}</p>
                            <p >contact-Email: {e.user_email}</p>
                            <p> zipcode: {e.user_zipcode}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default DashBoard