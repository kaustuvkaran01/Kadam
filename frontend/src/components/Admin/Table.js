import React, {useState, useEffect} from 'react';


import styled from 'styled-components';
import axios from "axios";
import { GrFormViewHide } from 'react-icons/gr';

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
        <tr>
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
        </tr>

        {blogs.map((blog) => (
          <tr>
            <td>{blog.title}</td>
            <td>{blog.description}</td>
            <td>{blog.author}</td>
            <td>{blog.published_date}</td>
            <td>{blog.updated_date}</td>
            <td>
              <button>
                <GrFormViewHide />
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
    
    width: 70vw;
    margin: auto;
    height: 50vh;
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
`;