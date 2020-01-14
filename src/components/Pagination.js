import React, { Component } from 'react';

// I could also have used the Pagination component of react-bootstrap, but decided to write it myself
class Pagination extends Component {
    
    
    render() {
        const {currentPage, increasePage, decreasePage} = this.props;
        

        return (
            <ul className="pagination pagination-lg justify-content-center">
              <li className={"page-item " + (currentPage === 1 ? "disabled" : "")} >
                <a className="page-link" href="#" onClick={decreasePage}>Previous</a>
              </li>
              <li className={"page-item " + (currentPage === 1 ? "d-none" : "d-flex")}><a className="page-link" href="#" onClick={decreasePage}>{currentPage - 1}</a></li>
              <li className="page-item active">
                <a className="page-link " href="#" >{currentPage}</a>
              </li>
              <li className="page-item"><a className="page-link" href="#" onClick={increasePage}>{currentPage + 1}</a></li>
              <li className="page-item">
                 <a className="page-link" href="#" onClick={increasePage}>                 Next
                 </a>
              </li>
            </ul>
        );
    }
}

export default Pagination;