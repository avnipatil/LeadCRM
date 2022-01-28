import './AllLeads.css';
import React, { useState,useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link, useNavigate } from 'react-router-dom';

const AllLeads=()=>{
//here get the token from local storage & pass that variable into api
    const tok =  JSON.parse(localStorage.getItem("user"));

//GET API CODE
    const navigate = useNavigate()
    const [APIData, setAPIData] = useState([])

    useEffect(() => {
        axios.get(`https://qa-platform-api.herokuapp.com/lead`, { headers: {"Authorization" : `Bearer ${tok}`} })
            .then((res) => {
                console.log(res.data.leadData);
                 setAPIData(res.data.leadData);               
            })
    }, [])

//Search data filter from table API Data 
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }
//For pagination
    const [postsPerPage] = useState(5);
    const [offset, setOffset] = useState(1);
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };
   const pageCount = Math.ceil(APIData.length / postsPerPage)
// Delete the records API
    const deleteRecord = (id,e) =>
    {
        e.preventDefault();
        console.log(id);
        axios.delete(`https://qa-platform-api.herokuapp.com/lead/leadId/${id}`,{ headers: {"Authorization" : `Bearer ${tok}`} })
        .then(response => alert('Delete successful'))
        .catch(error => {
            alert(error.message);
            console.error('There was an error!', error);
            navigate('/allLeads')
        });
    }

    return(
        <>
        <Header/>
        <Sidebar/>
            <section className='allleadsec'>
                <div className='container-fluid'>
                    <div className='row'> 
                    <div className='col-lg-12 col-md-12 col-sm-12 my-2'>
                    <h3 className='headtxt'>All Leads Here..</h3>
                            <span className='allleadsearchspn mt-3'>
                                <form >
                                    <input type="text" className='myInputsearch my-2 mx-2' placeholder="Search by Here.." 
                                    onChange={(e) => searchItems(e.target.value)}
                                    />&nbsp;
                                </form>
                            </span>                      
                    </div>                                             
                        <div className='col-lg-12'>
                        <div className='allleadsdata'>                       
                        <table className=''>
                            <tr>
                            <th className='table-dark'>LName</th>
                            <th className='table-dark'>FName</th>
                            <th className='table-dark'>Lead Date</th>
                            <th className='table-dark'>Company Name</th>
                            <th className='table-dark'>Compaign</th>
                            <th className='table-dark'>Client Response</th>
                            <th className='table-dark'>Client Status</th>
                            <th className='table-dark'>QA Response</th>
                            <th className='table-dark'>QA Status</th>
                            <th className='table-dark'>Score</th>
                            <th className='table-dark'>Action</th>
                            </tr>
                            {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (                         
                                <tr>
                                    <td>{item.lname}</td>
                                    <td>{item.fname}</td>  
                                    <td>{item.createdAt}</td>
                                    <td>{item.c_name}</td>
                                    <td>{item.campaign}</td> 
                                    <td>{item.client_resone}</td>  
                                    <td>{item.client_status}</td>  
                                    <td>{item.qa_resone}</td>  
                                    <td>{item.qa_status}</td>  
                                    <td>{item.score}</td>  
                                    <td>
                                        <div className='action-dropdown'>
                                            <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                                            <div className="dropdown-content1">
                                            <Link to={'/update/'+item._id}><button type='submit' className='allleadsbtnedit'><i className="fa fa-edit" ></i></button></Link> 
                                            <td><button onClick={(e) => deleteRecord(item._id, e)} type='submit' className='allleadsbtndelete'><i className="fa fa-trash"></i></button></td>
                                            </div>
                                        </div>
                                    </td>                                                 
                                </tr>
                             )
                            })
                        ) : (
                            APIData.slice(offset - 1 , offset - 1 + postsPerPage).map((item) => {
                                return ( 
                                    <tr>
                                    <td>{item.lname}</td>
                                    <td>{item.fname}</td> 
                                    <td>{item.createdAt}</td>
                                    <td>{item.c_name}</td>
                                    <td>{item.campaign}</td>  
                                    <td>{item.client_resone}</td>  
                                    <td>{item.client_status}</td>  
                                    <td>{item.qa_resone}</td>  
                                    <td>{item.qa_status}</td>  
                                    <td>{item.score}</td>  
                                    <td>
                                        <div className='action-dropdown'>
                                            <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                                            <div className="dropdown-content1">
                                            <Link to={'/update/'+item._id}><button type='submit' className='allleadsbtnedit'><i className="fa fa-edit" ></i></button></Link>  
                                            <button onClick={(e) => deleteRecord(item._id, e)} type='submit' className='allleadsbtndelete'><i className="fa fa-trash" ></i></button>
                                            </div>
                                        </div>
                                    </td>                                                 
                                    </tr>  
                                 )
                            })
                        )}                     
                        </table>                                             
                        </div>                      
                        <ReactPaginate
                            previousLabel={"previous" }
                            nextLabel={ "next" }
                            breakLabel={ "..." }
                            breakClassName={ "break-me" }
                            pageCount={ pageCount }
                            onPageChange={ handlePageClick }
                            containerClassName={"paginationBttns justify-content-center" }
                            subContainerClassName={ "pages pagination" }
                            activeClassName={'paginationActive'}
                            previousLinkClassName={'previousBttn'}
                            nextLinkClassName={'nextBttn'}
                            disabledClassName={'paginationDisabled'}                       
                        />
                        </div>                   
                      
                    </div>
                </div>            
           </section>
        <Footer/>        
        </>     
    )
}
export default AllLeads;
