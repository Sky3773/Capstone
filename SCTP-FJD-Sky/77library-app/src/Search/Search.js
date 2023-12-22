import React from 'react';
import './Search.css';

function Search(){
    
    state = {
        header: <thead></thead>,
        books: [],
        name: ''
    };

    fetchData = () => {
        var id = document.getElementById('id').value;
        this.setState({header: <thead id="header">
                        <tr>
                            <th scope="col">Member Name</th>
                            <th scope="col">Issue Date</th>
                            <th scope="col">Return Deadline</th>
                        </tr>
                    </thead>,
            books: []});

        fetch(`/api/member/${id}`)
            .then(res => res.json())
            .then(member => {
                if(member.length > 0) {
                    this.setState({...this.state, name: `Following Members Issued This Book`});
                    member.forEach(
                        el => this.setState({
                            books: [...this.state.books, 
                                    <tr key={el.id}>
                                        <td>{el.name.toUpperCase()}</td>
                                        <td>{el.date}</td>
                                        <td>{el.deadline}</td>
                                    </tr>]
                        }))
                }
                else{
                    this.setState({header: []});
                    this.setState({...this.state, name: "No One Have Issued This Book"});
                }
                });
    }

    returnIt = el => {
        fetch('/api/return', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    ...el,
                    sid: parseInt(document.getElementById('sid').value)
                })
           });

    }

    
        return (
            <div id='search' className="text-center">
                <div>
                    <input className="form-control sel" type="number" placeholder="Enter ISBN" id="id" min="1"></input>
                    <button className="btn btn-success" onClick={this.fetchData}>Submit</button>
                </div><br/>
                {this.state.name}
                <table id="sResults" className="table table-hover">
                    {this.state.header}
                    <tbody>
                        {this.state.books}
                    </tbody>
                </table>
            </div>
        );
    }



export default Book;