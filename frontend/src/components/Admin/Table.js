import React, { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";
import { GrFormViewHide, GrEdit } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import BlogCard from "../Blog/BlogCard";

function View(props) {
  const [toggle, setToggle] = useState([]);
  useEffect(() => {
    setToggle(props.approve);
  }, [props.approve]);

  const handleClick = () => {
    // setId(props.blog_id);
    console.log("CLICK", props.blog_id);
    axios
      .put(`blogs/${props.blog_id}`, {
        isApproved: !toggle,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setToggle(!toggle);
    console.log(toggle);
    // window.location.reload();
  };

  return (
    <>
      <button className="btn-hide" onClick={handleClick}>
        {toggle ? <AiTwotoneDelete /> : <GrFormViewHide />}
      </button>
    </>
  );
}

function Table() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/get_blogs")
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
        {
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Last Updated Date</th>
            <th>Actions</th>
          </tr>
          /*<tr>
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
        </tr> */
        }

        {blogs.reverse().map((blog) => (
          <tr>
            {/* <td>{blog._id}</td> */}
            <td>{blog.title}</td>
            <td>{blog.description}</td>
            <td>{blog.author}</td>
            <td>{blog.published_date}</td>
            <td>{blog.updated_date}</td>
            <td>
              <View approve={blog.isApproved} blog_id={blog._id} />
              <Link to={`editblog/${blog._id}`}>
                <GrEdit />
              </Link>
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

  th,
  td {
    padding: 18px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  tr {
    &:hover {
      background: #f5f5f5;
    }
  }
  button {
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin: 1rem auto;
    &:hover {
      background: #008080;
    }
  }
`;
