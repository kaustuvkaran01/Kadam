import React, {useState, useEffect} from 'react';


import styled from 'styled-components';
import axios from "axios";
import { GrFormViewHide } from 'react-icons/gr';
import { AiTwotoneDelete } from 'react-icons/ai';

function Table() {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((res) => {
        console.log(res);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <TableContainer>
      <table>
        {/* <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Author</th>
          <th>Published Date</th>
          <th>Last Updated Date</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
          <td>$100</td>
          <td>Something</td>
          <td>Something random</td>
          <td>
            <button>
              <GrFormViewHide />
            </button>
          </td>
        </tr> */}

        {blogs.map((blog) => (
          <tr>
            <td>{blog._id}</td>
            <td>{blog.title}</td>
            <td>{blog.description}</td>
            <td>{blog.author}</td>
            <td>{blog.published_date}</td>
            <td>{blog.updated_date}</td>
            <td>
              <button className="btn-hide">
                <GrFormViewHide />
              </button>
              <button className="btn-hide">
                <AiTwotoneDelete />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </TableContainer>
  );
}
export default Table;

const TableContainer = styled.div`
    
    width: 80vw;
    margin: auto;
    height: auto;
    margin-bottom: 1rem;
    table {
      width: 100%;
      border: 1px solid #ddd;
      background: white;
      border-radius: 24px;
     
    }

    th, td {
      padding: 18px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }

    tr{
      &:hover {
        background: #f5f5f5;
      }
    }
    button{
      background: transparent;
      border:1px solid rgba(0,0,0,0.1);
      border-radius: 6px;
      margin:1rem auto;
      &:hover{
        background: #008080;
      }
    }
`;