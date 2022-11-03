import React from 'react';
import repo from '../repo';
import '../Repository/style.css';

const Repositories = () => {
    
    const repo = JSON.parse(localStorage.getItem("repo"));
    return (
        <div className='Wrapper'>

            <div className="sort d-flex">
                <input type="text" className='form-control w-7' />
                 <div class="dropdown">
  <button
    class="btn btn-light dropdown-toggle border"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    Type
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
  <li><a class="dropdown-item" href="#">All</a></li>
  <li><a class="dropdown-item" href="#">Public</a></li>
  <li><a class="dropdown-item" href="#">Private</a></li>
  <li><a class="dropdown-item" href="#">Sources</a></li>
  <li><a class="dropdown-item" href="#">Forks</a></li>
  <li><a class="dropdown-item" href="#">Archived</a></li>
    <li><a class="dropdown-item" href="#">Mirrors</a></li>
    <li><a class="dropdown-item" href="#">Templates</a></li>
  </ul>
                </div>
                <div class="dropdown">
  <button
    class="btn btn-light dropdown-toggle border"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
 Language
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
  <li><a class="dropdown-item" href="#">All</a></li>
  <li><a class="dropdown-item" href="#">CSS</a></li>
  <li><a class="dropdown-item" href="#">Java Script</a></li>
  <li><a class="dropdown-item" href="#">HTML</a></li>
  <li><a class="dropdown-item" href="#">SCSS</a></li>
 
  </ul>
                </div>
                <div class="dropdown">
  <button
    class="btn btn-light dropdown-toggle border"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
 Sort
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
  <li><a class="dropdown-item" href="#">All</a></li>
  <li><a class="dropdown-item" href="#">Last updated</a></li>
  <li><a class="dropdown-item" href="#">Name</a></li>
  <li><a class="dropdown-item" href="#">Stars</a></li>
 
  </ul>
                </div>
                <a href="https://github.com/new"><button className="btn btn-success ms-5">New</button></a>
            </div>
            
            {/* {
                repo.map((a,i)=><Repo g={a} key={i}/>)
            } */}
          <div className="container2 mt-4">
                <div className="d-flex justify-content-between">
                    <h6 className='fw'>Popular repositories</h6>
                    <h6 className='fw'>Customize your pins</h6>
                </div>
                <div className="">
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="https://github.com/FarrRossm/second-repo">second-repo</a>
                            <p className='fw'>Config files for my GitHub profile.</p>
                    <button className='publicBtn'>Public</button>
                        </div>
                    </div>
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="https://github.com/FarrRossm/first-repo">first-repo</a>
                            <p className='fw'>html,css</p>
                    <button className='publicBtn'>Public</button>
                            <div className="d-flex">
                                <div className="bg-danger qizil_D"></div>
                                <p className="fw Hhtml">HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="https://github.com/FarrRossm/first-homework">First-homework</a>
                            <p className="fw">html,css</p>
                    <button className='publicBtn'>Public</button>

                        </div>
                    </div>
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="https://github.com/FarrRossm/second-repi">second-repi</a>
                            <p className="fw">html</p>
                    <button className='publicBtn'>Public</button>
                            <div className="d-flex">
                                <div className="bg-danger qizil_D"></div>
                                <p className="fw Hhtml">HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="https://github.com/FarrRossm/mirolim">mirolim</a>
                            <p className="fw">html</p>
                    <button className='publicBtn'>Public</button>
                            <div className="d-flex">
                                <div className="bg-danger qizil_D"></div>
                                <p className="fw Hhtml">HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="https://github.com/FarrRossm/farr">farr</a>
                            <p className="fw">html</p>
                    <button className='publicBtn'>Public</button>
                            <div className="d-flex">
                                <div className="bg-danger qizil_D"></div>
                                <p className="fw Hhtml">HTML</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Repositories;